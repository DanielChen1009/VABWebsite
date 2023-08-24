import{s as Le,h as ze,r as je,c as Ae,u as Oe,g as Re,d as Ue,i as Z,o as Pe,n as Q}from"../chunks/scheduler.c011984b.js";import{S as He,i as ke,g,h as _,j as D,f as d,l as h,a as m,z as Se,d as L,p as xe,t as H,b as Me,C as $e,s as w,r as F,c as I,u as K,k as $,v as Y,w as G,x as V,y as C,D as ee}from"../chunks/index.9a9f48a2.js";import{a as be,M as qe}from"../chunks/Menu.b8f2ae05.js";function Ne(n){return n()}function Be(n){n.forEach(Ne)}const oe=[],we=[],ce=[],Ie=[],Te=Promise.resolve();let ye=!1;function Fe(){ye||(ye=!0,Te.then(Ge))}function Ke(){return Fe(),Te}function Ye(n){ce.push(n)}const _e=new Set;let de=0;function Ge(){do{for(;de<oe.length;){const n=oe[de];de++,Ze(n.$$)}for(oe.length=0,de=0;we.length;)we.pop()();for(let n=0;n<ce.length;n+=1){const t=ce[n];_e.has(t)||(_e.add(t),t())}ce.length=0}while(oe.length);for(;Ie.length;)Ie.pop()();ye=!1,_e.clear()}function Ze(n){if(n.fragment!==null){n.update(),Be(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Ye)}}const Je={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},B=(n,t)=>new CustomEvent(n,{detail:t});function We(n,t={}){const{root:u,rootMargin:o,threshold:e,unobserveOnEnter:i}=Object.assign(Object.assign({},Je),t);let a={x:void 0,y:void 0},r={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&n){const l=new IntersectionObserver((v,s)=>{v.forEach(c=>{a.y>c.boundingClientRect.y?r.vertical="up":r.vertical="down",a.x>c.boundingClientRect.x?r.horizontal="left":r.horizontal="right",a={y:c.boundingClientRect.y,x:c.boundingClientRect.x};const b={inView:c.isIntersecting,entry:c,scrollDirection:r,node:n,observer:s};n.dispatchEvent(B("inview_change",b)),n.dispatchEvent(B("change",b)),c.isIntersecting?(n.dispatchEvent(B("inview_enter",b)),n.dispatchEvent(B("enter",b)),i&&s.unobserve(n)):(n.dispatchEvent(B("inview_leave",b)),n.dispatchEvent(B("leave",b)))})},{root:u,rootMargin:o,threshold:e});return Ke().then(()=>{n.dispatchEvent(B("inview_init",{observer:l,node:n})),n.dispatchEvent(B("init",{observer:l,node:n}))}),l.observe(n),{destroy(){l.unobserve(n)}}}}function Ce(n){let t,u,o;const e=n[4].default,i=Ae(e,n,n[3],null);return{c(){t=g("div"),i&&i.c()},l(a){t=_(a,"DIV",{});var r=D(t);i&&i.l(r),r.forEach(d)},m(a,r){m(a,t,r),i&&i.m(t,null),o=!0},p(a,r){n=a,i&&i.p&&(!o||r&8)&&Oe(i,e,n,n[3],o?Ue(e,n[3],r,null):Re(n[3]),null)},i(a){o||(L(i,a),a&&Z(()=>{o&&(u||(u=$e(t,be,{duration:n[0],x:n[1]},!0)),u.run(1))}),o=!0)},o(a){H(i,a),a&&(u||(u=$e(t,be,{duration:n[0],x:n[1]},!1)),u.run(0)),o=!1},d(a){a&&d(t),i&&i.d(a),a&&u&&u.end()}}}function Xe(n){let t,u,o,e,i=n[2]&&Ce(n);return{c(){t=g("div"),i&&i.c(),this.h()},l(a){t=_(a,"DIV",{style:!0});var r=D(t);i&&i.l(r),r.forEach(d),this.h()},h(){h(t,"position","relative")},m(a,r){m(a,t,r),i&&i.m(t,null),u=!0,o||(e=[ze(We.call(null,t,{unobserveOnEnter:!0,rootMargin:"-30%",threshold:0,root:document})),Se(t,"inview_change",n[5])],o=!0)},p(a,[r]){a[2]?i?(i.p(a,r),r&4&&L(i,1)):(i=Ce(a),i.c(),L(i,1),i.m(t,null)):i&&(xe(),H(i,1,1,()=>{i=null}),Me())},i(a){u||(L(i),u=!0)},o(a){H(i),u=!1},d(a){a&&d(t),i&&i.d(),o=!1,je(e)}}}function Qe(n,t,u){let{$$slots:o={},$$scope:e}=t,i,{dur:a}=t,{x_trans:r}=t;const l=({detail:v})=>{u(2,i=v.inView)};return n.$$set=v=>{"dur"in v&&u(0,a=v.dur),"x_trans"in v&&u(1,r=v.x_trans),"$$scope"in v&&u(3,e=v.$$scope)},[a,r,i,e,o,l]}class X extends He{constructor(t){super(),ke(this,t,Qe,Xe,Le,{dur:0,x_trans:1})}}const Ee=""+new URL("../assets/founderimgright.d388b42c.png",import.meta.url).href,Ve=""+new URL("../assets/founderimgleft.c9b2f6d3.png",import.meta.url).href,et=""+new URL("../assets/founderimgcenter.4f3a5744.png",import.meta.url).href,tt=""+new URL("../assets/p1.a92bd782.png",import.meta.url).href,st=""+new URL("../assets/p2.312711ad.png",import.meta.url).href,nt=""+new URL("../assets/p3.8f9a8120.png",import.meta.url).href,lt=""+new URL("../assets/p4.1d43784c.png",import.meta.url).href,it=""+new URL("../assets/p5.80340758.png",import.meta.url).href,rt=""+new URL("../assets/p6.845634b2.png",import.meta.url).href;function De(n){let t,u=`<div class="imgwrapper bannersize center svelte-1slsod6"><img class="bannerimg svelte-1slsod6" src="${Ee}"/> <img class="bannerimg svelte-1slsod6" src="${Ve}"/> <img class="bannerimg svelte-1slsod6" src="${et}"/> <img class="bannerimg svelte-1slsod6" src="${Ee}"/> <img class="bannerimg svelte-1slsod6" src="${Ve}"/></div> <div class="title bannersize svelte-1slsod6">FOUNDER&#39;S STORY
        <div class="circle red center svelte-1slsod6"></div></div>`,o,e,i,a,r,l,v,s,c,b,p,E,x,te,J,ue,W,fe,M,T,ve,z,j,he,A,O,pe,R,U,me,P,S,ge,q,N,k;return T=new X({props:{dur:"1000",x_trans:"-300",$$slots:{default:[at]},$$scope:{ctx:n}}}),j=new X({props:{dur:"1000",x_trans:"300",$$slots:{default:[ot]},$$scope:{ctx:n}}}),O=new X({props:{dur:"1000",x_trans:"-300",$$slots:{default:[dt]},$$scope:{ctx:n}}}),U=new X({props:{dur:"1000",x_trans:"300",$$slots:{default:[ct]},$$scope:{ctx:n}}}),S=new X({props:{dur:"1000",x_trans:"-300",$$slots:{default:[ut]},$$scope:{ctx:n}}}),N=new X({props:{dur:"1000",x_trans:"300",$$slots:{default:[ft]},$$scope:{ctx:n}}}),{c(){t=g("div"),t.innerHTML=u,o=w(),e=g("div"),i=g("div"),a=w(),r=g("div"),l=w(),v=g("div"),s=w(),c=g("div"),b=w(),p=g("div"),E=w(),x=g("div"),te=w(),J=g("div"),ue=w(),W=g("div"),fe=w(),M=g("div"),F(T.$$.fragment),ve=w(),z=g("div"),F(j.$$.fragment),he=w(),A=g("div"),F(O.$$.fragment),pe=w(),R=g("div"),F(U.$$.fragment),me=w(),P=g("div"),F(S.$$.fragment),ge=w(),q=g("div"),F(N.$$.fragment),this.h()},l(y){t=_(y,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1f9di2m"&&(t.innerHTML=u),o=I(y),e=_(y,"DIV",{class:!0});var f=D(e);i=_(f,"DIV",{class:!0}),D(i).forEach(d),a=I(f),r=_(f,"DIV",{class:!0,style:!0}),D(r).forEach(d),l=I(f),v=_(f,"DIV",{class:!0,style:!0}),D(v).forEach(d),s=I(f),c=_(f,"DIV",{class:!0,style:!0}),D(c).forEach(d),b=I(f),p=_(f,"DIV",{class:!0,style:!0}),D(p).forEach(d),E=I(f),x=_(f,"DIV",{class:!0,style:!0}),D(x).forEach(d),te=I(f),J=_(f,"DIV",{class:!0,style:!0}),D(J).forEach(d),ue=I(f),W=_(f,"DIV",{class:!0,style:!0}),D(W).forEach(d),fe=I(f),M=_(f,"DIV",{class:!0,style:!0});var se=D(M);K(T.$$.fragment,se),se.forEach(d),ve=I(f),z=_(f,"DIV",{class:!0,style:!0});var ne=D(z);K(j.$$.fragment,ne),ne.forEach(d),he=I(f),A=_(f,"DIV",{class:!0,style:!0});var le=D(A);K(O.$$.fragment,le),le.forEach(d),pe=I(f),R=_(f,"DIV",{class:!0,style:!0});var ie=D(R);K(U.$$.fragment,ie),ie.forEach(d),me=I(f),P=_(f,"DIV",{class:!0,style:!0});var re=D(P);K(S.$$.fragment,re),re.forEach(d),ge=I(f),q=_(f,"DIV",{class:!0,style:!0});var ae=D(q);K(N.$$.fragment,ae),ae.forEach(d),f.forEach(d),this.h()},h(){$(t,"class","banner bannersize svelte-1slsod6"),$(i,"class","midline center svelte-1slsod6"),$(r,"class","dot red center svelte-1slsod6"),h(r,"top","40vh"),$(v,"class","dot red center svelte-1slsod6"),h(v,"top","80vh"),$(c,"class","dot red center svelte-1slsod6"),h(c,"top","120vh"),$(p,"class","dot red center svelte-1slsod6"),h(p,"top","160vh"),$(x,"class","dot red center svelte-1slsod6"),h(x,"top","200vh"),$(J,"class","dot red center svelte-1slsod6"),h(J,"top","240vh"),$(W,"class","dot black center svelte-1slsod6"),h(W,"top","280vh"),$(M,"class","entrycontainer centerleft svelte-1slsod6"),h(M,"top",n[6]*.405-n[0]/2+"px"),$(z,"class","entrycontainer centerright svelte-1slsod6"),h(z,"top",n[6]*.805-n[1]/2+"px"),$(A,"class","entrycontainer centerleft svelte-1slsod6"),h(A,"top",document.documentElement.clientHeight*1.205-n[2]/2+"px"),$(R,"class","entrycontainer centerright svelte-1slsod6"),h(R,"top",document.documentElement.clientHeight*1.605-n[3]/2+"px"),$(P,"class","entrycontainer centerleft svelte-1slsod6"),h(P,"top",document.documentElement.clientHeight*2.005-n[4]/2+"px"),$(q,"class","entrycontainer centerright svelte-1slsod6"),h(q,"top",document.documentElement.clientHeight*2.405-n[5]/2+"px"),$(e,"class","timelinewrapper svelte-1slsod6")},m(y,f){m(y,t,f),m(y,o,f),m(y,e,f),C(e,i),C(e,a),C(e,r),C(e,l),C(e,v),C(e,s),C(e,c),C(e,b),C(e,p),C(e,E),C(e,x),C(e,te),C(e,J),C(e,ue),C(e,W),C(e,fe),C(e,M),Y(T,M,null),C(e,ve),C(e,z),Y(j,z,null),C(e,he),C(e,A),Y(O,A,null),C(e,pe),C(e,R),Y(U,R,null),C(e,me),C(e,P),Y(S,P,null),C(e,ge),C(e,q),Y(N,q,null),k=!0},p(y,f){const se={};f&16385&&(se.$$scope={dirty:f,ctx:y}),T.$set(se),(!k||f&65)&&h(M,"top",y[6]*.405-y[0]/2+"px");const ne={};f&16386&&(ne.$$scope={dirty:f,ctx:y}),j.$set(ne),(!k||f&66)&&h(z,"top",y[6]*.805-y[1]/2+"px");const le={};f&16388&&(le.$$scope={dirty:f,ctx:y}),O.$set(le),(!k||f&4)&&h(A,"top",document.documentElement.clientHeight*1.205-y[2]/2+"px");const ie={};f&16392&&(ie.$$scope={dirty:f,ctx:y}),U.$set(ie),(!k||f&8)&&h(R,"top",document.documentElement.clientHeight*1.605-y[3]/2+"px");const re={};f&16400&&(re.$$scope={dirty:f,ctx:y}),S.$set(re),(!k||f&16)&&h(P,"top",document.documentElement.clientHeight*2.005-y[4]/2+"px");const ae={};f&16416&&(ae.$$scope={dirty:f,ctx:y}),N.$set(ae),(!k||f&32)&&h(q,"top",document.documentElement.clientHeight*2.405-y[5]/2+"px")},i(y){k||(L(T.$$.fragment,y),L(j.$$.fragment,y),L(O.$$.fragment,y),L(U.$$.fragment,y),L(S.$$.fragment,y),L(N.$$.fragment,y),k=!0)},o(y){H(T.$$.fragment,y),H(j.$$.fragment,y),H(O.$$.fragment,y),H(U.$$.fragment,y),H(S.$$.fragment,y),H(N.$$.fragment,y),k=!1},d(y){y&&(d(t),d(o),d(e)),G(T),G(j),G(O),G(U),G(S),G(N)}}}function at(n){let t,u="Age 11",o,e,i=`Alan Zhang was born in 2004 in Guangzhou, China. At the young age of 11,
                he sparked an interest in making DIY kits after learning to use a soldering
                iron and glue gun.`,a,r,l,v=`<div class="timeimgwrapper svelte-1slsod6" style="justify-content: right;"><img src="${tt}" class="timelineimg svelte-1slsod6"/></div>`;return{c(){t=g("div"),t.textContent=u,o=w(),e=g("div"),e.textContent=i,r=w(),l=g("div"),l.innerHTML=v,this.h()},l(s){t=_(s,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-pf1z7v"&&(t.textContent=u),o=I(s),e=_(s,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-lto6kl"&&(e.textContent=i),r=I(s),l=_(s,"DIV",{style:!0,"data-svelte-h":!0}),V(l)!=="svelte-fnv749"&&(l.innerHTML=v),this.h()},h(){$(t,"class","age svelte-1slsod6"),$(e,"class","content svelte-1slsod6"),Z(()=>n[8].call(e)),h(l,"width","100%"),h(l,"display","flex"),h(l,"justify-content","right")},m(s,c){m(s,t,c),m(s,o,c),m(s,e,c),a=ee(e,n[8].bind(e)),m(s,r,c),m(s,l,c)},p:Q,d(s){s&&(d(t),d(o),d(e),d(r),d(l)),a()}}}function ot(n){let t,u='<div class="age svelte-1slsod6">Age 13</div>',o,e,i=`Two years later, at age 13: he assembled his first toy drone
                and GoPro to shoot into the skies. Upon being gifted a DJI Phantom 4,
                his interest in drone aviation soon became an obsession.`,a,r,l,v=`<div class="timeimgwrapper svelte-1slsod6" style="justify-content: left;"><img src="${st}" class="timelineimg svelte-1slsod6"/></div>`;return{c(){t=g("div"),t.innerHTML=u,o=w(),e=g("div"),e.textContent=i,r=w(),l=g("div"),l.innerHTML=v,this.h()},l(s){t=_(s,"DIV",{style:!0,"data-svelte-h":!0}),V(t)!=="svelte-2di1pd"&&(t.innerHTML=u),o=I(s),e=_(s,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-c6y5bq"&&(e.textContent=i),r=I(s),l=_(s,"DIV",{style:!0,"data-svelte-h":!0}),V(l)!=="svelte-1195yeq"&&(l.innerHTML=v),this.h()},h(){h(t,"width","100%"),h(t,"display","flex"),h(t,"justify-content","right"),$(e,"class","content svelte-1slsod6"),Z(()=>n[9].call(e)),h(l,"width","100%"),h(l,"display","flex"),h(l,"justify-content","left")},m(s,c){m(s,t,c),m(s,o,c),m(s,e,c),a=ee(e,n[9].bind(e)),m(s,r,c),m(s,l,c)},p:Q,d(s){s&&(d(t),d(o),d(e),d(r),d(l)),a()}}}function dt(n){let t,u="Age 14",o,e,i=`Alan built his first FPV drone a year later (14),
                and competed in the BIEA International STEM Competition for drone
                design, where he won as an International Finalist and recipient of the
                Most Creative Award.`,a,r,l,v=`<div class="timeimgwrapper svelte-1slsod6" style="justify-content: right;"><img src="${nt}" class="timelineimg svelte-1slsod6"/></div>`;return{c(){t=g("div"),t.textContent=u,o=w(),e=g("div"),e.textContent=i,r=w(),l=g("div"),l.innerHTML=v,this.h()},l(s){t=_(s,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1f2niig"&&(t.textContent=u),o=I(s),e=_(s,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-a1zvfx"&&(e.textContent=i),r=I(s),l=_(s,"DIV",{style:!0,"data-svelte-h":!0}),V(l)!=="svelte-jcqh2z"&&(l.innerHTML=v),this.h()},h(){$(t,"class","age svelte-1slsod6"),$(e,"class","content svelte-1slsod6"),Z(()=>n[10].call(e)),h(l,"width","100%"),h(l,"display","flex"),h(l,"justify-content","right")},m(s,c){m(s,t,c),m(s,o,c),m(s,e,c),a=ee(e,n[10].bind(e)),m(s,r,c),m(s,l,c)},p:Q,d(s){s&&(d(t),d(o),d(e),d(r),d(l)),a()}}}function ct(n){let t,u='<div class="age svelte-1slsod6">Age 15</div>',o,e,i=`At age 15, he co-founded “FPV Creator,” a VC-backed startup what specialized
                in designing drones, drop-shipping parts, and helping others share his own passion.
                While doing so, he quickly accumulated over 30,000 online followers on Instagram and YouTube.`,a,r,l,v=`<div class="timeimgwrapper svelte-1slsod6" style="justify-content: left;"><img class="timelineimg svelte-1slsod6" src="${lt}"/></div>`;return{c(){t=g("div"),t.innerHTML=u,o=w(),e=g("div"),e.textContent=i,r=w(),l=g("div"),l.innerHTML=v,this.h()},l(s){t=_(s,"DIV",{style:!0,"data-svelte-h":!0}),V(t)!=="svelte-1vbi2b3"&&(t.innerHTML=u),o=I(s),e=_(s,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1fd2cr3"&&(e.textContent=i),r=I(s),l=_(s,"DIV",{style:!0,"data-svelte-h":!0}),V(l)!=="svelte-uocouy"&&(l.innerHTML=v),this.h()},h(){h(t,"width","100%"),h(t,"display","flex"),h(t,"justify-content","right"),$(e,"class","content svelte-1slsod6"),Z(()=>n[11].call(e)),h(l,"width","100%"),h(l,"display","flex"),h(l,"justify-content","left")},m(s,c){m(s,t,c),m(s,o,c),m(s,e,c),a=ee(e,n[11].bind(e)),m(s,r,c),m(s,l,c)},p:Q,d(s){s&&(d(t),d(o),d(e),d(r),d(l)),a()}}}function ut(n){let t,u="Age 16",o,e,i=`During high school, Alan launched a drone club at his high school, named Project Leelyn Drone,
                fundraising over $25,000 and led the world’s first team of high school students in engineering
                a human-carrying electric aircraft.`,a,r,l,v=`<div class="timeimgwrapper svelte-1slsod6" style="justify-content: right;"><img src="${it}" class="timelineimg svelte-1slsod6"/></div>`;return{c(){t=g("div"),t.textContent=u,o=w(),e=g("div"),e.textContent=i,r=w(),l=g("div"),l.innerHTML=v,this.h()},l(s){t=_(s,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-ks9dq"&&(t.textContent=u),o=I(s),e=_(s,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1npbbra"&&(e.textContent=i),r=I(s),l=_(s,"DIV",{style:!0,"data-svelte-h":!0}),V(l)!=="svelte-38hc6l"&&(l.innerHTML=v),this.h()},h(){$(t,"class","age svelte-1slsod6"),$(e,"class","content svelte-1slsod6"),Z(()=>n[12].call(e)),h(l,"width","100%"),h(l,"display","flex"),h(l,"justify-content","right")},m(s,c){m(s,t,c),m(s,o,c),m(s,e,c),a=ee(e,n[12].bind(e)),m(s,r,c),m(s,l,c)},p:Q,d(s){s&&(d(t),d(o),d(e),d(r),d(l)),a()}}}function ft(n){let t,u='<div class="age svelte-1slsod6">Present</div>',o,e,i=`Today, Alan Zhang attends the University of California, Berkeley as a student within the Management,
                Entrepreneurship, and Technology (M.E.T) Program; he double majors in Mechanical Engineering and Business
                Administration. Apart from joining Berkeley’s Aviation Innovation Research Lab, he launched his own
                student-run VTOL organization: VTOL @ Berkeley. He’s been able to deeply discuss topics in aviation
                and eVTOL with the founders of Opener and XPeng AeroHT, both industrial leaders in the field.`,a,r,l,v=`<div class="timeimgwrapper svelte-1slsod6" style="justify-content: left;"><img src="${rt}" class="timelineimg svelte-1slsod6"/></div>`;return{c(){t=g("div"),t.innerHTML=u,o=w(),e=g("div"),e.textContent=i,r=w(),l=g("div"),l.innerHTML=v,this.h()},l(s){t=_(s,"DIV",{style:!0,"data-svelte-h":!0}),V(t)!=="svelte-u3u1en"&&(t.innerHTML=u),o=I(s),e=_(s,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-emvdva"&&(e.textContent=i),r=I(s),l=_(s,"DIV",{style:!0,"data-svelte-h":!0}),V(l)!=="svelte-1pp7oxi"&&(l.innerHTML=v),this.h()},h(){h(t,"width","100%"),h(t,"display","flex"),h(t,"justify-content","right"),$(e,"class","content svelte-1slsod6"),Z(()=>n[13].call(e)),h(l,"width","100%"),h(l,"display","flex"),h(l,"justify-content","left")},m(s,c){m(s,t,c),m(s,o,c),m(s,e,c),a=ee(e,n[13].bind(e)),m(s,r,c),m(s,l,c)},p:Q,d(s){s&&(d(t),d(o),d(e),d(r),d(l)),a()}}}function vt(n){let t,u,o,e,i,a,r,l,v,s,c,b=n[7]&&De(n);return s=new qe({props:{includeMainLogo:!1}}),{c(){t=g("link"),u=w(),o=g("link"),e=w(),i=g("link"),a=w(),r=g("link"),l=w(),b&&b.c(),v=w(),F(s.$$.fragment),this.h()},l(p){t=_(p,"LINK",{rel:!0,href:!0}),u=I(p),o=_(p,"LINK",{rel:!0,href:!0,crossorigin:!0}),e=I(p),i=_(p,"LINK",{href:!0,rel:!0}),a=I(p),r=_(p,"LINK",{href:!0,rel:!0}),l=I(p),b&&b.l(p),v=I(p),K(s.$$.fragment,p),this.h()},h(){$(t,"rel","preconnect"),$(t,"href","https://fonts.googleapis.com"),$(o,"rel","preconnect"),$(o,"href","https://fonts.gstatic.com"),$(o,"crossorigin",""),$(i,"href","https://fonts.googleapis.com/css2?family=Unica+One&display=swap"),$(i,"rel","stylesheet"),$(r,"href","https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"),$(r,"rel","stylesheet")},m(p,E){m(p,t,E),m(p,u,E),m(p,o,E),m(p,e,E),m(p,i,E),m(p,a,E),m(p,r,E),m(p,l,E),b&&b.m(p,E),m(p,v,E),Y(s,p,E),c=!0},p(p,[E]){p[7]?b?(b.p(p,E),E&128&&L(b,1)):(b=De(p),b.c(),L(b,1),b.m(v.parentNode,v)):b&&(xe(),H(b,1,1,()=>{b=null}),Me())},i(p){c||(L(b),L(s.$$.fragment,p),c=!0)},o(p){H(b),H(s.$$.fragment,p),c=!1},d(p){p&&(d(t),d(u),d(o),d(e),d(i),d(a),d(r),d(l),d(v)),b&&b.d(p),G(s,p)}}}function ht(n,t,u){let o=0,e=0,i=0,a=0,r=0,l=0,v,s;Pe(()=>{u(6,v=document.documentElement.clientHeight),u(7,s=!0),document.addEventListener("change",()=>{u(6,v=document.documentElement.clientHeight)}),document.addEventListener("click",()=>{console.log(o),console.log(e),console.log(v),console.log(v)})});function c(){o=this.clientHeight,u(0,o)}function b(){e=this.clientHeight,u(1,e)}function p(){i=this.clientHeight,u(2,i)}function E(){a=this.clientHeight,u(3,a)}function x(){r=this.clientHeight,u(4,r)}function te(){l=this.clientHeight,u(5,l)}return[o,e,i,a,r,l,v,s,c,b,p,E,x,te]}class _t extends He{constructor(t){super(),ke(this,t,ht,vt,Le,{})}}export{_t as component};