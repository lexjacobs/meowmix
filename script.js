$(function() {

    var sound0 = $("#control0")[0];
    sound0.load();

    var sound1 = $("#control1")[0];
    sound1.load();

    var sound2 = $("#control2")[0];
    sound2.load();

    var sound3 = $("#control3")[0];
    sound3.load();

    $('.sticker0').on('click', function() {
        sound0.play();
        return null;
    });

    $('.sticker1').on('click', function() {
        sound1.play();
        return null;
    });

    $('.sticker2').on('click', function() {
        sound2.play();
        return null;
    });

    $('.sticker3').on('click', function() {
        sound3.play();
        return null;
    });


});
