// Select the node that will be observed for mutations
const targetNode = document.getElementById('timesheet_main_form');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    var search_panels = document.querySelectorAll('[id^=search_cp__]');
	for (var i = 0, l = search_panels.length; i < l; i++) {
		search_panels[i].style.width = '800px';
	}
	var ac_results = document.getElementsByClassName('ac_results');
	for (var i = 0, l = ac_results.length; i < l; i++) {
		ac_results[i].style.width = '800px';
	}
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

