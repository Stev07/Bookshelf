(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{111:function(e,n,t){"use strict";var i=t(7),o=t.n(i),r=t(20),a=t.n(r),s=t(3),c=t.n(s),l=t(8),u=t.n(l),d=t(0),f=t.n(d),p=t(1),h=t.n(p),b=t(5),g=t.n(b),m=t(108),v=t(31),w=t(44);function y(e){return e&&"object"==typeof e&&e.window===e}function z(e,n){var t=Math.floor(e),i=Math.floor(n);return Math.abs(t-i)<=1}function M(e){return"function"==typeof e&&e?e():null}function R(e){return"object"==typeof e&&e?e:null}var W=function(e){function n(){var e,t,i,r;o()(this,n);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return t=i=c()(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),i.forceAlign=function(){var e=i.props,n=e.disabled,t=e.target,o=e.align,r=e.onAlign;if(!n&&t){var a=g.a.findDOMNode(i),s=void 0,c=M(t),l=R(t),u=document.activeElement;c?s=Object(m.a)(a,c,o):l&&(s=Object(m.b)(a,l,o)),function(e,n){e!==document.activeElement&&Object(w.a)(n,e)&&e.focus()}(u,a),r&&r(a,s)}},r=t,c()(i,r)}return u()(n,e),a()(n,[{key:"componentDidMount",value:function(){var e=this.props;this.forceAlign(),!e.disabled&&e.monitorWindowResize&&this.startMonitorWindowResize()}},{key:"componentDidUpdate",value:function(e){var n,t,i=!1,o=this.props;if(!o.disabled){var r=g.a.findDOMNode(this),a=r?r.getBoundingClientRect():null;if(e.disabled)i=!0;else{var s=M(e.target),c=M(o.target),l=R(e.target),u=R(o.target);y(s)&&y(c)?i=!1:(s!==c||s&&!c&&u||l&&u&&c||u&&!((n=l)===(t=u)||n&&t&&("pageX"in t&&"pageY"in t?n.pageX===t.pageX&&n.pageY===t.pageY:"clientX"in t&&"clientY"in t&&n.clientX===t.clientX&&n.clientY===t.clientY)))&&(i=!0);var d=this.sourceRect||{};i||!r||z(d.width,a.width)&&z(d.height,a.height)||(i=!0)}this.sourceRect=a}i&&this.forceAlign(),o.monitorWindowResize&&!o.disabled?this.startMonitorWindowResize():this.stopMonitorWindowResize()}},{key:"componentWillUnmount",value:function(){this.stopMonitorWindowResize()}},{key:"startMonitorWindowResize",value:function(){this.resizeHandler||(this.bufferMonitor=function(e,n){var t=void 0;function i(){t&&(clearTimeout(t),t=null)}function o(){i(),t=setTimeout(e,n)}return o.clear=i,o}(this.forceAlign,this.props.monitorBufferTime),this.resizeHandler=Object(v.a)(window,"resize",this.bufferMonitor))}},{key:"stopMonitorWindowResize",value:function(){this.resizeHandler&&(this.bufferMonitor.clear(),this.resizeHandler.remove(),this.resizeHandler=null)}},{key:"render",value:function(){var e=this,n=this.props,t=n.childrenProps,i=n.children,o=f.a.Children.only(i);if(t){var r={};return Object.keys(t).forEach(function(n){r[n]=e.props[t[n]]}),f.a.cloneElement(o,r)}return o}}]),n}(d.Component);W.propTypes={childrenProps:h.a.object,align:h.a.object.isRequired,target:h.a.oneOfType([h.a.func,h.a.shape({clientX:h.a.number,clientY:h.a.number,pageX:h.a.number,pageY:h.a.number})]),onAlign:h.a.func,monitorBufferTime:h.a.number,monitorWindowResize:h.a.bool,disabled:h.a.bool,children:h.a.any},W.defaultProps={target:function(){return window},monitorBufferTime:50,monitorWindowResize:!1,disabled:!1};var j=W;n.a=j}}]);