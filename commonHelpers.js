import{a as y,S as b,i as c}from"./assets/vendor-5f0e12e0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const w="https://pixabay.com/api/";async function p(s,t){try{return await y.get(w,{params:{key:"34554984-68074c5646cb7a45ce2c04cbc",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:t}})}catch(r){console.log(r)}}function g(s){return s.map(({webformatURL:t,largeImageURL:r,tags:a,likes:e,views:n,comments:l,downloads:m})=>`
    <a href="${r}" class="card-link js-card-link">
     <div class="photo-card">
      <img src="${t}" class="card-img"  alt="${a}" loading="lazy" />
       <div class="info">
        <p class="info-item">
            <b>Likes: ${e}</b>
        </p>
        <p class="info-item">
        <b>Views: ${n}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${l}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${m}</b>
        </p>
    </div>
</div>
</a>`).join("")}const o={form:document.querySelector("#search-form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".js-load-btn"),logo:document.querySelector(".js-pixa")};function i(s,t){s.classList.toggle("hidden",!t)}o.form.addEventListener("submit",L);o.loadBtn.addEventListener("click",v);i(o.loadBtn,!1);i(o.logo,!0);const h=new b(".js-gallery a",{captionDelay:250,captionsData:"alt"});let u="",d=1;async function L(s){s.preventDefault(),f();const t=o.input.value.trim().toLowerCase();if(!t){c.show({title:"Ops!",message:"Enter something to search!",position:"topRight"});return}if(u===t){c.show({title:"Ops!",message:"Enter something!",position:"topRight"});return}u=t;try{const r=await p(u,d),a=r.data.totalHits,e=r.data.hits;if(a===0){c.show({title:"Ops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}i(o.logo,!1),o.gallery.insertAdjacentHTML("afterbegin",g(e)),c.show({title:"Hey",message:`Hooray! We found ${a} images.`,position:"topRight"}),i(o.loadBtn,!0),h.refresh()}catch(r){console.log(r),f(),i(o.logo,!0),i(o.loadBtn,!1)}}async function v(s){s.preventDefault(),d+=1;try{const t=await p(u,d),r=t.data.hits,a=t.data.totalHits;if(!(d<Math.ceil(a/40))){c.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),i(o.loadBtn,!1);return}o.gallery.insertAdjacentHTML("beforeend",g(r)),S(),h.refresh()}catch(t){console.log(t),f(),i(o.logo,!0)}}function f(){o.gallery.innerHTML="",u="",d=1}function S(){const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
