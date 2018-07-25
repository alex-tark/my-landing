let callButton = $('#call');
let callBlock = $('#call-info');

callButton.click(() => {
    callButton.animate({ "opacity": "0"});
    callButton.css({ "cursor": "auto"});


    callBlock.append('<a href="#"><i class="fab fa-vk"></i></a>');
    callBlock.append('<a href="#"><i class="fab fa-telegram-plane"></i></a>');
    callBlock.append('<a href="#"><i class="fab fa-github-alt"></i></a>');
    callBlock.append('<a href="#"><i class="fab fa-twitter"></i></a>');
    callBlock.append('<a href="#"><i class="fab fa-instagram"></i></a>');

    $('i.fa-vk').fadeIn(830);
    $('i.fa-telegram-plane').fadeIn(1030);
    $('i.fa-github-alt').fadeIn(130);
    $('i.fa-twitter').fadeIn(480);
    $('i.fa-instagram').fadeIn(680);
});