$(function() {
  console.log("loading quotes");
  function loadQuotes() {
        $.getJSON("/api/quotes/", function(quotes) {
                console.log(quotes);
                var message = "Nothing is here";
                if(quotes.length > 0) {
                        message = quotes[0].name + " - " + quotes[0].quote;
                        console.log(message);
                }
                $(".network-name").text(message);
        });
  }
  loadQuotes();
  setInterval(loadQuotes, 2000);
});