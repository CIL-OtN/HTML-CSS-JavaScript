
function generate() {
	
	var quotes = {
		"― Lana Del Rey" : '“Who are you?',
	
		"― Deepak Chopra" : '“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”',
		
		"― John Galsworthy" : '“Life calls the tune, we dance.”',
		
	}
	
	var authors = Object.keys(quotes);
	
	// console.log(authors);
	
	var author = authors[Math.floor(Math.random() * authors.length)];
	
	// console.log(author);
	
	var quote = quotes[author];
	
	document.getElementById("quote").innerHTML = quote;
	
	document.getElementById("author").innerHTML = author;
}