$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion3();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
    setTimeout(function() {
        firstQuestion2();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
    setTimeout(function() {
        firstQuestion1();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function init(){
    $('#title').text(CONFIG.title)
    
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
    $('#title1').text(CONFIG.title1)
    $('#desc1').text(CONFIG.desc1)
    $('#title2').text(CONFIG.title2)
    $('#desc2').text(CONFIG.desc2)
    $('#title3').text(CONFIG.title3)
    $('#desc3').text(CONFIG.desc3)
}
function firstQuestion3(){
    $('.content3').hide();
}  
function firstQuestion2(){
    $('.content2').hide();
    
}
function firstQuestion1(){
    $('.content1').hide();
    
}


function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,

        // 2. Ảnh ở câu hỏi đầu tiên
        imageUrl: 'img/cuteCat2.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
      }).then(function(){
        $('.content').show(200);
      })
}

 
// switch button position
function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}

function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.9 ;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

init()

var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})


// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
  $('.content').hide(200); 
});
$('#yes').click(function() {
  $('.content1').show(200); 
});

// generate text in input
function textGenerate() {
    var n = "";
    var text = " " + CONFIG.reply;
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
               
            }
        }
        
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}
$('#q1b').click(function() {
    var audio = new Audio('sound/wa.mp3');
    audio.play();
Swal.fire({
    title: CONFIG.q1r,
    
    width: 800,
    padding: '3em',
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
          rgba(0,0,123,0.4)
          url("img/giphy2.gif")
          left top
          no-repeat
        `,
})
})
$('#q1c').click(function() {
    var audio = new Audio('sound/wa.mp3');
    audio.play();
Swal.fire({
    title: CONFIG.q1r,
    
    width: 800,
    padding: '3em',
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
          rgba(0,0,123,0.4)
          url("img/giphy2.gif")
          left top
          no-repeat
        `,
})
})
$('#q1d').click(function() {
    var audio = new Audio('sound/wa.mp3');
    audio.play();
Swal.fire({
    title: CONFIG.q1r,
    
    width: 900,
    padding: '3em',
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
          rgba(0,0,123,0.4)
          url("img/giphy2.gif")
          left top
          no-repeat
        `,
})
})

$('#q1a').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    $('.content1').hide(200); 
});
$('#q1a').click(function() {
  $('.content2').show(200); 
});

$('#q2a').click(function() {
    var audio = new Audio('sound/wa.mp3');
    audio.play();
Swal.fire({
    title: CONFIG.q1r,
    
    width: 800,
    padding: '3em',
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
          rgba(0,0,123,0.4)
          url("img/giphy2.gif")
          left top
          no-repeat
        `,
})
})
$('#q2c').click(function() {
    var audio = new Audio('sound/wa.mp3');
    audio.play();
Swal.fire({
    title: CONFIG.q1r,
    
    width: 800,
    padding: '3em',
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
          rgba(0,0,123,0.4)
          url("img/giphy2.gif")
          left top
          no-repeat
        `,
})
})
$('#q2b').click(function() {
    var audio = new Audio('sound/wa.mp3');
    audio.play();
Swal.fire({
    title: CONFIG.q1r,
    
    width: 900,
    padding: '3em',
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
          rgba(0,0,123,0.4)
          url("img/giphy2.gif")
          left top
          no-repeat
        `,
})
})

$('#q2d').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    $('.content2').hide(200); 
    
});
$('#q2d').click(function() {
  $('.content3').show(200); 
});

$('#q3a').click(function() {
    var audio = new Audio('sound/wa.mp3');
    audio.play();
Swal.fire({
    title: CONFIG.q1r,
    
    width: 800,
    padding: '3em',
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
          rgba(0,0,123,0.4)
          url("img/giphy2.gif")
          left top
          no-repeat
        `,
})
})
$('#q3c').click(function() {
    var audio = new Audio('sound/wa.mp3');
    audio.play();
Swal.fire({
    title: CONFIG.q1r,
    
    width: 800,
    padding: '3em',
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
          rgba(0,0,123,0.4)
          url("img/giphy2.gif")
          left top
          no-repeat
        `,
})
})
$('#q3d').click(function() {
    var audio = new Audio('sound/wa.mp3');
    audio.play();
Swal.fire({
    title: CONFIG.q1r,
    
    width: 900,
    padding: '3em',
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
          rgba(0,0,123,0.4)
          url("img/giphy2.gif")
          left top
          no-repeat
        `,
})
})

$('#q3b').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: CONFIG.question,
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='" + CONFIG.reasonPlaceholder + "'>",
        background: '#fff url("img/iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("img/ss2.gif")
              left top
              no-repeat
            `,
        confirmButtonColor: '#3085d6',
        confirmButtonColor: '#fe8a71',
        confirmButtonText: CONFIG.btnReply
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: CONFIG.btnAccept,
                background: '#fff url("img/iput-bg.jpg")',
                title: CONFIG.mess,
                text: CONFIG.messDesc,
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = CONFIG.YtbLink;
                  }
            })
        }
    })
})