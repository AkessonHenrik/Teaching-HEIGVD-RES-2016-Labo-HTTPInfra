$(function() {
  console.log("loading quotes");
  function loadQuotes() {
    $.getJSON("/api/quotes/", function(quotes) {
      var message = "hello"                
        if(quotes.length > 0) {
          message = "<strong>" + quotes[0].name + "</strong><br/>" + quotes[0].quote;
          console.log(message);
        }
      $(".quotes").html(message);
    });
  }
  loadQuotes();
  setInterval(loadQuotes, 500);
});