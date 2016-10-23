$(function(){
	var hours = $('.hoursCount>p');
	var mins = $('.minutesCount>p');
	var secs = $('.secondsCount>p');
	var hCount = 1, mCount = 1, sCount = 1;
	var stop = false;
	var timer;

    hours.bind('webkitAnimationEnd', function(){
        this.style.webkitAnimationName = '';
    });
	hours.addClass('flipup');
    
	mins.bind('webkitAnimationEnd', function(){
        this.style.webkitAnimationName = '';
    });
	mins.addClass('flipup');
    
	secs.bind('webkitAnimationEnd', function(){
        this.style.webkitAnimationName = '';
    });
	secs.addClass('flipup');
	

    function updateDisplay(element, count){
        element.addClass(function(){
            if(count < 10){
                element.html('0'+count);
            }
            else{
                element.html(count);
            }
        });
        secs.css('webkitAnimationName', 'flip1');
        console.log('webkitAnimationName');
        element.fadeTo('fast', 1, 0);
    }

	function updateClock(){
		timer = setInterval(function(){
			if(sCount < 60){
				updateDisplay(secs, sCount++);
        	}
			else{
				sCount = 0;
				updateDisplay(secs, sCount++);
				if(mCount < 60){
					updateDisplay(mins, mCount++);
					mins.css('webkitAnimationName', 'flip1');
				}
				else{
					mCount = 0;
					updateDisplay(mins, mCount++);
					updateDisplay(hours, hCount++);	
					mins.css('webkitAnimationName', 'flip1');
					hours.css('webkitAnimationName', 'flip1');
				}
			}
		}, 1000);
	}

	$('.startButton').toggle(function(){
		$('.startLabel').html('Stop');
		updateClock();
	}, function(){
		$('.startLabel').html('Start');
		clearInterval(timer);
	});

	$('.resetButton').click(function(){
		sCount = mCount = hCount = 1;
		updateDisplay(secs, 0);
		updateDisplay(mins, 0);
		updateDisplay(hours, 0);
		$('.startLabel>p').html('Start');
		clearInterval(timer);
	});
})