import React from 'react'
import { Link, withPrefix } from 'gatsby'
import styled from 'styled-components'
import siteConfig from '../../data/siteConfig'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  z-index: 1000;
  background-color: rgba(32, 35, 42, 0.5);
  display: flex;
  justify-content: center;

  & .face {
    display: block;
    margin: 10px 0 10px 40px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
`

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-left: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

class Header extends React.Component {
  render() {
    const { headerLinks } = this.props
    const prefixedImg = withPrefix(siteConfig.authorAvatar)

    return (
      <HeaderWrapper>
        <div className="face">
          <img
            src={prefixedImg}
            alt={siteConfig.authorName}
            className="img"
          />
        </div>

        <HeaderNav>
          {headerLinks.map((headerLink, i) => (
            <HeaderLink to={headerLink.url} key={`header-link-${i}`}>
              {headerLink.label}
            </HeaderLink>
          ))}
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Header
