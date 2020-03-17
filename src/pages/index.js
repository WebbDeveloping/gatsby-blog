import PrimaryLayout from '../layouts/PrimaryLayout.js';
import Post from '../components/Post.js';
import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
  // console.log(data);
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allMarkdownRemark.nodes.map((node, i) => (
        <Post
          key={i}
          image={node.frontmatter.image}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          readMore={node.fields.slug}
        />
      ))}
    </PrimaryLayout>
  );
};
export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`;
