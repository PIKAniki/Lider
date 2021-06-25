(function() {


    $('.modal-body__images').each(function() {
        $(this).magnificPopup({
            delegate: 'a:not(.slick-cloned)',
            type: 'image',
            mainClass: 'mfp-with-zoom',
            fixedContentPos: false,
            fixedBgPos: true,
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {

                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }

        });


    });


})();