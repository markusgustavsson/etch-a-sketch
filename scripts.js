
$(document).ready(function(){
	for (var x=0; x<16 ; x++){
		for (var y=0; y<16; y++) {
			var $box = $("<div class='box'></div>");
			$box.appendTo('#container');
		}
	}
 //$('.box').hover(function(){
//	$(this).fadeOut(500);
//	$(this).fadeIn(500);
//});	
$('.box').mouseenter(function() {
	$(this).addClass("hovered");
 });

});

 function reset(){
	$(".hovered").removeClass('hovered');
	}