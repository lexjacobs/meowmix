$(function() {

    var sound0 = $("#control0")[0];
    sound0.load();
    sound0.volume = 0;
    sound0.play();

    var sound1 = $("#control1")[0];
    sound1.load();
    sound1.volume = 0;
    sound1.play();

    var sound2 = $("#control2")[0];
    sound2.load();
    sound2.volume = 0;
    sound2.play();

    var sound3 = $("#control3")[0];
    sound3.load();
    sound3.volume = 0;
    sound3.play();

    $(sound0).one('ended', function(){
        console.log('0 done');
        sound0.volume = 1;
    });
    $(sound1).one('ended', function(){
        console.log('1 done');
        sound1.volume = 1;
    });
    $(sound2).one('ended', function(){
        console.log('2 done');
        sound2.volume = 1;
    });
    $(sound3).one('ended', function(){
        console.log('3 done');
        sound3.volume = 1;
    });

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
