const $document = $(document);
const $body = $('body');
const $sidebar = $('#sidebar');
const $navigationButton = $('#navigation-button');

const getVerticalScrollbarWidth = () =>
  window.innerWidth - document.documentElement.clientWidth;

const navigation = {
  $element: $('#navigation'),
  classTrigger: 'navigation_show',
  onClick() {
    if (this.$element.hasClass(this.classTrigger)) {
      this.$element.css('padding-right', '');
      $sidebar.css('padding-right', '');
      $body.css({ 'padding-right': '', overflow: '' });
      $document.off('keydown', this.onKeydown);
    } else {
      this.$element.css('padding-right', `${getVerticalScrollbarWidth()}px`);
      if (window.matchMedia('(max-width: 992px)').matches) {
        const paddingRight = parseInt($sidebar.css('padding-right'), 10);
        $sidebar.css(
          'padding-right',
          `${paddingRight + getVerticalScrollbarWidth()}px`,
        );
      }
      $body.css({
        'padding-right': `${getVerticalScrollbarWidth()}px`,
        overflow: 'hidden',
      });
      $document.on('keydown', this.onKeydown);
    }
    $sidebar.toggleClass('sidebar_navigation');
    $navigationButton.toggleClass('sidebar__navigation-button_close');
    this.$element.toggleClass(this.classTrigger);
  },
  onKeydown(event) {
    const ESCAPE_KEY_CODE = 27;
    if (
      (event.keyCode && event.keyCode === ESCAPE_KEY_CODE) ||
      (event.key && event.key === 'Escape')
    ) {
      event.preventDefault();
      this.onClick();
    }
  },
  init() {
    this.onClick = this.onClick.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    $navigationButton.on('click', this.onClick);
  },
};

navigation.init();
