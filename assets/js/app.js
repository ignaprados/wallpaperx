// When the user scrolls the page, execute myFunction
window.onscroll = function(){

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
  distance: '30px',
  duration: 1800,
  reset: false
});

/* = SCROLL IMG = */
sr.reveal('.foto',{scale: 0.90, });


/*========== BUTTON HOVER APEARS ===========*/
$(document).ready(function()
  {
    $('.img-container').hover(
      function(){
        $(this).children("a").addClass("hide"); //Add an active class to the anchor
      },
      function() {
        $(this).children("a").removeClass("hide"); //Remove an active class to the anchor
      }
  )
});