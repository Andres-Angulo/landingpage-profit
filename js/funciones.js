// Funcion para el menu responsive
$("#menu").click(function () {
  $("#contenedormenu").toggleClass("abrirmenu");
});

// Funcion para desplazamiento de los vinculos
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000
  ); 
  $("#contenedormenu").toggleClass("abrirmenu");
});

$(document).ready(function () {
  $("#flecha").click(function () {
    $("html,body").animate(
      {
    scrollTop: "0px",
  },
  1000
  );
});
});

$(document).ready(function(){
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });
});

  var abrirmodal= document.getElementById("abrirmodal");
  var abrirmodal2= document.getElementById("abrirmodal2");
  var abriranuncio= document.getElementById("abriranuncio");
  var contenedormodal= document.getElementById("modal");
  var contenedormodalanuncio= document.getElementById("modalanuncio");
  var cerrar= document.getElementById("cerrarmodal");
  var cerraranuncio= document.getElementById("cerraranuncio");

  abrirmodal.onclick= function(){
    contenedormodal.style.display="block"; 
  };
  abrirmodal2.onclick= function(){
    contenedormodal.style.display="block"; 
  };
  cerrar.onclick= function(){
    contenedormodal.style.display="none";
  };
  window.onclick= function(event){
      if (event.target == contenedormodal) {
        contenedormodal.style.display= "none";
      }
    };

    abriranuncio.onclick= function(){
      contenedormodalanuncio.style.display="block"; 
    };
    cerraranuncio.onclick= function(){
      contenedormodalanuncio.style.display="none";
    };
    window.onclick= function(event){
        if (event.target == contenedormodalanuncio) {
          contenedormodalanuncio.style.display= "none";
        }
      };