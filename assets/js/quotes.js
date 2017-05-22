		$(document).ready(function(){
			var quotes = ["Eric Guan", "Gandhi", "Mr. Lau", "Daniel Shin", "Edmund Lau"];
			var randomNumber = Math.floor(Math.random()*(quotes.length));
			var actualQuote = quotes[randomNumber];
			var myMap = new Map();
			myMap.set("Eric Guan", "hi");
			myMap.set("Gandhi", "hello");
			myMap.set("Mr. Lau", "oh");
			myMap.set("Daniel Shin", "yes");
			myMap.set("Edmund Lau", "yeet");
			$("#authorDisplay p").text(myMap.get(actualQuote));
			$("#authorDisplay p").addClass("load");
			$("#quoteDisplay p").text(actualQuote);
			$("#quoteDisplay p").addClass("load");

		});