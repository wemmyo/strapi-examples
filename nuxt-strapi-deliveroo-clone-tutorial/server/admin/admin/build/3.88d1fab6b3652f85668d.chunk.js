webpackJsonp([3],{"../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/admin/src/containers/PluginPage/index.js":function(e,o,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function s(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}function p(e){return{dispatch:e}}Object.defineProperty(o,"__esModule",{value:!0}),o.PluginPage=void 0;var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,r,t){var i=o&&o.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&i)for(var p in i)void 0===n[p]&&(n[p]=i[p]);else n||(n=i||{});if(1===s)n.children=t;else if(s>1){for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+3];n.children=l}return{$$typeof:e,type:o,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(o,n,r){return n&&e(o.prototype,n),r&&e(o,r),o}}(),d=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react/index.js"),u=r(d),_=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),m=(r(_),n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react-redux/lib/index.js")),f=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react-helmet/lib/Helmet.js"),h=r(f),b=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/reselect/es/index.js"),y=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/index.js"),g=r(y),C=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/ErrorBoundary/index.js"),j=r(C),v=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/admin/src/containers/App/selectors.js"),O=o.PluginPage=function(e){function o(){return t(this,o),i(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return s(o,e),c(o,[{key:"render",value:function(){var e=this,o=void 0,n=this.props.match.params.pluginId,r=this.props.plugins.toJS(),t=Object.keys(r).map(function(t){var i=r[t];if(i.id===n){o=i.name;var s=i.preventComponentRendering?i.blockerComponentProps:{},p=i.preventComponentRendering?g.default:i.mainComponent;return i.preventComponentRendering&&i.blockerComponent&&(p=i.blockerComponent),a(j.default,{},i.id,u.default.createElement(p,l({},e.props,s)))}});return a("div",{},void 0,a(h.default,{title:"Strapi - "+o}),t)}}]),o}(u.default.Component),P=(0,b.createSelector)((0,v.selectPlugins)(),function(e){return{plugins:e}});o.default=(0,m.connect)(P,p)(O)},"../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/index.js":function(e,o,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function t(e){var o=e.blockerComponentTitle,n=e.blockerComponentDescription,r=e.blockerComponentIcon,t=e.blockerComponentContent,s=void 0===t?"":t,l=void 0;switch(s){case"renderIde":l=P();break;case"renderButton":l=S();break;default:l=""}return i("div",{className:u.default.blockerComponent},void 0,i("div",{className:u.default.header},void 0,i("div",{className:u.default.icoContainer},void 0,i("i",{className:(0,a.default)("fa",r)})),i("div",{},void 0,i("h4",{},void 0,i(p.FormattedMessage,{id:o})),i("p",{},void 0,i(p.FormattedMessage,{id:n})),l)))}Object.defineProperty(o,"__esModule",{value:!0});var i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,r,t){var i=o&&o.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&i)for(var p in i)void 0===n[p]&&(n[p]=i[p]);else n||(n=i||{});if(1===s)n.children=t;else if(s>1){for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+3];n.children=l}return{$$typeof:e,type:o,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),s=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react/index.js"),p=(r(s),n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js")),l=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/classnames/index.js"),a=r(l),c=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),d=(r(c),n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/styles.scss")),u=r(d),_=i("p",{},void 0,"./config/environments/development/server.json"),m=i("br",{}),f=i("br",{}),h=i("br",{}),b=i("br",{}),y=i("br",{}),g=i("br",{}),C=i("br",{}),j=i("br",{}),v=i("br",{}),O=i("br",{}),P=function(){return i("div",{className:u.default.ide},void 0,_,i("div",{},void 0,i("pre",{style:{whiteSpace:"pre-wrap"}},void 0,i("code",{},void 0,"{",m,' "host": "localhost",',f,' "port": 1337,',h,i("span",{style:{color:"#006EE7"}},void 0,' "autoReload": true,'),b,' "proxi": {',y,'  "enabled": true',g," },",C,' "cron": {',j,'  "enabled": false',v," }",O,"}"))))},S=function(){return i("div",{className:u.default.buttonContainer},void 0,i("a",{className:(0,a.default)(u.default.primary,"btn"),href:"http://strapi.io",target:"_blank"},void 0,"Read the documentation"))};o.default=t},"../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/styles.scss":function(e,o,n){var r=n("../strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/styles.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var t={};t.transform=void 0,n("../strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(r,t),r.locals&&(e.exports=r.locals)},"../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/ErrorBoundary/index.js":function(e,o,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function s(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,r,t){var i=o&&o.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&i)for(var p in i)void 0===n[p]&&(n[p]=i[p]);else n||(n=i||{});if(1===s)n.children=t;else if(s>1){for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+3];n.children=l}return{$$typeof:e,type:o,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(o,n,r){return n&&e(o.prototype,n),r&&e(o,r),o}}(),a=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react/index.js"),c=r(a),d=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),u=(r(d),n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js")),_=p("h2",{},void 0,p(u.FormattedMessage,{id:"components.ErrorBoundary.title"})),m=p("br",{}),f=function(e){function o(e){t(this,o);var n=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return n.state={error:null,errorInfo:null},n}return s(o,e),l(o,[{key:"render",value:function(){return this.state.errorInfo?p("div",{},void 0,_,p("details",{style:{whiteSpace:"pre-wrap"}},void 0,this.state.error&&this.state.error.toString(),m,this.state.errorInfo.componentStack)):this.props.children}}]),o}(c.default.Component);o.default=f},"../strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/styles.scss":function(e,o,n){o=e.exports=n("../strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,'.adminblockerComponent___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2UWnt{padding-top:5.5rem}.adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;font-family:Lato}.adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt>div{padding-top:2.5rem}.adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt>div>h4{font-size:24px;font-weight:700;line-height:24px;margin-bottom:0}.adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt>div>p{margin-top:-1px;font-size:14px;color:#919bae}.adminicoContainer___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__1Jhvp{padding-top:0!important;font-size:4.2rem;color:#323740;margin-right:20px;line-height:9.3rem}.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7{padding-top:2.3rem}.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7>p{color:#006ee7;font-size:14px}.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7>div{width:455px;background:#fff;color:#787e8f;font-size:12px}.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7>div>ul{padding-left:20px;list-style:none}.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7>div>ul>li{list-style:none}.adminbuttonContainer___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2Het-{padding-top:2rem}.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf{border-radius:.3rem;border:none;font-weight:500;min-width:15rem;background:linear-gradient(315deg,#0097f6,#005eea);color:#fff;padding-top:4px;padding-left:1.6rem;padding-right:1.6rem;cursor:pointer;font-family:Lato;-webkit-font-smoothing:antialiased}.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf:active{box-shadow:inset 1px 1px 3px rgba(0,0,0,.15)}.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf:before{content:"\\F02D";font-family:FontAwesome;font-weight:600;font-size:1.3rem;margin-right:13px}.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf:focus{outline:0}.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf>i{margin-right:1.3rem;font-weight:600;padding-top:1px}.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf:hover{color:#fff}',""]),o.locals={blockerComponent:"adminblockerComponent___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2UWnt",header:"adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt",icoContainer:"adminicoContainer___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__1Jhvp",ide:"adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7",buttonContainer:"adminbuttonContainer___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2Het-",primary:"adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf"}}});
//# sourceMappingURL=3.88d1fab6b3652f85668d.chunk.js.map