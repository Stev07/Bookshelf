(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{155:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.presetPrimaryColors=r.presetPalettes=r.generate=void 0;var o,n=t(250),u=(o=n)&&o.__esModule?o:{default:o};var a={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},d={};Object.keys(a).forEach(function(e){d[e]=(0,u.default)(a[e])}),r.generate=u.default,r.presetPalettes=d,r.presetPrimaryColors=a},250:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){for(var r=[],t=(0,u.default)(e),o=i;o>0;o-=1){var n=t.toHsv(),a=(0,u.default)({h:f(n,o,!0),s:c(n,o,!0),v:p(n,o,!0)}).toHexString();r.push(a)}r.push(t.toHexString());for(var d=1;d<=v;d+=1){var s=t.toHsv(),l=(0,u.default)({h:f(s,d),s:c(s,d),v:p(s,d)}).toHexString();r.push(l)}return r};var o,n=t(251),u=(o=n)&&o.__esModule?o:{default:o};var a=2,d=16,s=5,l=5,h=15,i=5,v=4;function f(e,r,t){var o=void 0;return(o=Math.round(e.h)>=60&&Math.round(e.h)<=240?t?Math.round(e.h)-a*r:Math.round(e.h)+a*r:t?Math.round(e.h)+a*r:Math.round(e.h)-a*r)<0?o+=360:o>=360&&(o-=360),o}function c(e,r,t){if(0===e.h&&0===e.s)return e.s;var o=void 0;return(o=t?Math.round(100*e.s)-d*r:r===v?Math.round(100*e.s)+d:Math.round(100*e.s)+s*r)>100&&(o=100),t&&r===i&&o>10&&(o=10),o<6&&(o=6),o}function p(e,r,t){return t?Math.round(100*e.v)+l*r:Math.round(100*e.v)-h*r}}}]);