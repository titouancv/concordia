import { gql } from "@apollo/client";

// Company Queries
export const GET_COMPANIES = gql`
  query GetCompanies {
    companies {
      name
      slug
      logo
      description
      location
    }
  }
`;

export const GET_COMPANY = gql`
  query GetCompany($slug: String!) {
    company(slug: $slug) {
      name
      slug
      logo
      cover
      theme {
        primary
        secondary
        action
        primaryText
        secondaryText
        actionText
      }
      description
      location
      website
      stats {
        employees
        founded
        genderRatio
        lastFunding
        totalRaised
      }
      about {
        history
        mission
        vision
        founders {
          id
          name
          role
          avatar
          username
        }
        officeLocation {
          address
          mapImage
        }
      }
      employees {
        id
        name
        role
        avatar
        username
      }
      jobs {
        id
        title
        type
        location
        remote
      }
      widgets {
        stats {
          label
          value
        }
        benefits {
          title
          description
        }
        processSteps {
          title
          description
        }
        features {
          title
          description
          image
        }
        pricingPlans {
          name
          price
          description
          features
          isPopular
          ctaText
        }
        faqItems {
          question
          answer
        }
      }
    }
  }
`;

export const GET_COMPANY_JOBS = gql`
  query GetCompanyJobs($slug: String!) {
    companyJobs(slug: $slug) {
      id
      title
      type
      location
      remote
    }
  }
`;

// User Queries
export const GET_USERS = gql`
  query GetUsers {
    users {
      name
      username
      avatar
      bio
      location
    }
  }
`;

export const GET_USER = gql`
  query GetUser($username: String!) {
    user(username: $username) {
      name
      username
      avatar
      bio
      location
      professional {
        id
        role
        institutionName
        startDate
        endDate
      }
      education {
        id
        role
        institutionName
        startDate
        endDate
      }
      skills
      hobbies
    }
  }
`;

// Post Queries
export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      author {
        name
        avatar
        type
        username
        theme {
          primary
          secondary
          action
          primaryText
          secondaryText
          actionText
        }
      }
      content
      image
      createdAt
      likes
      comments
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: String!) {
    post(id: $id) {
      id
      author {
        name
        avatar
        type
        username
        theme {
          primary
          secondary
          action
          primaryText
          secondaryText
          actionText
        }
      }
      content
      image
      createdAt
      likes
      comments
    }
  }
`;

export const GET_POSTS_BY_AUTHOR = gql`
  query GetPostsByAuthor($username: String!) {
    postsByAuthor(username: $username) {
      id
      author {
        name
        avatar
        type
        username
        theme {
          primary
          secondary
          action
          primaryText
          secondaryText
          actionText
        }
      }
      content
      image
      createdAt
      likes
      comments
    }
  }
`;

export const GET_POSTS_BY_COMPANY = gql`
  query GetPostsByCompany($slug: String!) {
    postsByCompany(slug: $slug) {
      id
      author {
        name
        avatar
        type
        username
        theme {
          primary
          secondary
          action
          primaryText
          secondaryText
          actionText
        }
      }
      content
      image
      createdAt
      likes
      comments
    }
  }
`;
