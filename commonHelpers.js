import{a as y,S as b,i as c}from"./assets/vendor-5f0e12e0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const w="https://pixabay.com/api/";async function p(n,t){try{return await y.get(w,{params:{key:"34554984-68074c5646cb7a45ce2c04cbc",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:t}})}catch(o){console.log(o)}}function g(n){return n.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:l,downloads:m})=>`
    <a href="${o}" class="card-link js-card-link">
     <div class="photo-card">
      <img src="${t}" class="card-img"  alt="${a}" loading="lazy" />
       <div class="info">
        <p class="info-item">
            <b>Likes: ${e}</b>
        </p>
        <p class="info-item">
        <b>Views: ${r}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${l}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${m}</b>
        </p>
    </div>
</div>
</a>`).join("")}const s={form:document.querySelector("#search-form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".js-load-btn"),logo:document.querySelector(".js-pixa")};function i(n,t){n.classList.toggle("hidden",!t)}s.form.addEventListener("submit",L);s.loadBtn.addEventListener("click",v);i(s.loadBtn,!1);i(s.logo,!0);const h=new b(".js-gallery a",{captionDelay:250,captionsData:"alt"});let u="",d=1;async function L(n){n.preventDefault(),f();const t=s.input.value.trim().toLowerCase();if(!t){c.show({title:"Ops!",message:"Enter something to search!",position:"topRight"});return}if(u===t){c.show({title:"Sorry!",message:"Rewrite your requests, write something different.!",position:"topRight"});return}u=t;try{const o=await p(u,d),a=o.data.totalHits,e=o.data.hits;if(a===0){c.show({title:"Ops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}i(s.logo,!1),s.gallery.insertAdjacentHTML("afterbegin",g(e)),c.show({title:"Hooray!",message:`We found ${a} images.`,position:"topRight"}),i(s.loadBtn,!0),h.refresh()}catch(o){console.log(o),f(),i(s.logo,!0)}}async function v(n){n.preventDefault(),d+=1;try{const t=await p(u,d),o=t.data.hits,a=t.data.totalHits;if(!(d<Math.ceil(a/40))){c.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),i(s.loadBtn,!1);return}s.gallery.insertAdjacentHTML("beforeend",g(o)),S(),h.refresh()}catch(t){console.log(t),f(),i(s.logo,!0)}}function f(){s.gallery.innerHTML="",u="",d=1}function S(){const{height:n}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
