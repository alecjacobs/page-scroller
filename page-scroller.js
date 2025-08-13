if (window.scrollerId) {
  cancelAnimationFrame(scrollerId);
  window.scrollerId = null
} else {
  let last = 0;
  (function scroll(t) {
    if (t - last > 33) {
      scrollBy(0, (t - last) / 70);
      last = t
    }
    window.scrollerId = requestAnimationFrame(scroll)
  })(performance.now())
}
