/**
 * 在簡報中加入進度條，這個script只會在目前的簡報中執行
 */
var BAR_ID = 'PROGRESS_BAR_ID';
var BAR_HEIGHT = 10; // px 設定Bar的高度，單位是px
var presentation = SlidesApp.getActivePresentation();

/**
 * Runs when the add-on is installed.
 * @param {object} e The event parameter for a simple onInstall trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode. (In practice, onInstall triggers always
 *     run in AuthMode.FULL, but onOpen triggers may be AuthMode.LIMITED or
 *     AuthMode.NONE.)
 */
function onInstall(e) {
  onOpen();
}

/**
 * 在外掛模組選單中顯示
 * Trigger for opening a presentation.
 * @param {object} e The onOpen event.
 */
function onOpen(e) {
  SlidesApp.getUi().createAddonMenu()
      .addItem('顯示進度條', 'createBars')
      .addItem('刪除進度條', 'deleteBars')
      .addItem('重新整理', 'createBars')
      .addToUi();
}

/**
 * 根據不同的頁數，產生長度不同的進度條
 */
function createBars() {
  deleteBars(); // 先清除之前產生的進度條
  var slides = presentation.getSlides(); //存取所有slides，得到一個list
  for (var i = 0; i < slides.length; ++i) {
    var ratioComplete = (i / (slides.length - 1));
    var x = 0;
    var y = presentation.getPageHeight() - BAR_HEIGHT; // bar的y位置
    var barWidth = presentation.getPageWidth() * ratioComplete;
    if (barWidth > 0) {
      var bar = slides[i].insertShape(SlidesApp.ShapeType.RECTANGLE, x, y,
                                      barWidth, BAR_HEIGHT); 
      bar.getBorder().setTransparent();
      bar.setLinkUrl(BAR_ID);
      bar.getFill().setSolidFill(SlidesApp.ThemeColorType.ACCENT6); 
    }
  }
}

/**
 * Deletes all progress bar rectangles.
 */
function deleteBars() {
  var slides = presentation.getSlides();
  for (var i = 0; i < slides.length; ++i) {
    var elements = slides[i].getPageElements();
    for (var j = 0; j < elements.length; ++j) {
      var el = elements[j];
      if (el.getPageElementType() === SlidesApp.PageElementType.SHAPE &&
          el.asShape().getLink() &&
          el.asShape().getLink().getUrl() === BAR_ID) {
        el.remove();
      }
    }
  }
}