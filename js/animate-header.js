jQuery(function () {

    $(document).ready(function(){
        $(".img-hale").animate({top:"70%",right:"60%",
        height:"0px",width:"0px",
        opacity : "0.2"},
        1);
    });

    function start1(){
		$(window).ready(function(){
		$(".img-hale").delay(2700).animate({top: "0%",right:"0%",height:"80%",width:"100%",opacity : "1"}, 2000);

        })
    }
    
    $(window).ready(function(){
        $(".wrap-cart").animate({left: '65%'}, 2700,start1())
        $(".img-cart-2").animate({top: '65%'},2700)
    });

});
