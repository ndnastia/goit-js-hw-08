const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){console.log("played the video!")}));const o=function(e){const t=Number(e);localStorage.setItem("videoplayer-current-time",t)};t.on("play",o),t.on("timeupdate",throttle(o,1e3));const n=Number(localStorage.getItem("videoplayer-current-time"));t.getVideoTitle().then((function(e){console.log("title:",e)})),t.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.f8d50725.js.map
