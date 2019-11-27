# page-scroller
bookmarklet to autoscroll websites

![Neo scrolling](neo-scrolling.gif)

create a bookmark paste this in the url:
```
javascript:(function()%7Bif%20(window.pageScrollerId)%20%7BpageScrollerStop()%7D%20else%20%7Bwindow.pageScrollerStart%20%3D%20()%20%3D%3E%20%7B%20window.pageScrollerId%20%3D%20setInterval(()%20%3D%3E%20%7B%20scrollBy(0%2C1)%20%7D%2C%2020)%20%7D%3Bwindow.pageScrollerStop%20%3D%20()%20%3D%3E%20%7B%20clearInterval(pageScrollerId)%3B%20window.pageScrollerId%20%3D%20null%7D%3BpageScrollerStart()%7D%7D)()
```

un-minified/un-escaped source code [here](page-scroller.js)
