webpackJsonp([5],{51:function(t,i,n){"use strict";var e,s;n(52),e=n(54),e&&e.__esModule&&Object.keys(e).length>1&&console.warn("[vue-loader] _mobile\\vue\\src\\components\\Scope.vue: named exports in *.vue files are ignored."),s=n(55),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},52:function(t,i,n){var e=n(53);"string"==typeof e&&(e=[[t.id,e,""]]);n(8)(e,{});e.locals&&(t.exports=e.locals)},53:function(t,i,n){i=t.exports=n(3)(),i.push([t.id,"._space[_v-0f267938] {\n  width: 100%;\n  height: 100vh;\n  background: black;\n}\n._space canvas[_v-0f267938] {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 60%;\n}\n@media (min-width: 1000px) {\n  ._space canvas[_v-0f267938] {\n    width: 400px!important;\n  }\n}\n",""])},54:function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={mounted:function(){var t=function(t,i,n){this.init=function(){this.loop()},this.c=t,this.ctx=t.getContext("2d"),this.cw=i,this.ch=n,this.mx=0,this.my=0,this.trail=[],this.maxTrail=200,this.mouseDown=!1,this.ctx.lineWidth=.1,this.ctx.lineJoin="round",this.radius=1,this.speed=.4,this.angle=0,this.arcx=0,this.arcy=0,this.growRadius=!0,this.seconds=0,this.milliseconds=0};t.prototype={rand:function(t,i){return~~(Math.random()*(i-t+1)+t)},hitTest:function(t,i,n,e,s,a,o,r){return!(t+n<s||s+o<t||i+e<a||a+r<i)},createPoint:function(t,i){this.trail.push({x:t,y:i})},updateTrail:function(){this.trail.length<this.maxTrail&&this.createPoint(this.arcx,this.arcy),this.trail.length>=this.maxTrail&&this.trail.splice(0,1)},updateArc:function(){this.arcx=this.cw/2+Math.sin(this.angle)*this.radius,this.arcy=this.ch/2+Math.cos(this.angle)*this.radius;var t=new Date;this.seconds=t.getSeconds(),this.milliseconds=t.getMilliseconds(),this.angle+=this.speed*(this.seconds+1+this.milliseconds/1e3),this.radius<=1&&(this.growRadius=!0),this.radius>=200&&(this.growRadius=!1),this.growRadius?this.radius+=1:this.radius-=1},renderTrail:function(){var t=this.trail.length;for(this.ctx.beginPath();t--;){var i=this.trail[t],n=t==this.trail.length?this.trail[t+1]:this.trail[t],e=(i.x+n.x)/2,s=(i.y+n.y)/2;this.ctx.quadraticCurveTo(Math.round(this.arcx),Math.round(this.arcy),e,s)}this.ctx.strokeStyle="hsla("+this.rand(170,300)+", 100%, "+this.rand(50,75)+"%, 1)",this.ctx.stroke(),this.ctx.closePath()},clearCanvas:function(){this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle="rgba(0,0,0,.1)",this.ctx.fillRect(0,0,this.cw,this.ch),this.ctx.globalCompositeOperation="lighter"},loop:function(){var t=this,i=function i(){requestAnimationFrame(i,t.c),t.clearCanvas(),t.updateArc(),t.updateTrail(),t.renderTrail()};i()}};var i=function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},n=function(){for(var t=0,i=["ms","moz","webkit","o"],n=0;n<i.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[i[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[n]+"CancelAnimationFrame"]||window[i[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,n){var e=(new Date).getTime(),s=Math.max(0,16-(e-t)),a=window.setTimeout(function(){i(e+s)},s);return t=e+s,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})};if(i){var e=document.getElementById("scope"),s=e.width,a=e.height,o=new t(e,s,a);n(),o.init()}}}},55:function(t,i){t.exports='\n<!-- Abstract Canvas Visualization -->\n<div class="_space" _v-0f267938="">\n\t<canvas id="scope" width="400" height="400" _v-0f267938=""></canvas>\n</div>\n'}});