(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(175),c=n.n(l),s=n(156),f=n(174),m=n(154),p=n(155),d=n(161),u=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=""+this.props.pageContext.tag,t=c()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(s.a,{location:this.props.location,title:e},i.a.createElement(p.a,{title:e}),i.a.createElement(d.a,{title:e}),i.a.createElement(m.a,null,i.a.createElement("h1",null,'كتابات وسمت بـ "',this.props.pageContext.tag,'"'),i.a.createElement(f.a,{posts:t})))},t}(i.a.Component);t.default=u;var g="4210736421"},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return u}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var o=n(0),a=n.n(o),r=n(4),i=n.n(r),l=n(150),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(152),f=n.n(s);n.d(t,"PageRenderer",function(){return f.a});var m=n(33);n.d(t,"parsePath",function(){return m.a});var p=a.a.createContext({}),d=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t){e.exports={siteTitle:"التوربين الساكن",siteDescription:"أنا سعد،",authorName:"سعد شهد",twitterUsername:"saadoolk",authorAvatar:"/images/avatar.jpg",multilangPosts:!1,authorDescription:" أنا سعد مبرمج كمبيوتر، شاركت في كتابة البيزكود لكام شركة ناشئة في مصر والأردن، مهتم بالأدب والفلسفة والبرمجة، ساقط في المدرسة والرياضيات، بحب السيما ومخرجيها وعندي حلم أكتب وأمثل.\nأه نسيت، بحب أقرا شعر بس مش بكتتبه والشعراء اللي على حق بالنسبة لي مقدسين.",siteUrl:"https://xturbine.io",disqusSiteUrl:"",pathPrefix:"/blog",siteCover:"/images/cover.jpg",googleAnalyticsId:"UA-131263145-1",background_color:"#ffffff",theme_color:"#222222",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",postsPerPage:6,headerLinks:[{label:"الكتابات",url:"/"},{label:"من أنا؟",url:"/about"}],footerLinks:[["وصلات",{label:"الكتابات",url:"/"},{label:"من أنا؟",url:"/about"}],["اتبعني",{label:"جت هب",url:"https://github.com/saadshahd",iconClassName:"icon-github"},{label:"تويتر",url:"https://twitter.com/saadoolk",iconClassName:"icon-twitter"},{label:"فيسبوك",url:"https://www.facebook.com/dsaadshahd",iconClassName:"icon-facebook"},{label:"لينكدإن",url:"https://linkedin.com/in/saadshahd",iconClassName:"icon-linkedin"}]]}},152:function(e,t,n){var o;e.exports=(o=n(157))&&o.default||o},153:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return f});var o=n(167),a=n.n(o),r=n(148),i=n(149);function l(){var e=a()(["\n@font-face {\n  font-family: 'fontello';\n  src: url('./font/fontello.eot?88483219');\n  src: url('./font/fontello.eot?88483219#iefix') format('embedded-opentype'),\n       url('./font/fontello.woff2?88483219') format('woff2'),\n       url('./font/fontello.woff?88483219') format('woff'),\n       url('./font/fontello.ttf?88483219') format('truetype'),\n       url('./font/fontello.svg?88483219#fontello') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n\n [class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 2em;\n  font-size: 0.7em;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-facebook:before { content: '\f230'; }\n.icon-github:before { content: '\f308'; }\n.icon-twitter:before { content: '\f309'; }\n.icon-linkedin:before { content: '\f30c'; }\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n}\n\nhtml {\n  direction: rtl;\n  font-size: 148%;\n}\n\nbody {\n  font-family: 'Rakkas', cursive;\n  color: rgba(0, 0, 0, 0.75);\n  background-color: #e8e8e8;\n}\n\np {\n  font-family: Mirza, cursive;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n"],["\n@font-face {\n  font-family: 'fontello';\n  src: url('./font/fontello.eot?88483219');\n  src: url('./font/fontello.eot?88483219#iefix') format('embedded-opentype'),\n       url('./font/fontello.woff2?88483219') format('woff2'),\n       url('./font/fontello.woff?88483219') format('woff'),\n       url('./font/fontello.ttf?88483219') format('truetype'),\n       url('./font/fontello.svg?88483219#fontello') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n\n [class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 2em;\n  font-size: 0.7em;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-facebook:before { content: '\\f230'; }\n.icon-github:before { content: '\\f308'; }\n.icon-twitter:before { content: '\\f309'; }\n.icon-linkedin:before { content: '\\f30c'; }\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n}\n\nhtml {\n  direction: rtl;\n  font-size: 148%;\n}\n\nbody {\n  font-family: 'Rakkas', cursive;\n  color: rgba(0, 0, 0, 0.75);\n  background-color: #e8e8e8;\n}\n\np {\n  font-family: Mirza, cursive;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n"]);return l=function(){return e},e}var c=Object(r.a)(l()),s=Object(r.b)(i.Link).withConfig({displayName:"Commons__StyledLink",componentId:"sc-1aaxjtz-0"})(["border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}"]),f=r.b.p.withConfig({displayName:"Commons__Text",componentId:"sc-1aaxjtz-1"})(["line-height:1.3;margin:1em 0 0 0;"])},154:function(e,t,n){"use strict";var o=n(148).b.main.attrs({role:"main"}).withConfig({displayName:"Wrapper",componentId:"xmiwfw-0"})(["position:relative;border-radius:3px;width:80%;max-width:770px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:30px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);@media (max-width:780px){width:90%;padding:25px;}"]);t.a=o},155:function(e,t,n){"use strict";var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(168),c=n.n(l),s=n(149),f=n(151),m=n.n(f),p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.isBlogPost,n=e.path,o=void 0===n?"":n,a=e.lang,r=void 0===a?"ar":a,l=this.props.title?this.props.title+" | "+m.a.siteTitle:m.a.siteTitle,f=m.a.siteUrl.substring(0,m.a.siteUrl.length-1),p=""+f+(this.props.imageFb||this.props.cover||Object(s.withPrefix)(m.a.siteCover)),d=""+f+(this.props.imageTw||this.props.cover||Object(s.withPrefix)(m.a.siteCover)),u=this.props.description||m.a.siteDescription;return i.a.createElement(c.a,{title:l},i.a.createElement("html",{lang:r}),i.a.createElement("meta",{name:"description",content:u}),i.a.createElement("meta",{property:"og:url",content:f+Object(s.withPrefix)(o)}),i.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),i.a.createElement("meta",{property:"og:title",content:l}),i.a.createElement("meta",{property:"og:description",content:u}),i.a.createElement("meta",{property:"og:image",content:p}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:m.a.twitterUsername}),i.a.createElement("meta",{name:"twitter:title",content:l}),i.a.createElement("meta",{name:"twitter:description",content:u}),i.a.createElement("meta",{name:"twitter:image",content:d}))},t}(i.a.Component);t.a=p},156:function(e,t,n){"use strict";var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(149),c=n(148),s=n(151),f=n.n(s),m=c.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1glvhxp-0"})(["position:fixed;top:0;left:0;margin:0 auto;width:100%;z-index:1000;background-color:rgba(32,35,42,0.5);display:flex;justify-content:center;& .face{display:block;margin:10px 0 10px 40px;height:40px;width:40px;border-radius:50%;overflow:hidden;}"]),p=c.b.nav.withConfig({displayName:"Header__HeaderNav",componentId:"sc-1glvhxp-1"})(["display:flex;flex-direction:row;justify-content:flex-start;overflow-x:auto;overflow-y:hidden;"]),d=Object(c.b)(l.Link).withConfig({displayName:"Header__HeaderLink",componentId:"sc-1glvhxp-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-left:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.headerLinks,t=Object(l.withPrefix)(f.a.authorAvatar);return i.a.createElement(m,null,i.a.createElement("div",{className:"face"},i.a.createElement("img",{src:t,alt:f.a.authorName,className:"img"})),i.a.createElement(p,null,e.map(function(e,t){return i.a.createElement(d,{to:e.url,key:"header-link-"+t},e.label)})))},t}(i.a.Component),g=(n(165),c.b.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"t92llg-0"})(["text-align:right;padding-top:30px;padding-bottom:50px;background-color:rgba(32,35,42,0.85);color:#ffffff;padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;margin-bottom:1em;padding-left:1em;}}& a{color:#ffffff;font-family:Mirza,cursive;&:hover{color:#e8e8e8;border-bottom:1px dotted #e8e8e8;}}.footer-col > p{margin:0;}.footer-title{font-size:1.4rem;margin:0 0 0.5rem;font-weight:normal;}.footer-item{color:#ffffff;}.footer-heart{color:red;}.footer-item-text{padding:0.1rem 0;color:#ffffff;}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"])),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.authorName,n=e.footerLinks,o=function(e){var t=e.item;return"string"==typeof t?i.a.createElement("h5",{className:"footer-title",key:t},t):t.url.startsWith("/")?i.a.createElement("span",{className:"footer-item"},i.a.createElement(l.Link,{className:"footer-link",to:t.url},t.label)):i.a.createElement("span",{className:"footer-item"},i.a.createElement("a",{className:"footer-link",href:t.url},i.a.createElement("i",{className:t.iconClassName}),t.label))},a=function(e){var t=e.column;return i.a.createElement("div",{className:"footer-col"},t.map(function(e,t){return i.a.createElement(o,{item:e,key:"footer-column-item-"+t})}))};return i.a.createElement(g,null,i.a.createElement("nav",null,i.a.createElement("div",{className:"footer-col"},i.a.createElement("h5",{className:"footer-title"},t," © 2018")),n.map(function(e,t){return i.a.createElement(a,{column:e,key:"footer-column-"+t})})))},t}(i.a.Component),b=(n(166),n(153)),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(r.Fragment,null,i.a.createElement(b.a,null),i.a.createElement(u,{headerLinks:f.a.headerLinks}),i.a.createElement("div",{style:{margin:"0 0 60px 0"}},e),i.a.createElement(h,{siteConfig:f.a}))},t}(i.a.Component);t.a=y},157:function(e,t,n){"use strict";n.r(t);n(32);var o=n(0),a=n.n(o),r=n(4),i=n.n(r),l=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,n){"use strict";var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(148),c=n(159),s=n.n(c),f=n(160),m=n.n(f),p=l.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-1n11y4w-0"})(["padding-left:0.5rem;padding-bottom:0.2rem;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?s.a:m.a,n="en"===e?"english post":"post en francais";return i.a.createElement(p,{src:t,alt:n,className:"flag"})},t}(i.a.Component);t.a=d},159:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},160:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},161:function(e,t,n){"use strict";var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(149),c=n(151),s=n.n(c),f=n(148),m=f.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1wsaguq-0"})(["position:relative;display:table;width:100%;height:460px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),p=f.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1wsaguq-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),d=f.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1wsaguq-2"})(["font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),u=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.heroImg||Object(l.withPrefix)(s.a.siteCover),t=this.props.title;return i.a.createElement(m,{style:{backgroundImage:'url("'+e+'")'}},i.a.createElement(p,null,i.a.createElement(d,null,t)))},t}(i.a.Component);t.a=u},174:function(e,t,n){"use strict";n(32);var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(149),c=n(158),s=n(151),f=n.n(s),m=n(148),p=m.b.article.withConfig({displayName:"PostsListItem__Post",componentId:"sc-1pv5de6-0"})(["border-bottom:1px solid rgba(214,209,230,0.5);padding-bottom:1.25rem;"]),d=m.b.header.withConfig({displayName:"PostsListItem__PostHeader",componentId:"sc-1pv5de6-1"})(["padding:.5em 0;"]),u=m.b.p.withConfig({displayName:"PostsListItem__Excerpt",componentId:"sc-1pv5de6-2"})(["line-height:1.3;"]),g=Object(m.b)(l.Link).withConfig({displayName:"PostsListItem__PostTitleLink",componentId:"sc-1pv5de6-3"})(["&:hover{border-bottom:1px dotted rgba(34,34,34,0.8);}"]),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.excerpt,o=e.slug,a=e.language;return i.a.createElement(p,null,i.a.createElement(d,null,i.a.createElement("h2",null,i.a.createElement(g,{to:o},f.a.multilangPosts&&i.a.createElement(c.a,{language:a}),t))),i.a.createElement("section",null,i.a.createElement(u,{dangerouslySetInnerHTML:{__html:n}})))},t}(i.a.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.posts;return i.a.createElement(r.Fragment,null,e.map(function(e){var t={title:e.node.frontmatter.title,excerpt:e.node.excerpt,slug:e.node.frontmatter.slug,date:e.node.frontmatter.date,language:e.node.frontmatter.language||"ar",tags:e.node.frontmatter.tags||[]};return i.a.createElement(h,Object.assign({key:t.slug},t))}))},t}(i.a.Component);t.a=b}}]);
//# sourceMappingURL=component---src-templates-tags-js-0b06c3f06ec0a07015e1.js.map