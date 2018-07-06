$(document).foundation();
//
$(document).ready(function() {

  var menuItems = [$("#inicio_menu"),$("#programa_menu"),$("#contacto_menu")]
  var menuItemsMovil = [$("#inicio_menu-movil"),$("#programa_menu-movil"),$("#contacto_menu-movil")]

  imgLiquid()
  form_validation()
  menu_movil()
  //estilos default
  menuItems[0].css({'border-bottom':'4px solid #3dbdb6'},{'margin-top':'4px'})
  menuItemsMovil[0].css({'border-bottom':'4px solid #3dbdb6'},{'margin-top':'4px'})
  // secciones
  $("#inicio_menu, #inicio_menu-movil").on('click',function() {

    $(".screens").hide()
    $("#inicio_screen").show()
    $('#fondo-degradado').css('display','inline')
    estado_boton_menu(menuItems)
    estado_boton_menu(menuItemsMovil)
    menuItems[0].css('border-bottom','4px solid #3dbdb6')
    menuItemsMovil[0].css('border-bottom','4px solid #3dbdb6')

  })//inicio

  // $(".registro_menu").on('click',function() {
  // // $("#registro_menu, #registro_menu-movil").on('click',function() {
  //
  //   window.open("https://docs.google.com/forms/d/17hmdcY0_RC_Liqv8o5-7kXNlnXTScvdkr_8D2oxL234/viewform?ts=5aa73ce9&edit_requested=true")
  //
  // })//registro_menu

  $("#programa_menu, #programa_menu-movil").on('click',function(){

    $(".screens").hide()
    $("#programa").show()
    estado_boton_menu(menuItems)
    estado_boton_menu(menuItemsMovil)
    $('#fondo-degradado').css('display','inline')
    menuItems[1].css('border-bottom','4px solid #3dbdb6')
    menuItemsMovil[1].css('border-bottom','4px solid #3dbdb6')

  })//programa_menu

  $("#contacto_menu, #contacto_menu-movil").on('click',function(){

    $(".screens").hide()
    $("#contacto_screen").show()
    $('#fondo-degradado').css('display','none')
    estado_boton_menu(menuItems)
    estado_boton_menu(menuItemsMovil)
    menuItems[2].css('border-bottom','4px solid #3dbdb6')
    menuItemsMovil[2].css('border-bottom','4px solid #3dbdb6')

  })//contacto_menu

})//ready

function estado_boton_menu(menuItems) {
  $.each(menuItems,function() {
    $(this).css('border-bottom','0px')
  })
}

function imgLiquid() {

  $(".imgLiquid.imgLiquidFill").imgLiquid()

  $(".imgLiquid.imgLiquidNoFill").imgLiquid({fill:false})

  $(".imgLiquid.imgLiquidNoFillLeft").imgLiquid({
    fill:false,
    horizontalAlign:"left"
  })
  $(".imgLiquid.imgLiquidNoFillRight").imgLiquid({
    fill:false,
    horizontalAlign:"right"
  })

}

function menu_movil() {
  var menumovil = $("#menu-movil")
  // registra su posicion actual, fuera de la pantalla
  var altomenumovil = menumovil.height()
  var salemenu = {
    'transition': '0.25s',
    '-webkit-transform': 'translateY(-85px)',
    '-moz-transform': 'translateY(-85px)',
    '-ms-transform': 'translateY(-85px)',
    '-o-transform': 'translateY(-85px)',
    'transform': 'translateY(-85px)'
  }

  // click
  $('.boton-menu-movil div a.barras').on('click', function() {

    if (menumovil.offset().top > 1) {

      menumovil.css('z-index', '-1')

      setTimeout(function() {

        menumovil.css(salemenu)

      },250)

    } else {

      // entra menu
      menumovil.css({
        'transition': '0.25s',
        '-webkit-transform': 'translateX(0px)',
        '-moz-transform': 'translateX(0px)',
        '-ms-transform': 'translateX(0px)',
        '-o-transform': 'translateX(0px)',
        'transform': 'translateX(0px)'
      })

      setTimeout(function() {

        menumovil.css('z-index', '0')

      },250)

    }

  })

}

function form_validation() {

  var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  $("#formulario").submit(function() {
    var envio = false
    var correo = $('#correo')
    var mensaje = $('#mensaje')
    if(!mensaje.val()) {
      $("#mensaje_res").html('Falta ingresar tu mensaje');
      return false;
    } else if (!correo.val() || !expr.test(correo.val())) {
      $("#mensaje_res").html('Falta el campo "Correo" o un formato admitido "@" ');
      return false;
    } else {envio = true}

    if (envio === true) {
      $.post('form/response.php', {
        mensaje: mensaje.val(),
        correo: correo.val(),
        contactFormSubmitted: 'yes'
      },
      function(data) {
        $("#mensaje_res").html(data);
      })
      return false
    }
    //
  });

}
