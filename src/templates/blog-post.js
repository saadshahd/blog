import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import Article from '../components/Article'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          imageFb={
            post.frontmatter.imageFb && post.frontmatter.imageFb.publicURL
          }
          imageTw={
            post.frontmatter.imageTw && post.frontmatter.imageTw.publicURL
          }
          lang={post.frontmatter.language}
          path={post.frontmatter.slug}
          isBlogPost
        />

        <Hero
          heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          title={post.frontmatter.title}
          isContain={post.frontmatter.isContain}
        />

        <Wrapper>
          <p style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            fontSize: '0.85rem',
            textAlign: 'center',
            backgroundColor: '#fafafa',
            lineHeight: 1.2,
            color: '#666',
            padding: '12px 0 6px 0'
          }}>
          بإمكانك الإنتهاء من النص في
          {
            post.fields.readingTime.minutes <= 1 ? `دقيقة واحدة` :
              post.fields.readingTime.minutes <= 2 ? `دقيقتين` :
                `${Math.ceil(post.fields.readingTime.minutes).toLocaleString('ar-EG')} دقائق فقط`
          }.
          </p>
          <Article post={post} />
        </Wrapper>

        <Wrapper>
          <Disqus slug={post.frontmatter.slug} title={post.frontmatter.title} />
          <PrevNextPost previous={previous} next={next} />
        </Wrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      frontmatter {
        title
        date(formatString: "DD/MMMM/YYYY", locale: "ar")
        slug
        language
        tags
        isContain
        cover {
          publicURL
        }
        imageTw {
          publicURL
        }
        imageFb {
          publicURL
        }
      }
      fields {
        readingTime {
          minutes
          words
        }
      }
    }
  }
`
