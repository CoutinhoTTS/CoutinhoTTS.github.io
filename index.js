var audio = document.getElementById('audio')
let audioPlay = audio.play();
audioPlay.catch((err)=>{
    console.log(err);
    console.log("不允许自动播放");
    console.log(audio)

})
$('#yes').on('click',function () {
    var passworld = $('#passworld').val()
    if (passworld == '0615') {
        audio.play()
        $('.condition').addClass('animated fadeOutLeftBig')
        $('.condition').css('display','none')
        $('.conditions').css('display','block')
        var s = 5
        $('#sin').text(s)
        var iCount
        iCount = setInterval(function () {
            s = s-1
            $('#sin').html(s)
            if (s == -1) {
                clearInterval(iCount)
                $('.conditions>div:first-child').css('display','none')
                $('.conditions>div:last-child').css('display','block')
            }
        },1000)
    } else {
        $('#mist').css('opacity', 'initial')
        setTimeout(function () {
            $('#mist').css('opacity','0')
        },1000)
    }})