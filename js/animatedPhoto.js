inView('.team-member')
    .on('enter', function () {
        $('.rounded-circle')
            .fadeIn(4000)
    })



inView('#hero')
    .on('enter', function () {
        $('.go_top')
            .fadeOut(1000)
    })
    .on('exit', function () {
        $('.go_top')
            .fadeIn(1000)
    })
