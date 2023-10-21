// If the element with the youtube ad exists
if (document.querySelector("div.ad-showing")) {
	// For every video inside of the ad-element (should be only the ad itself)
    for (const video of document.querySelector("div.ad-showing").getElementsByTagName("video")) {
        // Skip the video by setting the current time to the end
		video.currentTime = video.duration;
	}
} else {
    // Else warn the user that no ad was found
    // (Mostly used only for debugging)
	console.log("SkipAds_YT: NO AD WAS FOUND");
}