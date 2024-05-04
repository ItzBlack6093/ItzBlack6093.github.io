$(document).ready(function(){
	$(document).on('keydown',function(e)
        {

        if(e.keyCode == 49) // key '1' to play light down animation
        {

           
                startShortActiveSound(window.GameVariables.LightsDownSounds[window.GameVariables.QuestionLevel - 1]);          
           
            $('.logo #prize').transition({ perspective: 4096, scale:(0,0)}, 300, 'ease-in');
	        $('.logo #walkStrap').transition({ perspective: 4096, scale:(0,0)}, 300, 'ease-in', function(){
		    $('.logo #walk').transition({ perspective: 4096, 'rotateY':'90deg'}, 300, 'ease-in', function(){
			$('.logo #main').transition({ perspective: 4096, 'rotateY':'0deg'}, 300, 'ease-out');
		    });
	    });
            setTimeout(lightdown, 900);
        }

        if(e.keyCode == 50) // key '2' to reset / commercial
        {
            reset();
        }

        if(e.keyCode == 51) // key '3' to show prize / walk away
        {
            if (window.GameVariables.IsWalk == true){
                if(window.GameVariables.QuestionLevel > 10){
                    startShortActiveSound('walk_away_large.mp3');
                }
                else{
                    startShortActiveSound('walk_away_small.mp3');
                }
            }
            showprize();
        }

        if(e.keyCode == 52) // key '4' to play wrong answer animation
        {
            
            
                
                    startShortActiveSound(window.GameVariables.WrongAnswerSounds[window.GameVariables.QuestionLevel - 1]);
                    
                
            setTimeout(function(){
                $('.bg #wrong').transition({ perspective: 4096, opacity: 1}, 300, 'linear');
                $('.logo #wrong').transition({ perspective: 4096, opacity: 1}, 300, 'linear');    
            },700);

            window.GameVariables.IsWalk = true;

            const levels = [6, 11, 15];
	        const classes = ['0', '5', '10', '10'];

	        let classIndex = levels.findIndex(level => window.GameVariables.QuestionLevel < level);
        	classIndex = classIndex === -1 ? 3 : classIndex;

            $('.logo #prize').html(window.GameVariables.Prize[classes[classIndex]]);
        }

        if(e.keyCode == 53) // key '5' to play correct answer animation
        {

           
                startShortActiveSound(window.GameVariables.CorrectAnswerSounds[window.GameVariables.QuestionLevel - 1]);
                
           



            if(window.GameVariables.QuestionLevel >= 15){
                $('.bg #winner').transition({ perspective: 4096, opacity: 1}, 500, 'linear');
                $('.logo #winner').transition({ perspective: 4096, opacity: 1}, 500, 'linear');    
                window.GameVariables.IsWalk = true;
            }
            else if(window.GameVariables.QuestionLevel >= 5){
                reset();
                setTimeout(showprize,1000);
            }
            $('.logo #prize').html(window.GameVariables.Prize[window.GameVariables.QuestionLevel]);
            window.GameVariables.QuestionLevel++;
        }

        if(e.keyCode == 54) // key '6' to play klaxon animation
        {
            startShortActiveSound('game_over.mp3');
            $('.bg #wrong').transition({ perspective: 4096, opacity: 1}, 500, 'linear');
            $('.logo #klaxon').transition({ perspective: 4096, opacity: 1}, 500, 'linear');    
           
        }

	});
});

