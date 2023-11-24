import{a as h,S as y,i as u}from"./assets/vendor-5f0e12e0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const b="https://pixabay.com/api/";async function p(n,t){try{return await h.get(b,{params:{key:"34554984-68074c5646cb7a45ce2c04cbc",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:t}})}catch(r){console.log(r)}}function m(n){return n.map(({webformatURL:t,largeImageURL:r,tags:s,likes:e,views:o,comments:i,downloads:g})=>`
    <a href="${r}" class="card-link js-card-link">
     <div class="photo-card">
      <img src="${t}" class="card-img"  alt="${s}" loading="lazy" />
       <div class="info">
        <p class="info-item">
            <b>Likes: ${e}</b>
        </p>
        <p class="info-item">
        <b>Views: ${o}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${i}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${g}</b>
        </p>
    </div>
</div>
</a>`).join("")}const a={form:document.querySelector("#search-form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".js-load-btn"),logo:document.querySelector(".js-pixa")};a.form.addEventListener("submit",w);a.loadBtn.addEventListener("click",v);l(a.loadBtn,!1);l(a.logo,!0);function l(n,t){n.classList.toggle("hidden",!t)}const L=new y(".js-gallery a",{captionDelay:250,captionsData:"alt"});let c="",d=1;async function w(n){n.preventDefault(),f();const t=a.input.value.trim().toLowerCase();if(!t){u.show({title:"Ops!",message:"Enter something to search!",position:"topRight"});return}if(c===t){u.show({title:"Ops!",message:"Enter something to search!",position:"topRight"});return}c=t;try{const r=await p(c,d),s=r.data.totalHits,e=r.data.hits;if(s===0){u.show({title:"Ops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}l(a.logo,!1),a.gallery.insertAdjacentHTML("afterbegin",m(e)),u.show({title:"Hey",message:`Hooray! We found ${s} images.`,position:"topRight"}),l(a.loadBtn,!0),L.refresh()}catch{f(),l(a.loadBtn,!1)}}async function v(n){n.preventDefault(),d+=1;const r=(await p(c,d)).data.hits;a.gallery.insertAdjacentHTML("beforeend",m(r))}function f(){a.gallery.innerHTML="",c="",d=1}
//# sourceMappingURL=commonHelpers.js.map
