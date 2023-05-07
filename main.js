$(document).ready(function(){
    $(".ico").addClass("fa-minus blink rotate");
      $("input").focus(function () {
        $(".ico").addClass("fa-search search");
        $(".ico").removeClass("fa-minus blink");
      });
      $("input").focusout(function () {
        $(".ico").addClass("fa-minus blink");
        $(".ico").removeClass("search");
      });
    });
    