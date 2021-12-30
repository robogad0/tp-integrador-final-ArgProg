$(document).ready(function(){

    $("body").hide();
    $("body").ready(function(){
        $("body").fadeIn();
    });

    $("#tablaExpLaboral").hide();

    $("#expLaboral").click(function(){
        $("#tablaExpLaboral").fadeToggle();
    });


    $("#tablaEducacion").hide();

    $("#educacion").click(function(){
        $("#tablaEducacion").fadeToggle();
    });

    $("#tareasTrabajo").hide();

    $("#plusTrabajo").click(function(){
        $("#tareasTrabajo").fadeToggle();
    });

    $(".botonLogin").mousemove(function(){
    });

    $("#skills").hide();
    $("#habTitulo").click(function(){
        $("#skills").fadeToggle();
    });

    
    














})



