$(document).ready(function () {
   var firstClick = $("#clickMain");
   var button = $("#clickMain .clickMain");
   var star11 = $("#radius .star1");
   var star1 = $("#radius .star2");
   var star2 = $("#radius .star3");
   var star3 = $("#radius .star4");
   var star4 = $("#radius .star5");
   var star5 = $("#radius .star6");
   var star6 = $("#radius .star7");
   var star7 = $("#radius .star01");
   var star8 = $("#radius .star02");
   var star9 = $("#radius .star03");
   var star10 = $("#radius .star04");
   var text = $("#clickMain .clickMain h1");


//    beforeRadius.css({"content":"",
//                     "position":"absolute",
//                     "width":"138%",
//                     "height":"85px",
//                     "border-radius":"50%",
//                     "top":"-19%",
//                     "left":"-17%",
//                     "border":"1px solid yellow"
//                 })

//     afterRadius.css({"content":"",
//                     "position":"absolute",
//                     "width":"191%",
//                     "height":"120px",
//                     "border-radius":"50%",
//                     "top":"-46%",
//                     "left":"-42%",
//                     "border":"1px solid yellow"
//                 })

   firstClick.click(function(){
       text.css({"opacity":"0"});
    setTimeout(function(){
        star2.css({"opacity":"1","animation":"star1 1s linear","animation-fill-mode":"forwards","animation-duration":"1s"});
    }, 300);
    setTimeout(function(){
       star3.css({"opacity":"1","animation":"star2 1s linear","animation-fill-mode":"forwards"});
    }, 600);
    setTimeout(function(){
       star4.css({"opacity":"1","animation":"star3 1s linear","animation-fill-mode":"forwards"});
    }, 900);
    setTimeout(function(){
       star5.css({"opacity":"1","animation":"star4 1s linear","animation-fill-mode":"forwards"});
    }, 1200);
    setTimeout(function(){
       star6.css({"opacity":"1","animation":"star5 1s linear","animation-fill-mode":"forwards"});
    }, 1500);
    setTimeout(function(){
       star7.css({"opacity":"1","animation":"star6 1s linear","animation-fill-mode":"forwards"});
    }, 1800);
    setTimeout(function(){
       star8.css({"opacity":"1","animation":"star7 1s linear","animation-fill-mode":"forwards"});
    }, 2100);
    setTimeout(function(){
       star9.css({"opacity":"1","animation":"star8 1s linear","animation-fill-mode":"forwards"});
    }, 2400);
    setTimeout(function(){
       star10.css({"opacity":"1","animation":"star9 1s linear","animation-fill-mode":"forwards"});
    }, 2700);
    setTimeout(function(){
       star11.css({"opacity":"1","animation":"star10 1s linear","animation-fill-mode":"forwards"});
    }, 3000);
    setTimeout(function(){
       star1.css({"opacity":"1","animation":"star11 1s linear","animation-fill-mode":"forwards"});
    }, 3300);
    setTimeout(function(){
        $("#radius").css({"animation":"revolution 10s linear infinite"});
     }, 4500);
   })


   setTimeout(function(){
    star2.css({"animation":"star1Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star3.css({"animation":"star2Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star4.css({"animation":"star3Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star5.css({"animation":"star4Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star6.css({"animation":"star5Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star7.css({"animation":"star6Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star8.css({"animation":"star7Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star9.css({"animation":"star8Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star10.css({"animation":"star9Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star11.css({"animation":"star10Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);
setTimeout(function(){
   star1.css({"animation":"star11Back 40s linear","animation-fill-mode":"forwards"});
}, 10000);   

setTimeout(function(){
    star1.css({"transition":"all 5s linear","opacity":"0"})
    star2.css({"transition":"all 5s linear","opacity":"0"})
    star3.css({"transition":"all 5s linear","opacity":"0"})
    star4.css({"transition":"all 5s linear","opacity":"0"})
    star5.css({"transition":"all 5s linear","opacity":"0"})
    star6.css({"transition":"all 5s linear","opacity":"0"})
    star7.css({"transition":"all 5s linear","opacity":"0"})
    star8.css({"transition":"all 5s linear","opacity":"0"})
    star9.css({"transition":"all 5s linear","opacity":"0"})
    star10.css({"transition":"all 5s linear","opacity":"0"})
    star11.css({"transition":"all 5s linear","opacity":"0"})
}, 45000);

setTimeout(function(){
    button.css({"animation":"getSmall 6s linear","animation-fill-mode":"forwards"});
}, 50000);

setTimeout(function(){
    button.css({"animation":"smallBigAnimate 1s linear infinite"});
}, 56000);

setTimeout(function(){
    button.css({"animation":"stopSmallBigAnimate 1s linear infinite","transition":"all 1s ease-in-out","opacity":"0"});
    $("#radius").css({"animation":"revolutionStop 0.1s linear infinite"});
    star1.css({"animation":"star1Bomb 1s linear","animation-fill-mode":"forwards","opacity":"1"})
    star2.css({"animation":"star2Bomb 2s linear","animation-fill-mode":"forwards","opacity":"1"})
    star3.css({"animation":"star3Bomb 1.4s linear","animation-fill-mode":"forwards","opacity":"1"})
    star4.css({"animation":"star4Bomb 1.2s linear","animation-fill-mode":"forwards","opacity":"1"})
    star5.css({"animation":"star5Bomb 0.5s linear","animation-fill-mode":"forwards","opacity":"1"})
    star6.css({"animation":"star6Bomb 1.1s linear","animation-fill-mode":"forwards","opacity":"1"})
    star7.css({"animation":"star7Bomb 0.7s linear","animation-fill-mode":"forwards","opacity":"1"})
    star8.css({"animation":"star8Bomb 1.3s linear","animation-fill-mode":"forwards","opacity":"1"})
    star9.css({"animation":"star9Bomb 0.6s linear","animation-fill-mode":"forwards","opacity":"1"})
    star10.css({"animation":"star10Bomb 1.9s linear","animation-fill-mode":"forwards","opacity":"1"})
    star11.css({"animation":"star11Bomb 0.8s linear","animation-fill-mode":"forwards","opacity":"1"})
}, 59000);
})


