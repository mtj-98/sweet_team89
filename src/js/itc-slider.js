/**
 * @class ItcSlider
 * @version 1.0.1
 * @author https://github.com/itchief
 * @copyright Alexander Maltsev 2020 - 2023
 * @license MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 * @tutorial https://itchief.ru/javascript/slider
*/ class ItcSlider{static #a="wrapper";static #b="items";static #c="item";static #d="item-active";static #e="indicator";static #f="indicator-active";static #g="btn-prev";static #h="btn-next";static #i="btn-hide";static #j="transition-none";static #k=20;static #l=[];#m;#n;constructor(t,s={},e="itc-slider-"){this.#n={prefix:e,el:t,elWrapper:t.querySelector(`.${e}${this.constructor.#a}`),elItems:t.querySelector(`.${e}${this.constructor.#b}`),elListItem:t.querySelectorAll(`.${e}${this.constructor.#c}`),btnPrev:t.querySelector(`.${e}${this.constructor.#g}`),btnNext:t.querySelector(`.${e}${this.constructor.#h}`),btnClassHide:e+this.constructor.#i,exOrderMin:0,exOrderMax:0,exItemMin:null,exItemMax:null,exTranslateMin:0,exTranslateMax:0,direction:"next",intervalId:null,isSwiping:!1,swipeX:0,swipeY:0},this.#m={loop:!0,autoplay:!1,interval:5e3,refresh:!0,swipe:!0,...s},this.#o(),this.#p()}static getInstance(t){let s=this.#l.find(s=>s.target===t);return s?s.instance:null}static getOrCreateInstance(t,s={},e="itc-slider-"){let i="string"==typeof t?document.querySelector(t):t,a=this.getInstance(i);if(a)return a;let h=new this(i,s,e);return this.#l.push({target:i,instance:h}),h}static createInstances(){document.querySelectorAll('[data-slider="itc-slider"]').forEach(t=>{let{dataset:s}=t,e={};Object.keys(s).forEach(t=>{if("slider"===t)return;let i=s[t];i=Number.isNaN(Number(i="false"!==(i="true"===i||i)&&i))?Number(i):i,e[t]=i}),this.getOrCreateInstance(t,e)})}slideNext(){this.#n.direction="next",this.#q()}slidePrev(){this.#n.direction="prev",this.#q()}slideTo(t){this.#r(t)}reset(){this.#s()}get autoplay(){return{start:()=>{this.#m.autoplay=!0,this.#t()},stop:()=>{this.#t("stop"),this.#m.autoplay=!1}}}dispose(){this.#u();let t=this.#n.prefix+this.constructor.#j,s=this.#n.prefix+this.constructor.#d;this.#t("stop"),this.#n.elItems.classList.add(t),this.#n.elItems.style.transform="",this.#n.elListItem.forEach(t=>{t.style.transform="",t.classList.remove(s)});let e=`${this.#n.prefix}${this.constructor.#f}`;document.querySelectorAll(`.${e}`).forEach(t=>{t.classList.remove(e)}),this.#n.elItems.offsetHeight,this.#n.elItems.classList.remove(t);let i=this.constructor.#l.findIndex(t=>t.target===this.#n.el);this.constructor.#l.splice(i,1)}#v(t){if(!(t.target.closest(".itc-slider-btn")||t.target.closest(".itc-slider-indicators")))return;t.preventDefault();let s=this.#n.prefix+this.constructor.#g,e=this.#n.prefix+this.constructor.#h;if(this.#t("stop"),t.target.closest(`.${s}`)||t.target.closest(`.${e}`))this.#n.direction=t.target.closest(`.${s}`)?"prev":"next",this.#q();else if(t.target.dataset.slideTo){let i=parseInt(t.target.dataset.slideTo,10);this.#r(i)}this.#m.loop&&this.#t()}#w(){this.#t("stop")}#x(){this.#t()}#y(){this.#m.loop&&!this.#n.isBalancing&&(this.#n.isBalancing=!0,window.requestAnimationFrame(()=>{this.#z(!1)}))}#A(){this.#m.loop&&(this.#n.isBalancing=!1)}#B(a){a.preventDefault()}#C(){"hidden"===document.visibilityState?this.#t("stop"):"visible"===document.visibilityState&&this.#m.loop&&this.#t()}#D(h){this.#t("stop");let n=0===h.type.search("touch")?h.touches[0]:h;this.#n.swipeX=n.clientX,this.#n.swipeY=n.clientY,this.#n.isSwiping=!0,this.#n.isTouchMoving=!1}#E(r){if(!this.#n.isSwiping)return;let l=0===r.type.search("touch")?r.changedTouches[0]:r,o=this.#n.elWrapper.getBoundingClientRect(),c=l.clientX<o.left?o.left:l.clientX;c=c>o.right?o.right:c;let d=this.#n.swipeX-c;if(0===d){this.#n.isSwiping=!1;return}if(!this.#m.loop){let p=1===this.#n.activeItems[0]&&d<=0,u=this.#n.activeItems[this.#n.activeItems.length-1]&&d>=0;(p||u)&&(d=0)}let m=d/this.#n.width*100,I=this.#n.prefix+this.constructor.#j;if(this.#n.elItems.classList.remove(I),m>this.constructor.#k){this.#n.direction="next";let f=0;for(;f<=Math.floor(Math.abs(m)-this.constructor.#k)/100;)this.#q(),f+=1}else if(m<-this.constructor.#k){this.#n.direction="prev";let v=0;for(;v<=Math.floor(Math.abs(m)-this.constructor.#k)/100;)this.#q(),v+=1}else this.#n.direction="none",this.#q();this.#n.isSwiping=!1,this.#m.loop&&this.#t(),this.#n.isBalancing=!1}#F(g){if(!this.#n.isSwiping)return;let x=0===g.type.search("touch")?g.changedTouches[0]:g,$=this.#n.swipeX-x.clientX,E=this.#n.swipeY-x.clientY,b=this.#n.prevPosX?this.#n.prevPosX:x.clientX,T=b>x.clientX?"next":"prev";if(this.#n.prevPosX=x.clientX,!this.#n.isTouchMoving){if(Math.abs(E)>Math.abs($)||0===Math.abs($)){this.#n.isSwiping=!1;return}this.#n.isTouchMoving=!0}if(g.preventDefault(),!this.#m.loop){let y=1===this.#n.activeItems[0]&&$<=0,L=this.#n.activeItems[this.#n.activeItems.length-1]&&$>=0;(y||L)&&($/=4)}let _=this.#n.prefix+this.constructor.#j;this.#n.elItems.classList.add(_);let w=this.#n.translate-$;this.#n.elItems.style.transform=`translate3D(${w}px, 0px, 0.1px)`,this.#m.loop&&(this.#n.direction=$>0?"next":"prev",this.#n.direction=T,window.requestAnimationFrame(()=>{this.#z(!0)}))}#p(){this.#n.events={click:[this.#n.el,this.#v.bind(this),!0],mouseenter:[this.#n.el,this.#w.bind(this),!0],mouseleave:[this.#n.el,this.#x.bind(this),!0],transitionstart:[this.#n.elItems,this.#y.bind(this),this.#m.loop,],transitionend:[this.#n.elItems,this.#A.bind(this),this.#m.loop,],touchstart:[this.#n.el,this.#D.bind(this),this.#m.swipe,],mousedown:[this.#n.el,this.#D.bind(this),this.#m.swipe,],touchend:[document,this.#E.bind(this),this.#m.swipe],mouseup:[document,this.#E.bind(this),this.#m.swipe],touchmove:[this.#n.el,this.#F.bind(this),this.#m.swipe,],mousemove:[this.#n.el,this.#F.bind(this),this.#m.swipe,],dragstart:[this.#n.el,this.#B.bind(this),!0],visibilitychange:[document,this.#C.bind(this),!0]},Object.keys(this.#n.events).forEach(t=>{if(this.#n.events[t][2]){let s=this.#n.events[t][0],e=this.#n.events[t][1];s.addEventListener(t,e)}});let S=new ResizeObserver(t=>{window.requestAnimationFrame(this.#s.bind(this))});S.observe(this.#n.elWrapper)}#u(){Object.keys(this.#n.events).forEach(t=>{if(this.#n.events[t][2]){let s=this.#n.events[t][0],e=this.#n.events[t][1];s.removeEventListener(t,e)}})}#t(M){if(this.#m.autoplay){if("stop"===M){clearInterval(this.#n.intervalId),this.#n.intervalId=null;return}null===this.#n.intervalId&&(this.#n.intervalId=setInterval(()=>{this.#n.direction="next",this.#q()},this.#m.interval))}}#z(N=!1){if(!this.#n.isBalancing&&!N)return;let C=this.#n.elWrapper.getBoundingClientRect(),A=C.width/this.#n.countActiveItems/2,O=this.#n.elListItem.length;if("next"===this.#n.direction){let R=this.#n.exItemMin.getBoundingClientRect().right;if(R<C.left-A){let P=this.#n.els.find(t=>t.el===this.#n.exItemMin);P.order=this.#n.exOrderMin+O;let D=this.#n.exTranslateMin+O*this.#n.width;P.translate=D,this.#n.exItemMin.style.transform=`translate3D(${D}px, 0px, 0.1px)`,this.#G()}}else{let B=this.#n.exItemMax.getBoundingClientRect().left;if(B>C.right+A){let H=this.#n.els.find(t=>t.el===this.#n.exItemMax);H.order=this.#n.exOrderMax-O;let X=this.#n.exTranslateMax-O*this.#n.width;H.translate=X,this.#n.exItemMax.style.transform=`translate3D(${X}px, 0px, 0.1px)`,this.#G()}}N||window.requestAnimationFrame(()=>{this.#z(!1)})}#H(){let q=this.#n.prefix+this.constructor.#d;this.#n.activeItems.forEach((t,s)=>{t?this.#n.elListItem[s].classList.add(q):this.#n.elListItem[s].classList.remove(q);let e=this.#n.el.querySelectorAll(`.${this.#n.prefix}${this.constructor.#e}`);e.length&&t?e[s].classList.add(`${this.#n.prefix}${this.constructor.#f}`):e.length&&!t&&e[s].classList.remove(`${this.#n.prefix}${this.constructor.#f}`)})}#q(){if("none"===this.#n.direction){let W=this.#n.translate;this.#n.elItems.style.transform=`translate3D(${W}px, 0px, 0.1px)`;return}let V="next"===this.#n.direction?-this.#n.width:this.#n.width,k=this.#n.translate+V;if(!this.#m.loop){let F=this.#n.width*(this.#n.elListItem.length-this.#n.countActiveItems);if(k<-F||k>0)return;this.#n.btnPrev&&(this.#n.btnPrev.classList.remove(this.#n.btnClassHide),this.#n.btnNext.classList.remove(this.#n.btnClassHide)),this.#n.btnPrev&&k===-F?this.#n.btnNext.classList.add(this.#n.btnClassHide):this.#n.btnPrev&&0===k&&this.#n.btnPrev.classList.add(this.#n.btnClassHide)}"next"===this.#n.direction?this.#n.activeItems=[...this.#n.activeItems.slice(-1),...this.#n.activeItems.slice(0,-1),]:this.#n.activeItems=[...this.#n.activeItems.slice(1),...this.#n.activeItems.slice(0,1),],this.#H(),this.#n.translate=k,this.#n.elItems.style.transform=`translate3D(${k}px, 0px, 0.1px)`}#r(Y){let j=this.#n.activeItems.reduce((t,s,e)=>{let i=s?Y-e:t;return Math.abs(i)<Math.abs(t)?i:t},this.#n.activeItems.length);if(0!==j){this.#n.direction=j>0?"next":"prev";for(let z=0;z<Math.abs(j);z++)this.#q()}}#o(){this.#n.els=[],this.#n.translate=0,this.#n.activeItems=[],this.#n.isBalancing=!1;let G=parseFloat(getComputedStyle(this.#n.elItems).gap)||0;this.#n.width=this.#n.elListItem[0].getBoundingClientRect().width+G;let J=this.#n.elWrapper.getBoundingClientRect().width;if(this.#n.countActiveItems=Math.round(J/this.#n.width),this.#n.elListItem.forEach((t,s)=>{t.style.transform="",this.#n.activeItems.push(s<this.#n.countActiveItems?1:0),this.#n.els.push({el:t,index:s,order:s,translate:0})}),this.#m.loop){let K=this.#n.elListItem.length-1,Q=-(K+1)*this.#n.width;this.#n.elListItem[K].style.transform=`translate3D(${Q}px, 0px, 0.1px)`,this.#n.els[K].order=-1,this.#n.els[K].translate=Q,this.#G()}else this.#n.btnPrev&&this.#n.btnPrev.classList.add(this.#n.btnClassHide);this.#H(),this.#t()}#s(){let U=this.#n.prefix+this.constructor.#j,Z=parseFloat(getComputedStyle(this.#n.elItems).gap)||0,tt=this.#n.elListItem[0].getBoundingClientRect().width+Z,ts=this.#n.elWrapper.getBoundingClientRect().width;(tt!==this.#n.width||Math.round(ts/tt)!==this.#n.countActiveItems)&&(this.#t("stop"),this.#n.elItems.classList.add(U),this.#n.elItems.style.transform="translate3D(0px, 0px, 0.1px)",this.#o(),window.requestAnimationFrame(()=>{this.#n.elItems.classList.remove(U)}))}#G(){let te=this.#n.els.map(t=>t.el),ti=this.#n.els.map(t=>t.order);this.#n.exOrderMin=Math.min(...ti),this.#n.exOrderMax=Math.max(...ti);let ta=ti.indexOf(this.#n.exOrderMin),th=ti.indexOf(this.#n.exOrderMax);this.#n.exItemMin=te[ta],this.#n.exItemMax=te[th],this.#n.exTranslateMin=this.#n.els[ta].translate,this.#n.exTranslateMax=this.#n.els[th].translate}}ItcSlider.createInstances();