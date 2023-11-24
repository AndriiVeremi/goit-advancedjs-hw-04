import{a as y,S as b,i as c}from"./assets/vendor-5f0e12e0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const w="https://pixabay.com/api/";async function g(n,t){try{return await y.get(w,{params:{key:"34554984-68074c5646cb7a45ce2c04cbc",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:t}})}catch(r){console.log(r)}}function p(n){return n.map(({webformatURL:t,largeImageURL:r,tags:i,likes:e,views:s,comments:l,downloads:m})=>`
    <a href="${r}" class="card-link js-card-link">
     <div class="photo-card">
      <img src="${t}" class="card-img"  alt="${i}" loading="lazy" />
       <div class="info">
        <p class="info-item">
            <b>Likes: ${e}</b>
        </p>
        <p class="info-item">
        <b>Views: ${s}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${l}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${m}</b>
        </p>
    </div>
</div>
</a>`).join("")}const o={form:document.querySelector("#search-form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".js-load-btn"),logo:document.querySelector(".js-pixa")};function a(n,t){n.classList.toggle("hidden",!t)}o.form.addEventListener("submit",L);o.loadBtn.addEventListener("click",v);a(o.loadBtn,!1);a(o.logo,!0);const h=new b(".js-gallery a",{captionDelay:250,captionsData:"alt"});let d="",u=1;async function L(n){n.preventDefault(),f();const t=o.input.value.trim().toLowerCase();if(!t){c.show({title:"Ops!",message:"Enter something to search!",position:"topRight"});return}if(d===t){c.show({title:"Sorry!",message:"Rewrite your requests, write something different.!",position:"topRight"}),a(o.loadBtn,!1);return}d=t;try{const r=await g(d,u),i=r.data.totalHits,e=r.data.hits;if(i===0){a(o.loadBtn,!1),a(o.logo,!0),c.show({title:"Ops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}a(o.logo,!1),o.gallery.insertAdjacentHTML("afterbegin",p(e)),c.show({title:"Hooray!",message:`We found ${i} images.`,position:"topRight"}),a(o.loadBtn,!0),h.refresh()}catch(r){console.log(r),f(),a(o.logo,!0)}}async function v(n){n.preventDefault(),u+=1;try{const t=await g(d,u),r=t.data.hits,i=t.data.totalHits;if(!(u<Math.ceil(i/40))){c.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a(o.loadBtn,!1);return}o.gallery.insertAdjacentHTML("beforeend",p(r)),S(),h.refresh()}catch(t){console.log(t),f(),a(o.logo,!0)}}function f(){o.gallery.innerHTML="",u=1}function S(){const{height:n}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
