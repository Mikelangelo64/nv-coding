"use strict";(self.webpackChunknv_coding=self.webpackChunknv_coding||[]).push([[50],{235:function(t,e,a){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=o(a(103));o(a(479)).default.pageLoad.onLoaded((function(){(0,n.default)()}))},103:function(t,e,a){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=o(a(421)),i=o(a(302)),r=o(a(503)),l=a(356),d=o(a(479));e.default=function(){var t=document.querySelector(".banner-canvas__container");if(t){var e=t.querySelector(".canvas-logo");if(e){var a=e.getContext("2d"),o=[n.default,i.default,r.default];d.default.isMobile?(0,l.makeAnimationMobile)(t,e,a,o):(0,l.makeAnimationDesktop)(t,e,a,o)}}}},479:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=new(a(669).Application)({tablet:1199,phone:899,prefix:"v-",viewportResizeTimeout:100,easing:[.25,.1,.25,1]});e.default=o},356:(t,e,a)=>{a.r(e),a.d(e,{makeAnimationDesktop:()=>n,makeAnimationMobile:()=>i});var o=a(358);const n=(t,e,a,n)=>{const i=[...n],r=600,l=1e4,d={radius:10,mouseMagnet:l,mouseThreshold:.5,padding:[.1,.1],floatingSpeed:10,floatingDist:15,sizeRandomness:1};let s={x:-1e5,y:-1e4},h=[],c=[],y=0,g=0,x=[],u=0;for(let e=0;e<i.length;e++){const a=new Image;a.src=i[e],h.push([]),a.onload=function(){0===u&&m(a),w(a,e),u===i.length-1&&(y=Math.max(...h.map((t=>t.length))),c=new Array(y).fill(0),c=c.map(((t,e)=>{const a=d.radius*(.5+Math.random());return{color:{r:h[g][e].color.r,g:h[g][e].color.g,b:h[g][e].color.b},xy:{x:h[g][e].xy.x,y:h[g][e].xy.y},base:{x:h[g][e].xy.x,y:h[g][e].xy.y},target:{x:h[g][e].xy.x,y:h[g][e].xy.y},rand:[Math.random(),Math.random()],rBase:a,r:a,speed:.5+.5*Math.random(),floatingTimeStart:2*Math.random()*Math.PI,floatingDist:d.floatingDist*(.2+Math.random())}})),o.p8.ticker.add((t=>{b(t)})),o.p8.set(t,{opacity:1}),t.onmouseenter=function(t){o.p8.to(d,{duration:.5,mouseMagnet:l})},t.onmouseleave=function(t){o.p8.to(d,{duration:.5,mouseMagnet:0})},t.onmousemove=function(e){s.x=e.offsetX,s.y=e.offsetY,s.x*=1+2*d.padding[0],s.y*=1+2*d.padding[1],s.x*=2,s.y*=2,s.x*=r/t.clientWidth,s.y*=r/t.clientWidth}),u++}}const p=o.p8.set(f,{delay:4,onRepeat:f,repeat:-1,repeatDelay:4});function f(){const t=g;g++,g%=i.length,c.forEach(((e,a)=>{const n=1.5*(.5+.5*Math.random());h[g][a]?(o.p8.to(e.color,{duration:n,r:h[g][a].color.r,g:h[g][a].color.g,b:h[g][a].color.b}),o.p8.fromTo(e.xy,{x:h[t][a%h[t].length].xy.x,y:h[t][a%h[t].length].xy.y},{duration:n,x:h[g][a].xy.x,y:h[g][a].xy.y,ease:"slow(0.7, 0.7, false)"}),o.p8.to(e.base,{duration:n,x:h[g][a].xy.x,y:h[g][a].xy.y}),o.p8.to(e.target,{duration:n,x:h[g][a].xy.x,y:h[g][a].xy.y}),o.p8.to(e,{r:e.rBase})):(o.p8.to(e,{duration:.2,r:0}),o.p8.to(e.xy,{duration:n,x:h[g][a%i.length].xy.x,y:h[g][a%i.length].xy.y}))}))}function m(t){const a=t.width/t.height;x=[r,r/a],x=x.map((t=>2*t)),e.width=x[0],e.height=x[1],e.width+=2*d.padding[0]*x[0],e.height+=2*d.padding[1]*x[1]}function M(t){for(let e=t.length-1;e>0;e--){const a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}return t}function w(t,o){a.drawImage(t,d.padding[0]*x[0],d.padding[1]*x[1],x[0],x[1]);const n=a.getImageData(0,0,e.width,e.height),i=4*(1===o?2:2.5)*2,r=Math.ceil(d.radius),l=Math.floor(e.height-d.radius),s=Math.floor(e.width-d.radius);for(let t=r;t<l;t+=i){for(let a=r;a<s;a+=i){const i=120,r=n.data[4*(a+t*e.width)]>i&&n.data[4*(a+t*e.width)+1]>i&&n.data[4*(a+t*e.width)+2]>i,l=n.data[4*(a+t*e.width)+3]<.5;r||l||h[o].push({xy:{x:a,y:t},color:{r:n.data[4*(a+t*e.width)],g:n.data[4*(a+t*e.width)+1],b:n.data[4*(a+t*e.width)+2]},base:{x:a,y:t}})}h[o]=M(h[o])}}function b(t){a.clearRect(0,0,e.width,e.height);for(let e=0;e<y;e++){const o=c[e];a.fillStyle="rgb("+o.color.r+", "+o.color.g+", "+o.color.b+")";let n=s.x-o.target.x,i=s.y-o.target.y,r=n*n+i*i,l=[(o.rand[0]>.5?-1:1)*Math.sin(d.floatingSpeed*o.speed*t+o.floatingTimeStart)*o.floatingDist,(o.rand[1]>.5?-1:1)*Math.cos(d.floatingSpeed*o.speed*t+o.floatingTimeStart)*o.floatingDist];1===g?l=l.map((t=>.4*t)):2===g&&(l=l.map((t=>.5*t)));const h=[d.mouseMagnet*n/r,d.mouseMagnet*i/r];o.target.x=o.base.x+l[0]-h[0],o.target.y=o.base.y+l[1]-h[1],o.xy.x+=(o.target.x-o.xy.x)*d.mouseThreshold,o.xy.y+=(o.target.y-o.xy.y)*d.mouseThreshold;let y=o.r;1===g?y*=.8:3===g&&(y=.5*y+1),a.beginPath(),a.arc(o.xy.x,o.xy.y,y,0,2*Math.PI,!0),a.closePath(),a.fill()}}t.addEventListener("click",(()=>{p.pause(),o.p8.globalTimeline.getChildren().forEach((t=>{t.kill()})),f(),o.p8.delayedCall(1.5,(()=>{p.play(0)})),o.p8.timeline({}).to(d,{duration:.3,mouseMagnet:0}).to(d,{duration:.3,mouseMagnet:l})})),window.addEventListener("resize",(()=>{}))},i=(t,e,a,n)=>{const i=[...n],r=10,l=[.1,.1],d=10,s=15;let h=[],c=[],y=0,g=0,x=[],u=0;for(let e=0;e<i.length;e++){const a=new Image;a.src=i[e],h.push([]),a.onload=function(){0===u&&m(a),w(a,e),u===i.length-1&&(y=Math.max(...h.map((t=>t.length))),c=new Array(y).fill(0),c=c.map(((t,e)=>{const a=r*(.5+Math.random());return{color:{r:h[g][e].color.r,g:h[g][e].color.g,b:h[g][e].color.b},xy:{x:h[g][e].xy.x,y:h[g][e].xy.y},base:{x:h[g][e].xy.x,y:h[g][e].xy.y},rand:[Math.random(),Math.random()],rBase:a,r:a,speed:.5+.5*Math.random(),floatingTimeStart:2*Math.random()*Math.PI,floatingDist:s*(.2+Math.random())}})),o.p8.ticker.add((t=>{b(t)})),o.p8.set(t,{opacity:1})),u++}}const p=o.p8.set(f,{delay:4,onRepeat:f,repeat:-1,repeatDelay:4});function f(){const t=g;g++,g%=i.length,c.forEach(((e,a)=>{const n=1.5*(.5+.5*Math.random());h[g][a]?(o.p8.to(e.color,{duration:n,r:h[g][a].color.r,g:h[g][a].color.g,b:h[g][a].color.b}),o.p8.fromTo(e.xy,{x:h[t][a%h[t].length].xy.x,y:h[t][a%h[t].length].xy.y},{duration:n,x:h[g][a].xy.x,y:h[g][a].xy.y,ease:"slow(0.7, 0.7, false)"}),o.p8.to(e.base,{duration:n,x:h[g][a].xy.x,y:h[g][a].xy.y}),o.p8.to(e,{r:e.rBase})):(o.p8.to(e,{duration:.2,r:0}),o.p8.to(e.xy,{duration:n,x:h[g][a%i.length].xy.x,y:h[g][a%i.length].xy.y}))}))}function m(t){const a=t.width/t.height;x=[600,600/a],x=x.map((t=>2*t)),e.width=x[0],e.height=x[1],e.width+=2*l[0]*x[0],e.height+=2*l[1]*x[1]}function M(t){for(let e=t.length-1;e>0;e--){const a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}return t}function w(t,o){a.drawImage(t,l[0]*x[0],l[1]*x[1],x[0],x[1]);const n=a.getImageData(0,0,e.width,e.height),i=4*(1===o?2:2.5)*2,d=Math.ceil(r),s=Math.floor(e.height-r),c=Math.floor(e.width-r);for(let t=d;t<s;t+=i){for(let a=d;a<c;a+=i){const i=120,r=n.data[4*(a+t*e.width)]>i&&n.data[4*(a+t*e.width)+1]>i&&n.data[4*(a+t*e.width)+2]>i,l=n.data[4*(a+t*e.width)+3]<.5;r||l||h[o].push({xy:{x:a,y:t},color:{r:n.data[4*(a+t*e.width)],g:n.data[4*(a+t*e.width)+1],b:n.data[4*(a+t*e.width)+2]},base:{x:a,y:t}})}h[o]=M(h[o])}}function b(t){a.clearRect(0,0,e.width,e.height);for(let e=0;e<y;e++){const o=c[e];a.fillStyle="rgb("+o.color.r+", "+o.color.g+", "+o.color.b+")";let n=[(o.rand[0]>.5?-1:1)*Math.sin(d*o.speed*t+o.floatingTimeStart)*o.floatingDist,(o.rand[1]>.5?-1:1)*Math.cos(d*o.speed*t+o.floatingTimeStart)*o.floatingDist];1===g?n=n.map((t=>.4*t)):2===g&&(n=n.map((t=>.5*t))),o.xy.x=o.base.x+n[0],o.xy.y=o.base.y+n[1];let i=o.r;1===g?i*=.8:3===g&&(i=.5*i+1),a.beginPath(),a.arc(o.xy.x,o.xy.y,i,0,2*Math.PI,!0),a.closePath(),a.fill()}}t.addEventListener("click",(()=>{p.pause(),o.p8.globalTimeline.getChildren().forEach((t=>{t.kill()})),f(),o.p8.delayedCall(1.5,(()=>{p.play(0)}))})),window.addEventListener("resize",(()=>{}))}},503:(t,e,a)=>{t.exports=a.p+"./assets/img/animation/chart.webp"},302:(t,e,a)=>{t.exports=a.p+"./assets/img/animation/handshake.webp"},421:(t,e,a)=>{t.exports=a.p+"./assets/img/animation/logo.webp"}},t=>{t.O(0,[216],(()=>(235,t(t.s=235)))),t.O()}]);