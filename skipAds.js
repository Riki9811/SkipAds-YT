// IIFE to avoid polluting the global scope
(() => {
	// HTML element containing the ads
	let adContainer = document.querySelector("div.ad-showing");

	// If there are no ads showing quit
	if (!adContainer) return;

	// Get all the videos inside the adContainer
	let videoAds = [...adContainer.getElementsByTagName("video")];
	// Try to skip all of them
	videoAds.forEach((video) => {
		// If the video has no valid duration exit
		if (!video.duration) return;
		// Otherwise skip it
		video.currentTime = video.duration;
	});

	// Get all skip-buttons and modern-skip-buttons
	let skipButtons = [...document.querySelectorAll(".ytp-ad-skip-button"), ...document.querySelectorAll(".ytp-ad-skip-button-modern")];
	// Click all of them
	skipButtons.forEach((skipButton) => {
		skipButton.click();
	});
})();
