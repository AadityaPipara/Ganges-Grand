const isMobile = window.innerWidth <= 768;
const isRoomPage = window.location.pathname.includes('room.html') && document.querySelector('.card-container') !== null;

if(isMobile && isRoomPage){
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const card = entry.target;
                if(card.classList.contains('slide-left')){
                    card.classList.add('slide-in-left');
                }
                else{
                    card.classList.add('slide-in-right');
                }
                cardObserver.unobserve(card);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.card-container .card').forEach((card,index) => {
        card.classList.remove('.slide-left', '.slide-right');
        if(index%2 === 0){
            card.classList.add('.slide-right')
        }
        else{
            card.classList.add('slide.left');
        }
        cardObserver.observe(card);
    });
}

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // find all slide-left and slide-right cards inside this section
            entry.target.querySelectorAll('.slide-left').forEach(el => el.classList.add('slide-in-left'));
            entry.target.querySelectorAll('.slide-right').forEach(el => el.classList.add('slide-in-right'));
            entry.target.querySelectorAll('.slide-up').forEach(el => el.classList.add('slide-in-up'));
            entry.target.querySelectorAll('.pop').forEach(el => el.classList.add('animate'));
            entry.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('animate'));

            observer.unobserve(entry.target); // animate once per section
        }
    });
}, { 
    threshold: isRoomsSection() ? 0.15 : 0.25,
    rootMargin: "0px 150px 0px 150px"
});

function isRoomsSection(){
    const isRoomPage = window.location.pathname.includes('room.html');
    const hasCardContainer = document.querySelector('.card-container') !== null;
    return isRoomPage && hasCardContainer;
}

// watches ALL sections that have data-animate-section attribute
document.querySelectorAll('[data-animate-section]').forEach(section => {
    if(isMobile && isRoomPage && section.closest('.card-container')) return;
    sectionObserver.observe(section);
});
