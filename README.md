# page-scroller
bookmarklet to autoscroll websites

![Neo scrolling](neo-scrolling.gif)

drag to your bookmark bar: [page-scroller](javascript:(function()%7Bif%20(window.pageScrollerId)%20%7BpageScrollerStop()%7D%20else%20%7Bwindow.pageScrollerStart%20%3D%20()%20%3D%3E%20%7B%20window.pageScrollerId%20%3D%20setInterval(()%20%3D%3E%20%7B%20scrollBy(0%2C1)%20%7D%2C%2020)%20%7D%3Bwindow.pageScrollerStop%20%3D%20()%20%3D%3E%20%7B%20clearInterval(pageScrollerId)%3B%20window.pageScrollerId%20%3D%20null%7D%3BpageScrollerStart()%7D%7D)())

<!-- This line should go where you want to put your button -->
<div class="money-button"
  data-to="1045"
  data-amount=".21"
  data-currency="USD"
  data-label=""
  data-client-identifier="b89e6f5c47a8eb446bb068a386568d95"
  data-button-id="1578031070052"
  data-button-data="{}"
  data-type="tip"
></div>
<!-- This line can go anywhere -->
<script src="https://www.moneybutton.com/moneybutton.js"></script>
