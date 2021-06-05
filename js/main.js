(function($) {
    'use strict';
    jQuery(document).ready(function (){

        jQuery('#camera_wrap_4').camera({
            loader: 'bar',
            pagination: false,
            thumbnails: false,
            hover: false,
            playPause: false,
            pauseOnClick: false,
            overlayer: false,
            portrait:true,
            loaderColor: '#ffc400',
            loaderBgColor: '#eee',
            loaderOpacity: 1,
            opacityOnGrid: false,
            opacityOnGrid: true,
            imagePath: '../images/'
        });

    });
        //Initialize product gallery

})(jQuery);




