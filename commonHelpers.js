import{a as f,S as d,i as c}from"./assets/vendor-5f0e12e0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/";async function g(i,o){try{return await f.get(m,{params:{key:"34554984-68074c5646cb7a45ce2c04cbc",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:o}})}catch(r){console.log(r)}}function y(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:p})=>`
    <a href="${r}" class="card-link js-card-link">
     <div class="photo-card">
      <img src="${o}" class="card-img"  alt="${s}" loading="lazy" />
       <div class="info">
        <p class="info-item">
            <b>Likes: ${e}</b>
        </p>
        <p class="info-item">
        <b>Views: ${t}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${a}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${p}</b>
        </p>
    </div>
</div>
</a>`).join("")}const n={form:document.querySelector("#search-form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery")};n.form.addEventListener("submit",b);const h=new d(".js-gallery a",{captionDelay:250,captionsData:"alt"});let l=1;async function b(i){i.preventDefault(),u();const o=n.input.value.trim().toLowerCase();if(!o){c.show({title:"Ops!",message:"Enter something to search!",position:"topRight"});return}l=1;try{const r=await g(o,l),s=r.data.totalHits,e=r.data.hits;if(s===0){c.show({title:"Ops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}n.gallery.insertAdjacentHTML("beforeend",y(e)),c.show({title:"Hey",message:`Hooray! We found ${s} images.`,position:"topRight"}),h.refresh()}catch{u()}}function u(){n.gallery.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
