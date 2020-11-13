const carousel = {
  $element: $('#clients-slider'),
  init(options) {
    if (this.$element.length) {
      this.$element.slick(options);
      this.$element
        .find('.slick-arrow')
        .wrapInner('<span class="visually-hidden"></span>').prepend(`
          <svg
            class="icon-arrow"
            width="14"
            height="9"
            aria-hidden="true"
            focusable="false"
          >
            <use xlink:href="#icon-arrow" />
          </svg>`);
    }
  },
};

carousel.init({
  accessibility: false,
  arrows: true,
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 400,
  vertical: true,
  verticalSwiping: true,
});
