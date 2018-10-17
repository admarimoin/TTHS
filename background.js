//document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'></script>")

chrome.contextMenus.create({title: "TofuTwitteraccountHandlerSearch"});

chrome.contextMenus.onClicked.addListener(function(){
	alert("Search Tofu Twitterer!");
});
//$(window).bind("load", function(){
//	if(document.URL.match(/twitter/){
//		chrome.browserAction.setBadgeText({text: "!"});
//	}
//});
chrome.browserAction.setBadgeText({text: "!"});
