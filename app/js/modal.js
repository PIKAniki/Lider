(function() {
    var modal = document.getElementById('myModal');
    var buttons = document.getElementsByClassName("myBtn")
    var span = document.getElementsByClassName("close");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            var id = this.getAttribute('data-modal');
            var modal = document.getElementById(id);
            modal.style.display = 'block';
            $('.modal-slider').slick({
                centerMode: true,
                slidesToShow: 3,
                speed: 600,
                arrows: true,
                variableWidth: true,
                infinite: false,
                focusOnSelect: true,
                prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18"fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M9.21839 1L1 9L9.21839 17"/></svg></button>',
                nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M0.78161 17L9 9L0.78161 1"/></svg></button> ',
                responsive: [{
                    breakpoint: 661,
                    settings: {
                        dots: true
                    }

                }]
            });

            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = '17px';

        }
    }

    for (var i = 0; i < span.length; i++) {
        span[i].onclick = function() {
            var id = this.getAttribute('data-modal');
            var modal = document.getElementById(id);
            modal.style.display = 'none';
            $('.modal-slider').slick('unslick');
            document.body.style.overflow = '';
            document.body.style.marginRight = '';
        }
    }

    function spanClick() {
        var id = this.getAttribute('data-modal');
        var modal = document.getElementById(id);
        modal.style.display = 'none';
        $('.modal-slider').slick('unslick');
        document.body.style.overflow = '';
        document.body.style.marginRight = '';
    }

    for (var i = 0; i < span.length; i++) {
        span[i].onclick = spanClick;
    }

    window.onclick = function(event) {
        var isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;
        if (isModal) {
            event.target.style.display = "none";
            $('.modal-slider').slick('unslick');
            document.body.style.overflow = '';
            document.body.style.marginRight = '';
        }
    }


})();

// $(function() {
//     $('.modal').show();
//     $('.modal-slider').slick({

//         arrows: false,
//         centerMode: true,
//         centerPadding: '60px',
//     });
//     $('.modal').hide()
//         // $('.modal-slider').slick('unslick');
// });