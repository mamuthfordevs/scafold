$(document).ready(function () {
    $('.loader').animate({ width: '100%', opacity: 1 }, 1000, function(){
        $('.loader').animate({ width: '5%'}, 1000);
    });

    $('.box').animate({ opacity: 1 }, 1000);
});