if (window.scrollerId) {
  cancelAnimationFrame(scrollerId);
  window.scrollerId = null;
  document.getElementById('ps-ui')?.remove()
} else {
  window.scrollSpeed = window.scrollSpeed || 70;
  window.scrollPaused = false;
  let last = 0;

  // Create UI
  const ui = document.createElement('div');
  ui.id = 'ps-ui';
  ui.innerHTML = `<div id="ps-btn">PS</div><input type="range" id="ps-slider" min="20" max="200" value="${220 - window.scrollSpeed}" style="display:none">`;
  ui.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;font:12px sans-serif';
  document.body.appendChild(ui);

  const btn = document.getElementById('ps-btn');
  const slider = document.getElementById('ps-slider');
  btn.style.cssText = 'width:24px;height:24px;background:#333;color:#fff;text-align:center;line-height:24px;cursor:pointer;border-radius:3px';
  slider.style.cssText += ';position:absolute;bottom:30px;right:0;width:100px;background:#fff;border:1px solid #ccc';

  let showSlider = false;
  btn.onmouseenter = () => { showSlider = true; slider.style.display = 'block' };
  slider.onmouseenter = () => { showSlider = true };
  slider.onmouseleave = () => { showSlider = false; setTimeout(() => !showSlider && (slider.style.display = 'none'), 100) };
  btn.onmouseleave = () => { showSlider = false; setTimeout(() => !showSlider && (slider.style.display = 'none'), 100) };

  btn.onclick = () => { window.scrollPaused = !window.scrollPaused; btn.style.opacity = window.scrollPaused ? '0.5' : '1' };
  slider.oninput = () => window.scrollSpeed = 220 - slider.value;

  (function scroll(t) {
    if (!window.scrollPaused && t - last > 33) {
      scrollBy(0, (t - last) / window.scrollSpeed);
      last = t
    }
    window.scrollerId = requestAnimationFrame(scroll)
  })(performance.now())
}
