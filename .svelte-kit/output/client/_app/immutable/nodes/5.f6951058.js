import{s as He,h as ze,r as je,c as Ae,u as Oe,g as Pe,d as qe,i as Z,o as Re,n as Q}from"../chunks/scheduler.c011984b.js";import{S as ke,i as xe,g,h as _,j as D,f as u,l as v,a as m,z as Se,d as H,p as Le,t as k,b as Me,C as ye,s as $,r as K,c as I,u as U,k as y,v as Y,w as G,x as V,y as C,D as ee}from"../chunks/index.9a9f48a2.js";import{a as be,M as Ne}from"../chunks/Menu.b8e7517b.js";function Be(s){return s()}function Fe(s){s.forEach(Be)}const oe=[],$e=[],ce=[],Ie=[],Te=Promise.resolve();let we=!1;function Ke(){we||(we=!0,Te.then(Ge))}function Ue(){return Ke(),Te}function Ye(s){ce.push(s)}const _e=new Set;let ue=0;function Ge(){do{for(;ue<oe.length;){const s=oe[ue];ue++,Ze(s.$$)}for(oe.length=0,ue=0;$e.length;)$e.pop()();for(let s=0;s<ce.length;s+=1){const t=ce[s];_e.has(t)||(_e.add(t),t())}ce.length=0}while(oe.length);for(;Ie.length;)Ie.pop()();we=!1,_e.clear()}function Ze(s){if(s.fragment!==null){s.update(),Fe(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(Ye)}}const Je={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},F=(s,t)=>new CustomEvent(s,{detail:t});function We(s,t={}){const{root:d,rootMargin:o,threshold:e,unobserveOnEnter:l}=Object.assign(Object.assign({},Je),t);let a={x:void 0,y:void 0},r={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&s){const i=new IntersectionObserver((h,n)=>{h.forEach(c=>{a.y>c.boundingClientRect.y?r.vertical="up":r.vertical="down",a.x>c.boundingClientRect.x?r.horizontal="left":r.horizontal="right",a={y:c.boundingClientRect.y,x:c.boundingClientRect.x};const b={inView:c.isIntersecting,entry:c,scrollDirection:r,node:s,observer:n};s.dispatchEvent(F("inview_change",b)),s.dispatchEvent(F("change",b)),c.isIntersecting?(s.dispatchEvent(F("inview_enter",b)),s.dispatchEvent(F("enter",b)),l&&n.unobserve(s)):(s.dispatchEvent(F("inview_leave",b)),s.dispatchEvent(F("leave",b)))})},{root:d,rootMargin:o,threshold:e});return Ue().then(()=>{s.dispatchEvent(F("inview_init",{observer:i,node:s})),s.dispatchEvent(F("init",{observer:i,node:s}))}),i.observe(s),{destroy(){i.unobserve(s)}}}}function Ce(s){let t,d,o;const e=s[4].default,l=Ae(e,s,s[3],null);return{c(){t=g("div"),l&&l.c()},l(a){t=_(a,"DIV",{});var r=D(t);l&&l.l(r),r.forEach(u)},m(a,r){m(a,t,r),l&&l.m(t,null),o=!0},p(a,r){s=a,l&&l.p&&(!o||r&8)&&Oe(l,e,s,s[3],o?qe(e,s[3],r,null):Pe(s[3]),null)},i(a){o||(H(l,a),a&&Z(()=>{o&&(d||(d=ye(t,be,{duration:s[0],x:s[1]},!0)),d.run(1))}),o=!0)},o(a){k(l,a),a&&(d||(d=ye(t,be,{duration:s[0],x:s[1]},!1)),d.run(0)),o=!1},d(a){a&&u(t),l&&l.d(a),a&&d&&d.end()}}}function Xe(s){let t,d,o,e,l=s[2]&&Ce(s);return{c(){t=g("div"),l&&l.c(),this.h()},l(a){t=_(a,"DIV",{style:!0});var r=D(t);l&&l.l(r),r.forEach(u),this.h()},h(){v(t,"position","relative")},m(a,r){m(a,t,r),l&&l.m(t,null),d=!0,o||(e=[ze(We.call(null,t,{unobserveOnEnter:!0,rootMargin:"-30%",threshold:0,root:document})),Se(t,"inview_change",s[5])],o=!0)},p(a,[r]){a[2]?l?(l.p(a,r),r&4&&H(l,1)):(l=Ce(a),l.c(),H(l,1),l.m(t,null)):l&&(Le(),k(l,1,1,()=>{l=null}),Me())},i(a){d||(H(l),d=!0)},o(a){k(l),d=!1},d(a){a&&u(t),l&&l.d(),o=!1,je(e)}}}function Qe(s,t,d){let{$$slots:o={},$$scope:e}=t,l,{dur:a}=t,{x_trans:r}=t;const i=({detail:h})=>{d(2,l=h.inView)};return s.$$set=h=>{"dur"in h&&d(0,a=h.dur),"x_trans"in h&&d(1,r=h.x_trans),"$$scope"in h&&d(3,e=h.$$scope)},[a,r,l,e,o,i]}class X extends ke{constructor(t){super(),xe(this,t,Qe,Xe,He,{dur:0,x_trans:1})}}const Ee="/_app/immutable/assets/founderimgright.d388b42c.png",Ve="/_app/immutable/assets/founderimgleft.c9b2f6d3.png",et="/_app/immutable/assets/founderimgcenter.4f3a5744.png",tt="/_app/immutable/assets/p1.a92bd782.jpeg",nt="/_app/immutable/assets/p2.bb1fa7a1.png",st="/_app/immutable/assets/p3.64347b72.png",it="/_app/immutable/assets/p5.03af6aa5.png",lt="/_app/immutable/assets/p6.70e03075.png",rt="/_app/immutable/assets/circle.c00d2f0c.svg";function De(s){let t,d=`<div class="imgwrapper bannersize center svelte-790uwh"><img class="bannerimg svelte-790uwh" src="${Ee}"/> <img class="bannerimg svelte-790uwh" src="${Ve}"/> <img class="bannerimg svelte-790uwh" src="${et}"/> <img class="bannerimg svelte-790uwh" src="${Ee}"/> <img class="bannerimg svelte-790uwh" src="${Ve}"/></div> <div class="title bannersize svelte-790uwh">FOUNDER&#39;S STORY
        <img class="circle top center svelte-790uwh" src="${rt}"/></div>`,o,e,l,a,r,i,h,n,c,b,p,E,L,te,J,de,W,fe,M,T,he,z,j,ve,A,O,pe,P,q,me,R,S,ge,N,B,x;return T=new X({props:{dur:"1000",x_trans:"-300",$$slots:{default:[at]},$$scope:{ctx:s}}}),j=new X({props:{dur:"1000",x_trans:"300",$$slots:{default:[ot]},$$scope:{ctx:s}}}),O=new X({props:{dur:"1000",x_trans:"-300",$$slots:{default:[ut]},$$scope:{ctx:s}}}),q=new X({props:{dur:"1000",x_trans:"300",$$slots:{default:[ct]},$$scope:{ctx:s}}}),S=new X({props:{dur:"1000",x_trans:"-300",$$slots:{default:[dt]},$$scope:{ctx:s}}}),B=new X({props:{dur:"1000",x_trans:"300",$$slots:{default:[ft]},$$scope:{ctx:s}}}),{c(){t=g("div"),t.innerHTML=d,o=$(),e=g("div"),l=g("div"),a=$(),r=g("div"),i=$(),h=g("div"),n=$(),c=g("div"),b=$(),p=g("div"),E=$(),L=g("div"),te=$(),J=g("div"),de=$(),W=g("div"),fe=$(),M=g("div"),K(T.$$.fragment),he=$(),z=g("div"),K(j.$$.fragment),ve=$(),A=g("div"),K(O.$$.fragment),pe=$(),P=g("div"),K(q.$$.fragment),me=$(),R=g("div"),K(S.$$.fragment),ge=$(),N=g("div"),K(B.$$.fragment),this.h()},l(w){t=_(w,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1ql97od"&&(t.innerHTML=d),o=I(w),e=_(w,"DIV",{class:!0});var f=D(e);l=_(f,"DIV",{class:!0}),D(l).forEach(u),a=I(f),r=_(f,"DIV",{class:!0,style:!0}),D(r).forEach(u),i=I(f),h=_(f,"DIV",{class:!0,style:!0}),D(h).forEach(u),n=I(f),c=_(f,"DIV",{class:!0,style:!0}),D(c).forEach(u),b=I(f),p=_(f,"DIV",{class:!0,style:!0}),D(p).forEach(u),E=I(f),L=_(f,"DIV",{class:!0,style:!0}),D(L).forEach(u),te=I(f),J=_(f,"DIV",{class:!0,style:!0}),D(J).forEach(u),de=I(f),W=_(f,"DIV",{class:!0,style:!0}),D(W).forEach(u),fe=I(f),M=_(f,"DIV",{class:!0,style:!0});var ne=D(M);U(T.$$.fragment,ne),ne.forEach(u),he=I(f),z=_(f,"DIV",{class:!0,style:!0});var se=D(z);U(j.$$.fragment,se),se.forEach(u),ve=I(f),A=_(f,"DIV",{class:!0,style:!0});var ie=D(A);U(O.$$.fragment,ie),ie.forEach(u),pe=I(f),P=_(f,"DIV",{class:!0,style:!0});var le=D(P);U(q.$$.fragment,le),le.forEach(u),me=I(f),R=_(f,"DIV",{class:!0,style:!0});var re=D(R);U(S.$$.fragment,re),re.forEach(u),ge=I(f),N=_(f,"DIV",{class:!0,style:!0});var ae=D(N);U(B.$$.fragment,ae),ae.forEach(u),f.forEach(u),this.h()},h(){y(t,"class","banner bannersize svelte-790uwh"),y(l,"class","midline center svelte-790uwh"),y(r,"class","dot orange center svelte-790uwh"),v(r,"top","40vh"),y(h,"class","dot orange center svelte-790uwh"),v(h,"top","80vh"),y(c,"class","dot orange center svelte-790uwh"),v(c,"top","120vh"),y(p,"class","dot orange center svelte-790uwh"),v(p,"top","160vh"),y(L,"class","dot orange center svelte-790uwh"),v(L,"top","200vh"),y(J,"class","dot orange center svelte-790uwh"),v(J,"top","240vh"),y(W,"class","dot black center svelte-790uwh"),v(W,"top","280vh"),y(M,"class","entrycontainer centerleft svelte-790uwh"),v(M,"top",s[6]*.405-s[0]/2+"px"),y(z,"class","entrycontainer centerright svelte-790uwh"),v(z,"top",s[6]*.805-s[1]/2+"px"),y(A,"class","entrycontainer centerleft svelte-790uwh"),v(A,"top",document.documentElement.clientHeight*1.205-s[2]/2+"px"),y(P,"class","entrycontainer centerright svelte-790uwh"),v(P,"top",document.documentElement.clientHeight*1.605-s[3]/2+"px"),y(R,"class","entrycontainer centerleft svelte-790uwh"),v(R,"top",document.documentElement.clientHeight*2.005-s[4]/2+"px"),y(N,"class","entrycontainer centerright svelte-790uwh"),v(N,"top",document.documentElement.clientHeight*2.405-s[5]/2+"px"),y(e,"class","timelinewrapper svelte-790uwh")},m(w,f){m(w,t,f),m(w,o,f),m(w,e,f),C(e,l),C(e,a),C(e,r),C(e,i),C(e,h),C(e,n),C(e,c),C(e,b),C(e,p),C(e,E),C(e,L),C(e,te),C(e,J),C(e,de),C(e,W),C(e,fe),C(e,M),Y(T,M,null),C(e,he),C(e,z),Y(j,z,null),C(e,ve),C(e,A),Y(O,A,null),C(e,pe),C(e,P),Y(q,P,null),C(e,me),C(e,R),Y(S,R,null),C(e,ge),C(e,N),Y(B,N,null),x=!0},p(w,f){const ne={};f&16385&&(ne.$$scope={dirty:f,ctx:w}),T.$set(ne),(!x||f&65)&&v(M,"top",w[6]*.405-w[0]/2+"px");const se={};f&16386&&(se.$$scope={dirty:f,ctx:w}),j.$set(se),(!x||f&66)&&v(z,"top",w[6]*.805-w[1]/2+"px");const ie={};f&16388&&(ie.$$scope={dirty:f,ctx:w}),O.$set(ie),(!x||f&4)&&v(A,"top",document.documentElement.clientHeight*1.205-w[2]/2+"px");const le={};f&16392&&(le.$$scope={dirty:f,ctx:w}),q.$set(le),(!x||f&8)&&v(P,"top",document.documentElement.clientHeight*1.605-w[3]/2+"px");const re={};f&16400&&(re.$$scope={dirty:f,ctx:w}),S.$set(re),(!x||f&16)&&v(R,"top",document.documentElement.clientHeight*2.005-w[4]/2+"px");const ae={};f&16416&&(ae.$$scope={dirty:f,ctx:w}),B.$set(ae),(!x||f&32)&&v(N,"top",document.documentElement.clientHeight*2.405-w[5]/2+"px")},i(w){x||(H(T.$$.fragment,w),H(j.$$.fragment,w),H(O.$$.fragment,w),H(q.$$.fragment,w),H(S.$$.fragment,w),H(B.$$.fragment,w),x=!0)},o(w){k(T.$$.fragment,w),k(j.$$.fragment,w),k(O.$$.fragment,w),k(q.$$.fragment,w),k(S.$$.fragment,w),k(B.$$.fragment,w),x=!1},d(w){w&&(u(t),u(o),u(e)),G(T),G(j),G(O),G(q),G(S),G(B)}}}function at(s){let t,d="Age 11",o,e,l=`Alan Zhang was born in 2004 in Guangzhou, China. At the young age of 11,
                he sparked an interest in making DIY kits after learning to use a soldering
                iron and glue gun.`,a,r,i,h=`<div class="timeimgwrapper svelte-790uwh" style="justify-content: right;"><img src="${tt}" class="timelineimg svelte-790uwh"/></div>`;return{c(){t=g("div"),t.textContent=d,o=$(),e=g("div"),e.textContent=l,r=$(),i=g("div"),i.innerHTML=h,this.h()},l(n){t=_(n,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-pf1z7v"&&(t.textContent=d),o=I(n),e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-lto6kl"&&(e.textContent=l),r=I(n),i=_(n,"DIV",{style:!0,"data-svelte-h":!0}),V(i)!=="svelte-fnv749"&&(i.innerHTML=h),this.h()},h(){y(t,"class","age svelte-790uwh"),y(e,"class","content svelte-790uwh"),Z(()=>s[8].call(e)),v(i,"width","100%"),v(i,"display","flex"),v(i,"justify-content","right")},m(n,c){m(n,t,c),m(n,o,c),m(n,e,c),a=ee(e,s[8].bind(e)),m(n,r,c),m(n,i,c)},p:Q,d(n){n&&(u(t),u(o),u(e),u(r),u(i)),a()}}}function ot(s){let t,d='<div class="age svelte-790uwh">Age 13</div>',o,e,l=`Two years later, at age 13: he assembled his first toy drone
                and GoPro to shoot into the skies. Upon being gifted a DJI Phantom 4,
                his interest in drone aviation soon became an obsession.`,a,r,i,h=`<div class="timeimgwrapper svelte-790uwh" style="justify-content: left;"><img src="${nt}" class="timelineimg svelte-790uwh"/></div>`;return{c(){t=g("div"),t.innerHTML=d,o=$(),e=g("div"),e.textContent=l,r=$(),i=g("div"),i.innerHTML=h,this.h()},l(n){t=_(n,"DIV",{style:!0,"data-svelte-h":!0}),V(t)!=="svelte-2di1pd"&&(t.innerHTML=d),o=I(n),e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-c6y5bq"&&(e.textContent=l),r=I(n),i=_(n,"DIV",{style:!0,"data-svelte-h":!0}),V(i)!=="svelte-1195yeq"&&(i.innerHTML=h),this.h()},h(){v(t,"width","100%"),v(t,"display","flex"),v(t,"justify-content","right"),y(e,"class","content svelte-790uwh"),Z(()=>s[9].call(e)),v(i,"width","100%"),v(i,"display","flex"),v(i,"justify-content","left")},m(n,c){m(n,t,c),m(n,o,c),m(n,e,c),a=ee(e,s[9].bind(e)),m(n,r,c),m(n,i,c)},p:Q,d(n){n&&(u(t),u(o),u(e),u(r),u(i)),a()}}}function ut(s){let t,d="Age 14",o,e,l=`Alan built his first FPV drone a year later (14),
                and competed in the BIEA International STEM Competition for drone
                design, where he won as an International Finalist and recipient of the
                Most Creative Award.`,a,r,i,h=`<div class="timeimgwrapper svelte-790uwh" style="justify-content: right;"><img src="${st}" class="timelineimg svelte-790uwh"/></div>`;return{c(){t=g("div"),t.textContent=d,o=$(),e=g("div"),e.textContent=l,r=$(),i=g("div"),i.innerHTML=h,this.h()},l(n){t=_(n,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1f2niig"&&(t.textContent=d),o=I(n),e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-a1zvfx"&&(e.textContent=l),r=I(n),i=_(n,"DIV",{style:!0,"data-svelte-h":!0}),V(i)!=="svelte-jcqh2z"&&(i.innerHTML=h),this.h()},h(){y(t,"class","age svelte-790uwh"),y(e,"class","content svelte-790uwh"),Z(()=>s[10].call(e)),v(i,"width","100%"),v(i,"display","flex"),v(i,"justify-content","right")},m(n,c){m(n,t,c),m(n,o,c),m(n,e,c),a=ee(e,s[10].bind(e)),m(n,r,c),m(n,i,c)},p:Q,d(n){n&&(u(t),u(o),u(e),u(r),u(i)),a()}}}function ct(s){let t,d='<div class="age svelte-790uwh">Age 15</div>',o,e,l=`At age 15, he co-founded “FPV Creator,” a VC-backed startup what specialized
                in designing drones, drop-shipping parts, and helping others share his own passion.
                While doing so, he quickly accumulated over 30,000 online followers on Instagram and YouTube.`,a,r,i,h='<div class="timeimgwrapper svelte-790uwh" style="justify-content: left;"><img class="timelineimg svelte-790uwh"/></div>';return{c(){t=g("div"),t.innerHTML=d,o=$(),e=g("div"),e.textContent=l,r=$(),i=g("div"),i.innerHTML=h,this.h()},l(n){t=_(n,"DIV",{style:!0,"data-svelte-h":!0}),V(t)!=="svelte-1vbi2b3"&&(t.innerHTML=d),o=I(n),e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1fd2cr3"&&(e.textContent=l),r=I(n),i=_(n,"DIV",{style:!0,"data-svelte-h":!0}),V(i)!=="svelte-rkb4x1"&&(i.innerHTML=h),this.h()},h(){v(t,"width","100%"),v(t,"display","flex"),v(t,"justify-content","right"),y(e,"class","content svelte-790uwh"),Z(()=>s[11].call(e)),v(i,"width","100%"),v(i,"display","flex"),v(i,"justify-content","left")},m(n,c){m(n,t,c),m(n,o,c),m(n,e,c),a=ee(e,s[11].bind(e)),m(n,r,c),m(n,i,c)},p:Q,d(n){n&&(u(t),u(o),u(e),u(r),u(i)),a()}}}function dt(s){let t,d="Age 16",o,e,l=`During high school, Alan launched a drone club at his high school, named Project Leelyn Drone,
                fundraising over $25,000 and led the world’s first team of high school students in engineering
                a human-carrying electric aircraft.`,a,r,i,h=`<div class="timeimgwrapper svelte-790uwh" style="justify-content: right;"><img src="${it}" class="timelineimg svelte-790uwh"/></div>`;return{c(){t=g("div"),t.textContent=d,o=$(),e=g("div"),e.textContent=l,r=$(),i=g("div"),i.innerHTML=h,this.h()},l(n){t=_(n,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-ks9dq"&&(t.textContent=d),o=I(n),e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1npbbra"&&(e.textContent=l),r=I(n),i=_(n,"DIV",{style:!0,"data-svelte-h":!0}),V(i)!=="svelte-38hc6l"&&(i.innerHTML=h),this.h()},h(){y(t,"class","age svelte-790uwh"),y(e,"class","content svelte-790uwh"),Z(()=>s[12].call(e)),v(i,"width","100%"),v(i,"display","flex"),v(i,"justify-content","right")},m(n,c){m(n,t,c),m(n,o,c),m(n,e,c),a=ee(e,s[12].bind(e)),m(n,r,c),m(n,i,c)},p:Q,d(n){n&&(u(t),u(o),u(e),u(r),u(i)),a()}}}function ft(s){let t,d='<div class="age svelte-790uwh">Present</div>',o,e,l=`Today, Alan Zhang attends the University of California, Berkeley as a student within the Management,
                Entrepreneurship, and Technology (M.E.T) Program; he double majors in Mechanical Engineering and Business
                Administration. Apart from joining Berkeley’s Aviation Innovation Research Lab, he launched his own
                student-run VTOL organization: VTOL @ Berkeley. He’s been able to deeply discuss topics in aviation
                and eVTOL with the founders of Opener and XPeng AeroHT, both industrial leaders in the field.`,a,r,i,h=`<div class="timeimgwrapper svelte-790uwh" style="justify-content: left;"><img src="${lt}" class="timelineimg svelte-790uwh"/></div>`;return{c(){t=g("div"),t.innerHTML=d,o=$(),e=g("div"),e.textContent=l,r=$(),i=g("div"),i.innerHTML=h,this.h()},l(n){t=_(n,"DIV",{style:!0,"data-svelte-h":!0}),V(t)!=="svelte-u3u1en"&&(t.innerHTML=d),o=I(n),e=_(n,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-emvdva"&&(e.textContent=l),r=I(n),i=_(n,"DIV",{style:!0,"data-svelte-h":!0}),V(i)!=="svelte-1pp7oxi"&&(i.innerHTML=h),this.h()},h(){v(t,"width","100%"),v(t,"display","flex"),v(t,"justify-content","right"),y(e,"class","content svelte-790uwh"),Z(()=>s[13].call(e)),v(i,"width","100%"),v(i,"display","flex"),v(i,"justify-content","left")},m(n,c){m(n,t,c),m(n,o,c),m(n,e,c),a=ee(e,s[13].bind(e)),m(n,r,c),m(n,i,c)},p:Q,d(n){n&&(u(t),u(o),u(e),u(r),u(i)),a()}}}function ht(s){let t,d,o,e,l,a,r,i,h,n,c,b=s[7]&&De(s);return n=new Ne({props:{includeMainLogo:!1}}),{c(){t=g("link"),d=$(),o=g("link"),e=$(),l=g("link"),a=$(),r=g("link"),i=$(),b&&b.c(),h=$(),K(n.$$.fragment),this.h()},l(p){t=_(p,"LINK",{rel:!0,href:!0}),d=I(p),o=_(p,"LINK",{rel:!0,href:!0,crossorigin:!0}),e=I(p),l=_(p,"LINK",{href:!0,rel:!0}),a=I(p),r=_(p,"LINK",{href:!0,rel:!0}),i=I(p),b&&b.l(p),h=I(p),U(n.$$.fragment,p),this.h()},h(){y(t,"rel","preconnect"),y(t,"href","https://fonts.googleapis.com"),y(o,"rel","preconnect"),y(o,"href","https://fonts.gstatic.com"),y(o,"crossorigin",""),y(l,"href","https://fonts.googleapis.com/css2?family=Unica+One&display=swap"),y(l,"rel","stylesheet"),y(r,"href","https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"),y(r,"rel","stylesheet")},m(p,E){m(p,t,E),m(p,d,E),m(p,o,E),m(p,e,E),m(p,l,E),m(p,a,E),m(p,r,E),m(p,i,E),b&&b.m(p,E),m(p,h,E),Y(n,p,E),c=!0},p(p,[E]){p[7]?b?(b.p(p,E),E&128&&H(b,1)):(b=De(p),b.c(),H(b,1),b.m(h.parentNode,h)):b&&(Le(),k(b,1,1,()=>{b=null}),Me())},i(p){c||(H(b),H(n.$$.fragment,p),c=!0)},o(p){k(b),k(n.$$.fragment,p),c=!1},d(p){p&&(u(t),u(d),u(o),u(e),u(l),u(a),u(r),u(i),u(h)),b&&b.d(p),G(n,p)}}}function vt(s,t,d){let o=0,e=0,l=0,a=0,r=0,i=0,h,n;Re(()=>{d(6,h=document.documentElement.clientHeight),d(7,n=!0),document.addEventListener("change",()=>{d(6,h=document.documentElement.clientHeight)}),document.addEventListener("click",()=>{console.log(o),console.log(e),console.log(h),console.log(h)})});function c(){o=this.clientHeight,d(0,o)}function b(){e=this.clientHeight,d(1,e)}function p(){l=this.clientHeight,d(2,l)}function E(){a=this.clientHeight,d(3,a)}function L(){r=this.clientHeight,d(4,r)}function te(){i=this.clientHeight,d(5,i)}return[o,e,l,a,r,i,h,n,c,b,p,E,L,te]}class _t extends ke{constructor(t){super(),xe(this,t,vt,ht,He,{})}}export{_t as component};
