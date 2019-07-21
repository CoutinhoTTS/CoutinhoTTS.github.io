var audio = document.getElementById('audio')
let audioPlay = audio.play();
audioPlay.catch((err)=>{
    console.log(err);
    console.log("不允许自动播放");
    $(function () {
        console.log(audio)
        $('#yes').on('click',function () {
            var passworld = $('#passworld').val()
            if (passworld == '0615') {
                audio.play()
                $('.condition').addClass('animated fadeOutLeftBig')
                $('.condition').css('display','none')
                $('.conditions').css('display','block')
            }
        })
    })
})