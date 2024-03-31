var y0=Object.defineProperty;var _0=(e,t,n)=>t in e?y0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>(_0(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function m(){}function x0(e){return e()}function f0(){return Object.create(null)}function Q(e){e.forEach(x0)}function v0(e){return typeof e=="function"}function A(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function $0(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function y(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function a0(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function j(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $(e){return document.createTextNode(e)}function z(){return $(" ")}function o(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function A0(e){return Array.from(e.childNodes)}function l0(e,t){t=""+t,e.data!==t&&(e.data=t)}function n0(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function e0(e,t){return new e(t)}let i0;function q(e){i0=e}const U=[],p0=[];let Y=[];const h0=[],k0=Promise.resolve();let o0=!1;function M0(){o0||(o0=!0,k0.then(L0))}function s0(e){Y.push(e)}const r0=new Set;let R=0;function L0(){if(R!==0)return;const e=i0;do{try{for(;R<U.length;){const t=U[R];R++,q(t),j0(t.$$)}}catch(t){throw U.length=0,R=0,t}for(q(null),U.length=0,R=0;p0.length;)p0.pop()();for(let t=0;t<Y.length;t+=1){const n=Y[t];r0.has(n)||(r0.add(n),n())}Y.length=0}while(U.length);for(;h0.length;)h0.pop()();o0=!1,r0.clear(),q(e)}function j0(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(s0)}}function z0(e){const t=[],n=[];Y.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),Y=t}const t0=new Set;let W;function c0(){W={r:0,c:[],p:W}}function u0(){W.r||Q(W.c),W=W.p}function E(e,t){e&&e.i&&(t0.delete(e),e.i(t))}function H(e,t,n,r){if(e&&e.o){if(t0.has(e))return;t0.add(e),W.c.push(()=>{t0.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function J(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function G(e){e&&e.c()}function B(e,t,n){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),s0(()=>{const c=e.$$.on_mount.map(x0).filter(v0);e.$$.on_destroy?e.$$.on_destroy.push(...c):Q(c),e.$$.on_mount=[]}),l.forEach(s0)}function S(e,t){const n=e.$$;n.fragment!==null&&(z0(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function E0(e,t){e.$$.dirty[0]===-1&&(U.push(e),M0(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function k(e,t,n,r,l,c,h=null,u=[-1]){const f=i0;q(e);const i=e.$$={fragment:null,ctx:[],props:c,update:m,not_equal:l,bound:f0(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:f0(),dirty:u,skip_bound:!1,root:t.target||f.$$.root};h&&h(i.root);let a=!1;if(i.ctx=n?n(e,t.props||{},(p,d,...b)=>{const T=b.length?b[0]:d;return i.ctx&&l(i.ctx[p],i.ctx[p]=T)&&(!i.skip_bound&&i.bound[p]&&i.bound[p](T),a&&E0(e,p)),d}):[],i.update(),a=!0,Q(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const p=A0(t.target);i.fragment&&i.fragment.l(p),p.forEach(w)}else i.fragment&&i.fragment.c();t.intro&&E(e.$$.fragment),B(e,t.target,t.anchor),L0()}q(f)}class M{constructor(){X(this,"$$");X(this,"$$set")}$destroy(){S(this,1),this.$destroy=m}$on(t,n){if(!v0(n))return m;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!$0(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const I0="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(I0);function P0(e){let t,n,r,l,c,h,u,f,i,a,p,d,b,T,N,O,V,I,F,Z;return{c(){t=g("main"),n=g("div"),r=g("div"),l=$("// Page not found"),c=g("br"),h=z(),u=g("span"),u.textContent="const",f=$(` page =
            `),i=g("span"),i.textContent="()",a=$(`
            => `),p=g("span"),p.textContent="searchPage",d=$('("'),b=$(e[0]),T=$('");'),N=g("br"),O=$(`
            page.`),V=g("span"),V.textContent="render",I=$("()."),F=g("span"),F.textContent="capture",Z=$("();"),o(u,"class","text-red-900"),o(i,"class","text-blue-900"),o(p,"class","text-purple-900"),o(V,"class","text-purple-900"),o(F,"class","text-purple-900"),o(r,"class","pl-4 py-2 border-l-8 border-gray-300 bg-gray-100 font-mono mt-2 box-shadow"),o(n,"class","w-[880px] text-gray-700 font-sans mx-auto rounded-md p-8 h-max")},m(P,_){y(P,t,_),s(t,n),s(n,r),s(r,l),s(r,c),s(r,h),s(r,u),s(r,f),s(r,i),s(r,a),s(r,p),s(r,d),s(r,b),s(r,T),s(r,N),s(r,O),s(r,V),s(r,I),s(r,F),s(r,Z)},p(P,[_]){_&1&&l0(b,P[0])},i:m,o:m,d(P){P&&w(t)}}}function H0(e,t,n){let{path:r}=t;return e.$$set=l=>{"path"in l&&n(0,r=l.path)},[r]}class T0 extends M{constructor(t){super(),k(this,t,H0,P0,A,{path:0})}}class B0{constructor(){X(this,"collections",[])}register(t){this.collections.push(t)}render(t){const n=this.collections,r=n.find(l=>l.path===t);return r?(r.active=!0,r.component):T0}list(){return this.collections.map(t=>t)}}const K=new B0;function g0(e,t,n){const r=e.slice();return r[1]=t[n],r}function m0(e){let t,n,r,l,c,h,u;return{c(){t=g("li"),n=g("a"),r=g("div"),l=g("i"),c=z(),h=g("p"),h.textContent=`${e[1].name}`,u=z(),o(l,"class","text-2xl mr-2 "+e[1].iconClass),o(r,"class","flex justify-between items-center"),o(n,"href",e[1].path),o(n,"class",(e[1].active?"text-gray-500 bg-gray-100 outline-none dark:bg-gray-800":"text-gray-700 bg-gray-200 outline-none")+" font-semibold inline-block px-4 py-2 text-lg font-normal no-underline rounded-md dark:text-gray-200 hover:text-gray-500"),o(t,"class","mr-3 nav__item")},m(f,i){y(f,t,i),s(t,n),s(n,r),s(r,l),s(r,c),s(r,h),s(t,u)},p:m,d(f){f&&w(t)}}}function S0(e){let t,n,r,l,c,h,u,f=J(e[0]),i=[];for(let a=0;a<f.length;a+=1)i[a]=m0(g0(e,f,a));return{c(){t=g("main"),n=g("div"),r=g("nav"),l=g("div"),l.innerHTML='<div class="font-semibold inline-block mb-4 no-underline rounded-md dark:text-gray-200 outline-none dark:bg-gray-800"><img class="shadow-lg w-[200px] h-[200px] rounded-md object-cover object-center border-2 border-gray-700" src="https://raw.githubusercontent.com/AryAntara/own-landing-page/main/public/images/profile.jpg" alt=""/></div> <div class="text-wrap w-[400px] "><p class="text-dark font-bold text-5xl mb-2">I Komang Ary Antara</p> <a href="github.com/AryAntara" class="font-bold text-gray-500">@AryAntara</a> <div class="flex mt-2"><div class="w-[40px] h-[40px] bg-gray-500"></div> <div class="w-[40px] h-[40px] bg-gray-400"></div> <div class="w-[40px] h-[40px] bg-gray-300"></div> <div class="w-[40px] h-[40px] bg-gray-200"></div> <div class="w-[40px] h-[40px] bg-gray-100"></div></div></div>',c=z(),h=g("div"),u=g("ul");for(let a=0;a<i.length;a+=1)i[a].c();o(l,"class","flex justify-between"),o(u,"class","flex justify-between"),o(r,"class","container relative p-8 mx-auto w-[680px] lg:justify-between xl:px-0"),o(n,"class","w-full")},m(a,p){y(a,t,p),s(t,n),s(n,r),s(r,l),s(r,c),s(r,h),s(h,u);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(u,null)},p(a,[p]){if(p&1){f=J(a[0]);let d;for(d=0;d<f.length;d+=1){const b=g0(a,f,d);i[d]?i[d].p(b,p):(i[d]=m0(b),i[d].c(),i[d].m(u,null))}for(;d<i.length;d+=1)i[d].d(1);i.length=f.length}},i:m,o:m,d(a){a&&w(t),a0(i,a)}}}function N0(e){return[K.list()]}class O0 extends M{constructor(t){super(),k(this,t,N0,S0,A,{})}}function V0(e){let t;return{c(){t=g("div"),t.innerHTML=`<p class="w-[400px] font-mono text-gray-700 italic">Bad programmers worry about the code. Good programmers worry about data
        structures and their relationships -
        <span class="font-bold">Linus Torvalds</span></p> <ul class="flex"><li><i class="hover:cursor-pointer hover:border-gray-400 hover:text-gray-300 border-b-4 border-gray-300 text-3xl text-gray-500 pb-2 m-2 bi bi-linkedin"></i></li> <li><i class="hover:cursor-pointer hover:border-gray-400 hover:text-gray-300 border-b-4 border-gray-300 text-3xl text-gray-500 pb-2 m-2 bi bi-telegram"></i></li> <li><i class="hover:cursor-pointer hover:border-gray-400 hover:text-gray-300 border-b-4 border-gray-300 text-3xl text-gray-500 pb-2 m-2 bi bi-github"></i></li></ul>`,o(t,"class","pt-8 border-t-2 border-black mt-[100px] w-[880px] mx-auto h-[200px] flex justify-between")},m(n,r){y(n,t,r)},p:m,i:m,o:m,d(n){n&&w(t)}}}class F0 extends M{constructor(t){super(),k(this,t,null,V0,A,{})}}function Z0(e){let t;return{c(){t=g("main"),t.innerHTML=`<div class="w-[880px] text-gray-700 font-sans mx-auto rounded-md p-8 h-max"><h1 class="text-3xl font-bold mt-2 box-shadow">Welcome to my personal website!</h1> <div class="mt-4 text-xl leading-9"><p>This is your one-stop shop to learn about me, explore my
                projects, and dive into my blog posts.</p> <ul class="mt-4"><li><span class="font-bold"><i class="bi bi-1-circle-fill"></i> Projects</span>
                    Check out the projects I&#39;ve been working on!</li> <li><span class="font-bold"><i class="bi bi-2-circle-fill"></i> Blogs</span>
                    
                        Explore my thoughts and ideas on a variety of topics,
                        not just programming. Feel free to suggest any blog
                        content ideas you have - I&#39;m always looking for
                        inspiration!</li> <li><span class="font-bold"><i class="bi bi-3-circle-fill"></i> Contact</span>
                    
                        Get in touch! This page contains my contact information.
                        Let me know about your interests or if you&#39;d like to
                        collaborate on a project.</li> <li><span class="font-bold"><i class="bi bi-4-circle-fill"></i> About</span>
                    Little bit about me.</li></ul> <p class="mt-4">I hope you enjoy browsing my website!</p></div></div>`},m(n,r){y(n,t,r)},p:m,i:m,o:m,d(n){n&&w(t)}}}class D0 extends M{constructor(t){super(),k(this,t,null,Z0,A,{})}}function W0(e){let t;return{c(){t=g("main"),t.innerHTML=`<div class="w-[880px] text-gray-700 mx-auto rounded-md p-8 h-max"><h1 class="text-3xl font-bold mt-2 box-shadow">Who is me?</h1> <div class="flex mt-8"><p class="text-xl leading-9">I&#39;m <span class="text-xl font-bold">I Komang Ary Antara</span>, originally from East Luwu, South Sulawesi,
                but Bali is my current home. I double as a student and a Web Developer
                at Pt. Guna Teknologi Nusantara. Laravel is my current framework
                of choice, but I&#39;m also familiar with CodeIgniter, MySQL, Javascript,
                Typescript, and Golang.</p></div></div>`},m(n,r){y(n,t,r)},p:m,i:m,o:m,d(n){n&&w(t)}}}class G0 extends M{constructor(t){super(),k(this,t,null,W0,A,{})}}function C0(e,t,n){const r=e.slice();return r[1]=t[n],r}function b0(e){let t,n,r,l;var c=e[1].svgElement;function h(u,f){return{}}return c&&(n=e0(c,h())),{c(){t=g("div"),n&&G(n.$$.fragment),r=z(),o(t,"class","mx-1")},m(u,f){y(u,t,f),n&&B(n,t,null),s(t,r),l=!0},p(u,f){if(f&1&&c!==(c=u[1].svgElement)){if(n){c0();const i=n;H(i.$$.fragment,1,0,()=>{S(i,1)}),u0()}c?(n=e0(c,h()),G(n.$$.fragment),E(n.$$.fragment,1),B(n,t,r)):n=null}},i(u){l||(n&&E(n.$$.fragment,u),l=!0)},o(u){n&&H(n.$$.fragment,u),l=!1},d(u){u&&w(t),n&&S(n)}}}function K0(e){let t,n,r=e[0].title+"",l,c,h,u=e[0].description+"",f,i,a,p,d,b,T,N,O,V,I,F,Z,P,_,D=J(e[0].technologies),x=[];for(let C=0;C<D.length;C+=1)x[C]=b0(C0(e,D,C));const w0=C=>H(x[C],1,1,()=>{x[C]=null});return{c(){t=g("div"),n=g("h3"),l=$(r),c=z(),h=g("p"),f=$(u),i=z(),a=g("div");for(let C=0;C<x.length;C+=1)x[C].c();p=z(),d=g("div"),b=g("a"),T=$("view"),V=z(),I=g("a"),F=$("source"),o(n,"class","text-2xl font-bold mt-2"),o(h,"class","text-xl leading-9 mt-4"),o(a,"class","mt-4 flex"),o(b,"href",N=e[0].webLink??"#"),o(b,"class",O=(e[0].webLink?"border-black hover:bg-black hover:text-white":"border-gray-400 text-gray-400")+" border-2 rounded-xl p-2 font-semibold px-4"),o(b,"target","_blank"),o(I,"href",Z=e[0].sourceLink??"#"),o(I,"class",P=(e[0].sourceLink?"border-black hover:bg-black hover:text-white":"border-gray-400 text-gray-400")+" border-2 rounded-xl p-2 font-semibold px-4"),o(I,"target","_blank"),o(d,"class","flex justify-between mt-8"),o(t,"class","w-[400px] border-4 border-gray-500 border-dashed rounded-xl p-4")},m(C,L){y(C,t,L),s(t,n),s(n,l),s(t,c),s(t,h),s(h,f),s(t,i),s(t,a);for(let v=0;v<x.length;v+=1)x[v]&&x[v].m(a,null);s(t,p),s(t,d),s(d,b),s(b,T),s(d,V),s(d,I),s(I,F),_=!0},p(C,[L]){if((!_||L&1)&&r!==(r=C[0].title+"")&&l0(l,r),(!_||L&1)&&u!==(u=C[0].description+"")&&l0(f,u),L&1){D=J(C[0].technologies);let v;for(v=0;v<D.length;v+=1){const d0=C0(C,D,v);x[v]?(x[v].p(d0,L),E(x[v],1)):(x[v]=b0(d0),x[v].c(),E(x[v],1),x[v].m(a,null))}for(c0(),v=D.length;v<x.length;v+=1)w0(v);u0()}(!_||L&1&&N!==(N=C[0].webLink??"#"))&&o(b,"href",N),(!_||L&1&&O!==(O=(C[0].webLink?"border-black hover:bg-black hover:text-white":"border-gray-400 text-gray-400")+" border-2 rounded-xl p-2 font-semibold px-4"))&&o(b,"class",O),(!_||L&1&&Z!==(Z=C[0].sourceLink??"#"))&&o(I,"href",Z),(!_||L&1&&P!==(P=(C[0].sourceLink?"border-black hover:bg-black hover:text-white":"border-gray-400 text-gray-400")+" border-2 rounded-xl p-2 font-semibold px-4"))&&o(I,"class",P)},i(C){if(!_){for(let L=0;L<D.length;L+=1)E(x[L]);_=!0}},o(C){x=x.filter(Boolean);for(let L=0;L<x.length;L+=1)H(x[L]);_=!1},d(C){C&&w(t),a0(x,C)}}}function R0(e,t,n){let{project:r}=t;return e.$$set=l=>{"project"in l&&n(0,r=l.project)},[r]}class U0 extends M{constructor(t){super(),k(this,t,R0,K0,A,{project:0})}}function Y0(e){let t,n;return{c(){t=j("svg"),n=j("path"),o(n,"d","M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"x","0px"),o(t,"y","0px"),o(t,"width","24"),o(t,"height","24"),o(t,"viewBox","0 0 50 50")},m(r,l){y(r,t,l),s(t,n)},p:m,i:m,o:m,d(r){r&&w(t)}}}class q0 extends M{constructor(t){super(),k(this,t,null,Y0,A,{})}}function J0(e){let t,n;return{c(){t=j("svg"),n=j("path"),o(n,"d","M 38.572266 3.0019531 C 35.218023 2.9100811 31.843235 3.75505 28.890625 5.6289062 A 1.0001 1.0001 0 0 0 28.886719 5.6308594 L 15.847656 13.976562 C 15.845656 13.977863 15.843797 13.979269 15.841797 13.980469 L 15.839844 13.982422 C 12.046259 16.363367 9.4156472 20.257026 8.65625 24.666016 C 8.0389206 28.138775 8.5873686 31.684234 10.134766 34.841797 C 9.0758759 36.54779 8.3201839 38.405185 7.9921875 40.369141 C 7.9918471 40.371141 7.9905744 40.3729 7.9902344 40.375 C 7.1876056 44.859089 8.2441528 49.485733 10.861328 53.164062 C 10.862728 53.165962 10.863834 53.167922 10.865234 53.169922 C 10.865234 53.169922 10.867188 53.171875 10.867188 53.171875 C 16.388291 61.043031 27.216645 63.364402 35.085938 58.369141 L 48.128906 50.070312 C 51.928094 47.689816 54.560385 43.79293 55.320312 39.380859 C 55.93763 35.908167 55.389122 32.362597 53.841797 29.205078 C 54.899923 27.500314 55.654104 25.642103 55.982422 23.679688 C 56.836219 19.145716 55.776026 14.505985 53.105469 10.824219 C 49.683164 5.9058329 44.156976 3.1549172 38.572266 3.0019531 z M 21.746094 3.0292969 C 21.616953 3.0526094 21.488344 3.1017344 21.371094 3.1777344 C 20.901094 3.4817344 20.764453 4.1043594 21.064453 4.5683594 L 22.152344 6.2460938 C 22.452344 6.7100938 23.075922 6.8411094 23.544922 6.5371094 C 24.014922 6.2331094 24.151563 5.6104844 23.851562 5.1464844 L 22.765625 3.46875 C 22.540625 3.12075 22.133516 2.9593594 21.746094 3.0292969 z M 38.529297 5.0097656 C 43.494615 5.1516847 48.429152 7.5950924 51.472656 11.978516 A 1.0001 1.0001 0 0 0 51.486328 11.996094 C 53.839589 15.238614 54.771593 19.321269 54.015625 23.320312 A 1.0001 1.0001 0 0 0 54.011719 23.341797 C 53.703402 25.192629 53.000547 26.956677 51.9375 28.550781 A 1.0001 1.0001 0 0 0 51.888672 29.580078 C 53.438887 32.458383 53.928804 35.783405 53.349609 39.035156 A 1.0001 1.0001 0 0 0 53.349609 39.041016 C 52.687537 42.884945 50.385219 46.295497 47.066406 48.375 A 1.0001 1.0001 0 0 0 47.060547 48.378906 L 34.013672 56.681641 C 27.083671 61.08066 17.41865 59.037894 12.5 52.017578 A 1.0001 1.0001 0 0 0 12.496094 52.011719 C 10.185693 48.768591 9.250104 44.671803 9.9609375 40.716797 A 1.0001 1.0001 0 0 0 9.9628906 40.705078 C 10.271208 38.854246 10.976016 37.090198 12.039062 35.496094 A 1.0001 1.0001 0 0 0 12.087891 34.466797 C 10.537677 31.588493 10.045805 28.261517 10.625 25.009766 A 1.0001 1.0001 0 0 0 10.626953 25.003906 C 11.288999 21.160131 13.59028 17.751405 16.908203 15.671875 A 1.0001 1.0001 0 0 0 16.917969 15.666016 L 29.960938 7.3164062 L 29.964844 7.3144531 C 32.562112 5.6672207 35.551536 4.9246551 38.529297 5.0097656 z M 17.496094 5.7792969 C 17.366953 5.8026094 17.238344 5.8517344 17.121094 5.9277344 C 16.651094 6.2317344 16.514453 6.8543594 16.814453 7.3183594 L 17.902344 8.9960938 C 18.202344 9.4600938 18.825922 9.5911094 19.294922 9.2871094 C 19.764922 8.9831094 19.901563 8.3604844 19.601562 7.8964844 L 18.515625 6.21875 C 18.290625 5.87075 17.883516 5.7093594 17.496094 5.7792969 z M 13.246094 8.5292969 C 13.116953 8.5526094 12.988344 8.6017344 12.871094 8.6777344 C 12.401094 8.9817344 12.264453 9.6043594 12.564453 10.068359 L 13.652344 11.746094 C 13.952344 12.210094 14.575922 12.341109 15.044922 12.037109 C 15.514922 11.733109 15.651563 11.110484 15.351562 10.646484 L 14.265625 8.96875 C 14.040625 8.62075 13.633516 8.4593594 13.246094 8.5292969 z M 38.441406 8.9453125 C 37.567545 8.9640095 36.686318 9.0846548 35.8125 9.3105469 A 1.0001 1.0001 0 0 0 35.775391 9.3203125 C 34.753768 9.6266925 33.756551 10.042795 32.845703 10.630859 L 32.84375 10.632812 C 32.84205 10.633912 32.839691 10.633592 32.837891 10.634766 L 19.695312 18.998047 C 17.298489 20.489799 15.608116 22.969973 15.125 25.748047 C 14.597979 28.600228 15.285005 31.500911 16.914062 33.816406 C 16.914062 33.816406 16.916016 33.818359 16.916016 33.818359 C 16.916863 33.819559 16.917069 33.821066 16.917969 33.822266 C 19.641087 37.74527 24.520846 39.5791 29.177734 38.376953 L 29.181641 38.376953 C 30.233494 38.113427 31.240731 37.691435 32.150391 37.103516 L 37.152344 33.912109 C 37.246314 33.855489 37.460035 33.774335 37.714844 33.6875 C 38.614038 33.460863 39.494956 33.7756 40.023438 34.533203 C 40.300584 34.933169 40.431703 35.499502 40.341797 35.980469 C 40.247497 36.484966 40.005009 36.842842 39.539062 37.142578 L 26.453125 45.5 C 26.359155 45.55662 26.145434 45.637775 25.890625 45.724609 C 25.016676 45.944266 24.126481 45.598384 23.589844 44.835938 C 23.339159 44.454734 23.200407 43.93793 23.230469 43.511719 C 23.230469 43.511719 23.230469 43.509766 23.230469 43.509766 L 23.275391 43.058594 A 1.0001 1.0001 0 0 0 22.568359 42.001953 L 22.089844 41.857422 C 20.329708 41.315287 18.7127 40.5052 17.222656 39.421875 A 1.0001 1.0001 0 0 0 17.214844 39.417969 L 16.544922 38.939453 A 1.0001 1.0001 0 0 0 15.009766 39.455078 L 14.769531 40.220703 A 1.0001 1.0001 0 0 0 14.748047 40.300781 C 14.655227 40.71752 14.562067 41.099661 14.462891 41.544922 A 1.0001 1.0001 0 0 0 14.451172 41.597656 C 13.978884 44.429191 14.611357 47.334217 16.300781 49.662109 C 19.025433 53.582225 23.90478 55.418412 28.560547 54.214844 A 1.0001 1.0001 0 0 0 28.597656 54.203125 C 29.622057 53.895912 30.620344 53.479279 31.533203 52.888672 L 31.527344 52.894531 L 44.677734 44.523438 C 47.076357 43.030536 48.768317 40.548152 49.25 37.767578 A 1.0001 1.0001 0 0 0 49.251953 37.761719 C 49.723023 34.930678 49.091886 32.025325 47.402344 29.697266 C 44.677693 25.777147 39.798347 23.940962 35.142578 25.144531 A 1.0001 1.0001 0 0 0 35.105469 25.154297 C 34.083026 25.460923 33.087223 25.877982 32.175781 26.466797 L 27.167969 29.660156 C 27.072899 29.716606 26.861688 29.796833 26.609375 29.882812 C 25.710283 30.109416 24.829036 29.794372 24.300781 29.037109 C 24.023634 28.637143 23.892516 28.068857 23.982422 27.587891 C 24.076732 27.083393 24.317256 26.72747 24.783203 26.427734 L 37.869141 18.070312 L 37.875 18.068359 C 37.97007 18.011909 38.181281 17.931683 38.433594 17.845703 C 39.329281 17.619959 40.205466 17.934463 40.734375 18.685547 C 40.985059 19.06675 41.123812 19.583555 41.09375 20.009766 C 41.09375 20.009766 41.09375 20.011719 41.09375 20.011719 L 41.048828 20.462891 A 1.0001 1.0001 0 0 0 41.755859 21.521484 L 42.228516 21.662109 C 42.228516 21.662109 42.230469 21.662109 42.230469 21.662109 L 42.234375 21.664062 C 43.99451 22.206198 45.611519 23.016284 47.101562 24.099609 A 1.0001 1.0001 0 0 0 47.109375 24.103516 L 47.779297 24.583984 A 1.0001 1.0001 0 0 0 49.314453 24.068359 L 49.546875 23.320312 L 49.552734 23.302734 C 49.707626 22.836269 49.812298 22.415906 49.910156 21.976562 A 1.0001 1.0001 0 0 0 49.919922 21.923828 C 50.392168 19.092541 49.761369 16.187748 48.070312 13.861328 C 46.027351 10.922133 42.775773 9.1535232 39.3125 8.9609375 C 39.023514 8.9448675 38.732693 8.9390802 38.441406 8.9453125 z M 38.490234 10.945312 C 38.729155 10.940012 38.968182 10.944049 39.205078 10.957031 C 42.067152 11.11388 44.747809 12.572345 46.4375 15.009766 A 1.0001 1.0001 0 0 0 46.451172 15.029297 C 47.816263 16.903179 48.331459 19.252075 47.947266 21.580078 C 47.898546 21.797307 47.838143 21.988554 47.785156 22.183594 C 46.338127 21.197902 44.784453 20.417687 43.117188 19.873047 L 43.087891 20.15625 C 43.096191 20.040138 43.00173 19.942017 43 19.826172 C 42.93662 19.805942 42.880084 19.771543 42.816406 19.751953 L 42.994141 19.804688 C 42.978051 19.020059 42.838692 18.229894 42.398438 17.568359 A 1.0001 1.0001 0 0 0 42.386719 17.550781 C 41.385965 16.112361 39.594336 15.474988 37.916016 15.910156 A 1.0001 1.0001 0 0 0 37.849609 15.929688 C 37.564591 16.025028 37.213478 16.131127 36.837891 16.357422 A 1.0001 1.0001 0 0 0 36.816406 16.371094 L 23.705078 24.744141 A 1.0001 1.0001 0 0 0 23.701172 24.746094 C 22.827119 25.308358 22.20732 26.1952 22.015625 27.220703 C 21.819531 28.269736 22.071395 29.331748 22.65625 30.175781 A 1.0001 1.0001 0 0 0 22.65625 30.177734 C 23.657004 31.616155 25.448633 32.253528 27.126953 31.818359 A 1.0001 1.0001 0 0 0 27.193359 31.798828 C 27.478378 31.703488 27.829491 31.597389 28.205078 31.371094 A 1.0001 1.0001 0 0 0 28.226562 31.357422 L 33.25 28.152344 A 1.0001 1.0001 0 0 0 33.255859 28.148438 C 33.962176 27.69146 34.776461 27.345884 35.65625 27.080078 C 39.50968 26.089965 43.51733 27.599666 45.767578 30.845703 A 1.0001 1.0001 0 0 0 45.78125 30.863281 C 47.147409 32.741639 47.665109 35.094979 47.279297 37.425781 C 46.89898 39.621207 45.528496 41.637076 43.621094 42.824219 A 1.0001 1.0001 0 0 0 43.613281 42.830078 L 30.453125 51.207031 A 1.0001 1.0001 0 0 0 30.447266 51.210938 C 29.740949 51.667915 28.926664 52.013491 28.046875 52.279297 C 24.193445 53.26941 20.185795 51.759709 17.935547 48.513672 A 1.0001 1.0001 0 0 0 17.921875 48.494141 C 16.55598 46.616147 16.037814 44.265251 16.423828 41.935547 C 16.467538 41.740716 16.513688 41.542717 16.558594 41.351562 C 18.000103 42.330813 19.547326 43.108227 21.207031 43.650391 L 21.236328 43.367188 C 21.228028 43.483381 21.322479 43.581339 21.324219 43.697266 C 21.387579 43.717496 21.444151 43.751894 21.507812 43.771484 L 21.330078 43.71875 C 21.346218 44.503287 21.485576 45.291664 21.925781 45.953125 A 1.0001 1.0001 0 0 0 21.9375 45.970703 C 22.930472 47.397939 24.707418 48.101149 26.408203 47.660156 A 1.0001 1.0001 0 0 0 26.474609 47.640625 C 26.759628 47.545285 27.110741 47.439186 27.486328 47.212891 A 1.0001 1.0001 0 0 0 27.507812 47.199219 L 40.619141 38.826172 A 1.0001 1.0001 0 0 0 40.621094 38.824219 C 41.495147 38.261955 42.116898 37.375112 42.308594 36.349609 C 42.504688 35.300576 42.252824 34.238565 41.667969 33.394531 A 1.0001 1.0001 0 0 0 41.666016 33.392578 C 40.665495 31.954492 38.875465 31.316816 37.197266 31.751953 A 1.0001 1.0001 0 0 0 37.130859 31.771484 C 36.845841 31.866824 36.494728 31.972924 36.119141 32.199219 A 1.0001 1.0001 0 0 0 36.097656 32.212891 L 31.074219 35.417969 A 1.0001 1.0001 0 0 0 31.068359 35.421875 C 30.355219 35.883267 29.547375 36.225197 28.689453 36.439453 A 1.0001 1.0001 0 0 0 28.681641 36.441406 C 24.824002 37.43865 20.809562 35.925675 18.556641 32.675781 A 1.0001 1.0001 0 0 0 18.552734 32.669922 C 17.219826 30.777965 16.663301 28.418975 17.091797 26.107422 A 1.0001 1.0001 0 0 0 17.09375 26.095703 C 17.474067 23.900277 18.844551 21.884408 20.751953 20.697266 A 1.0001 1.0001 0 0 0 20.759766 20.691406 L 33.917969 12.318359 A 1.0001 1.0001 0 0 0 33.925781 12.314453 C 34.633751 11.856406 35.449868 11.510186 36.332031 11.244141 C 37.050552 11.059997 37.773474 10.961215 38.490234 10.945312 z M 8.9960938 11.279297 C 8.8669531 11.302609 8.7383438 11.351734 8.6210938 11.427734 C 8.1510938 11.731734 8.0144531 12.354359 8.3144531 12.818359 L 9.4023438 14.496094 C 9.7023438 14.960094 10.325922 15.091109 10.794922 14.787109 C 11.264922 14.483109 11.401563 13.860484 11.101562 13.396484 L 10.015625 11.71875 C 9.790625 11.37075 9.3835156 11.209359 8.9960938 11.279297 z M 53.589844 49.078125 C 53.460703 49.101438 53.334047 49.150562 53.216797 49.226562 C 52.746797 49.530563 52.608203 50.153188 52.908203 50.617188 L 53.996094 52.296875 C 54.296094 52.760875 54.919672 52.889938 55.388672 52.585938 C 55.857672 52.281938 55.994312 51.659312 55.695312 51.195312 L 54.609375 49.517578 C 54.384375 49.169578 53.977266 49.008187 53.589844 49.078125 z M 49.339844 51.828125 C 49.210703 51.851438 49.084047 51.900562 48.966797 51.976562 C 48.496797 52.280563 48.358203 52.903188 48.658203 53.367188 L 49.746094 55.046875 C 50.046094 55.510875 50.669672 55.639938 51.138672 55.335938 C 51.607672 55.031938 51.744312 54.409312 51.445312 53.945312 L 50.359375 52.267578 C 50.134375 51.919578 49.727266 51.758187 49.339844 51.828125 z M 45.089844 54.578125 C 44.960703 54.601438 44.834047 54.650562 44.716797 54.726562 C 44.246797 55.030563 44.108203 55.653188 44.408203 56.117188 L 45.496094 57.796875 C 45.796094 58.260875 46.419672 58.389938 46.888672 58.085938 C 47.357672 57.781938 47.494312 57.159312 47.195312 56.695312 L 46.109375 55.017578 C 45.884375 54.669578 45.477266 54.508187 45.089844 54.578125 z M 40.839844 57.328125 C 40.710703 57.351438 40.584047 57.400562 40.466797 57.476562 C 39.996797 57.780563 39.858203 58.403188 40.158203 58.867188 L 41.246094 60.546875 C 41.546094 61.010875 42.169672 61.139938 42.638672 60.835938 C 43.107672 60.531938 43.244312 59.909312 42.945312 59.445312 L 41.859375 57.767578 C 41.634375 57.419578 41.227266 57.258187 40.839844 57.328125 z"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"x","0px"),o(t,"y","0px"),o(t,"width","24"),o(t,"height","24"),o(t,"viewBox","0 0 64 64")},m(r,l){y(r,t,l),s(t,n)},p:m,i:m,o:m,d(r){r&&w(t)}}}class Q0 extends M{constructor(t){super(),k(this,t,null,J0,A,{})}}function X0(e){let t,n,r,l,c,h;return{c(){t=j("svg"),n=j("g"),r=j("g"),l=j("path"),c=j("path"),h=j("path"),n0(l,"fill","#030104"),o(l,"d",`M13.043,6.367c-0.237,0-0.398,0.022-0.483,0.047v1.523c0.101,0.022,0.223,0.03,0.391,0.03
			c0.621,0,1.004-0.313,1.004-0.842C13.954,6.651,13.625,6.367,13.043,6.367z`),n0(c,"fill","#030104"),o(c,"d",`M15.14,0H1.033C0.463,0,0,0.462,0,1.032v14.108c0,0.568,0.462,1.031,1.033,1.031H15.14
			c0.57,0,1.032-0.463,1.032-1.031V1.032C16.172,0.462,15.71,0,15.14,0z M4.904,8.32C4.506,8.695,3.916,8.863,3.227,8.863
			c-0.153,0-0.291-0.008-0.398-0.023v1.846H1.673V5.594c0.36-0.061,0.865-0.107,1.578-0.107c0.719,0,1.233,0.139,1.577,0.414
			C5.158,6.162,5.38,6.59,5.38,7.095S5.211,8.029,4.904,8.32z M10.382,10.686H9.218v-2.16H7.297v2.16H6.125V5.526h1.172v1.983h1.921
			V5.526h1.164C10.382,5.526,10.382,10.686,10.382,10.686z M14.635,8.32c-0.397,0.375-0.987,0.543-1.677,0.543
			c-0.152,0-0.291-0.008-0.398-0.023v1.846h-1.155V5.594c0.359-0.061,0.864-0.107,1.577-0.107c0.72,0,1.232,0.139,1.577,0.414
			c0.33,0.261,0.552,0.689,0.552,1.194C15.11,7.6,14.942,8.029,14.635,8.32z`),n0(h,"fill","#030104"),o(h,"d",`M3.312,6.367c-0.238,0-0.398,0.022-0.483,0.047v1.523c0.1,0.022,0.222,0.03,0.391,0.03
			c0.62,0,1.003-0.313,1.003-0.842C4.223,6.651,3.894,6.367,3.312,6.367z`),o(t,"height","24"),o(t,"width","24"),o(t,"version","1.1"),o(t,"id","Capa_1"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(t,"viewBox","0 0 16.172 16.172"),o(t,"xml:space","preserve")},m(u,f){y(u,t,f),s(t,n),s(n,r),s(r,l),s(r,c),s(r,h)},p:m,i:m,o:m,d(u){u&&w(t)}}}class t1 extends M{constructor(t){super(),k(this,t,null,X0,A,{})}}function e1(e){let t,n,r;return{c(){t=j("svg"),n=j("g"),r=j("path"),o(r,"d","M255.855641,59.619717 C255.950565,59.9710596 256,60.3333149 256,60.6972536 L256,117.265345 C256,118.743206 255.209409,120.108149 253.927418,120.843385 L206.448786,148.178786 L206.448786,202.359798 C206.448786,203.834322 205.665123,205.195421 204.386515,205.937838 L105.27893,262.990563 C105.05208,263.119455 104.804608,263.201946 104.557135,263.289593 C104.464333,263.320527 104.376687,263.377239 104.278729,263.403017 C103.585929,263.58546 102.857701,263.58546 102.164901,263.403017 C102.051476,263.372083 101.948363,263.310215 101.840093,263.26897 C101.613244,263.186479 101.376082,263.1143 101.159544,262.990563 L2.07258227,205.937838 C0.7913718,205.201819 0,203.837372 0,202.359798 L0,32.6555248 C0,32.2843161 0.0515567729,31.9234187 0.144358964,31.5728326 C0.175293028,31.454252 0.24747251,31.3459828 0.288717928,31.2274022 C0.366053087,31.0108638 0.438232569,30.7891697 0.55165747,30.5880982 C0.628992629,30.4540506 0.742417529,30.3457814 0.83521972,30.2220451 C0.953800298,30.0570635 1.06206952,29.8869261 1.20127281,29.7425672 C1.31985339,29.6239866 1.4745237,29.5363401 1.60857131,29.4332265 C1.75808595,29.3094903 1.89213356,29.1754427 2.06227091,29.0774848 L2.06742659,29.0774848 L51.6134853,0.551122364 C52.8901903,-0.183535768 54.4613221,-0.183535768 55.7380271,0.551122364 L105.284086,29.0774848 L105.294397,29.0774848 C105.459379,29.1805983 105.598582,29.3094903 105.748097,29.4280708 C105.882144,29.5311844 106.031659,29.6239866 106.15024,29.7374115 C106.294599,29.8869261 106.397712,30.0570635 106.521448,30.2220451 C106.609095,30.3457814 106.727676,30.4540506 106.799855,30.5880982 C106.918436,30.7943253 106.985459,31.0108638 107.06795,31.2274022 C107.109196,31.3459828 107.181375,31.454252 107.212309,31.5779883 C107.307234,31.9293308 107.355765,32.2915861 107.356668,32.6555248 L107.356668,138.651094 L148.643332,114.878266 L148.643332,60.6920979 C148.643332,60.3312005 148.694889,59.9651474 148.787691,59.619717 C148.823781,59.4959808 148.890804,59.3877116 148.93205,59.269131 C149.014541,59.0525925 149.08672,58.8308984 149.200145,58.629827 C149.27748,58.4957794 149.390905,58.3875102 149.478552,58.2637739 C149.602288,58.0987922 149.705401,57.9286549 149.84976,57.7842959 C149.968341,57.6657153 150.117856,57.5780688 150.251903,57.4749553 C150.406573,57.351219 150.540621,57.2171714 150.705603,57.1192136 L150.710758,57.1192136 L200.261973,28.5928511 C201.538395,27.8571345 203.110093,27.8571345 204.386515,28.5928511 L253.932573,57.1192136 C254.107866,57.2223271 254.241914,57.351219 254.396584,57.4697996 C254.525476,57.5729132 254.674991,57.6657153 254.793572,57.7791402 C254.93793,57.9286549 255.041044,58.0987922 255.16478,58.2637739 C255.257582,58.3875102 255.371007,58.4957794 255.443187,58.629827 C255.561767,58.8308984 255.628791,59.0525925 255.711282,59.269131 C255.757683,59.3877116 255.824707,59.4959808 255.855641,59.619717 Z M247.740605,114.878266 L247.740605,67.8378666 L230.402062,77.8192579 L206.448786,91.6106946 L206.448786,138.651094 L247.745761,114.878266 L247.740605,114.878266 Z M198.194546,199.97272 L198.194546,152.901386 L174.633101,166.357704 L107.351512,204.757188 L107.351512,252.27191 L198.194546,199.97272 Z M8.25939501,39.7961379 L8.25939501,199.97272 L99.0921175,252.266755 L99.0921175,204.762344 L51.6392637,177.906421 L51.6237967,177.89611 L51.603174,177.885798 C51.443348,177.792996 51.3093004,177.658949 51.1597857,177.545524 C51.0308938,177.44241 50.8813791,177.359919 50.7679542,177.246494 L50.7576429,177.231027 C50.6235953,177.102135 50.5307931,176.942309 50.4173682,176.79795 C50.3142546,176.658747 50.1905184,176.540167 50.1080276,176.395808 L50.1028719,176.380341 C50.0100697,176.22567 49.9533572,176.040066 49.8863334,175.864773 C49.8193096,175.710103 49.7316631,175.565744 49.6904177,175.400762 L49.6904177,175.395606 C49.6388609,175.19969 49.6285496,174.993463 49.6079269,174.792392 C49.5873041,174.637722 49.5460587,174.483051 49.5460587,174.328381 L49.5460587,174.31807 L49.5460587,63.5689658 L25.5979377,49.7723734 L8.25939501,39.8012935 L8.25939501,39.7961379 Z M53.6809119,8.89300821 L12.3994039,32.6555248 L53.6706006,56.4180414 L94.9469529,32.6503692 L53.6706006,8.89300821 L53.6809119,8.89300821 Z M75.1491521,157.19091 L99.0972731,143.404629 L99.0972731,39.7961379 L81.7587304,49.7775291 L57.8054537,63.5689658 L57.8054537,167.177457 L75.1491521,157.19091 Z M202.324244,36.934737 L161.047891,60.6972536 L202.324244,84.4597702 L243.59544,60.6920979 L202.324244,36.934737 Z M198.194546,91.6106946 L174.24127,77.8192579 L156.902727,67.8378666 L156.902727,114.878266 L180.850848,128.664547 L198.194546,138.651094 L198.194546,91.6106946 Z M103.216659,197.616575 L163.759778,163.052915 L194.023603,145.781396 L152.778185,122.034346 L105.289242,149.374903 L62.0073307,174.292291 L103.216659,197.616575 Z"),o(r,"fill","#000"),o(t,"width","24"),o(t,"height","24"),o(t,"viewBox","-4 0 264 264"),o(t,"version","1.1"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(t,"preserveAspectRatio","xMidYMid")},m(l,c){y(l,t,c),s(t,n),s(n,r)},p:m,i:m,o:m,d(l){l&&w(t)}}}class n1 extends M{constructor(t){super(),k(this,t,null,e1,A,{})}}const r1={name:"typescript",svgElement:q0},l1={name:"svelte",svgElement:Q0},o1={name:"php",svgElement:t1},s1={name:"laravel",svgElement:n1},a1=[{title:"Personal web",description:"This is my personal website, i was place my blogs, projects, and more. So you can check it out.",technologies:[r1,l1],webLink:"http://localhost:5173",sourceLink:"github.com"},{title:"Forstaff",description:"At Pt. Guna Teknologi Nusantara, my team and I built projects for management staff.",webLink:"http://forstaff.id",technologies:[o1,s1]}];function i1(e,t,n){const r=e.slice();return r[0]=t[n],r}function c1(e){let t,n;return t=new U0({props:{project:e[0]}}),{c(){G(t.$$.fragment)},m(r,l){B(t,r,l),n=!0},p:m,i(r){n||(E(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){S(t,r)}}}function u1(e){let t,n,r,l,c,h,u,f,i=J(a1),a=[];for(let p=0;p<i.length;p+=1)a[p]=c1(i1(e,i,p));return{c(){t=g("main"),n=g("div"),r=g("h1"),r.textContent="What have i made?",l=z(),c=g("div"),c.innerHTML=`<p class="text-xl leading-9 text-lg">As a <span class="text-xl font-bold">Web Developer</span>. I
                was made some projects. You can see below!</p>`,h=z(),u=g("div");for(let p=0;p<a.length;p+=1)a[p].c();o(r,"class","text-3xl font-bold mt-2 box-shadow"),o(c,"class","flex mt-8"),o(u,"class","w-100% grid grid-cols-2 gap-4 mt-8"),o(n,"class","w-[880px] text-gray-700 mx-auto rounded-md p-8 h-max")},m(p,d){y(p,t,d),s(t,n),s(n,r),s(n,l),s(n,c),s(n,h),s(n,u);for(let b=0;b<a.length;b+=1)a[b]&&a[b].m(u,null);f=!0},p:m,i(p){if(!f){for(let d=0;d<i.length;d+=1)E(a[d]);f=!0}},o(p){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)H(a[d]);f=!1},d(p){p&&w(t),a0(a,p)}}}class d1 extends M{constructor(t){super(),k(this,t,null,u1,A,{})}}function f1(e){let t;return{c(){t=g("main"),t.innerHTML=`<div class="w-[880px] text-gray-700 font-sans mx-auto rounded-md p-8 h-max"><div class="pl-4 py-2 border-l-8 border-gray-300 bg-gray-100 font-mono mt-2 box-shadow">// Under Development<br/> <span class="text-red-900">const</span> build =
            <span class="text-blue-900">()</span>
            =&gt; <span class="text-purple-900">createFeature</span>(&#39;contact&#39;);<br/> <span class="text-purple-900">build</span>().<span class="text-purple-900">waitForDev</span>();</div></div>`},m(n,r){y(n,t,r)},p:m,i:m,o:m,d(n){n&&w(t)}}}class p1 extends M{constructor(t){super(),k(this,t,null,f1,A,{})}}function h1(e){let t;return{c(){t=g("main"),t.innerHTML=`<div class="w-[880px] text-gray-700 font-sans mx-auto rounded-md p-8 h-max"><div class="pl-4 py-2 border-l-8 border-gray-300 bg-gray-100 font-mono mt-2 box-shadow">// Under Development<br/> <span class="text-red-900">const</span> build =
            <span class="text-blue-900">()</span>
            =&gt; <span class="text-purple-900">createFeature</span>(&#39;blog&#39;);<br/> <span class="text-purple-900">build</span>().<span class="text-purple-900">waitForDev</span>();</div></div>`},m(n,r){y(n,t,r)},p:m,i:m,o:m,d(n){n&&w(t)}}}class g1 extends M{constructor(t){super(),k(this,t,null,h1,A,{})}}K.register({path:"/",component:D0,name:"Home",iconClass:"bi bi-house"});K.register({path:"/projects",component:d1,name:"Projects",iconClass:"bi bi-card-checklist"});K.register({path:"/blog",component:g1,name:"Blogs",iconClass:"bi bi-journal"});K.register({path:"/contact",component:p1,name:"Contact",iconClass:"bi bi-envelope"});K.register({path:"/about",component:G0,name:"About",iconClass:"bi bi-file-earmark-person-fill"});function m1(e){let t,n,r,l,c,h,u;n=new O0({});var f=e[1];function i(a,p){return{props:{path:a[0]}}}return f&&(l=e0(f,i(e))),h=new F0({}),{c(){t=g("main"),G(n.$$.fragment),r=z(),l&&G(l.$$.fragment),c=z(),G(h.$$.fragment),o(t,"class","px-[50px] w-100 bg-gray-50")},m(a,p){y(a,t,p),B(n,t,null),s(t,r),l&&B(l,t,null),s(t,c),B(h,t,null),u=!0},p(a,[p]){if(f!==(f=a[1])){if(l){c0();const d=l;H(d.$$.fragment,1,0,()=>{S(d,1)}),u0()}f?(l=e0(f,i(a)),G(l.$$.fragment),E(l.$$.fragment,1),B(l,t,c)):l=null}},i(a){u||(E(n.$$.fragment,a),l&&E(l.$$.fragment,a),E(h.$$.fragment,a),u=!0)},o(a){H(n.$$.fragment,a),l&&H(l.$$.fragment,a),H(h.$$.fragment,a),u=!1},d(a){a&&w(t),S(n),l&&S(l),S(h)}}}function C1(e){const t=window.location.pathname;let n=K.render(t);return[t,n]}class b1 extends M{constructor(t){super(),k(this,t,C1,m1,A,{})}}new b1({target:document.getElementById("app")});
