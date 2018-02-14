function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}


var vid = document.getElementById("playTrigger");

var playing = 0;
$(window).on('scroll', function() {
    if (isElementInViewport($("#videoContainer")) && (playing == 0)) {
        $('#playTriggerTop')[0].pause();
        $('#playTrigger')[0].play();
        playing = 1;


    } else if (!isElementInViewport($("#videoContainer")) && (playing == 1)) {
        $('#playTrigger')[0].pause();
        $('#playTriggerTop')[0].play();
        playing = 0;
    }
});
