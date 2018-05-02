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



    if( $('#anim').inView() ) {
        bodymovin.loadAnimation({
            container: document.getElementById('anim'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            rendererSettings: {
                progressiveLoad:false
            },
            path: 'animes/ecrasement_v4.json'
        });
    }else {
        console.log('not visible');
    }

});
