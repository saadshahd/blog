import React from 'react'
import { Link, withPrefix } from 'gatsby'
import Flag from './Flag/Flag'
import TagList from './TagList'
import siteConfig from '../../data/siteConfig'
import styled from 'styled-components'

const Post = styled.article`
  padding-bottom: 1rem;
  margin-bottom: 0.68rem;
  border-bottom: 1px solid #eee;

  &:last-child {
    margin: 0;
    border: 0;
    padding: 0;
  }
`

const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Excerpt = styled.p`
  line-height: 1.2;
  background-size: 30%;
  background-position: left;
  background-repeat: no-repeat;
  padding-left: 32%;
`

const PostTitleLink = styled(Link)``

class PostsListItem extends React.Component {
  render() {
    const { title, excerpt, slug, language, tags, cover } = this.props

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
          <Excerpt
            dangerouslySetInnerHTML={{ __html: excerpt }}
            style={{
              backgroundImage: `url("${cover ? cover.publicURL : withPrefix(siteConfig.siteCover)}")`,
            }}
          />
        </section>
      </Post>
    )
  }
}
export default PostsListItem
