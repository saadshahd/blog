import React from 'react'
import { Link } from 'gatsby'
import Flag from './Flag/Flag'
import TagList from './TagList'
import siteConfig from '../../data/siteConfig'
import styled from 'styled-components'

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
`

const PostHeader = styled.header`
  padding: .5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Excerpt = styled.p`
  line-height: 1.3;
`

const PostTitleLink = styled(Link)`
  &:hover {
    border-bottom: 1px dotted rgba(34, 34, 34, 0.8);
  }
`

class PostsListItem extends React.Component {
  render() {
    const { title, excerpt, slug, language, tags } = this.props

    return (
      <Post>
        <PostHeader>
          <h2>
            <PostTitleLink to={slug}>
              {siteConfig.multilangPosts && <Flag language={language} />}
              {title}
            </PostTitleLink>
          </h2>

          <TagList tags={tags} />
        </PostHeader>
        <section>
          <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
        </section>
      </Post>
    )
  }
}
export default PostsListItem
