$(document).ready(function(){
    $('#newsletterRes').click(function(e){
        e.preventDefault();
        //$(this).text('Enviado...');
        var nombre = $('#nombre').val();
        var correo = $('#mail').val();

        if($('#nombre').val()==''){
           $('#eNombre').show();
        }else if($('#mail').val()==''){
            $('#eCorreo').show();
        }
        else{
            $('#newsletterRes').prop( "disabled", true );
            $.ajax({
                url: 'inicio/newsletterRes/',
                type: 'POST',
                dataType: 'json',
                data: {
                    nombre: nombre,
                    correo: correo
                },
                success:function(data)
                {
                    if(data.error!=0){
                        $('#eNombre').show();
                        $('#eCorreo').show();
                        $('#titNews').text('¡Suscríbete a nuestro newsletter!');
                        //$('#newsletterRes').text('Enviar');
                        $('#newsletterRes').prop( "disabled", false );
                    }else{
                        //$('#newsletterRes').text('Enviar');
                        $('#newsletterRes').prop( "disabled", false );
                        $('#eNombre').hide();
                        $('#eCorreo').hide();
                        $('#titNews').text('¡Gracias por Suscribirte!');
                        $('#newsletter').modal('hide');
                        $('#ModalSend').modal('show');
                        //window.location.reload();
                    }
                }
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });

        }
    });
    $('#nombre').focusout(function(){
         if($('#nombre').val()==''){
           $('#newsletterRes').prop( "disabled", true );
           $('#eNombre').show();
        }else{
            $('#newsletterRes').prop( "disabled", false );
            $('#eNombre').hide();
        }
    });
    $('#mail').focusout(function(){
         if($('#mail').val()==''){
            $('#newsletterRes').prop( "disabled", true );
           $('#eCorreo').show();
        }else{
            $('#newsletterRes').prop( "disabled", false );
            $('#eCorreo').hide();
        }
    });
})
