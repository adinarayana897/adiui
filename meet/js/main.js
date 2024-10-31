/*==================================
Template Name: Reptro 
Description: Reptro is a Multipurpose Business Template.
Version: 1.0
====================================*/   
(function ($) {
    "use strict";


    /*==============================
      Google Map
    ================================*/ 
    function myMap() {
      var mapCanvas = document.getElementById("map");
      var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2), zoom: 10
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
    }



    jQuery(document).ready(function () {

      /*==============================
        Mobile Menu
      ================================*/ 
        jQuery('.main-menu nav').meanmenu({
          meanScreenWidth: '991',
          meanMenuContainer: '.mobile-menu',
          meanRevealPosition: 'right'
        });

      /*==============================
        Home Slider One
      ================================*/ 
      $("#slider-one").owlCarousel({
          loop:true,
          nav:true,   
          autoplay:false,
          dots:false,
          navText: ["<i class='icofont-rounded-left'></i>","<i class='icofont-rounded-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  autoplay:true,
                  autoplayHoverPause:true
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
          
      });
      /*==============================
        Home Slider Two
      ================================*/ 
      $("#slider-two").owlCarousel({
          loop:true,
          nav:true,   
          autoplay:false,
          dots:false,
          navText: ["<i class='icofont-long-arrow-left'></i>","<i class='icofont-long-arrow-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  autoplay:true,
                  autoplayHoverPause:true
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
          
      });
      /*==============================
        Home Slider Three
      ================================*/ 
      $("#slider-three").owlCarousel({
          loop:true,
          nav:false,   
          autoplay:false,
          dots:true,
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  autoplay:true,
                  autoplayHoverPause:true,
                  dots:false
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
          
      });

      /*==============================
        About Page Owl Carousel Testimonial One
      ================================*/ 
        $('#testimonial-2').owlCarousel({

            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            loop:true,
            dots: false,
            singleItem:true,
            // margin:10,
            navText: ["<i class='icofont-long-arrow-left'></i>","<i class='icofont-long-arrow-right'></i>"],
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            smartSpeed:450,
            responsive:{
              0:{
                items: 1,
                nav: false
              },
              768:{
                items: 1,
                nav: true
              },
              991:{
                items: 1,
                nav: true,
                singleItem:true,
              }
            }
        });

      /*==============================
        Owl Carousel Testimonial Two
      ================================*/ 
       $('#testimonial').owlCarousel({
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            loop:true,
            dots: false,
            singleItem:true,
            singleItem:true,
            // margin:10,
            navText: ["<i class='icofont-long-arrow-left'></i>","<i class='icofont-long-arrow-right'></i>"],
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            smartSpeed:450,
            responsive:{
              0:{
                items: 1,
                nav: false
              },
              768:{
                items: 1,
                nav: true
              },
              991:{
                items: 1,
                nav: true,
                singleItem:true,
              }
            }
        });

      /*==============================
        Owl Carousel Client Logo
      ================================*/ 
        $('#client-logo').owlCarousel({

            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            loop:true,
            dots: false,
            singleItem:true,
            // margin:10,
            responsive:{
              0:{
                items: 1,
                nav: false
              },
              768:{
                items: 3,
                nav: false
              },
              991:{
                items: 6,
                nav: false,
                singleItem:false,
              }
            }
        });

          /*====================================
            Counter Js
          ======================================*/ 
          $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },

            {

              duration: 8000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });  
            
            

          });


    });



      /*==============================
        Sticky Menu Header
      ================================*/ 
    var windows = $(window);
    var sticky = $('.header-sticky');

    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll < 300) {
            sticky.removeClass('is-sticky');
        }else{
            sticky.addClass('is-sticky');
        }
    });

      // ==============================
      //  Wow animate js
      // ================================ 
       new WOW().init({
           mobile: false,
      });

      /*==============================
        Preloader js
      ================================*/ 
        var preLoader = $(window);
        preLoader.on("load", function () {
            var preloader = jQuery('#loading');
            var spinnerTime = jQuery('#loading-center');
            preloader.fadeOut();
            spinnerTime.delay(400).fadeOut('slow');
        });



      /*==============================
        Image Loaded jquery
      ================================*/ 
    $('.container').imagesLoaded( function() {
        //Isotop active js
        $('.grid').isotope({
          itemSelector: '.grid-item',
        });

        // filter items on button click
        $('.filter-button-group').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $('.grid').isotope({ filter: filterValue });
          $('.filter-button-group li').removeClass('active');
          $(this).addClass('active');
        });

    });

      /*==============================
        Scroll To Top
      ================================*/ 
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 300) {
          $(".scroll-top-top").fadeIn('600');
        }else{
          $(".scroll-top-top").fadeOut('700');
        }
    });


    $(window).resize(function() {
        if ($(window).width() <= 991) {
            $('.main-menu ul').removeClass('nav menu navbar-nav');
        } else {
           $('.main-menu ul').addClass('nav menu navbar-nav');
        }
    }).resize(); // trigger resize event initially


    // Top to Scroll 
    $(document).ready(function() {
        $(".scroll-top-top").on("click", function(){
           $('html, body').animate({scrollTop: 0}, 'slow');
        });
    });
    // Add current class
    jQuery(document).ready(function() {
      $(".single-page-accordion a.card-link").click(function(){
          $(".single-page-accordion a.card-link").removeClass('current');
          $(this).addClass("current");
      });
      $("#accordion .card-header a.card-link").click(function(){
          $("#accordion .card-header a.card-link").removeClass('current');
          $(this).addClass("current");
      });
      $(".home-accordion .card-header a.card-link").click(function(){
          $(".home-accordion .card-header a.card-link").removeClass('current');
          $(this).addClass("current");
      });

    });




})(jQuery);


