if (window.pageScrollerId) {
  pageScrollerStop()
} else {
  window.pageScrollerStart = () => { window.pageScrollerId = setInterval(() => { scrollBy(0,1) }, 20) };
  window.pageScrollerStop = () => { clearInterval(pageScrollerId); window.pageScrollerId = null};
  pageScrollerStart()
}
