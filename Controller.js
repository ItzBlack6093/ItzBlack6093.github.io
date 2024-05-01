$(document).ready(function(){
    $(document).on('keydown',function(e) {
        if(e.keyCode == 49) { // key '1' light down
            $('.logoDiv #ammountImg').transition({ perspective: 0, opacity: 0, scale:[0,0] }, 300, 'linear');
            $('.logoDiv #ammountDiv').transition({ perspective: 0, opacity: 0, scale:[0,0] }, 300, 'linear', function(){
                $('.logoDiv #walk').transition({ perspective: 4096, 'rotateY':'90deg', scale:[1,1] }, 300, 'linear', function(){
                    $('.logoDiv #main').transition({ perspective: 4096, 'rotateY':'0deg', scale:[1,1] }, 300, 'linear', function(){
                        const levels = [6, 11, 15];
                        const classes = ['#tier1', '#tier2', '#tier3', '#tier4'];
                        let classIndex = levels.findIndex(level => window.GameVariables.QuestionLevel < level);
                        classIndex = classIndex === -1 ? 3 : classIndex;
                        $('.bg ' + classes[classIndex]).transition({ perspective: 0, opacity: 1 }, 1000, 'linear');
                        $('.bg #main').transition({ perspective: 0, opacity: 0 }, 1500, 'linear');
                        $('.logoDiv ' + classes[classIndex]).transition({ perspective: 0, opacity: 1 }, 1000, 'linear');
                    });
                });
            });
        }

        if(e.keyCode == 50) { // key '2' reset
            ['#tier1', '#tier2', '#tier3', '#tier4', '#winner', '#wrong'].forEach((classSelector) => {
                $('.bg ' + classSelector).transition({ perspective: 0, opacity: 0 }, 1000, 'linear');
                $('.logoDiv ' + classSelector).transition({ perspective: 0, opacity: 0 }, 1000, 'linear');
            });
            $('.bg #main').transition({ perspective: 0, opacity: 1 }, 1000, 'linear');
            $('.logoDiv #ammountImg').transition({ perspective: 0, opacity: 0, scale:[0,0] }, 300, 'linear',);
            $('.logoDiv #ammountDiv').transition({ perspective: 0, opacity: 0, scale:[0,0] }, 300, 'linear', function(){
                    $('.logoDiv #walk').transition({ perspective: 4096, 'rotateY':'90deg', scale:[1,1] }, 300, 'linear', function(){
                        $('.logoDiv #main').transition({ perspective: 4096, 'rotateY':'0deg', scale:[1,1] }, 300, 'linear');
                    });
                });
        }

        if(e.keyCode == 51) { // key '3' show amount
            $('.logoDiv #main').transition({ perspective: 4096, 'rotateY':'0deg', scale:[1,1] }, 0, 'linear');
            $('.logoDiv #walk').transition({ perspective: 4096, 'rotateY':'90deg', 'opacity': '1', scale:[1,1] }, 0, 'linear');
            $('.logoDiv #ammountImg').transition({ perspective: 4096, 'rotateY':'0deg', 'opacity': '1', scale:[0,0] }, 0, 'linear');
            $('.logoDiv #ammountDiv').transition({ perspective: 4096, 'rotateY':'0deg', 'opacity': '1', scale:[0,0] }, 0, 'linear');
            $('.logoDiv #main').transition({ perspective: 4096, 'rotateY':'90deg' }, 300, 'linear', function(){
                $('.logoDiv #walk').transition({ perspective: 4096, 'rotateY':'0deg' }, 300, 'linear', function(){
                    $('.logoDiv #ammountImg').transition({ perspective: 0, 'opacity': '1', scale:[1,1] }, 300, 'linear');
                    $('.logoDiv #ammountDiv').transition({ perspective: 0, 'opacity': '1', scale:[1,1] }, 300, 'linear');
                });
            });
        }

        if(e.keyCode == 52) { // key '4' wrong logo
            $('.bg #wrong').transition({ perspective: 0, opacity: 1 }, 500, 'linear');
            $('.logoDiv #wrong').transition({ perspective: 0, opacity: 1 }, 500, 'linear');
            const levels = [6, 11, 15];
            const classes = ['0', '5', '10', '10'];
            let classIndex = levels.findIndex(level => window.GameVariables.QuestionLevel < level);
            classIndex = classIndex === -1 ? 3 : classIndex;
            $('.logoDiv #ammountDiv').html(window.GameVariables.Value[classes[classIndex]]);
        }

        if(e.keyCode == 53) { // key '5' correct logo
            $('.logoDiv #ammountDiv').html(window.GameVariables.Value[window.GameVariables.QuestionLevel]);
            window.GameVariables.QuestionLevel++;
            if(window.GameVariables.QuestionLevel == 16){
                $('.bg #winner').transition({ perspective: 0, opacity: 1 }, 500, 'linear');
                $('.logoDiv #winner').transition({ perspective: 0, opacity: 1 }, 500, 'linear');
            } else if(window.GameVariables.QuestionLevel < 16 && window.GameVariables.QuestionLevel > 5){
                ['#tier1', '#tier2', '#tier3', '#tier4', '#winner', '#wrong'].forEach((classSelector) => {
                    $('.bg ' + classSelector).transition({ perspective: 0, opacity: 0 }, 500, 'linear');
                    $('.logoDiv ' + classSelector).transition({ perspective: 0, opacity: 0 }, 500, 'linear');
                });
                $('.bg #main').transition({ perspective: 0, opacity: 1 }, 1000, 'linear');
                $('.logoDiv #ammountDiv').transition({ perspective: 0, opacity: 0, scale:[0,0] }, 300, 'linear', function(){
                    $('.logoDiv #ammountImg').transition({ perspective: 0, opacity: 0, scale:[0,0] }, 300, 'linear', function(){
                        $('.logoDiv #walk').transition({ perspective: 4096, 'rotateY':'90deg', scale:[1,1] }, 300, 'linear', function(){
                            $('.logoDiv #main').transition({ perspective: 4096, 'rotateY':'0deg', scale:[1,1] }, 300, 'linear', function(){
                                $('.logoDiv #main').transition({ perspective: 4096, 'rotateY':'0deg', scale:[1,1] }, 0, 'linear');
                                $('.logoDiv #walk').transition({ perspective: 4096, 'rotateY':'90deg', 'opacity': '1', scale:[1,1] }, 0, 'linear');
                                $('.logoDiv #ammountDiv').transition({ perspective: 4096, 'rotateY':'0deg', 'opacity': '1', scale:[0,0] }, 0, 'linear');
                                $('.logoDiv #ammountImg').transition({ perspective: 4096, 'rotateY':'0deg', 'opacity': '1', scale:[0,0] }, 0, 'linear');
                                $('.logoDiv #main').transition({ perspective: 4096, 'rotateY':'90deg' }, 300, 'linear', function(){
                                    $('.logoDiv #walk').transition({ perspective: 4096, 'rotateY':'0deg' }, 300, 'linear', function(){
                                        $('.logoDiv #ammountDiv').transition({ perspective: 0, 'opacity': '1', scale:[1,1] }, 300, 'linear');
                                        $('.logoDiv #ammountImg').transition({ perspective: 0, 'opacity': '1', scale:[1,1] }, 300, 'linear');
                                    });
                                });
                            });
                        });
                    });
                });
            }
        }
    });
});
