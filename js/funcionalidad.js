var Altura = $("nav").offset().top;
$(window).on("scroll", function () {
    if ($(window).scrollTop() > Altura) {
        $("nav").addClass("navbar-fixed-top");
       // header.classList.add("navbar-fixed-top");
      } else {
        $("nav").removeClass("navbar-fixed-top");  
       // header.classList.remove("navbar-fixed-top");
      }
});

// cambiar el focus del click en menu
$("ul li a").on("click", function () {
    $("li a").removeClass("activeCustom");
    $("ul li").removeClass("activeCustom");
    $(this).addClass("activeCustom");
});
