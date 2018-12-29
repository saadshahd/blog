import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 460px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

class Hero extends React.Component {
  render() {
    const isContain = this.props.isContain;
    const heroImg = this.props.heroImg || withPrefix(siteConfig.siteCover)
    const { title } = this.props

    return (
      <HeroContainer style={{
        backgroundImage: `url("${heroImg}")`,
        backgroundSize: isContain ? 'contain' : 'cover'
      }}>
        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>
        </TitleContainer>
      </HeroContainer>
    )
  }
}

export default Hero
