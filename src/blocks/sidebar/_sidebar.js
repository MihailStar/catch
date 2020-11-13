const $window = $(window);

const sidebar = {
  $element: $('#sidebar'),
  classTrigger: 'sidebar_show',
  onScroll() {
    if ($window.scrollTop() > 30) {
      this.$element.addClass(this.classTrigger);
    } else {
      this.$element.removeClass(this.classTrigger);
    }
  },
  init() {
    this.onScroll = this.onScroll.bind(this);
    $window.one('load', this.onScroll).on('scroll', this.onScroll);
  },
};

sidebar.init();
