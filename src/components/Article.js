import React from 'react'
import styled from 'styled-components'
import Bio from './Bio'
import Content from './Content'

const ArticleWrapper = styled.article`
`

const ArticleFooter = styled.footer`
  position: relative;
  margin: 6rem 0 0;
  padding: 2rem 0 0;
  border-top: 1px solid #ebf2f6;
`

class Article extends React.Component {
  render() {
    const { post } = this.props

    return (
      <ArticleWrapper>
        <Content
          content={post.html}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
        />
        <ArticleFooter>
          <Bio />
        </ArticleFooter>
      </ArticleWrapper>
    )
  }
}

export default Article
