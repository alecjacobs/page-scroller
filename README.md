# Page Scroller
bookmarklet to autoscroll websites

![Neo scrolling](neo-scrolling.gif)

go to [webpage](https://alecjacobs.github.io/page-scroller) to drag to bookmark bar

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