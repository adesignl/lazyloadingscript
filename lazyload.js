// Lazy Loading
(function() {
// check to see if native lazy loading is available
if ("loading" in HTMLImageElement.prototype) {

  var lazyEls = $('[loading=lazy]');
  lazyEls.each(function(){
    var src = $(this).data('src');
    var srcset = $(this).data('srcset');
    $(this).attr({
      "src" : src,
      "srcset" : srcset
    });
    $(this).addClass('loaded');
  });
  
} else {

  // if native lazyloading isnt available...
  // Dynamically include a lazy loading library of your choice
  // Here including vanilla-lazyload
  var script = document.createElement("script");
  script.async = true;
  script.src =
    "https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.5.0/dist/lazyload.min.js";
  window.lazyLoadOptions = {
    elements_selector: "[loading=lazy]",
    //eventually more options here
  };
  document.body.appendChild(script);
  
}
}());
