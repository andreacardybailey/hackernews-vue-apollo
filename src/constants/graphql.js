// First, you import gql from the graphql-tag package. 
// The gql function is used to parse the plain GraphQL code.
import gql from 'graphql-tag';

// Now you define the plain GraphQL query. The name 
// AllLinksQuery is the operation name and will be 
// used by Apollo to refer to this query in its internals. 
// You export this parsed query as ALL_LINKS_QUERY so you 
// can easily import it into components.
export const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

// Create the JavaScript constant called 
// CREATE_LINK_MUTATION that stores the mutation.

// Next, define the actual GraphQL mutation. 
// It takes two arguments, url and description, 
// that you’ll have to provide when calling the mutation.
export const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($description: String!, $url: String!) {
    createLink(
      description: $description,
      url: $url,
    ) {
      id
      createdAt
      url
      description
    }
  }
`