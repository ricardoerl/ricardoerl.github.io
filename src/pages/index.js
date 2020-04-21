import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges.map(
    ({
      node: {
        frontmatter: { title },
      },
    }) => title,
  );

  return (
    <Layout>
      <p>{posts}</p>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
