const observer = new IntersectionObserver((entries) => {
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
    observer.observe(section);
});