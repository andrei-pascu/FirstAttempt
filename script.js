
//Background parallex
function castParallax() {

    var opThresh = 350;
	var opFactor = 750;

	window.addEventListener("scroll", function(event){
        // var top = $(window).scrollTop();
        var top = this.pageYOffset;
        // var layers = $('.parralex-scrolling-effect').children();
        var layers = document.getElementsByClassName("par");
        var layer, speed;
        for (var i = 0; i < layers.length; i++) {
        	layer = layers[i];
        	speed = layer.getAttribute('data-speed');
        	var yPos = Math.round(-(top * speed / 100));
        	layer.setAttribute('style', 'transform: translateY(' + yPos + 'px)');
		}
	});
}
document.body.onload = castParallax();



// scroll power

$(window).scroll(function() {
    if ($(this).scrollTop() < 600) {


if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;

    if (event.wheelDelta) delta = event.wheelDelta / 120;

    else if (event.detail) delta = -event.detail / 3;

    handle(delta);

    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 30;
	var distance = 15;
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}
    }else{

        if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
        window.onmousewheel = document.onmousewheel = wheel;

        function wheel(event) {
            var delta = 0;

            if (event.wheelDelta) delta = event.wheelDelta / 120;

            else if (event.detail) delta = -event.detail / 3;

            handle(delta);

            if (event.preventDefault) event.preventDefault();
            event.returnValue = false;
        }

        function handle(delta) {
            var time = 100;
        	var distance = 100;
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() - (distance * delta)
            }, time );
        }


    }
});

//scroll power


//FORCE SCROLL DOWN start
// $("#btn1").click(function() {
//     document.querySelector('#p0').scrollIntoView({ behavior: 'smooth' });
// });
//??
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 400) {
//     $("body").animate({ scrollTop: $(document).height() }, 5000);
//     } else {
//     $("body").animate({ scrollTop: $(document).height() }, 5000);
//     }
// });
//FORCE SCROLL DOWN end



//Mjolnir left to right right to left aniamtion START
var leftBox = $('#leftToCenter0').position();
var rightBox = $('#rightToCenter0').position();
var header = $('#bottomToCenter0').position();

$(window).scroll(function(event){
    var st = $(this).scrollTop();

if ($(this).scrollTop < 1000) {
    $('#rightToCenter0').css({right: rightBox.left + st});
    $('#leftToCenter0').css({left: leftBox.left + st});
    $('#bottomToCenter0').css({top: header.left + st - 985});
} else {
    $('#rightToCenter0').fadeTo(3000, 1).css({right: rightBox.left + st});
    $('#leftToCenter0').fadeTo(3000, 1).css({left: leftBox.left + st});
    $('#bottomToCenter0').fadeTo(3000, 1).css({top: header.left + st - 985});
}
});
//Mjolnir left to right right to left aniamtion END









// var lastScrollTop = 0;
// var leftBox = $('#bottomToCenter0').position();
//
// $(window).scroll(function(event){
//     var st = $(this).scrollTop();
//     $('#bottomToCenter0').css({top: rightBox.left + st});
//     lastScrollTop = st;
// });
//






//bottom to center to header
// $(window).scroll(function() {
//     if ($(this).scrollTop() < 600) {
// //        alert('if');
//
//     $('#bottomToCenter0').stop().animate({ top: '1300px' });
//
//     } else if ($(this).scrollTop() < 1350) {
// //        alert('else');
//
//     $('#bottomToCenter0').stop().animate({ top: '680px' });
//     $('.bottomToCenter2').stop().removeClass('bottomToCenter2').addClass('bottomToCenter1');
//
//     } else {
//   $('#bottomToCenter0').removeClass('bottomToCenter1').addClass('bottomToCenter2');
//
//
// }
// });






//First apear of menu
$(window).scroll(function() {
    if ($(this).scrollTop() < 1450) {

    $('.drop-menu').stop().fadeOut(1);
    $('#sword7').stop().fadeOut(1);

    } else {
setTimeout(function(){
    $('.drop-menu').stop().fadeIn(500);
    }, 800);
    $('#sword7').stop().fadeIn(500);
}
});



//BUTTON 1 START

//Thunder-storm
$('#btn1').mouseover(function(){


setTimeout(function(){
$('#btn1').fadeTo(100, 1, function() {
$('#btn1').removeClass('').addClass('btn1hover');});}, 0);
setTimeout(function(){
$('#btn1').fadeTo(50, 1, function() {
$('#btn1').removeClass('btn1hover').addClass('');});}, 5000);



    //first
    setTimeout(function(){
        $('#thunderstorm1').fadeTo(1,1);
    }, 500);
    setTimeout(function(){
        $('#thunderstorm2').fadeTo(1,1);
    }, 350);
    setTimeout(function(){
        $('#thunderstorm3').fadeTo(1,1);
    }, 600);
    setTimeout(function(){
        $('#thunderstorm4').fadeTo(1,1);
    }, 400);
    setTimeout(function(){
        $('#thunderstorm5').fadeTo(1,1);
    }, 200);
    setTimeout(function(){
        $('#thunderstorm6').fadeTo(1,1);
    }, 400);
    setTimeout(function(){
        $('#thunderstorm7').fadeTo(1,1);
    }, 400);
    setTimeout(function(){
        $('#thunderstorm8').fadeTo(1,1);
    }, 600);
    setTimeout(function(){
        $('#thunderstorm9').fadeTo(1,1);
    }, 650);
    setTimeout(function(){
        $('#thunderstorm0').fadeTo(1,1);
    }, 200);




     setTimeout(function(){
        $('#thunderstorm1').fadeTo(150,0);
    }, 600);
    setTimeout(function(){
        $('#thunderstorm2').fadeTo(150,0);
    }, 555);
    setTimeout(function(){
        $('#thunderstorm3').fadeTo(150,0);
    }, 1400);
    setTimeout(function(){
        $('#thunderstorm4').fadeTo(150,0);
    }, 600);
    setTimeout(function(){
        $('#thunderstorm5').fadeTo(150,0);
    }, 400);
    setTimeout(function(){
        $('#thunderstorm6').fadeTo(150,0);
    }, 600);
    setTimeout(function(){
        $('#thunderstorm7').fadeTo(200,0);
    }, 600);
    setTimeout(function(){
        $('#thunderstorm8').fadeTo(150,0);
    }, 800);
    setTimeout(function(){
        $('#thunderstorm9').fadeTo(150,0);
    }, 850);
    setTimeout(function(){
        $('#thunderstorm0').fadeTo(150,0);
    }, 400);
    //end first
    //second
    setTimeout(function(){
        $('#thunderstorm1').fadeTo(60, 1);
    }, 1300);
    setTimeout(function(){
        $('#thunderstorm2').fadeTo(1,1);
    }, 850);
    setTimeout(function(){
        $('#thunderstorm3').fadeTo(1,1);
    }, 1100);
    setTimeout(function(){
        $('#thunderstorm4').fadeTo(1,1);
    }, 900);
    setTimeout(function(){
        $('#thunderstorm5').fadeTo(1,1);
    }, 700);
    setTimeout(function(){
        $('#thunderstorm6').fadeTo(1,1);
    }, 900);
    setTimeout(function(){
        $('#thunderstorm7').fadeTo(1,1);
    }, 1200);
    setTimeout(function(){
        $('#thunderstorm8').fadeTo(1,1);
    }, 1300);
    setTimeout(function(){
        $('#thunderstorm9').fadeTo(1,1);
    }, 1250);
    setTimeout(function(){
        $('#thunderstorm0').fadeTo(1,1);
    }, 800);


    setTimeout(function(){
        $('#thunderstorm1').fadeTo(1000,0);
    }, 2200);

    setTimeout(function(){
        $('#thunderstorm2').fadeTo(250,0);
    }, 1055);
    setTimeout(function(){
        $('#thunderstorm3').fadeTo(250,0);
    }, 1900);
    setTimeout(function(){
        $('#thunderstorm4').fadeTo(250,0);
    }, 1200);
    setTimeout(function(){
        $('#thunderstorm5').fadeTo(250,0);
    }, 900);
    setTimeout(function(){
        $('#thunderstorm6').fadeTo(250,0);
    }, 1200);
    setTimeout(function(){
        $('#thunderstorm7').fadeTo(250,0);
    }, 1500);
    setTimeout(function(){
        $('#thunderstorm8').fadeTo(250,0);
    }, 1800);
    setTimeout(function(){
        $('#thunderstorm9').fadeTo(250,0);
    }, 1350);
    setTimeout(function(){
        $('#thunderstorm0').fadeTo(300,0);
    }, 1100);
    //end second
    setTimeout(function(){
        $('#thunderstorm11').fadeTo(30, 1);
    }, 1650);
    setTimeout(function(){
        $('#thunderstorm11').fadeTo(500, 0);
    }, 1900);

});
// BUTTON 1 END






// BUTTON 2 START
//Sword animation start
function btn2over(){

      $('#sword2').stop().animate({ left: '0px', top: '1300px' });
      $('#sword4').stop().animate({ left: '-30px' });
      $('#sword5').stop().animate({ left: '0px', top: '1700px' });
      $('#sword6').stop().animate({ left: '250px', top:'1720px' });
      $('#sword1').stop().animate({ left: '600px', top: '1700px' });
      $('#sword3').stop().animate({ right: '500px', top: '1730px' });
      $('#sword9').stop().animate({ right: '250px', top: '1700px' });
      $('#sword11').stop().animate({ right: '-50px', top: '1700px' });
      $('#sword10').stop().animate({ right: '0px' });
      $('#sword8').stop().animate({ right: '0px', top: '1300px' });
}
function btn2out(){
      $('#sword2').stop().animate({ left: '-250px', top: '1380px' });
      $('#sword4').stop().animate({ left: '-320px' });
      $('#sword5').stop().animate({ left: '-220px', top: '1850px' });
      $('#sword6').stop().animate({ left: '150px', top: '1920px' });
      $('#sword1').stop().animate({ left: '550px', top:'1940px' });
      $('#sword3').stop().animate({ right: '440px', top:'1990px' });
      $('#sword9').stop().animate({ right: '100px', top: '1920px' });
      $('#sword11').stop().animate({ right: '-300px', top: '1860px' });
      $('#sword10').stop().animate({ right: '-245px' });
      $('#sword8').stop().animate({ right: '-275px', top: '1360px' });
}
$('#btn2').mouseover(btn2over);
$('#btn2').mouseout(btn2out);
//Sword animation end

//Button click

//Toggle albums start

$('#btn2').click(function(){

    if ($('.fadetest').css('opacity') == '0') {
        $('.fadetest').fadeTo(0, 1);


  setTimeout(function() {
      $('#album-container :nth-child(even)').fadeTo(600, 1);}, 600);
  setTimeout(function() {
      $('#album-container :nth-child(odd)').fadeTo(600, 1);}, 200);
  setTimeout(function() {
      $('#songs-container').fadeTo(1000, 1);}, 1000);
  btn2out();
  $('#btn2').unbind("mouseover");

//animation album click start
$('#album-container div').click(function() {
        albumClicked = $(this);
        albumNumber = $(this).index();
        animateAlbum = "album" + albumNumber + "h" ;
        $(albumClicked).attr("id", animateAlbum);
});
//animation album click end


    } else {

$('.fadetest').fadeTo(0, 0);

    setTimeout(function(){
        $('#album-container :nth-child(even)').fadeTo(600, 0);}, 200);
    setTimeout(function(){
        $('#album-container :nth-child(odd)').fadeTo(600, 0);}, 600);
    setTimeout(function(){
        $('#songs-container').fadeTo(150, 0);}, 0);

        $('#btn2').mouseover(btn2over);
        $('#btn2').mouseout(btn2out);
    }
});
//Album toggle end





//LYRICS start

//LYRICS CONTAINER START
$('#songs-container').click(function() {
    if ($('.songs-container').css('opacity') == 1 &&
        $('#album-song-lyrics').css('opacity') == 0 &&
        $('#album-song-lyrics').siblings().css('opacity')) {

            $('#album-song-lyrics').fadeTo(500, 1);
            $('#close-lyrics').fadeTo(300, 1);

  } else if ($('.songs-list :children').css('opacity') == 1 ){

  } else {
      $('#album-song-lyrics').fadeTo(300, 0, function(){
          $('#album-song-lyrics').css("display", "none");
          $('#close-lyrics').fadeTo(300, 0);
      });

  }
});

$('#close-lyrics').click(function() {
    $('#album-song-lyrics').fadeTo(300, 0, function(){
        $('#album-song-lyrics').css("display", "none");
        $('#close-lyrics').css("display", "none");
    });
});
//LYRICS CONTAINER END

//LYRICS IN CONTAINER SHOW START

$('.songs-container ul li').click(function functia1() {
    songNumber = $(this).index() + 1;
    currentAlbum = "#" + $(this).parent().attr('id');



    if ($(currentAlbum).css('opacity') == 1) {
            lyrics = $('.a' + currentAlbum.substr(-1,1) + songNumber);

         if ($(lyrics).css('opacity') == 0) {
             $(lyrics).fadeTo(300, 1);
             $("#lyrics-title").fadeTo(300, 1);
             $(lyrics).siblings().not("#lyrics-title").fadeTo(10, 0, function(){
             $(lyrics).siblings().not("#lyrics-title").css("display", "none");
             });
         } else {
             $("#lyrics-title").fadeTo(300, 1);
             $(lyrics).fadeTo(10, 0, function(){
             $(lyrics).css("display", "none");
             });
         }

     }

});

//LYRICS IN CONTAINER SHOW END


//SONGS CLICK START




$('#album-container div').click(function() {
albumNumber = "#album" +  $(this).index() +  $(this).index();
songsNumber = ".songs-album" + $(this).index();

// console.log(songsNumber);

    if ($(songsNumber).css('opacity') == 0) {
      setTimeout(function(){
        $(songsNumber).fadeTo(100, 1);}, 700);
        $(songsNumber).siblings().fadeTo(300, 0, function(){
        $(songsNumber).siblings().css("display", "none");
    });

    } else {
        setTimeout(function(){
        $(songsNumber).fadeTo(300, 0, function(){
        $(songsNumber).css("display", "none");
          });}, 100);
      }
});




//SONGS CLICK END






//End toggle list

//BUTTON 2 END

//-->btn2 Song list click start



//-->btn2 Song list click end




//Button click events end
