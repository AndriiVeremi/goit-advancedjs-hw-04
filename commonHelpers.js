import{a as g,S as h,i as l}from"./assets/vendor-5f0e12e0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/";async function p(a,o){try{return await g.get(y,{params:{key:"34554984-68074c5646cb7a45ce2c04cbc",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:o}})}catch(r){console.log(r)}}function f(a){return a.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:m})=>`
    <a href="${r}" class="card-link js-card-link">
     <div class="photo-card">
      <img src="${o}" class="card-img"  alt="${n}" loading="lazy" />
       <div class="info">
        <p class="info-item">
            <b>Likes: ${e}</b>
        </p>
        <p class="info-item">
        <b>Views: ${t}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${i}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${m}</b>
        </p>
    </div>
</div>
</a>`).join("")}const s={form:document.querySelector("#search-form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".js-load-btn")};s.form.addEventListener("submit",L);s.loadBtn.addEventListener("click",v);const b=new h(".js-gallery a",{captionDelay:250,captionsData:"alt"});let c="",u=1;async function L(a){a.preventDefault(),d();const o=s.input.value.trim().toLowerCase();if(!o){l.show({title:"Ops!",message:"Enter something to search!",position:"topRight"});return}if(c===o){l.show({title:"Ops!",message:"Enter something to search!",position:"topRight"});return}c=o;try{const r=await p(c,u),n=r.data.totalHits,e=r.data.hits;if(n===0){l.show({title:"Ops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}s.gallery.insertAdjacentHTML("afterbegin",f(e)),l.show({title:"Hey",message:`Hooray! We found ${n} images.`,position:"topRight"}),b.refresh()}catch{d()}}async function v(a){a.preventDefault(),u+=1;const r=(await p(c,u)).data.hits;s.gallery.insertAdjacentHTML("beforeend",f(r))}function d(){s.gallery.innerHTML="",c="",u=1}
//# sourceMappingURL=commonHelpers.js.map
