if (window.scrollerId) {
  scrollerStop()
} else {
  window.scrollerStart = () => { window.scrollerId = setInterval(() => { scrollBy(0, 1) }, 33) };
  window.scrollerStop = () => { clearInterval(scrollerId); window.scrollerId = null };
  scrollerStart()
}
