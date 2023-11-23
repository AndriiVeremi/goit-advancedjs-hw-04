import{a as l,S as u}from"./assets/vendor-a97f8a75.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="34554984-68074c5646cb7a45ce2c04cbc",f="https://pixabay.com/api/";async function p(r){try{const o=await l.get(`${f}?key=${d}&q=${r}`,{params:{image_type:"photo",orientation:"horizontal",safesearch:"true"}});return console.log("resp",o),o}catch(o){console.log(o)}}function m(r){return r.map(({webformatURL:o,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:c})=>`
        <a href="${n}" class="card-link js-card-link">
    <div class="photo-card">
    <img src="${o}" alt="${s}" loading="lazy" />
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
            <b>Downloads: ${c}</b>
        </p>
    </div>
</div>
</a>`).join("")}const a={form:document.querySelector("#search-form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery")};a.form.addEventListener("submit",y);new u(".js-gallery a",{captionDelay:250});async function y(r){r.preventDefault(),console.log(a.input.value);const n=(await p(a.input.value)).data.hits;a.gallery.insertAdjacentHTML("beforeend",m(n))}
//# sourceMappingURL=commonHelpers.js.map
