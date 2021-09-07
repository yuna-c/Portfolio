  /*one page code*/
    $(window).resize(function(){
        var s_height = $(window).height();
        $("section").css("height"+s_height+"px");
        $("#gnb").css("top",$(window).height()/2-$("#gnb").height()/2+"px");
        $(window).scroll(function(){
            var t = $(this).scrollTop()+($(this).height()/2-$("#gnb").height()/2);
            $("#gnb").stop().animate({top:t},800);
        });
        $("#gab>li>a").click(function(e){
            var target = $(this).attr("href");
            $("html,body").animate({scrollTop:$(target).offset().top},800);
            e.preventDefault();
        });
    });
    $(function(){
        var s_height = $(window).height();
        $("section").css("height"+s_height+"px");
        $("#gnb").css("top",$(window).height()/2-$("#gnb").height()/2+"px");
        $(window).scroll(function(){
            var t = $(this).scrollTop()+($(this).height()/2-$("#gnb").height()/2);
            $("#gnb").stop().animate({top:t},800);
        })
        $("#gab>li>a").click(function(e){
            var target = $(this).attr("href");
            $("html,body").animate({scrollTop:$(target).offset().top},800);
            e.preventDefault();
        });
    });

    /*click content2, change navigation color */
    $(".b_circle").click(function(){
        $(".circle").css("background","black");
        $('#gnb li a').css("color","black");
        });
    $(".w_circle").click(function(){
        $(".circle").css("background","white");
        $('#gnb li a').css("color","white");
    });


    /*menu circle mouseover/out*/
    $("#gnb > li > a").mouseover(function(){
        $(this).find(".menu-text").stop().fadeIn(1000);
    });
    $("#gnb > li > a").mouseout(function(){
        $(this).find(".menu-text").fadeOut(500);
    });
    /* menu hover version*/
    /* $(function(){
        $(".circle").eq(0).hover(function(){
            $(".menu-text").eq(0).fadeIn(1000);
        },
        function(){
            $(".menu-text").eq(0).fadeOut(800);
        });
    });
    $(function(){
        $(".circle").eq(1).hover(function(){
            $(".menu-text").eq(1).fadeIn(1000);
        },
        function(){
            $(".menu-text").eq(1).fadeOut(800);
        });
    });
    $(function(){
        $(".circle").eq(2).hover(function(){
            $(".menu-text").eq(2).fadeIn(1000);
        },
        function(){
            $(".menu-text").eq(2).fadeOut(800);
        });
    });
    $(function(){
        $(".circle").eq(3).hover(function(){
            $(".menu-text").eq(3).fadeIn(1000);
        },
        function(){
            $(".menu-text").eq(3).fadeOut(800);
        });
    });
    $(function(){
        $(".circle").eq(4).hover(function(){
            $(".menu-text").eq(4).fadeIn(1000);
        },
        function(){
            $(".menu-text").eq(4).fadeOut(800);
        });
    });*/
   
    /*audio player*/
    //var music = document.getElementById('music'); 
    var duration = music.duration;
    var pButton = document.getElementById('pButton'); 
    var playhead = document.getElementById('playhead'); 
    var timeline = document.getElementById('timeline'); 

    var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
    pButton.addEventListener("click", play);
    music.addEventListener("timeupdate", timeUpdate, false);
    timeline.addEventListener("click", function(event) {
        moveplayhead(event);
        music.currentTime = duration * clickPercent(event);
    }, false);

    function clickPercent(event) {
        return (event.clientX - getPosition(timeline)) / timelineWidth;
    }
    playhead.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    var onplayhead = false;
    function mouseDown() {
        onplayhead = true;
        window.addEventListener('mousemove', moveplayhead, true);
        music.removeEventListener('timeupdate', timeUpdate, false);
    }

    function mouseUp(event) {
        if (onplayhead == true) {
            moveplayhead(event);
            window.removeEventListener('mousemove', moveplayhead, true);
            // change current time
            music.currentTime = duration * clickPercent(event);
            music.addEventListener('timeupdate', timeUpdate, false);
        }
        onplayhead = false;
    }

    function moveplayhead(event) {
        var newMargLeft = event.clientX - getPosition(timeline);

        if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
            playhead.style.marginLeft = newMargLeft + "px";
        }
        if (newMargLeft < 0) {
            playhead.style.marginLeft = "0px";
        }
        if (newMargLeft > timelineWidth) {
            playhead.style.marginLeft = timelineWidth + "px";
        }
    }

    function timeUpdate() {
        var playPercent = timelineWidth * (music.currentTime / duration);
        playhead.style.marginLeft = playPercent + "px";
        if (music.currentTime == duration) {
            pButton.className = "";
            pButton.className = "play";
        }
    }

    function play() {
        if (music.paused) {
            music.play();
            pButton.className = "";
            pButton.className = "pause";
        } else { // 
            music.pause();
            pButton.className = "";
            pButton.className = "play";
        }
    }

    music.addEventListener("canplaythrough", function() {
        duration = music.duration;
    }, false);

    function getPosition(el) {
        return el.getBoundingClientRect().left;
    }

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
   
    //sec6 텍스트 가로로 움직이기
    var offset1 = (wScroll - $(".mov1").offset().top) * 0.8;
    var offset2 = (wScroll - $(".mov2").offset().top) * -0.4;
    var offset3 = (wScroll - $(".mov3").offset().top) * 0.5;
    var offset4 = (wScroll - $(".mov4").offset().top) * -0.3;
    
    $(".mov1").css({"transform":"translateX(" + offset1 +"px)"});
    $(".mov2").css({"transform":"translateX(" + offset2 +"px)"});
    $(".mov3").css({"transform":"translateX(" + offset3 +"px)"});
    $(".mov4").css({"transform":"translateX(" + offset4 +"px)"});

    //sec2 스크롤 내릴때 나타나기
    if (wScroll > $("#content1").offset().top - $(window).height()/1.5) {
        $(".txt").addClass("show");
    }
    if (wScroll > $("#content2").offset().top - $(window).height()/1.5) {
        $(".sec2 .introduce").addClass("show");
    }
    if(wScroll > $("#content3").offset().top - $(window).height()/1.5) {
        $(".sec3").addClass("show");
    }
    if (wScroll > $("#content4").offset().top - $(window).height()/1.5) {
        $(".sec4").addClass("show");
    }
    if (wScroll > $("#content6").offset().top - $(window).height()/1.5) {
        $(".sec6").addClass("show");
    }
    if (wScroll > $("#content6 .sec6 .s1").offset().top - $(window).height()/1.5) {
        $(".sec6 .s1").addClass("show");
    }
    if (wScroll > $("#content6 .sec6 .s2").offset().top - $(window).height()/1.1) {
        $(".sec6 .s2").addClass("show");
    }
    if (wScroll > $("#content6 .sec6 .s3").offset().top - $(window).height()/1.1) {
        $(".sec6 .s3").addClass("show");
    }
    if (wScroll > $("#content6 .sec6 .s4").offset().top - $(window).height()/1.1) {
        $(".sec6 .s4").addClass("show");
    }
    if (wScroll > $("#content6 .sec6 .s5").offset().top - $(window).height()/1.1) {
        $(".sec6 .s5").addClass("show");
    }
    if (wScroll > $("#content8").offset().top - $(window).height()/1.5) {
        $(".sec8").addClass("show");
    }
    if (wScroll > $("#content9").offset().top - $(window).height()/1.5) {
        $(".sec9").addClass("show");
    }
});
//sec4 점수나타나게 마우스오버 효과
$(function(){
  $(".hov1").mouseenter(function(){
    $(".shw1").addClass("show");
  });
  $(".hov1").mouseleave(function(){
    $(".shw1").removeClass("show");
  });
});
$(function(){
  $(".hov2").mouseenter(function(){
    $(".shw2").addClass("show");
    $(".shw1").css("opacity", "0");
  });
  $(".hov2").mouseleave(function(){
    $(".shw2").removeClass("show");
    $(".shw1").css("opacity", "1");
  });
});
$(function(){
  $(".hov3").mouseenter(function(){
    $(".shw3").addClass("show");
    $(".shw1").css("opacity", "0");
  });
  $(".hov3").mouseleave(function(){
    $(".shw3").removeClass("show");
    $(".shw1").css("opacity", "1");
  });
});
$(function(){
  $(".hov4").mouseenter(function(){
    $(".shw4").addClass("show");
    $(".shw1").css("opacity", "0");
  });
  $(".hov4").mouseleave(function(){
    $(".shw4").removeClass("show");
    $(".shw1").css("opacity", "1");
  });
});
$(function(){
  $(".hov5").mouseenter(function(){
    $(".shw5").addClass("show");
    $(".shw1").css("opacity", "0");
  });
  $(".hov5").mouseleave(function(){
    $(".shw5").removeClass("show");
    $(".shw1").css("opacity", "1");
  });
});
$(function(){
  $(".hov6").mouseenter(function(){
    $(".shw6").addClass("show");
    $(".shw1").css("opacity", "0");
  });
  $(".hov6").mouseleave(function(){
    $(".shw6").removeClass("show");
    $(".shw1").css("opacity", "1");
  });
});

/*accordion menu*/
$(".btn1").click(function(e){
    e.preventDefault();
    //$(".tog1").slideToggle();
    $(".btn1").toggleClass("open");
    //cute dog 애니메이션만 보이게하기
    $(".left .frame1").css("display","block");
    $(".left .frame2").css("display","none");
    $(".left .frame3").css("display","none");
    $(".left .frame4").css("display","none");
    $(".left .frame5").css("display","none");
    //tog1이 펼쳐지면 tog2,3 애니메이션 코드 접어두기
    //$(".tog2").css("display","none");
    //$(".tog3").css("display","none");
    //$(".btn2").removeClass("open");
    //$(".btn3").removeClass("open");
});
$(".btn2").click(function(e){
    e.preventDefault();
    //$(".tog2").slideToggle();
    $(".btn2").toggleClass("open");
    //floating svg 애니메이션만 보이게 하기
    $(".left .frame1").css("display","none");
    $(".left .frame2").css("display","block");
    $(".left .frame3").css("display","none");
    $(".left .frame4").css("display","none");
    $(".left .frame5").css("display","none");
    //tog2이 펼쳐지면 tog1,3 애니메이션 코드 접어두기
    //$(".tog1").css("display","none");
    //$(".tog3").css("display","none");
    //$(".btn1").removeClass("open");
    //$(".btn3").removeClass("open");
});
$(".btn3").click(function(e){
    e.preventDefault();
    //$(".tog3").slideToggle();
    $(".btn3").toggleClass("open");
    //planet 애니메이션만 보이게하기
    $(".left .frame1").css("display","none");
    $(".left .frame2").css("display","none");
    $(".left .frame3").css("display","block");
    $(".left .frame4").css("display","none");
    $(".left .frame5").css("display","none");
    //tog3이 펼쳐지면 tog1,2 애니메이션 코드 접어두기
    //$(".tog1").css("display","none");
    //$(".tog2").css("display","none");
    //$(".btn1").removeClass("open");
    //$(".btn2").removeClass("open");
  });
$(".btn4").click(function(e){
    e.preventDefault();
    //$(".tog4").slideToggle();
    $(".btn4").toggleClass("open");
    //planet 애니메이션만 보이게하기
    $(".left .frame1").css("display","none");
    $(".left .frame2").css("display","none");
    $(".left .frame3").css("display","none");
    $(".left .frame4").css("display","block");
    $(".left .frame5").css("display","none");
    //tog3이 펼쳐지면 tog1,2 애니메이션 코드 접어두기
    //$(".tog1").css("display","none");
    //$(".tog2").css("display","none");
    //$(".btn1").removeClass("open");
    //$(".btn2").removeClass("open");
});
$(".btn5").click(function(e){
    e.preventDefault();
    //$(".tog5").slideToggle();
    $(".btn5").toggleClass("open");
    //planet 애니메이션만 보이게하기
    $(".left .frame1").css("display","none");
    $(".left .frame2").css("display","none");
    $(".left .frame3").css("display","none");
    $(".left .frame4").css("display","none");
    $(".left .frame5").css("display","block");
    //tog3이 펼쳐지면 tog1,2 애니메이션 코드 접어두기
    //$(".tog1").css("display","none");
    //$(".tog2").css("display","none");
    //$(".btn1").removeClass("open");
    //$(".btn2").removeClass("open");
});