(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{189:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),p=n(199),l=n(197),m=n(204),c=n(191),s=n(192),u=n(194),A=n.n(u),d=n(196),g=c.b.div.withConfig({displayName:"Bio__BioWrapper",componentId:"d7fgaq-0"})(["& .author-image{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;top:-40px;left:50%;margin-left:-40px;width:80px;height:80px;border-radius:100%;overflow:hidden;padding:6px;z-index:2;box-shadow:#e7eef2 0 0 0 1px;}& .author-image .img{position:relative;display:block;width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:center center;border-radius:100%;}& .author-profile .author-image{position:relative;left:auto;top:auto;width:120px;height:120px;padding:3px;margin:-100px auto 0 auto;box-shadow:none;}"]),f=Object(c.b)(d.c).withConfig({displayName:"Bio__BioText",componentId:"d7fgaq-1"})(["& a{border-bottom:1px dotted rgba(162,162,162,0.8);}& a:hover{border-bottom-style:solid;}"]),h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=Object(s.withPrefix)(A.a.authorAvatar);return i.a.createElement(g,null,i.a.createElement("figure",{className:"author-image"},i.a.createElement("a",{href:A.a.authorAvatar,title:A.a.authorName,style:{backgroundImage:'url("'+t+'")'},className:"img"})),i.a.createElement("section",null,i.a.createElement("h4",null,"عن الكاتب"),i.a.createElement(f,{dangerouslySetInnerHTML:{__html:A.a.authorDescription}})))},e}(i.a.Component),b=n(225),x=c.b.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"jwdbi9-0"})(["padding:0 30px 30px;@media only screen and (max-width:500px){padding:0;}"]),E=c.b.footer.withConfig({displayName:"Article__ArticleFooter",componentId:"jwdbi9-1"})(["position:relative;margin:6rem 0 0;padding:2rem 0 0;border-top:1px solid #ebf2f6;"]),w=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.post;return i.a.createElement(x,null,i.a.createElement(b.a,{content:t.html,date:t.frontmatter.date,tags:t.frontmatter.tags}),i.a.createElement(E,null,i.a.createElement(h,null)))},e}(i.a.Component),y=n(216),v=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=[t.previous,t.next].filter(function(t){return t}).map(function(t){return{node:t}});return i.a.createElement(o.Fragment,null,i.a.createElement(d.c,null,"التالي:"),i.a.createElement(y.a,{posts:e}))},e}(i.a.Component),k=n(198),Q=n(223);n.d(e,"pageQuery",function(){return I});var C=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.pageContext,n=e.previous,a=e.next;return i.a.createElement(p.a,{location:this.props.location},i.a.createElement(k.a,{title:t.frontmatter.title,description:t.excerpt,cover:t.frontmatter.cover&&t.frontmatter.cover.publicURL,imageFb:t.frontmatter.imageFb&&t.frontmatter.imageFb.publicURL,imageTw:t.frontmatter.imageTw&&t.frontmatter.imageTw.publicURL,lang:t.frontmatter.language,path:t.frontmatter.slug,isBlogPost:!0}),i.a.createElement(m.a,{heroImg:t.frontmatter.cover&&t.frontmatter.cover.publicURL,title:t.frontmatter.title}),i.a.createElement(l.a,null,i.a.createElement("p",{style:{position:"absolute",top:0,right:0,left:0,fontSize:"0.85rem",textAlign:"center",backgroundColor:"#fafafa",lineHeight:1.2,color:"#666",padding:"12px 0 6px 0"}},"بإمكانك الإنتهاء من النص في",t.fields.readingTime.minutes<=1?"دقيقة واحدة":t.fields.readingTime.minutes<=2?"دقيقتين":Math.ceil(t.fields.readingTime.minutes).toLocaleString("ar-EG")+" دقائق فقط","."),i.a.createElement(w,{post:t})),i.a.createElement(l.a,null,i.a.createElement(Q.a,{slug:t.frontmatter.slug,title:t.frontmatter.title}),i.a.createElement(v,{previous:n,next:a})))},e}(i.a.Component),I=(e.default=C,"71758012")},201:function(t,e,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),p=n(191),l=n(202),m=n.n(l),c=n(203),s=n.n(c),u=p.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-1n11y4w-0"})(["padding-left:0.5rem;padding-bottom:0.2rem;"]),A=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.language,e="en"===t?m.a:s.a,n="en"===t?"english post":"post en francais";return i.a.createElement(u,{src:e,alt:n,className:"flag"})},e}(i.a.Component);e.a=A},202:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},203:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},216:function(t,e,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),p=n(196),l=n(201),m=n(194),c=n.n(m),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.posts;return i.a.createElement("ul",null,t.map(function(t){var e=t.node.frontmatter.title,n=t.node.frontmatter.slug,a=t.node.frontmatter.language||"en";return i.a.createElement("li",{key:n},i.a.createElement(p.b,{to:n},c.a.multilangPosts&&i.a.createElement(l.a,{language:a}),e))}))},e}(i.a.Component);e.a=s}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f475f6bc103edb7033ca.js.map