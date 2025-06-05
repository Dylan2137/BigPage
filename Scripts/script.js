const hamMenu = document.querySelector('.ham-menu');
const menu = document.querySelector('.menu');
const timelineButton = document.querySelector('.timeline-button');
const timeline = document.querySelector('.timeline-line');
const content = document.querySelector('.content');
const timelineItems = document.querySelectorAll('.ancient-timeline, .medieval-timeline, .rene-timeline, .war-timeline, .modern-timeline, .present-timeline');
const btn = document.getElementById('back-to-top');
const glue = document.getElementById('glue');
const overlay = document.querySelector('.overlay');
const parallaxBg = document.querySelector('.parallax-bg');

hamMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});
if (timelineItems){
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

if (timelineButton){
    timelineButton.addEventListener('click', () => {
        timeline.classList.toggle('active');
        content.classList.toggle('active');
    });
}


window.addEventListener('scroll', () => {
    const scrolled = pageYOffset;
    parallaxBg.style.transform = `translateY(${scrolled * -0.4}px)`;
    if (window.scrollY > 300) {
        btn.classList.add('show');
    }
    else {
        btn.classList.remove('show');
    }
});
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
function toggleHam(){
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}
function toggleVideo(){
    glue.hidden = false;
    document.body.classList.add('dark');
    overlay.classList.add('active');

}
function closeVideo(){
    glue.hidden = true;
    overlay.classList.remove('active');
}