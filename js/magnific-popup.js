(function() {
    // var groups = {};
    // $('.modal-body__images-link').each(function() {
    //     var id = parseInt($(this).attr('data-group'), 10);

    //     if (!groups[id]) {
    //         groups[id] = [];
    //     }

    //     groups[id].push(this);
    // });

    $('.modal-body__images').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-with-zoom',
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

    // $('.modal-body__images-2').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     mainClass: 'mfp-with-zoom',
    //     gallery: {
    //         enabled: true
    //     },

    //     zoom: {
    //         enabled: true,

    //         duration: 300,
    //         easing: 'ease-in-out',
    //         opener: function(openerElement) {

    //             return openerElement.is('img') ? openerElement : openerElement.find('img');
    //         }
    //     }

    // });
})();