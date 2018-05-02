var anim;
var elem = document.getElementById('bm');
var animData = {
    container: elem,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animes/ecrasement_v4.json'
};
anim = bodymovin.loadAnimation(animData);