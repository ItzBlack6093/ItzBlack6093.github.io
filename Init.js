$(document).ready(function(){
	['#tier1', '#tier2', '#tier3', '#tier4', '#winner', '#wrong', '#walk'].forEach((classSelector) => {
		$('.bg ' + classSelector).transition({ perspective: 0, opacity: 0 }, 0, 'linear');
		$('.logoDiv ' + classSelector).transition({ perspective: 0, opacity: 0 }, 0, 'linear');
	});
    $('.bg #main').transition({ perspective: 0, opacity: 1 }, 0, 'linear');
	$('.logoDiv #main').transition({ perspective: 0, opacity: 1 }, 0, 'linear');
});