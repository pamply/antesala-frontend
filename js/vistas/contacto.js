$(document).ready(function(){

    $('.datepicker').datetimepicker({
        format:'DD-MM-YYYY'
    });
    $('.timepicker').datetimepicker({
        format: 'LT'
    });

    $('#enviar').click(function(e){
        e.preventDefault();
        $(this).text('Enviado...');
        var nombre = $('#cNombre').val();
        var apellido = $('#apellido').val();
        var telefono = $('#telefono').val();
        var celular = $('#celular').val();
        var correo = $('#correo').val();
        var fecha = $('#fecha').val();
        var hora = $('#hora').val();
        var mensaje = $('#mensaje').val();



            $('#enviar').prop( "disabled", true );
            $.ajax({
                url: 'contacto/email_contacto/',
                type: 'POST',
                dataType: 'json',
                data: {
                   nombre:nombre,
                   apellido:apellido,
                   telefono:telefono,
                   celular:celular,
                   correo:correo,
                   fecha:fecha,
                   hora:hora,
                   mensaje:mensaje
                },
                success:function(data)
                {
                    if(data.error!=0){
                        $('#errorAlert').show('fast');
                        $('#pError').html(data.error1);
                        $('html, body').animate({
                            scrollTop: $("#topContacto").offset().top
                        }, 500);
                        $('#enviar').text('Enviar');
                        $('#enviar').prop( "disabled", true );
                    }else{
                        $('#ModalSend').modal('show');
                        $('#enviar').text('Enviar');
                        $('#enviar').prop( "disabled", false );
                        setTimeout(function(){
                            //window.location.reload(true);
                        }, 1000);
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


    });
    $('#cerrarErrorAlert').click(function(e){
        $('#errorAlert').hide('fast');
        $('#enviar').prop( "disabled", false );
    });
    $('#ModalSend .close-modal').click(function(e){
        window.location.reload(true);
    });

})
