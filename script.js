let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides-content');
    const totalSlides = document.querySelectorAll('.slide-content').length;
    const dots = document.querySelectorAll('.dot-content');

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Обновляем активное состояние точек
    dots.forEach(dot => dot.classList.remove('active-content'));
    dots[currentIndex].classList.add('active-content');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

// Автоматически показываем первый слайд и активируем первую точку при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
