window.addEventListener("load", function() { window.scrollTo(0, 0); });
document.addEventListener("touchmove", function(e) { e.preventDefault() });


$(function() {
    $('.top__slider').slick({
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: true
    });

});
// MyLib start
;
(function() {
    window.myLib = {};

    window.myLib.body = document.querySelector('body');

    window.myLib.closestAttr = function(item, attr) {
        var node = item;

        while (node) {
            var attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }

            node = node.parentElement;
        }

        return null;
    };

    window.myLib.closestItemByClass = function(item, className) {
        var node = item;

        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }

        return null;
    };

    window.myLib.toggleScroll = function() {
        myLib.body.classList.toggle('no-scroll');
    };
})();
//MyLib end
function footer() {
    var
        main = document.getElementsByTagName('main')[0],
        footer = document.getElementsByTagName('footer')[0];

    footerHeight = footer.clientHeight;
    main.style.paddingBottom = (footerHeight) + 'px';
}
window.addEventListener('load', footer);
window.addEventListener('resize', footer);
$('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close');
    myLib.toggleScroll();
});
$('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close');
    myLib.toggleScroll();
});