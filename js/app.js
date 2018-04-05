$(document).foundation();
//
$(document).ready(function() {

  imgLiquid()

  // secciones
  $("#inicio_menu").on('click',function() {

    $(".screens").hide()
    // $(".screens").on('hide')
    $("#inicio_screen").show()

  })//inicio

  $("#registro_menu").on('click',function() {

    window.open("https://docs.google.com/forms/d/17hmdcY0_RC_Liqv8o5-7kXNlnXTScvdkr_8D2oxL234/viewform?ts=5aa73ce9");

  })//registro_menu

  $("#programa_menu").on('click',function(){

    $(".screens").hide()
    $("#programa").show()

  })//programa_menu

  $("#contacto_menu").on('click',function(){

    $(".screens").hide()
    $("#contacto_screen").show()

  })//contacto_menu

})//ready

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
