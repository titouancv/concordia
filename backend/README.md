# Concordia Backend

Backend GraphQL API pour l'application Concordia.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:4000/graphql`

## Build

```bash
npm run build
npm start
```

## Endpoints

- **GraphQL Playground**: `http://localhost:4000/graphql`
- **Health Check**: `http://localhost:4000/health`

## Requêtes GraphQL disponibles

### Companies

```graphql
# Obtenir toutes les entreprises
query {
  companies {
    name
    slug
    description
    location
  }
}

# Obtenir une entreprise par slug
query {
  company(slug: "acme") {
    name
    description
    stats {
      employees
      founded
    }
    jobs {
      title
      location
      remote
    }
  }
}
```

### Users

```graphql
# Obtenir tous les utilisateurs
query {
  users {
    name
    username
    bio
  }
}

# Obtenir un utilisateur par username
query {
  user(username: "sarahj") {
    name
    bio
    skills
    professional {
      role
      institutionName
    }
  }
}
```

### Posts

```graphql
# Obtenir tous les posts
query {
  posts {
    id
    content
    author {
      name
      type
    }
    likes
    comments
  }
}

# Obtenir les posts d'un utilisateur
query {
  postsByAuthor(username: "sarahj") {
    content
    createdAt
  }
}

# Obtenir les posts d'une entreprise
query {
  postsByCompany(slug: "acme") {
    content
    createdAt
  }
}
```
