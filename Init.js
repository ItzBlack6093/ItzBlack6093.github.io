$(document).ready(function(){
    $('.logo #main').transition({ perspective: 0, scale:(0,0), opacity: 0 }, 0, 'linear');
    $('.bg #main').transition({ perspective: 0, scale:(1), opacity: 0 }, 0, 'linear');

    startShortActiveSound('intro.ogg');


    setTimeout(function(){
        startShortActiveSound('main_theme.mp3');
        setTimeout(function(){
            $('.logo #main').transition({ perspective: 0, scale:(1), opacity:1 }, 500, 'ease-out', function(){
                $('.bg #main').transition({ perspective: 0, scale:(1), opacity: 1 }, 300, 'ease-out');
            });
        }, 3000);        
    },22000);


	['#tier1', '#tier2', '#tier3', '#tier4', '#wrong', '#winner', '#klaxon', '#walk'].forEach((classSelector) => {
		$('.logo ' + classSelector).transition({ perspective: 0, opacity: 0 }, 0, 'linear');
        $('.bg ' + classSelector).transition({ perspective: 0, opacity: 0 }, 0, 'linear');
	});
    $('.logo #prize').transition({ perspective: 0, scale:(0,0) }, 0, 'linear');
    $('.logo #walkStrap').transition({ perspective: 0, scale:(0,0) }, 0, 'linear');

    $('.logo #winner').transition({ perspective: 0, scale:(1.08,1.08) }, 0, 'linear');

    $('.logo #prize').html(window.GameVariables.Prize[window.GameVariables.QuestionLevel - 1]);


});