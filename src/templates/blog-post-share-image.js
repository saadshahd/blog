import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import styled from 'styled-components'
import siteConfig from '../../data/siteConfig'
import { GlobalStyle } from '../components/Commons'

const Preview = styled.div.attrs({
  width: props => props.width || 440,
  height: props => props.height || 220,
  hero: props => props.hero || withPrefix(siteConfig.siteCover),
})`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url("${props => props.hero}");
  background-position: center;
  background-size: cover;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  vertical-align: middle;
  text-align: center;
`

const Title = styled.h1.attrs({
  fontSize: props => (props.type === 'twitter' ? '1.8rem' : '4.8rem'),
})`
  font-size: ${props => props.fontSize};
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  text-align: center;
`

class BlogPostShareImage extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { width, height, type } = this.props.pageContext
    const heroImg = post.frontmatter.cover && post.frontmatter.cover.publicURL

    return (
      <Preview width={width} height={height} hero={heroImg}>
        <GlobalStyle />
        <Title type={type}>{post.frontmatter.title}</Title>
      </Preview>
    )
  }
}

export default BlogPostShareImage

export const pageQuery = graphql`
  query BlogPostShareImage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      frontmatter {
        title
        cover {
          publicURL
        }
      }
    }
  }
`
