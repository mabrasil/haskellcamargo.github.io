(function() {
  document.body.onscroll = function(e) {
    var fixedVisible = false;
    if (window.scrollY >= 160) {
      // Show fixed bar
      if (!fixedVisible) {
        console.log("Show");
        fixedVisible = true;
      }
    } else {
      // Hide fixed bar
      if (fixedVisible) {
        console.log("Hide");
        fixedVisible = false;
      }
    }
  };
})();