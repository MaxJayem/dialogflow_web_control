function resizeView(){var e=window.innerHeight;700<e&&(e=700);var i=(e-=10)-$(".agent").outerHeight(!0)-$("#responseWrapper").outerHeight(!0);$(".smartphone").height(e),$(".screen").height(i)}resizeView(),window.onload=resizeView(),window.resize=resizeView(),window.addEventListener("orientationchange",function(){resizeView()});