(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{25:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n(0),r=n(46);n(251);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=i(this,l(t).call(this,e))).handleScroll=function(){n.setState({scroll:window.scrollY})},n.fct=function(){var e=document.querySelector("nav");n.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",n.handleScroll)},n.state={top:"",height:""},n}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.fct()}},{key:"componentDidUpdate",value:function(){this.state.scroll>this.state.top?document.body.style.paddingTop="".concat(this.state.height,"px"):document.body.style.paddingTop=0}},{key:"render",value:function(){return o.createElement("nav",{className:this.state.scroll>this.state.top?"fixed-nav":""},o.createElement("div",{className:"navLinks"},o.createElement("li",{className:"navItem"},o.createElement(r.a,{to:"/home"}," ","Home"," ")),o.createElement("div",{className:"separate"},"|"),o.createElement("li",{className:"navItem"},o.createElement(r.a,{to:"/books"}," ","Books"," ")),o.createElement("div",{className:"separate"},"|"),o.createElement("li",{className:"navItem"},o.createElement(r.a,{to:"/author"}," ","Author"," "))))}}])&&c(n.prototype,a),u&&c(n,u),t}()}}]);