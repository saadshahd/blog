import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'

const Header = styled.header`
  margin: 1rem 0;
  color: #7f7e7e;
  display: flex;
  align-items: center;
  justify-content: space-between
`

class ContentIntro extends React.Component {
  render() {
    const { date, tags } = this.props

    return (
      <Header>
        <div>
          {Array.isArray(tags) && tags.length > 0 && (
            <Fragment>
              <TagList tags={tags} />
            </Fragment>
          )}
        </div>

        <div>
          {date && <time>{date}</time>}
        </div>
      </Header>
    )
  }
}

export default ContentIntro
