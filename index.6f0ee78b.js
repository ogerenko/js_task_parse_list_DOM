var r,e,n=function(r){return+r.replace(/[$,]/g,"")};r=Array.from(document.querySelector("ul").children).sort(function(r,e){return n(e.dataset.salary)-n(r.dataset.salary)}),(e=document.querySelector("ul")).innerHTML="",r.forEach(function(r){return e.appendChild(r)});
//# sourceMappingURL=index.6f0ee78b.js.map
