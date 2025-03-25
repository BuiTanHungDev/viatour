$(document).ready(function () {
    console.log("<------JS Ready-------->"); 

    let $header = $(".header");
    let lastScrollY = $(window).scrollTop();

    $(window).on("scroll", function () {
        let currentScrollY = $(window).scrollTop();

        if (currentScrollY > 50) {
            if (currentScrollY > lastScrollY) {
                $header.addClass("hidden"); 
            } else {
                $header.removeClass("hidden");
            }
        }
        lastScrollY = currentScrollY;
    });

    $(".header__navbar--item--link").on("click", function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định

        let targetSelector = $(this).data("target");
        let $targetSection = $(targetSelector);

        if ($targetSection.length) {
            $("html, body").animate({
                scrollTop: $targetSection.offset().top - 88 // Trừ đi chiều cao header
            }, 600, "swing");

            $(".header__navbar--item").removeClass("active");

            $(this).parent().addClass("active");
        }
    });

    // Slider
   // Hàm khởi tạo Slick Slider
   function initSlickSlider(selector, slidesToShow) {
    $(selector).slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    });
}

// Khởi tạo sliders
initSlickSlider('.destination-trending-slider', 8);
initSlickSlider('.customer-review-slider', 1);
});
