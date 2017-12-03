( function( $ ) {
    // Enable manipulation with hover only after helper popup shows and all buttons go to the bottom.
    var isSensitive = false;


    // Positioning buttons on midle and top on loading.
    $( ".strip-unit:odd .slider-button" ).addClass('middle');
    $( ".strip-unit:even .slider-button" ).addClass('top');

    // Adding the class 'left' and 'right' so you can choose side where will
    // popup be shown on button hover. Left show it right and Right show it left.
    $(".pop-up:lt(4)").addClass("left");
    $(".pop-up:gt(4)").addClass("right");

    // Manipulating with pop up visibility and buttons position with hover over section that wrap button.
    $('.slider-wrap').hover(function () {
        if(isSensitive){
            $(this).children(".pop-up").addClass('open');
            $(this).children(".slider-button").addClass('open');
            $(".pop-up-helper.show").removeClass('show');
        }
    }, function () {
        if(isSensitive){
            $(this).children(".pop-up").removeClass('open');
            $(this).children(".slider-button").removeClass('open');
        }
    });


    // Put buttons to bottom after time specified after function, and show helper popup.
    setTimeout(
        function () {
            $( ".strip-unit:odd .slider-button" ).removeClass('middle');
            $( ".strip-unit:even .slider-button" ).removeClass('top');
            $(".pop-up-helper").addClass('show');
        }, 8000
    );
    setTimeout(function () {
        isSensitive = true;
        $(".pop-up-helper").removeClass('show');
    }, 11000);
} )( jQuery );