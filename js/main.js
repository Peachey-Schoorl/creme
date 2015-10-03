/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
// Logic for jQuery page scrolling feature - taken from the jQuery Easing plugin
function easeInOutExpo(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a};

$(function() {
    var $Body = $('body');

    $Body.on('click', '.js-page-scroll a', function(event) {
        var $Anchor = $(this);
        event.preventDefault();

        history.pushState({}, '', '/' + $Anchor.attr('href').substring(1));

        $('html, body').stop().animate({
            scrollTop: $($Anchor.attr('href')).offset().top
        }, 1500, easeInOutExpo);
    });

    // Floating label headings for the contact form
    $Body.on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
