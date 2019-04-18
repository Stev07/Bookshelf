(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{129:function(e,t,n){"use strict";var i=n(7),r=n.n(i),o=n(3),s=n.n(o),l=n(8),a=n.n(l),d=n(0),c=n.n(d),u=n(1),p=n.n(u),f=function(e){function t(){return r()(this,t),s()(this,e.apply(this,arguments))}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.rootPrefixCls,i=e.style;return c.a.createElement("li",{className:t+" "+n+"-item-divider",style:i})},t}(c.a.Component);f.propTypes={className:p.a.string,rootPrefixCls:p.a.string,style:p.a.object},f.defaultProps={disabled:!0,className:"",style:{}},t.a=f},142:function(e,t,n){"use strict";var i=n(2),r=n.n(i),o=n(16),s=n.n(o),l=n(7),a=n.n(l),d=n(3),c=n.n(d),u=n(8),p=n.n(u),f=n(0),h=n.n(f),v=n(5),m=n.n(v),b=n(1),y=n.n(b),w=n(77),O=n(75),g=n(9),z=!("undefined"==typeof window||!window.document||!window.document.createElement),I="menuitem-overflowed",N=.5;z&&n(241);var C=function(e){function t(){var n,i,o;a()(this,t);for(var l=arguments.length,d=Array(l),u=0;u<l;u++)d[u]=arguments[u];return n=i=c()(this,e.call.apply(e,[this].concat(d))),i.state={lastVisibleIndex:void 0},i.getMenuItemNodes=function(){var e=i.props.prefixCls,t=m.a.findDOMNode(i);return t?[].slice.call(t.children).filter(function(t){return t.className.split(" ").indexOf(e+"-overflowed-submenu")<0}):[]},i.getOverflowedSubMenuItem=function(e,t,n){var o=i.props,l=o.overflowedIndicator,a=o.level,d=o.mode,c=o.prefixCls,u=o.theme,p=o.style;if(1!==a||"horizontal"!==d)return null;var f=i.props.children[0].props,v=(f.children,f.title,f.eventKey,s()(f,["children","title","eventKey"])),m=r()({},p),b=e+"-overflowed-indicator";0===t.length&&!0!==n?m=r()({},m,{display:"none"}):n&&(m=r()({},m,{visibility:"hidden",position:"absolute"}),b+="-placeholder");var y=u?c+"-"+u:"",w={};return g.g.forEach(function(e){void 0!==v[e]&&(w[e]=v[e])}),h.a.createElement(O.a,r()({title:l,className:c+"-overflowed-submenu",popupClassName:y},w,{key:b,eventKey:e+"-overflowed-indicator",disabled:!1,style:m}),t)},i.setChildrenWidthAndResize=function(){if("horizontal"===i.props.mode){var e=m.a.findDOMNode(i);if(e){var t=e.children;if(t&&0!==t.length){var n=e.children[t.length-1];Object(g.i)(n,"display","inline-block");var r=i.getMenuItemNodes(),o=r.filter(function(e){return e.className.split(" ").indexOf(I)>=0});o.forEach(function(e){Object(g.i)(e,"display","inline-block")}),i.menuItemSizes=r.map(function(e){return Object(g.c)(e)}),o.forEach(function(e){Object(g.i)(e,"display","none")}),i.overflowedIndicatorWidth=Object(g.c)(e.children[e.children.length-1]),i.originalTotalWidth=i.menuItemSizes.reduce(function(e,t){return e+t},0),i.handleResize(),Object(g.i)(n,"display","none")}}}},i.resizeObserver=null,i.mutationObserver=null,i.originalTotalWidth=0,i.overflowedItems=[],i.menuItemSizes=[],i.handleResize=function(){if("horizontal"===i.props.mode){var e=m.a.findDOMNode(i);if(e){var t=Object(g.c)(e);i.overflowedItems=[];var n=0,r=void 0;i.originalTotalWidth>t+N&&(r=-1,i.menuItemSizes.forEach(function(e){(n+=e)+i.overflowedIndicatorWidth<=t&&r++})),i.setState({lastVisibleIndex:r})}}},o=n,c()(i,o)}return p()(t,e),t.prototype.componentDidMount=function(){var e=this;if(this.setChildrenWidthAndResize(),1===this.props.level&&"horizontal"===this.props.mode){var t=m.a.findDOMNode(this);if(!t)return;this.resizeObserver=new w.a(function(t){t.forEach(e.setChildrenWidthAndResize)}),[].slice.call(t.children).concat(t).forEach(function(t){e.resizeObserver.observe(t)}),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver(function(){e.resizeObserver.disconnect(),[].slice.call(t.children).concat(t).forEach(function(t){e.resizeObserver.observe(t)}),e.setChildrenWidthAndResize()}),this.mutationObserver.observe(t,{attributes:!1,childList:!0,subTree:!1}))}},t.prototype.componentWillUnmount=function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.mutationObserver&&this.resizeObserver.disconnect()},t.prototype.renderChildren=function(e){var t=this,n=this.state.lastVisibleIndex;return(e||[]).reduce(function(i,r,o){var s=r;if("horizontal"===t.props.mode){var l=t.getOverflowedSubMenuItem(r.props.eventKey,[]);void 0!==n&&-1!==t.props.className.indexOf(t.props.prefixCls+"-root")&&(o>n&&(s=h.a.cloneElement(r,{style:{display:"none"},eventKey:r.props.eventKey+"-hidden",className:r.className+" "+I})),o===n+1&&(t.overflowedItems=e.slice(n+1).map(function(e){return h.a.cloneElement(e,{key:e.props.eventKey,mode:"vertical-left"})}),l=t.getOverflowedSubMenuItem(r.props.eventKey,t.overflowedItems)));var a=[].concat(i,[l,s]);return o===e.length-1&&a.push(t.getOverflowedSubMenuItem(r.props.eventKey,[],!0)),a}return[].concat(i,[s])},[])},t.prototype.render=function(){var e=this.props,t=e.hiddenClassName,n=e.visible,i=(e.prefixCls,e.overflowedIndicator,e.mode,e.level,e.tag),r=(e.children,e.theme,s()(e,["hiddenClassName","visible","prefixCls","overflowedIndicator","mode","level","tag","children","theme"]));return n||(r.className+=" "+t),h.a.createElement(i,r,this.renderChildren(this.props.children))},t}(h.a.Component);C.propTypes={className:y.a.string,children:y.a.node,mode:y.a.oneOf(["horizontal","vertical","vertical-left","vertical-right","inline"]),prefixCls:y.a.string,level:y.a.number,theme:y.a.string,overflowedIndicator:y.a.node,visible:y.a.bool,hiddenClassName:y.a.string,tag:y.a.string,style:y.a.object},C.defaultProps={tag:"div",className:""},t.a=C}}]);