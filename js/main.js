(function ($) {

	"use strict";
	var toggle = false;

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});






})(jQuery);

function printDiv(divName) {
	var printContents = document.getElementById(divName).innerHTML;
	var originalContents = document.body.innerHTML;
	document.body.innerHTML = printContents;
	$(document.body).children().children().find("#TestsDiv").append('<img src="../assets/img/favicon.ico" /><span style="color: black; font-style: normal; font-size: 30px;"> Spectevo Technologies</span> ')
	$(document.body).find("#info").find(".actionbtn").empty();

	window.print();
	

	document.body.innerHTML = originalContents;
}
    
   
