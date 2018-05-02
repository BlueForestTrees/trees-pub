var anim;
var elem = document.getElementById('hov');
var animData = {
    container: elem,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'animes/ecrasement_v4.json'
};


anim = bodymovin.loadAnimation(animData);

elem.addEventListener("mouseover", myScript);

function myScript(){
    anim.play();
}