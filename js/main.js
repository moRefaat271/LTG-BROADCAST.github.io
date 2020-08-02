$(document).ready(function () {
    //scrolling text
    var noOfLetter = $('#letters li').length;
    var totalLetterWidth = 0;
    
    for (var i = 0 ; i < noOfLetter ; i++ ) {
        var letterWidth = $('#letters li').eq(i).outerWidth(true);
        totalLetterWidth = totalLetterWidth + letterWidth;
    }
    
    $('#letters').css('width', totalLetterWidth + 'px');
    var speed = 1;
    animateLetters();
    
    function animateLetters() {
        $('#letters li').eq(0).animate({
            'marginLeft' : '-=' + speed + 'px'
        },1,function () {
            var animateLetterWidth = $(this).outerWidth(true);
            if(speed >= animateLetterWidth) {
                $(this).parent().append($(this));
                $(this).removeAttr('style');
            }
            animInterval = setTimeout(function () {
                animateLetters();
            })
        })
    }
})