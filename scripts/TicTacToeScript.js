$(document).ready(function(){

	// the actual x's and o's that will appear on the tic tac toe board
	var x = "x";
	var o = "o";
	var t = "tie";
	var turns = 0; // going to track the amount of turns between users
	var winner='';

	// Turning all my tic tac toe spots into variables for easier/shorter comparisons
	var s1 = $('#space1');
	var s2 = $('#space2');
	var s3 = $('#space3');
	var s4 = $('#space4');
	var s5 = $('#space5');
	var s6 = $('#space6');
	var s7 = $('#space7');
	var s8 = $('#space8');
	var s9 = $('#space9');
	
	$('#gameBoard li').click(function(){
		// need to check for combinations of 3 in a row...
		if(oChecker()===true){

			winner=o;
			alertTheGameStatus();
			setTimeout(resetTheGame, 1500);

		} else if(xChecker()===true){

			//alert('The winner is X-2!'); // if x wins, do this
			winner=x;
			alertTheGameStatus();
			setTimeout(resetTheGame, 1500);

		} else if($(this).hasClass('disable')){ // what happens if a user clicks a button that's in use?

			console.log("Stop clicking me bruh.");
			//just don't do anything ;)

		} else if(turns%2 == 0){ // Whos turn is it? Check if turns is even
			turns++;
			$(this).text(o);
			$(this).addClass('disable o');
			if(oChecker()===true){

				winner=o;
				alertTheGameStatus();
				setTimeout(resetTheGame, 1500);

			}
		} else {
			turns++; // if the o didn't win, then...
			$(this).text(x);
			$(this).addClass('disable x');
			if(xChecker()===true){

				winner=x;
				alertTheGameStatus();
				setTimeout(resetTheGame, 1500);
			}
		}
		tieGameTest();
	});

	// The reset button
	$("#resetGame").click(function(){
		resetTheGame();
		$('#alert-area').fadeIn(500).html("Human v human tic tac toe!<br>Whoever is first are the o's.");
	});

	/*
	 * oChecker:
	 * function to return true if the o's won
	 */
	function oChecker(){
		if(s1.hasClass('o') && s2.hasClass('o') && s3.hasClass('o') ||
			s4.hasClass('o') && s5.hasClass('o') && s6.hasClass('o') ||
			s7.hasClass('o') && s8.hasClass('o') && s9.hasClass('o') ||
			s1.hasClass('o') && s4.hasClass('o') && s7.hasClass('o') ||
			s2.hasClass('o') && s5.hasClass('o') && s8.hasClass('o') ||
			s3.hasClass('o') && s6.hasClass('o') && s9.hasClass('o') ||
			s1.hasClass('o') && s5.hasClass('o') && s9.hasClass('o') ||
			s3.hasClass('o') && s5.hasClass('o') && s7.hasClass('o')  ){
			return true;
		}
	}

	/*
	 * xChecker:
	 * function to return true if the x's won
	 */
	function xChecker(){
		if(s1.hasClass('x') && s2.hasClass('x') && s3.hasClass('x') || // logic for if x wins
			   s4.hasClass('x') && s5.hasClass('x') && s6.hasClass('x') ||
			   s7.hasClass('x') && s8.hasClass('x') && s9.hasClass('x') ||
			   s1.hasClass('x') && s4.hasClass('x') && s7.hasClass('x') ||
			   s2.hasClass('x') && s5.hasClass('x') && s8.hasClass('x') ||
			   s3.hasClass('x') && s6.hasClass('x') && s9.hasClass('x') ||
			   s1.hasClass('x') && s5.hasClass('x') && s9.hasClass('x') ||
			   s3.hasClass('x') && s5.hasClass('x') && s7.hasClass('x')  ){
			return true;
		}
	}

	/*
	 * resetTheGame:
	 * function to reset the game, whether that be from the button or from a win
	 */
	function resetTheGame(){

		$('#gameBoard li').text(''); // switch the text back to normal
		$('#gameBoard li').removeClass('disable'); // take away the class that disables buttons
		$('#gameBoard li').removeClass('o'); // take away the colors
		$('#gameBoard li').removeClass('x'); // take away the colors
		turns = 0;
		var winner='';

	}

	/*
	 * alertTheGameStatus:
	 * function to display a message on who won, or if there was a tie
	 */
	function alertTheGameStatus(){

		if(winner===x){
			$('#alert-area').html('<div id="xWon"><p>The winner are the '+winner+'\'s!<br>Play again?</p></div>');
		}

		if (winner===o){
			$('#alert-area').html('<div id="oWon"><p>The winner are the '+winner+'\'s!<br>Play again?</p></div>');
		}

		if (winner===t){
			$('#alert-area').html('<div id="tieGame"><p>It\'s a tie!<br>Play again?</p></div>');
		}

	}

	/*
	 * tieGameTest:
	 * function to check for ties
	 */
	function tieGameTest(){
		if(turns === 9){// what happens if 9 turns happen but no one wins?
			winner=t;
			alertTheGameStatus();
			resetTheGame();
		}
	}


});

