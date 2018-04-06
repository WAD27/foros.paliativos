$(document).foundation();
//
$(document).ready(function() {

  var menuItems = [$("#inicio_menu"),$("#programa_menu"),$("#contacto_menu")]

  imgLiquid()
  form_validation()
  //
  menuItems[0].css('border-bottom','4px solid #3dbdb6')
  // secciones
  $("#inicio_menu").on('click',function() {

    $(".screens").hide()
    $("#inicio_screen").show()
    $('#fondo-degradado').css('display','inline')
    estado_boton_menu(menuItems)
    menuItems[0].css('border-bottom','4px solid #3dbdb6')

  })//inicio

  $("#registro_menu").on('click',function() {

    window.open("https://docs.google.com/forms/d/17hmdcY0_RC_Liqv8o5-7kXNlnXTScvdkr_8D2oxL234/viewform?ts=5aa73ce9");

  })//registro_menu

  $("#programa_menu").on('click',function(){

    $(".screens").hide()
    $("#programa").show()
    estado_boton_menu(menuItems)
    $('#fondo-degradado').css('display','inline')
    menuItems[1].css('border-bottom','4px solid #3dbdb6')

  })//programa_menu

  $("#contacto_menu").on('click',function(){

    $(".screens").hide()
    $("#contacto_screen").show()
    $('#fondo-degradado').css('display','none')
    estado_boton_menu(menuItems)
    menuItems[2].css('border-bottom','4px solid #3dbdb6')

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
