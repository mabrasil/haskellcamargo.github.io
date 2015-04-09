(function() {
  window.fixedVisible = false;
  window.fixedHeader = document.getElementById("fixed_header");
  window.fixedHeader.style.webkitTransitionDuration = "0.5s";
  document.body.onscroll = function(e) {
    if (window.scrollY >= 160) {
      // Show fixed bar
      if (!fixedVisible) {
        window.fadeIn();
        window.fixedVisible = true;
      }
    } else {
      // Hide fixed bar
      if (fixedVisible) {
        window.fadeOut();
        window.fixedVisible = false;
      }
    }
  };
})();

window.fadeOut = function() {
  window.fade(100, 0);
}

window.fadeIn = function() {
  window.fade(0, 100);
}

window.fade = function(ini, fin) {
  var alpha = ini, inc = fin >= ini ? 2 : -2;
  var timer = setInterval(function() {
    if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
      clearInterval(timer);
    }
    window.fixedHeader.style.filter = "alpha(opacity="+ alpha +")";
    window.fixedHeader.style.opacity = alpha/100;
    alpha += inc;
  }, 40);
}