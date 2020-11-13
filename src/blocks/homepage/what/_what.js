const carousel = {
  $element: $('#what-slider'),
  init(options) {
    if (this.$element.length) {
      this.$element.slick(options);
      this.$element
        .find('.slick-dots button')
        .wrapInner('<span class="visually-hidden"></span>');
    }
  },
};

carousel.init({
  accessibility: false,
  arrows: false,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 400,
});

const list = {
  $element: $('#what-list'),
  $items: null,
  classTrigger: 'what__item_hover',
  currentIndex: null,
  interval: null,
  duration: 2000,
  onMouseEnter(event) {
    event.preventDefault();
    this.$items.eq(this.currentIndex).removeClass(this.classTrigger);
    clearInterval(this.interval);
    this.interval = null;
  },
  onMouseLeave(event) {
    event.preventDefault();
    this.currentIndex = this.$items.index(event.target);
    this.$items.eq(this.currentIndex).addClass(this.classTrigger);
    this.interval = setInterval(this.switchVisibility, this.duration);
  },
  switchVisibility() {
    this.$items.eq(this.currentIndex).removeClass(this.classTrigger);
    this.currentIndex = (this.currentIndex += 1) % this.$items.length;
    this.$items.eq(this.currentIndex).addClass(this.classTrigger);
  },
  init() {
    if (this.$element.length) {
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.switchVisibility = this.switchVisibility.bind(this);
      this.$element
        .on('mouseenter', this.onMouseEnter)
        .on('mouseleave', this.onMouseLeave);
      this.$items = this.$element.find('.what__item');
      this.currentIndex = this.$items.length - 1;
      $('.what').one('transitionend', (event) => {
        if (event.target === event.currentTarget) {
          this.switchVisibility();
          this.interval = setInterval(this.switchVisibility, this.duration);
        }
      });
    }
  },
};

list.init();
