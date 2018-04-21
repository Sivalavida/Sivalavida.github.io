/*
Theme Name: IAMX
Author: Ahmed Faruk
Author URL: farukahmed.com
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/

jQuery(function ($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).ready(function() {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(350).fadeOut('slow');
    });




    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function(){
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.skill-progress').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });
    
    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor:'#68c3a3',
                trackColor:'rgba(255,255,255,0.2)',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    (function () {

        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item'
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });


    }());


    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    (function () {
      $('.image-link1').magnificPopup({
        items: [
      {
        src: "assets/images/works/11.png",
        title: 'NUS Bus App'
      },
      {
        src: "assets/images/works/12.png",
        title: 'List of Busstops'
      },
      {
        src: "assets/images/works/13.png", // Dynamically created element
        title: 'NUS Shuttle Bus Timings'
      },
      {
        src: "assets/images/works/14.png", // HTML string
        title: 'Bus Routes'
      },
      {
        src: "assets/images/works/15.png", // CSS selector of an element on page that should be used as a popup
        title: 'Public Bus Timings'
      },
      {
        src: "assets/images/works/16.png", // CSS selector of an element on page that should be used as a popup
        title: 'MRT and BUS timing Schedule'
      }
    ],

        gallery: {
          enabled: true
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type:'image'

      });

    }());

    (function () {
      $('.image-link2').magnificPopup({
        items: [
      {
        src: "assets/images/works/21.jpg",
        title: 'AnyFood WebApp - a surprise food delivery platform'
      },
      {
        src: "assets/images/works/22.png",
        title: 'Landing page'
      },
      {
        src: "assets/images/works/23.jpg", // Dynamically created element
        title: 'Food Options'
      }
    ],

        gallery: {
          enabled: true
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type:'image'

      });

    }());

    (function () {
      $('.image-link3').magnificPopup({
        items: [
      {
        src: "assets/images/works/31.jpeg",
        title: 'ShareIt WebApp - a platform to loan and borrow items'
      },
      {
        src: "assets/images/works/32.png",
        title: 'Available Categories'
      },
      {
        src: "assets/images/works/33.png", // Dynamically created element
        title: 'Some of the existing Items'
      },
      {
        src: "assets/images/works/34.png", // HTML string
        title: 'Item Display Page'
      },
      {
        src: "assets/images/works/35.png", // CSS selector of an element on page that should be used as a popup
        title: 'Profile Page'
      }
    ],

        gallery: {
          enabled: true
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type:'image'

      });

    }());



    // -------------------------------------------------------------
    // Fit Vids
    // -------------------------------------------------------------
    (function () {
        $(".video-container").fitVids();
    }());





    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function() {

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         
        }else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile:  false

        }).init();

    }());

    // -------------------------------------------------------------
    // Google Map
    // -------------------------------------------------------------

    // (function () {
    //     var myLatlng = new google.maps.LatLng(41.372641, -74.687387);

    //         var styles = [
    //             {
    //                 featureType: "landscape",
    //                 stylers: [
    //                     { color: '#f7f7f7' }
    //                 ]
    //             },{
    //                 featureType: "natural",
    //                 stylers: [
    //                     { hue: '#00ffe6' }
    //                 ]
    //             },{
    //                 featureType: "road",
    //                 stylers: [
    //                     { hue: '#fff' },
    //                     { saturation: -70 }
    //                 ]
    //             },{
    //                 featureType: "building",
    //                 elementType: "labels",
    //                 stylers: [
    //                     { hue: '' }
    //                 ]
    //             },{
    //                 featureType: "poi", //points of interest
    //                 stylers: [
    //                     { hue: '' }
    //                 ]
    //             }
    //         ];

    //         var mapOptions = {
    //             zoom: 15,
    //             scrollwheel: false,
    //             center: myLatlng,
    //             mapTypeId: google.maps.MapTypeId.ROADMAP,
    //             disableDefaultUI: true,
    //             styles: styles
    //         }
    //         var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

    //         var marker = new google.maps.Marker({
    //             position: myLatlng,
    //             map: map,
    //             animation: google.maps.Animation.DROP,
    //             title: 'Hello World!'
    //         });

    //         var contentString = '' +
    //                 '' +
    //                 '';

    //         var infowindow = new google.maps.InfoWindow({
    //             content: contentString
    //         });

    //         google.maps.event.addListener(marker, 'click', function () {
    //             infowindow.open(map, marker);
    //         });

    // }());


});


// // model
// function openModal() {
//   document.getElementById('myModal').style.display = "block";
// }

// function closeModal() {
//   document.getElementById('myModal').style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// IMAGES = [["11.png", "12.png", "13.png", "14.png", "15.png", "16.png"], ["21.jpg"], ["31.jpeg"]];
// function initSlides(n){
//     imagesForModel = IMAGES[n+1];
//     for 
//     var slides = document.getElementsByClassName("mySlides"); 
//     var modelContent = document.getElementById

//     for (i=0; i<imagesForModel.length; i++){
//         var s = "<div class=\"mySlides\"> <div class=\"numbertext\">1 / " + String.parseInt(i+1) + " </div> <img src=\"" + imagesForModel[i] + "\" style=\"width:100%\"> </div>"
//         modelContent.appendChild(s);
//     }


// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }




