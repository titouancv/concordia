# Concordia Backend

Backend GraphQL API pour l'application Concordia avec Prisma et PostgreSQL.

## Prérequis

- Node.js 18+
- PostgreSQL 14+

## Installation

```bash
npm install
```

## Configuration de la base de données

1. Créer une base de données PostgreSQL nommée `concordia`

2. Configurer le fichier `.env` avec votre URL de connexion :

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/concordia?schema=public"
```

3. Générer le client Prisma :

```bash
npm run db:generate
```

4. Appliquer les migrations :

```bash
npm run db:push
```

5. Peupler la base avec les données de test :

```bash
npm run db:seed
```

## Scripts de base de données

| Commande              | Description                          |
| --------------------- | ------------------------------------ |
| `npm run db:generate` | Génère le client Prisma              |
| `npm run db:migrate`  | Applique les migrations en dev       |
| `npm run db:push`     | Pousse le schéma sans migration      |
| `npm run db:seed`     | Peuple la base avec les données mock |
| `npm run db:studio`   | Ouvre Prisma Studio                  |
| `npm run db:reset`    | Réinitialise la base de données      |

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
