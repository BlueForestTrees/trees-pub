$.fn.inView = function(){
    if(!this.length) return false;
    var rect = this.get(0).getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

};

$(window).on('scroll',function(){



    var animData = {
        container: document.getElementById('bf'),
        renderer: 'svg',
        loop: false,
        prerender:true,
        autoplay: true,
        path: 'animes/ecrasement_v4.json'
    };

    if( $('#bf').inView() ) {
        bodymovin.loadAnimation(animData);
    }else {
        console.log('not visible');
    }

});


