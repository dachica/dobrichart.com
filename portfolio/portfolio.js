var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });


let thumbs = new Array();
        
        thumbs[0] = new Image();
        thumbs[0].src = "../3Dart/thumbs/knife1thmb.png";
        
        thumbs[1] = new Image();
        thumbs[1].src = "../3Dart/thumbs/knife2thmb.png";

        thumbs[2] = new Image();
        thumbs[2].src = "../3Dart/thumbs/knife3thmb.png";

        thumbs[3] = new Image();
        thumbs[3].src = "../3Dart/thumbs/ERSATZ FALCHIONthmb.png";


        let bulletArray = document.getElementsByClassName('swiper-pagination-bullet');

        bulletArray[0].innerHTML = new Image("../3Dart/thumbs/knife1thmb.png");




