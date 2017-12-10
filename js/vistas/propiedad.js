$(document).ready(function(){

    $('.datepicker').datetimepicker({
        format:'DD-MM-YYYY'
    });
    $('.timepicker').datetimepicker({
        format: 'LT'
    });

    $('#ModalSend .close-modal').click(function(e){
        window.location.reload(true);
    });

    $("#modal2").easyModal({
        closeButtonClass:".cerrarModal",
        overlayClose:false,
        onClose: function(myModal){
            $("#inputTags").tagsinput('removeAll');
            $("#comentarios").val("");
            $("#email").val("");
        }
    });
    $('.st_email').click(function(){
        $("#modal2").trigger('openModal');
        $(".bootstrap-tagsinput input").removeAttr("style");
        $(".bootstrap-tagsinput input").css("width","95%");
    })

    $("#sendingEmail").click(function(){
        enviarXCorreo();
    })

    var elt = $('#inputTags');
    elt.tagsinput({
        allowDuplicates: false
    });

    $('#inputTags').on('itemAdded', function(event) {
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(event.item) ){
            $(".bootstrap-tagsinput input").prev().removeClass("label-info");
            $(".bootstrap-tagsinput input").prev().addClass("label-danger");
            setTimeout(function(){
                $('#inputTags').tagsinput('remove', event.item);
            },1000)
        }else{
            $(".bootstrap-tagsinput input").prev().removeClass("label-danger");
            $(".bootstrap-tagsinput input").prev().addClass("label-info");
        }

    });
    /*elt.tagsinput('input').typeahead(null, {
        name: 'citynames',
        displayKey: 'name'
    }).bind('typeahead:selected', $.proxy(function (obj, datum) {
            this.tagsinput('add', datum.name);
            this.tagsinput('input').typeahead('val', '');
        }, elt));*/

    if(!($("#collapseOne").hasClass("in"))){
        $("#accordion2").css("height","0");
        $(".property-detail1").css("padding-top","0");
    }else{
        $("#accordion2").css("height","auto");
        $(".property-detail1").css("padding-top","60px");
    }

    $("#botonSol1").click(function(){
        if(!($(".formMobile").hasClass("out"))){
            $(".formMobile").fadeIn( "slow" );
            $(".formMobile").addClass("out");
        }else{
            $(".formMobile").fadeOut("slow");
            $(".formMobile").removeClass("out");

        }

    })

    $("#boton123").click(function(){
        var counter = 1;
        if(!($("#collapseOne").hasClass("in"))){
            if(counter==1){
                $("#accordion2").css("height","auto");
                $(".property-detail1").css("padding-top","60px");
            }else{
            $("#accordion2").css("height","0");
            $(".property-detail1").css("padding-top","0");
            }
        }else{

            setTimeout(function(){
                $("#accordion2").css("height","0");
                $(".property-detail1").css("padding-top","0");
            },300)

        }
    })
    if($(window).width()<980){
        $("#adjust").removeClass("span9");
        $("#adjust").addClass("span12");
    }else{
        $("#adjust").removeClass("span12");
        $("#adjust").addClass("span9");
    }
    if($(window).width()>767 && $(window).width()<979){
        $("#responsive1").removeClass("span5")
        $("#responsive1").addClass("span7");
    }else{
        $("#responsive1").removeClass("span7")
        $("#responsive1").addClass("span5");
    }


    $("#closemsg-formx").on('click',function(e){
        e.preventDefault();
        $('#contact-f-response').slideUp(1000,'easeOutCubic');
        $('#cform').fadeIn(1000,'easeOutCubic');
    });

    $("#closemsg-formx_3").on('click',function(e){
        e.preventDefault();
        $('#contact-f-response_3').slideUp(1000,'easeOutCubic');
        $("#modal2").trigger('closeModal');
        $('#formCorreo').fadeIn(1000,'easeOutCubic');
    });

    $("#closemsg-formx_3_1").on('click',function(e){
        e.preventDefault();
        $('#contact-f-response_3').slideUp(1000,'easeOutCubic');
        //$("#modal2").trigger('closeModal');
        $('#formCorreo').fadeIn(1000,'easeOutCubic');
    });

    $("#closemsg-formx1").on('click',function(e){
        e.preventDefault();
        $('#contact-f-response1').slideUp(1000,'easeOutCubic');
        $('#cform1').fadeIn(1000,'easeOutCubic');
    });

        /* Apply fancybox to multiple items */

        $("a.group").fancybox({
            'transitionIn'	:	'elastic',
            'transitionOut'	:	'elastic',
            'speedIn'		:	600,
            'speedOut'		:	200,
            'overlayShow'	:	false
        });
})

function close_alert(){
    $('#contact-f-response').hide();
    $('#cform').show();
}

function sendPropiedadContacto(){
    $('.ficha').val('Enviando...');
    $("#sendMessage1").hide();
    $('#sendMessage1_1').show();

    $('.ficha').prop( "disabled", true );
    var nombre =  $("#inputNombre").val();
    var email = $("#inputEmail").val();
    var telefono = $("#inputTelefono").val();
    var fecha = $("#inputFecha").val();
    var hora = $("#inputHora").val();
    var mensaje = $("#inputMensaje").val();
    var idPropiedad = $("#idPropiedad").val();

    if(nombre=='Nombre'){
        nombre='';
    }
    if(mensaje=='Mensaje'){
        mensaje='';
    }

    // info contacto
    setTimeout(function(){

    $.post( 'propiedades/sendContacto', {

            pnombre:nombre,
            pemail:email,
            ptelefono:telefono,
            pfecha:fecha,
            phora:hora,
            pmensaje:mensaje,
            idPropiedad:idPropiedad

        },
        function(d) {

            // e-mail was sent
            if ( d.status == 1 ) {

                $('#ModalSend').modal('show');

                message = '' + d.msg;
/*                $('#cform').hide();


                $('#contact-f-response').show();
                $('#contact-f-responsem').removeClass('alert-danger').html(message);
                $('#contact-f-responsem').addClass('alert-success').html(message);
                $(".closef1").show();
                $('#sendMessage1_1').hide();
                $('#sendMessage1').show();*/

                cleanForm();
                $('.ficha').val('Enviar');
                $('.ficha').prop( "disabled", false );
            } else {
                message = '' + d.msg;
                //$('#contact-f-responsem').addClass('alert-warning');
                $('#cform').hide();

                $('#contact-f-response').show();
                $('#contact-f-responsem').removeClass('alert-success').html(message);
                $('#contact-f-responsem').addClass('alert-danger').html(message);
                $(".closef2").hide();
                $(".closef1").show();

                $("#sendMessage1_1").hide();
                $("#sendMessage1").show();
                $('.ficha').val('Enviar');
                $('.ficha').prop( "disabled", false );
            }
            // show response message

        }
        ,"json")
    },300)

}
function enviarXCorreo(){
    var arrayEmail = $("#inputTags").val().split(",");
    $("#sendingEmail").text("");
    $("#sendingEmail").text("Enviando...");
    $("#sendingEmail").addClass("deactivate");
    //alert(location.href);
    $.post( 'propiedades/compartir', {

            email:$("#email").val(),
            pemail:arrayEmail,
            pmensaje:$("#comentarios").val(),
            idPropiedad:$("#idPropiedad").val(),
            urlPropiedad:location.href

        },
        function(d) {

            // e-mail was sent
            if ( d.status == 1 ) {
                // redireccionamos
                message = '' + d.msg;
                $('#formCorreo').hide();
                // se llama la funcion de conversion de AWS
                //ppcconversion();

                $('#contact-f-response_3').show();
                $('#contact-f-responsem_3').removeClass('alert-danger').html(message);
                $('#contact-f-responsem_3').addClass('alert-success').html(message);
                $(".closef_3_1").hide();
                $(".closef_3").show();

                $('#sendMessage_3').hide();
                $('#sendMessage_3').show();

                $("#sendingEmail").text("");
                $("#sendingEmail").text("Enviar");
                $("#sendingEmail").removeClass("deactivate");

            } else {
                message = '' + d.msg;
                //$('#contact-f-responsem').addClass('alert-warning');
                $('#formCorreo').hide();

                $('#contact-f-response_3').show();
                $('#contact-f-responsem_3').removeClass('alert-success').html(message);
                $('#contact-f-responsem_3').addClass('alert-danger').html(message);
                $(".closef_3").hide();
                $(".closef_3_1").show();

                $("#sendMessage_3").hide();
                $("#sendMessage_3_1").show();

                $("#sendingEmail").text("");
                $("#sendingEmail").text("Enviar");
                $("#sendingEmail").removeClass("deactivate");

            }
            // show response message

        }
        ,"json")
}

function sendPropiedadContacto1(){

    $("#sendMessage2").hide();
    $('#sendMessage2_2').show();

    /*$().hide();
     $().after('');*/


    var nombre =  $("#inputNombre1").val();
    var email = $("#inputEmail1").val();
    var telefono = $("#inputTelefono1").val();
    var mensaje = $("#inputMensaje1").val();
    var idPropiedad = $("#idPropiedad").val();

    if(nombre=='Nombre'){
        nombre='';
    }
    if(mensaje=='Mensaje'){
        mensaje='';
    }

    // info contacto
    setTimeout(function(){

        $.post( 'propiedades/sendContacto', {

                pnombre:nombre,
                pemail:email,
                ptelefono:telefono,
                pmensaje:mensaje,
                idPropiedad:idPropiedad

            },
            function(d) {

                // e-mail was sent
                if ( d.status == 1 ) {
                    // redireccionamos
                    message = '' + d.msg;
                    $('#cform1').hide();
                    // se llama la funcion de conversion de AWS
                    //ppcconversion();

                    $('#contact-f-response1').show();
                    $('#contact-f-responsem1').removeClass('alert-warning').html(message);
                    $('#contact-f-responsem1').addClass('alert-success').html(message);


                    $('#sendMessage2_2').hide();
                    $('#sendMessage2').show();

                    cleanForm();

                } else {
                    message = '' + d.msg;
                    //$('#contact-f-responsem').addClass('alert-warning');
                    $('#cform1').hide();

                    $('#contact-f-response1').show();
                    $('#contact-f-responsem1').removeClass('alert-success').html(message);
                    $('#contact-f-responsem1').addClass('alert-danger').html(message);

                    $("#sendMessage2_2").hide();
                    $("#sendMessage2").show();
                }
                // show response message

            }
            ,"json")
    },300)

}
$(window).resize(function(){
    if($(window).width()<980){
        $("#adjust").removeClass("span9");
        $("#adjust").addClass("span12");
    }else{
        $("#adjust").removeClass("span12");
        $("#adjust").addClass("span9");
    }
    if($(window).width()>767 && $(window).width()<979){
        $("#responsive1").removeClass("span5")
        $("#responsive1").addClass("span7");
    }else{
        $("#responsive1").removeClass("span7")
        $("#responsive1").addClass("span5");
    }


    /*min-width:768px) and (max-width:979px*/
})
function cleanForm(){
    $("#inputNombre").val("");
    $("#inputEmail").val("");
    $("#inputTelefono").val("");
    $("#inputMensaje").val("");
    /*$("#idPropiedad").val("");*/
}



