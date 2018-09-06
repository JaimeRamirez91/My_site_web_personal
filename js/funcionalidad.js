var Altura = $("nav").offset().top;
$(window).on("scroll", function () {
    if ($(window).scrollTop() > Altura) {
        $("nav").addClass("navbar-fixed-top");
      } else {
        $("nav").removeClass("navbar-fixed-top");  

      }
});


$("ul li a").on("click", function () {
    $("li a").removeClass("activeCustom");
    $("ul li").removeClass("activeCustom");
    $(this).addClass("activeCustom");
});

//cambia tamaño de los botones al cambiar de resolucion
$(window).resize(function(){
    if ($(window).width() <= 540) {  
        $("section button").removeClass("btn  btn");
        $("section button").addClass("btn  btn-xs");
       // alert("kjk");
           
    }else{
        $("section button").removeClass("btn  btn-xs");
        $("section button").addClass("btn  btn");
    }
});

//cabia tamaño de los botones 
$(document).ready(function(){
    if ($(window).width() <= 540) {  
        $("section button").removeClass("btn  btn");
        $("section button").addClass("btn  btn-xs");
        //alert("si");
           
    }else{
        $("section button").removeClass("btn  btn-xs");
        $("section button").addClass("btn  btn");
       // alert("no");
    }

    });

    $("#lihome").on("click", function (Evento) {
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: $("#jumbotron").offset().top 
        }, 500);
    });
    $("#linosotros").on("click", function (Evento) {
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: $("#nosotros").offset().top-100
        }, 500);
    });
    $("#liservivios").on("click", function (Evento) {
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: $("#servicios").offset().top-100
        }, 500);
    });
    $("#liservivios").on("click", function (Evento) {
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: $("#servicios").offset().top-100
        }, 500);
    }); 
    $("#licontacto").on("click", function (Evento) {
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: $("#contacto").offset().top-100
        }, 500);
    });        
// ocultar collapse del menu para moviles de bootstrap en caso que quede abierto al cambiar de tamaño
$(window).resize(function(){
    if ($(window).width() <= 900) {  
        if ($('.collapse').is(':visible')) {
            $('.collapse').collapse('hide');
        }
    }
});
