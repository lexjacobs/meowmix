$(function() {

        var playSound = function(soundfile) {
            $('#sound-span').html('<embed src="' + soundfile +
                '" hidden="true" autostart="true"' +
                'loop="false">');
        };

            $('.button1').show();
            $('.button2').hide();

            $('.container').on('click', function() {
                $('.button1').toggle();
                $('.button2').toggle();
                playSound('kittenmeow.wav');

                setTimeout(
                    function() {
                        $('.button1').toggle();
                        $('.button2').toggle();
                    }, 200);
            });
        });
