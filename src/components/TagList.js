import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: inline;
  margin: 0 0 0 0.5rem;
  color: #7f7e7e;

  &:last-child {
    margin: 0
  }
`

const TagListItem = styled(Link)`
  margin-left: 0.3rem;
  color: #7f7e7e;

  &:last-child {
    margin-left: 0;
  }
`

class TagList extends React.Component {
  render() {
    const { tags } = this.props

    return (
      <ListContainer>
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              <TagListItem to={`tags/${tag}`}>{tag}</TagListItem>
              {i < tags.length - 1 ? ', ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}
export default TagList
