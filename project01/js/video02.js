$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/kLmJSKWUqOk',
        containment: '#main_visual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#conVideo').YTPlayer({
        videoURL: 'https://youtu.be/kLmJSKWUqOk',
        containment: '#bgm1',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#conVideo2').YTPlayer({
        videoURL: 'https://youtu.be/kLmJSKWUqOk',
        containment: '#bgm2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#conVideo3').YTPlayer({
        videoURL: 'https://youtu.be/kLmJSKWUqOk',
        containment: '#bgm3',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    })

    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    })
})