const YTurl = "https://www.youtube.com/";

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
    // If the current tab is not youtube then return
    if (!tab.url.startsWith(YTurl)) {
		return;
	}
    // Otherwise run the skipAds script on the current tab
	await chrome.scripting.executeScript({
		files: ["skipAds.js"],
		target: { tabId: tab.id },
	});
});
