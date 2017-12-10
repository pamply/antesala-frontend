$(document).ready(function() {
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
         $('#inputCiudad').addClass('select-firefox');
    }
    $('.selectpicker').selectpicker();

    $("#rent-sale").on("change",function(){
        var url ="";
        var compra_renta = $(this).val();
        if (compra_renta == 1){
            var p5 = 1;
            var p6 = 0;
        }else if(compra_renta == 2){
            var p6 = 1;
            var p5 = 0;
        }else{
            var p5 = 0;
            var p6 = 0;
        }

        $(".vr:checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }else{
                 $(this).val(0);
            }
        });

/*        var p9 = "";
        $(".check-tipo").each(function () {
            if (this.checked) {
                p9 += $(this).val()+"-";
            }
        });
        p9 = p9.slice(0, -1);*/

        var p9 = $('#tipo').val();
        if (p9 == ''){ p9 = ''; }


        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputProp').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
/*        var p5 =$('#inputRent').val();
        if (p5 == ''){ p5 = 0; }
        var p6 =$('#inputSale').val();
        if (p6 == ''){ p6 = 0; }*/
        var p8 =$('#inputCiudad').val();
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"ciudad-"+p8+"_"+"tipos="+p9;

        $(".busqueda-filtro").attr("action","propiedades/index"+url); //.buscar
        $('.busqueda-filtro').submit(); //.buscar
    });

    $("#tipo").on("change",function(){
        var url ="";
        var compra_renta = $('#rent-sale').val();
        if (compra_renta == 1){
            var p5 = 1;
            var p6 = 0;
        }else if(compra_renta == 2){
            var p6 = 1;
            var p5 = 0;
        }else{
            var p5 = 0;
            var p6 = 0;
        }

        var p9 = $('#tipo').val();
        if (p9 == ''){ p9 = ''; }

        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputProp').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
        var p8 =$('#inputCiudad').val();
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"ciudad-"+p8+"_"+"tipos="+p9;

        $(".busqueda-filtro").attr("action","propiedades/index"+url); //.buscar
        $('.busqueda-filtro').submit(); //.buscar
    });

    $("#inputCiudad").on("change",function(){
        var url ="";
        var compra_renta = $('#rent-sale').val();
        if (compra_renta == 1){
            var p5 = 1;
            var p6 = 0;
        }else if(compra_renta == 2){
            var p6 = 1;
            var p5 = 0;
        }else{
            var p5 = 0;
            var p6 = 0;
        }

        var p9 = $('#tipo').val();
        if (p9 == ''){ p9 = ''; }

        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputProp').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
        var p8 =$('#inputCiudad').val();
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"ciudad-"+p8+"_"+"tipos="+p9;

        $(".busqueda-filtro").attr("action","propiedades/index"+url); //.buscar
        $('.busqueda-filtro').submit(); //.buscar
    });


    $(".btn-buscar").click(function(){
        var url ="";
        $('#clic_buscar').val(1);
        var compra_renta = $('#rent-sale').val();
        if (compra_renta == 1){
            var p5 = 1;
            var p6 = 0;
        }else if(compra_renta == 2){
            var p6 = 1;
            var p5 = 0;
        }else{
            var p5 = 0;
            var p6 = 0;
        }

        var p9 = $('#tipo').val();
        if (p9 == ''){ p9 = ''; }

        $(".vr:checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }else{
                 $(this).val(0);
            }
        });
/*        var p9 = "";
        $(".check-tipo").each(function () {
            if (this.checked) {
                p9 += $(this).val()+"-";
            }
        });

        p9 = p9.slice(0, -1);*/

        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputProp').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
/*        var p5 =$('#inputRent').val();
        if (p5 == ''){ p5 = 0; }
        var p6 =$('#inputSale').val();
        if (p6 == ''){ p6 = 0; }*/
        var p8 =$('#inputCiudad').val();
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"ciudad-"+p8+"_"+"tipos="+p9;

        $(".busqueda-filtro").attr("action","propiedades/index"+url); //.buscar
        $('.busqueda-filtro').submit(); //.buscar
    });

    $(".busquedaGral").click(function(){
        var url ="";
        var p1 =$('#buscG').val();

        $("#busquedaGeneral").attr("action","propiedades/index"+url);
        $('#busquedaGeneral').submit();
    });

    $("#inputStatus").on("change",function(){
        var url ="";

        $(":checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }
        });
        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputPropiedad').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
        var p5 =$('#inputRent').val();
        if (p5 == ''){ p5 = 0; }
        var p6 =$('#inputSale').val();
        if (p6 == ''){ p6 = 0; }
        var p7 =$('#ordenDA').val();
        if ( (p7 == '') || (typeof p7 ==="undefined") ){ p7 = 0; }
        var p8 =$('#inputCiudad').val();
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }
        var p9 =$('#inputColonia').val();
        if ( (p9 == '') || (typeof p9 === 'undefined') ){ p9 = 0; }


        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"orden-"+p7+"_"+"ciudad-"+p8+"_"+"colonia-"+p9;

        $(".busqueda-filtro").attr("action","propiedades/index"+url);
        $('.busqueda-filtro').submit();
    });


    $("#inputUbic").on("change",function(){
        var url ="";
        var p8 = 0;
        var p9 = 0;

        $(":checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }
        });

        var p1 =$('#inputUbic').val();
        if (p1 == ''){ p1 = 0; p8=0; p9=0; }
        var p2 = $('#inputPropiedad').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
        var p5 =$('#inputRent').val();
        if (p5 == ''){ p5 = 0; }
        var p6 =$('#inputSale').val();
        if (p6 == ''){ p6 = 0; }
        var p7 =$('#ordenDA').val();
        if ( (p7 == '') || (typeof p7 ==="undefined") ){ p7 = 0; }
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }
        if ( (p9 == '') || (typeof p9 === 'undefined') ){ p9 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"orden-"+p7+"_"+"ciudad-"+p8+"_"+"colonia-"+p9;

        $(".busqueda-filtro").attr("action","propiedades/index"+url);
        $('.busqueda-filtro').submit();
    });

    $("#inputPropiedad").on("change",function(){
        var url ="";

        $(":checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }
        });
        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputPropiedad').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
        var p5 =$('#inputRent').val();
        if (p5 == ''){ p5 = 0; }
        var p6 =$('#inputSale').val();
        if (p6 == ''){ p6 = 0; }
        var p7 =$('#ordenDA').val();
        if ( (p7 == '') || (typeof p7 ==="undefined") ){ p7 = 0; }
        var p8 =$('#inputCiudad').val();
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }
        var p9 =$('#inputColonia').val();
        if ( (p9 == '') || (typeof p9 === 'undefined') ){ p9 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"orden-"+p7+"_"+"ciudad-"+p8+"_"+"colonia-"+p9;

        $(".busqueda-filtro").attr("action","propiedades/index"+url);
        $('.busqueda-filtro').submit();
    });

    $("#inputZona").on("change",function(){
        var url ="";

        $(":checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }
        });
        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputPropiedad').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
        var p5 =$('#inputRent').val();
        if (p5 == ''){ p5 = 0; }
        var p6 =$('#inputSale').val();
        if (p6 == ''){ p6 = 0; }
        var p7 =$('#ordenDA').val();
        if ( (p7 == '') || (p7 === 'undefined') ){ p7 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"orden-"+p7;

        $(".busqueda-filtro").attr("action","propiedades/index"+url);
        $('.busqueda-filtro').submit();
    });

    $("#inputSortBy").on("change",function(){
        var url ="";

        $(":checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }
        });
        var p1 =$('#inputSortBy').val();

        if((p1!='') && (p1!="undefined") ){
            //url = url+"/"+p1;
        }

        $(".busqueda-filtro").attr("action","propiedades/index"+url);
        $('.busqueda-filtro').submit();
    });

    $("#ordenDA").on("click",function(){
        var url ="";

        $(":checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }
        });

        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputPropiedad').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
        var p5 =$('#inputRent').val();
        if (p5 == ''){ p5 = 0; }
        var p6 =$('#inputSale').val();
        if (p6 == ''){ p6 = 0; }
        var p7 =$('#ordenDA').val();
        if ( (p7 == '') || (typeof p7 === 'undefined') ){ p7 = 0; }
        var p8 =$('#inputCiudad').val();
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }
        var p9 =$('#inputColonia').val();
        if ( (p9 == '') || (typeof p9 === 'undefined') ){ p9 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"orden-"+p7+"_"+"ciudad-"+p8+"_"+"colonia-"+p9;

        $(".busqueda-filtro").attr("action","propiedades/index"+url);
        $('.busqueda-filtro').submit();

    });

/*    $("#inputCiudad").on("change",function(){
        var url ="";

        $(":checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }
        });
        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputPropiedad').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
        var p5 =$('#inputRent').val();
        if (p5 == ''){ p5 = 0; }
        var p6 =$('#inputSale').val();
        if (p6 == ''){ p6 = 0; }
        var p7 =$('#ordenDA').val();
        if ( (p7 == '') || (typeof p7 === 'undefined') ){ p7 = 0; }
        var p8 =$('#inputCiudad').val();
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }
        var p9 =$('#inputColonia').val();
        if ( (p9 == '') || (typeof p9 === 'undefined') ){ p9 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"orden-"+p7+"_"+"ciudad-"+p8+"_"+"colonia-"+p9;

        $(".busqueda-filtro").attr("action","propiedades/index"+url);
        $('.busqueda-filtro').submit();
    });*/

    $("#inputColonia").on("change",function(){
        var url ="";

        $(":checkbox").each(function () {
            if (this.checked) {
                $(this).val(1);
            }
        });
        var p1 =$('#inputUbicacion').val();
        if (p1 == ''){ p1 = 0; }
        var p2 = $('#inputPropiedad').val();
        if (p2 == ''){ p2 = 0; }
        var p3 = $('#inputPriceFrom').val();
        if (p3 == '' ){ p3 = 0; }
        var p4 =$('#inputPriceTo').val();
        if (p4 == ''){ p4 = 0; }
        var p5 =$('#inputRent').val();
        if (p5 == ''){ p5 = 0; }
        var p6 =$('#inputSale').val();
        if (p6 == ''){ p6 = 0; }
        var p7 =$('#ordenDA').val();
        if ( (p7 == '') || (typeof p7 === 'undefined') ){ p7 = 0; }
        var p8 =$('#inputCiudad').val();
        if ( (p8 == '') || (typeof p8 === 'undefined') ){ p8 = 0; }
        var p9 =$('#inputColonia').val();
        if ( (p9 == '') || (typeof p9 === 'undefined') ){ p9 = 0; }

        url = url+"/"+"ubicacion-"+p1+"_"+"tipo-"+p2+"_"+"pi-"+p3+"_"+"pf-"+p4+"_"+"venta-"+p5+"_"+"renta-"+p6+"_"+"orden-"+p7+"_"+"ciudad-"+p8+"_"+"colonia-"+p9;


        $(".busqueda-filtro").attr("action","propiedades/index"+url);
        $('.busqueda-filtro').submit();
    });


});



