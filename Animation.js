function lightdown(){
    const levels = [6, 11, 15];
	const classes = ['#tier1', '#tier2', '#tier3', '#tier4'];

	let classIndex = levels.findIndex(level => window.GameVariables.QuestionLevel < level);
	classIndex = classIndex === -1 ? 3 : classIndex;

	$('.bg ' + classes[classIndex]).transition({ perspective: 0, opacity: 1 }, 1500, 'linear');
	$('.logo ' + classes[classIndex]).transition({ perspective: 0, opacity: 1 }, 1500, 'linear');
	
}

function reset(){
	['#tier1', '#tier2', '#tier3', '#tier4', '#winner', '#wrong', '#klaxon'].forEach((classSelector) => {
		$('.bg ' + classSelector).transition({ perspective: 0, opacity: 0 }, 1000, 'linear');
		$('.logo ' + classSelector).transition({ perspective: 0, opacity: 0 }, 1000, 'linear');
	});

	$('.logo #prize').transition({ perspective: 4096, scale:(0,0)}, 300, 'ease-in');
	$('.logo #walkStrap').transition({ perspective: 4096, scale:(0,0)}, 300, 'ease-in', function(){
		$('.logo #walk').transition({ perspective: 4096, 'rotateY':'90deg'}, 300, 'ease-in', function(){
			$('.logo #main').transition({ perspective: 4096, 'rotateY':'0deg'}, 300, 'ease-out');
		});
	});
}

function showprize(){
	$('.logo #prize').transition({ perspective: 4096, scale:(0,0), opacity: 1}, 0, 'linear');
	$('.logo #walkStrap').transition({ perspective: 4096, scale:(0,0), opacity: 1}, 0, 'linear');
	$('.logo #walk').transition({ perspective: 4096, 'rotateY':'90deg', opacity: 1,}, 0, 'linear');
    $('.logo #main').transition({ perspective: 4096, 'rotateY':'90deg'}, 300, 'linear', function(){
		$('.logo #walk').transition({ perspective: 4096, 'rotateY':'0deg'}, 300, 'linear',function(){
			$('.logo #prize').transition({ perspective: 4096, scale:(1.2,1.2)}, 300, 'ease-out');
			$('.logo #walkStrap').transition({ perspective: 4096, scale:(1.2,1.2)}, 300, 'ease-out', function(){
				$('.logo #walkStrap').transition({ perspective: 4096, scale:(1,1)}, 300, 'ease-in');
				$('.logo #prize').transition({ perspective: 4096, scale:(1,1)}, 300, 'ease-in');
			});
		});
	});
}

function stopShortActiveSound(){
	try{
		window.GameVariables.ShortActiveSound.pause();
	}
	catch(e){
		console.log(e);
	}
}

/* Start the short active sound with the specified filename */
function startShortActiveSound(filename){
	try{
		stopShortActiveSound();
		window.GameVariables.ShortActiveSound = new Audio("Sounds/" + filename);
		window.GameVariables.ShortActiveSound.play();
	}
	catch(e){
		console.log(e);
	}
}