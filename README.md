# Page Scroller
bookmarklet to autoscroll websites

![Neo scrolling](neo-scrolling.gif)

drag to your bookmark bar: [page-scroller](javascript:(function()%7Bif%20(window.scrollerId)%20%7B%0A%20%20cancelAnimationFrame(scrollerId)%3B%0A%20%20window.scrollerId%20%3D%20null%0A%7D%20else%20%7B%0A%20%20let%20last%20%3D%200%3B%0A%20%20(function%20scroll(t)%20%7B%0A%20%20%20%20if%20(t%20-%20last%20%3E%2033)%20%7B%0A%20%20%20%20%20%20scrollBy(0%2C%20(t%20-%20last)%20%2F%2070)%3B%0A%20%20%20%20%20%20last%20%3D%20t%0A%20%20%20%20%7D%0A%20%20%20%20window.scrollerId%20%3D%20requestAnimationFrame(scroll)%0A%20%20%7D)(performance.now())%0A%7D%7D)())

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