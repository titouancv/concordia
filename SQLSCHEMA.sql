-- =========================================
-- LinkedIn-like Social Network Schema
-- PostgreSQL
-- =========================================

-- ---------- Types ----------
CREATE TYPE account_type AS ENUM ('user', 'company');
CREATE TYPE conversation_type AS ENUM ('dm', 'group');
CREATE TYPE visibility_type AS ENUM ('public', 'connections', 'private');

-- ---------- Accounts ----------
CREATE TABLE accounts (
    id BIGSERIAL PRIMARY KEY,
    type account_type NOT NULL,
    email TEXT UNIQUE NOT NULL,
    pseudo TEXT UNIQUE NOT NULL,
    name TEXT,
    avatar_url TEXT,
    bio TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ---------- Users ----------
CREATE TABLE users (
    account_id BIGINT PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
    first_name TEXT,
    last_name TEXT,
    job_title TEXT
);

-- ---------- Companies ----------
CREATE TABLE companies (
    account_id BIGINT PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
    website TEXT,
);

-- ---------- Follows / Network ----------
CREATE TABLE follows (
    follower_id BIGINT REFERENCES accounts(id) ON DELETE CASCADE,
    target_id BIGINT REFERENCES accounts(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    PRIMARY KEY (follower_id, target_id)
);

CREATE INDEX idx_follows_target
ON follows(target_id);

-- ---------- Posts ----------
CREATE TABLE posts (
    id BIGSERIAL PRIMARY KEY,
    author_id BIGINT REFERENCES accounts(id) ON DELETE CASCADE,
    content TEXT,
    visibility visibility_type DEFAULT 'public',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_posts_author_time
ON posts(author_id, created_at DESC);

-- Full text search
CREATE INDEX idx_posts_search
ON posts USING GIN (to_tsvector('french', content));

-- ---------- Comments ----------
CREATE TABLE comments (
    id BIGSERIAL PRIMARY KEY,
    post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE,
    author_id BIGINT REFERENCES accounts(id),
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_comments_post
ON comments(post_id, created_at);

-- ---------- Likes ----------
CREATE TABLE likes (
    post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE,
    account_id BIGINT REFERENCES accounts(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    PRIMARY KEY (post_id, account_id)
);

-- ---------- Feed Cache (optional materialized timeline) ----------
CREATE TABLE feeds (
    account_id BIGINT REFERENCES accounts(id) ON DELETE CASCADE,
    post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE,
    inserted_at TIMESTAMPTZ DEFAULT now(),
    PRIMARY KEY (account_id, post_id)
);

CREATE INDEX idx_feed_account_time
ON feeds(account_id, inserted_at DESC);

-- ---------- Conversations ----------
CREATE TABLE conversations (
    id BIGSERIAL PRIMARY KEY,
    type conversation_type NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Participants
CREATE TABLE conversation_participants (
    conversation_id BIGINT REFERENCES conversations(id) ON DELETE CASCADE,
    account_id BIGINT REFERENCES accounts(id) ON DELETE CASCADE,
    joined_at TIMESTAMPTZ DEFAULT now(),
    PRIMARY KEY (conversation_id, account_id)
);

-- Messages
CREATE TABLE messages (
    id BIGSERIAL PRIMARY KEY,
    conversation_id BIGINT REFERENCES conversations(id) ON DELETE CASCADE,
    sender_id BIGINT REFERENCES accounts(id),
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_messages_conv_time
ON messages(conversation_id, created_at DESC);

-- ---------- Notifications ----------
CREATE TABLE notifications (
    id BIGSERIAL PRIMARY KEY,
    account_id BIGINT REFERENCES accounts(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    data JSONB,
    read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_notifications_account
ON notifications(account_id, created_at DESC);

-- =========================================
-- End of schema
-- =========================================
