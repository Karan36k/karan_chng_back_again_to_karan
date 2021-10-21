// set up text to print, each item in array is new line
var aText = new Array(
"Lifelong Learner, currently working on building a healthcare system for the next COVID.",
"I'm a renaissance polymath with sheer interests in Data Processing, Machine Learning, Web Development and Model Deployment.",
"In my free time, I like playing chess ♛, reading books 📕 & cooking new dishes 🍲."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 1000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

  jQuery(document).ready(function(){ 
	
	/* ---------------------------------------------------------------------- */
	/*	Custom Functions
	/* ---------------------------------------------------------------------- */

	// Logo
	var $logo 	= $('#logo');

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
	// Show logo 
	$('.menu .tabs a').click(function() {
	  $logo.fadeIn('slow');
	});
	// Hide logo
	$('.tab-profile').click(function() {
	  $logo.fadeOut('slow');
	});



	$('#yellow-color').click(function(e){
		$(".main-wrapper-resume").attr("id", "yellow");
	});
    $('#red-color').click(function(e){
		$(".main-wrapper-resume").attr("id", "red");
	});
	$('#blue-color').click(function(e){
		$(".main-wrapper-resume").attr("id", "blue");
	});

	$('#green-color').click(function(e){
		$(".main-wrapper-resume").attr("id", "green");
	});

	$(".setting-icon").click(function(){
		$(".color-box").toggleClass("main");
	});



	/* ---------------------------------------------------------------------- */
	/*	Resume
	/* ---------------------------------------------------------------------- */
	
	// Rating bars
	$(".skills li .rating").each(function(index,e) { 

		// Vars
		var 
			$ratNum = 7,
			$rat = $(e).attr("data-rat"),
			$point = "<span></span>";

		// Append points
		while($ratNum > 0){
		     $(e).append($point);
		     $ratNum--;
		}

		$(e).find("span").each(function(index,e) { 
			if(index >= $rat) return false;
			// Append Disabled Rats
			$(e).animate({
			    opacity: 1
			  });
		});

    });

	/* ---------------------------------------------------------------------- */
	/*	About
	/* ---------------------------------------------------------------------- */
	
	// Profile Photo Slider
	 $(".photo-inner ul").carouFredSel({
        direction           : "left",
 	    circular: true,
        auto    			: true,
        scroll 			: {
            items           : 1,
            fx 				: 'crossfade',
            duration        : 1500,                        
            wipe    		: true
        },
	    swipe: {
	        onTouch: true
	    },
        items: {
            width: 153
        }           
    });

	var $catsfilter = $('.cats-filter');
	$catsfilter.find('a').click(function(){
		var currentOption = $(this).attr('data-filter');
		$(this).parent().parent().find('a').removeClass('current');
		$(this).addClass('current');
	});
	var $plist = $('#portfolio-list');
	var $pfilter = $('#portfolio-filter');

	$plist.isotope({
		filter : '*',
		layoutMode : 'masonry',
		animationOptions : {
			duration : 750,
			easing : 'linear'
		}
	});
	$pfilter.find('a').click(function(){
		var selector = $(this).attr('data-filter');
		$plist.isotope({
			filter : selector,
			animationOptions : {
				duration : 750,
				easing   : 'linear',
				queue    : false,
			}
	});
		return false;
	});
	/* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $content 		= $("#content");
	
	// Run easytabs
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:".tmenu",
	  tabActiveClass	:'active',
	});

	
	// Hover menu effect
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);

	// Menu Navigation
	 $(".menu .tabs").carouFredSel({
        responsive          : true,
        direction           : "left",
 	    circular: false,
    	infinite: false,
        pagination  		: "#menu-controls",  
        auto    			: false,
        scroll 			: {
            items           : 1,
            duration        : 300,                        
            wipe    : true
        },
		prev	: {	
			button	: "#menu-prev",
			key		: "right"
		},
		next	: { 
			button	: "#menu-next",
			key		: "left"
		},
	    swipe: {
	        onTouch: true
	    },
        items: {
            width: 140,
            visible: {
              min: 2,
              max: 5
            }
        }           
    });
	/* ---------------------------------------------------------------------- */
	/*	Cats Filter
	/* ---------------------------------------------------------------------- */ 
	
	var $catsfilter 		= $('.cats-filter');

	// Copy categories to item classes
	$catsfilter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$(this).parent().parent().find('a').removeClass('current');
		$(this).addClass('current');
	});	

	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */ 
	
	// Needed variables
	var $plist	 	= $('#portfolio-list');
	var $pfilter 		= $('#portfolio-filter');
		
	// Run Isotope  
	$plist.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$pfilter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$plist.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	 
});	