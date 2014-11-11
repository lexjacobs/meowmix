$(function() {


    $('.button1').on('click', function() {
        var sound = $("#control")[0];

        sound.load();
        sound.play();

        return null;
    });

    $('.button1').show();
    $('.button2').hide();

    $('.container').on('click', function() {
        $('.button1').toggle();
        $('.button2').toggle();
        $('#control').click();

        setTimeout(
            function() {
                $('.button1').toggle();
                $('.button2').toggle();
            }, 300);
    });
});
