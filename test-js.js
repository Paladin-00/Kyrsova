// Другий слайдер
const deliveryTrack = document.querySelector('.slider-services');
const prevBtnDelivery = document.querySelector('.prev-services-btn');
const nextBtnDelivery = document.querySelector('.next-services-btn');
const deliverySlides = document.querySelectorAll('.slide-services');
const deliverySlidesToShow = 3; // Скільки слайдів видно одночасно в другому слайдері
const totalDeliverySlides = deliverySlides.length;
let currentDeliverySlide = 0;

// Функція для оновлення положення другого слайдера
function updateDeliverySliderPosition() {
    const offset = -(currentDeliverySlide * (91 / deliverySlidesToShow + 3));
    deliveryTrack.style.transform = `translateX(${offset}%)`;
}

// Обробник для кнопки "Назад" у другому слайдері
prevBtnDelivery.addEventListener('click', () => {
    if (currentDeliverySlide > 0) {
        currentDeliverySlide--;
    } else {
        currentDeliverySlide = totalDeliverySlides - deliverySlidesToShow;
    }
    updateDeliverySliderPosition();
});

// Обробник для кнопки "Вперед" у другому слайдері
nextBtnDelivery.addEventListener('click', () => {
    if (currentDeliverySlide < totalDeliverySlides - deliverySlidesToShow) {
        currentDeliverySlide++;
    } else {
        currentDeliverySlide = 0;
    }
    updateDeliverySliderPosition();
});

// Автоматично показуємо перший слайд другого слайдера при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    updateDeliverySliderPosition();
});
