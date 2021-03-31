const apiKey = "62c96cd623b45032aba7e64cb64251ca"
var userFormEl = $("#citySearch");

var buildSearchHistory = function() {
    // retrieve search history from the local storage
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (searchHistory == null) {
        // if no local vaeriable exists then automatic common locations in left column
        searchHistory = ["New York", "Orlando", "Dallas", "Chicago", "Salt Lake City", "Los Angeles"];
        localStorage.setItem("searchHistory",JSON.stringify(searchHistory));
    }
    var groupContainer = $(".list-group");
    groupContainer.html("");
    for (i in searchHistory) {
        // create list group item for each city in history
        var buttonEl = $("<button>")
            .addClass("list-group-item list-group-item-action")
            .attr("id", "citySearchList")
            .attr("type", "button")
            .text(searchHistory[i]);
        groupContainer.append(buttonEl);
    }
};