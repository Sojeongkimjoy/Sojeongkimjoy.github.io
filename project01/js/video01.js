$(function () {

    let btn = true;
    $('.ctr').on('click', function () {
        $(this).toggleClass('on');
        if (btn) {
            $('.case01 video').trigger('pause');
        } else {
            $('.case01 video').trigger('play');
        }
        btn = !btn;
        console.log(btn);

    })

    $('.case01 .pause').on('click', function () {
        $('.case01 video').trigger('pause');
    })

    $('.case01 .play').on('click', function () {
        $('.case01 video').trigger('play');
    })

})