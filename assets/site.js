// Hero photo switcher: "Another photo" cycles through places I've been.
(function () {
  var photos = [
    { src: "images/aerial/cove-2880.jpg", small: "images/aerial/cove-1200.jpg", cap: "Sayulita, Mexico", alt: "Aerial view of a rocky cove and beach in Sayulita, Mexico" },
    { src: "images/hero-2880.jpg", small: "images/hero-1600.jpg", cap: "La Jolla Shores, San Diego", alt: "Surfers and a breaking wave at La Jolla Shores, seen from above" },
    { src: "images/GreatSandDunes.jpeg", cap: "Great Sand Dunes, Colorado", alt: "Sand dunes under tall clouds with mountains behind" },
    { src: "images/IMG_011.jpeg", cap: "Arches, Utah", alt: "A long sandstone arch in Arches National Park" },
    { src: "images/aerial/night-mountain-2400.jpg", small: "images/aerial/night-mountain-1200.jpg", cap: "Banff, during a Keystone Symposia conference", alt: "A snowy mountain at night framed by pine trees, Banff" },
    { src: "images/Colorado_Morning.jpeg", cap: "Morning fog, Colorado", alt: "Morning fog filling a forested valley in Colorado" }
  ];

  function init() {
    var img = document.getElementById("ph");
    var cap = document.getElementById("cap");
    var btn = document.getElementById("next");
    if (!img || !cap || !btn) return;
    var i = 0;
    var narrow = window.matchMedia("(max-width: 900px)").matches;

    btn.addEventListener("click", function () {
      i = (i + 1) % photos.length;
      var p = photos[i];
      var url = narrow && p.small ? p.small : p.src;
      btn.disabled = true;
      img.style.opacity = 0;
      var pre = new Image();
      pre.onload = pre.onerror = function () {
        img.removeAttribute("srcset");
        img.src = url;
        img.alt = p.alt;
        cap.textContent = p.cap;
        img.style.opacity = 1;
        btn.disabled = false;
      };
      pre.src = url;
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
