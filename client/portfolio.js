
Template.interschool.rendered = init;
Template.debrecen.rendered = init;
Template.eden.rendered = init;
Template.felcra.rendered = init;
Template.inspiration.rendered = init;
Template.kingspan.rendered = init;
Template.valley.rendered = init;
Template.vivienda.rendered = init;
Template.detached.rendered = init;
Template.bicycle.rendered = init;




function init(){
	$('.flexslider').flexslider({
        useCSS: true,
        directionNav: true,
        start: function(slider) {
	    	$('.slides li img').click(function(event){
	        	event.preventDefault();
	        	slider.flexAnimate(slider.getTarget("next"));
	    	});
    	}
    });

    $('.pf-about').addClass("active")
}
