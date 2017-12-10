$(document).ready(function() {
	InitPriceSlider();
});


function InitPriceSlider() {

    var mini = $('.priceMin').data('pricemin');
    var maxi = $('.priceMax').data('pricemax');
    var populadoMin = $('.populadoMin').data('populadomin');
    if (populadoMin == ''){ populadoMin = 0; }
    var populadoMax = $('.populadoMax').data('populadomax');
    if (populadoMax == ''){ populadoMax = maxi; }

    jQuery('.price-value .from').text(populadoMin); //100
    jQuery('.price-value .from').currency({ region: 'MXN', thousands: ' ', decimal: ',', decimals: 0 });

    jQuery('.price-value .to').text(populadoMax); //1000000
    jQuery('.price-value .to').currency({ region: 'MXN', thousands: ' ', decimal: ',', decimals: 0 });

    $('.property-filter .price-slider').slider({
        range: true,
        min: mini,//100,
        max: maxi,//1000000
        step:1000,
        values: [populadoMin, populadoMax], //100,1000000
        slide: function(event, ui) {
            jQuery('.property-filter .price-from input').attr('value', ui.values[0]);
            jQuery('.property-filter .price-to input').attr('value', ui.values[1]);

            jQuery('.price-value .from').text(ui.values[0]);
            jQuery('.price-value .from').currency({ region: 'MXN', thousands: ' ', decimal: ',', decimals: 0 });

            jQuery('.price-value .to').text(ui.values[1]);
            jQuery('.price-value .to').currency({ region: 'MXN', thousands: ' ', decimal: ',', decimals: 0 });
        }
    });
/*    jQuery('.price-value .from').text(100);
    jQuery('.price-value .from').currency({ region: 'MX', thousands: ' ', decimal: ',', decimals: 0 });

    jQuery('.price-value .to').text(1000000);
    jQuery('.price-value .to').currency({ region: 'MX', thousands: ' ', decimal: ',', decimals: 0 });

    $('.property-filter .price-slider').slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [100, 1000000],
        slide: function(event, ui) {
            jQuery('.property-filter .price-from input').attr('value', ui.values[0]);
            jQuery('.property-filter .price-to input').attr('value', ui.values[1]);

            jQuery('.price-value .from').text(ui.values[0]);
            jQuery('.price-value .from').currency({ region: 'MX', thousands: ' ', decimal: ',', decimals: 0 });

            jQuery('.price-value .to').text(ui.values[1]);
            jQuery('.price-value .to').currency({ region: 'MX', thousands: ' ', decimal: ',', decimals: 0 });
        }
    });*/
}
