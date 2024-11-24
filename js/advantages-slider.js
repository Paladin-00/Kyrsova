document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance = null; // Змінна для зберігання екземпляра Swiper

    const initSwiper = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 480) {
            if (!swiperInstance) {
                swiperInstance = new Swiper('.advantages__swiper', {
                    slidesPerView: 1,
                    loop: true, // Зациклене прокручування
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    
                });
            }
        } else if (swiperInstance) {
            swiperInstance.destroy(true, true); // Знищуємо Swiper, якщо він існує
            swiperInstance = null; // Скидаємо змінну
        }

        adaptGridLayout(); // Викликаємо функцію адаптації сітки
    };

    const adaptGridLayout = () => {
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        const screenWidth = window.innerWidth;

        if (swiperWrapper) {
            if (screenWidth > 768) {
                swiperWrapper.style.display = 'grid';
                swiperWrapper.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Сітка 4x2
                swiperWrapper.style.gap = '20px';
            } else if (screenWidth > 480 && screenWidth <= 768) {
                swiperWrapper.style.display = 'grid';
                swiperWrapper.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Сітка 2x4
                swiperWrapper.style.gap = '20px';
            } else {
                swiperWrapper.style.display = 'flex';
                swiperWrapper.style.flexDirection = 'row';
                swiperWrapper.style.gap = '0'; // Без проміжків
            }
        }
    };

    // Ініціалізація при завантаженні сторінки та зміні розміру
    window.addEventListener('load', initSwiper);
    window.addEventListener('resize', initSwiper);
});