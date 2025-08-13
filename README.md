# Page Scroller
bookmarklet to autoscroll websites

![Neo scrolling](neo-scrolling.gif)

drag to your bookmark bar: [page-scroller](javascript:(function()%7Bif%20(window.scrollerId)%20%7B%0A%20%20cancelAnimationFrame(scrollerId)%3B%0A%20%20window.scrollerId%20%3D%20null%3B%0A%20%20document.getElementById(%27ps-ui%27)%3F.remove()%0A%7D%20else%20%7B%0A%20%20window.scrollSpeed%20%3D%20window.scrollSpeed%20%7C%7C%2070%3B%0A%20%20window.scrollPaused%20%3D%20false%3B%0A%20%20let%20last%20%3D%200%3B%0A%0A%20%20%2F%2F%20Create%20UI%0A%20%20const%20ui%20%3D%20document.createElement(%27div%27)%3B%0A%20%20ui.id%20%3D%20%27ps-ui%27%3B%0A%20%20ui.innerHTML%20%3D%20%60%3Cdiv%20id%3D%22ps-btn%22%3EPS%3C%2Fdiv%3E%3Cinput%20type%3D%22range%22%20id%3D%22ps-slider%22%20min%3D%2220%22%20max%3D%22200%22%20value%3D%22%24%7B220%20-%20window.scrollSpeed%7D%22%20style%3D%22display%3Anone%22%3E%60%3B%0A%20%20ui.style.cssText%20%3D%20%27position%3Afixed%3Bbottom%3A20px%3Bright%3A20px%3Bz-index%3A9999%3Bfont%3A12px%20sans-serif%27%3B%0A%20%20document.body.appendChild(ui)%3B%0A%0A%20%20const%20btn%20%3D%20document.getElementById(%27ps-btn%27)%3B%0A%20%20const%20slider%20%3D%20document.getElementById(%27ps-slider%27)%3B%0A%20%20btn.style.cssText%20%3D%20%27width%3A24px%3Bheight%3A24px%3Bbackground%3A%23333%3Bcolor%3A%23fff%3Btext-align%3Acenter%3Bline-height%3A24px%3Bcursor%3Apointer%3Bborder-radius%3A3px%27%3B%0A%20%20slider.style.cssText%20%2B%3D%20%27%3Bposition%3Aabsolute%3Bbottom%3A30px%3Bright%3A0%3Bwidth%3A100px%3Bbackground%3A%23fff%3Bborder%3A1px%20solid%20%23ccc%27%3B%0A%0A%20%20let%20showSlider%20%3D%20false%3B%0A%20%20btn.onmouseenter%20%3D%20()%20%3D%3E%20%7B%20showSlider%20%3D%20true%3B%20slider.style.display%20%3D%20%27block%27%20%7D%3B%0A%20%20slider.onmouseenter%20%3D%20()%20%3D%3E%20%7B%20showSlider%20%3D%20true%20%7D%3B%0A%20%20slider.onmouseleave%20%3D%20()%20%3D%3E%20%7B%20showSlider%20%3D%20false%3B%20setTimeout(()%20%3D%3E%20!showSlider%20%26%26%20(slider.style.display%20%3D%20%27none%27)%2C%20100)%20%7D%3B%0A%20%20btn.onmouseleave%20%3D%20()%20%3D%3E%20%7B%20showSlider%20%3D%20false%3B%20setTimeout(()%20%3D%3E%20!showSlider%20%26%26%20(slider.style.display%20%3D%20%27none%27)%2C%20100)%20%7D%3B%0A%0A%20%20btn.onclick%20%3D%20()%20%3D%3E%20%7B%20window.scrollPaused%20%3D%20!window.scrollPaused%3B%20btn.style.opacity%20%3D%20window.scrollPaused%20%3F%20%270.5%27%20%3A%20%271%27%20%7D%3B%0A%20%20slider.oninput%20%3D%20()%20%3D%3E%20window.scrollSpeed%20%3D%20220%20-%20slider.value%3B%0A%0A%20%20(function%20scroll(t)%20%7B%0A%20%20%20%20if%20(!window.scrollPaused%20%26%26%20t%20-%20last%20%3E%2033)%20%7B%0A%20%20%20%20%20%20scrollBy(0%2C%20(t%20-%20last)%20%2F%20window.scrollSpeed)%3B%0A%20%20%20%20%20%20last%20%3D%20t%0A%20%20%20%20%7D%0A%20%20%20%20window.scrollerId%20%3D%20requestAnimationFrame(scroll)%0A%20%20%7D)(performance.now())%0A%7D%7D)())

## Development

### Setup
```bash
npm install
```

### Available Scripts
- `npm run serve` - Start local development server at http://localhost:8080
- `npm run build` - Convert page-scroller.js to URL-encoded bookmarklet and update index.html and README.md
- `npm run dev` - Build and serve in one command

### Workflow
1. Edit `page-scroller.js` with your bookmarklet code
2. Run `npm run build` to update the encoded bookmarklet in both files
3. Use `npm run serve` to test locally

The build script automatically:
- Wraps your code in `(function(){ ... })()`
- URL-encodes it for bookmarklet use
- Updates the href in `index.html`
- Updates the markdown link in `README.md`