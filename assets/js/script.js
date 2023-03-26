$(function () {
   'use strict';

   $(`.product_slick_slider`).slick({
      slidesToShow:4,
      prevArrow:`<i class=" product_slider_icon_left fa-solid fa-chevron-left">`,
      nextArrow:`<i class=" product_slider_icon_right fa-solid fa-chevron-right">`,             
   })

   $(".count_down").countdown("2024/4/24", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            "<div class='deals_countdown_item'><h3>%d</h3><p>Days</p></div>" +
            "<span>:</span>" +
            "<div class='deals_countdown_item'><h3>%H</h3><p>Hour</p></div>" +
            "<span>:</span>" +
            "<div class='deals_countdown_item'><h3>%M</h3><p>Minutes</p></div>" +
            "<span>:</span>" +
            "<div class='deals_countdown_item'><h3>%S</h3><p>Sec</p></div>"
        )
      );
    });
})
   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
   const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))   