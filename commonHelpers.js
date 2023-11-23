import{a as d,S as p,i as c}from"./assets/vendor-5f0e12e0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="34554984-68074c5646cb7a45ce2c04cbc",m="https://pixabay.com/api/";async function g(i,o){try{return await d.get(`${m}?key=${f}&q=${i}&page=${o}`,{params:{image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40"}})}catch(r){console.log(r)}}function y(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:u})=>`
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
            <b>Comments: ${n}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${u}</b>
        </p>
    </div>
</div>
</a>`).join("")}const a={form:document.querySelector("#search-form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery")};a.form.addEventListener("submit",L);const h=new p(".js-gallery a",{captionDelay:250});let b=1;async function L(i){i.preventDefault();const o=a.input.value.trim().toLowerCase();if(!o){l(),c.show({title:"Ops!",message:"Enter something to search!",position:"topRight"});return}try{const r=await g(o,b),s=r.data.total,e=r.data.hits;if(s===0){c.show({title:"Ops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}a.gallery.insertAdjacentHTML("beforeend",y(e)),c.show({title:"Hey",message:`Hooray! We found ${s} images.`,position:"topRight"}),h.refresh()}catch{l()}}function l(){API.resetPage(),a.gallery.innerHTML="",a.btnLoadMore.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
