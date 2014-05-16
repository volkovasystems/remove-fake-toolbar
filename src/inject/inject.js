chrome.extension.sendMessage( { },
	function onResponse( response ){
		var eachInterval = function eachInterval( ){
			if( document.readyState === "complete" ){
				clearInterval( readyStateCheckInterval );
				$( "*" ).ready( function onReady( ){
					var injectedDOM = $( "[src*='mywebacceleration']" );
					
					//Inform the user.
					console.debug( "Fucking Globe just injected you with fucking DOMs.",
						"\nCount: " + injectedDOM.length,
						"\nDOM:", injectedDOM );
					
					//This is where the magic happens :)
					$( "[src*='mywebacceleration']" ).remove( );
					
					//Inform the user again.
					console.log( "So we fuck the bitches :)" );
					console.debug( "Remaining number of injected DOMs: ", $( "[src*='mywebacceleration']" ).length );
				} );
			}
		};
		var readyStateCheckInterval = setInterval( eachInterval, 10 );
	} );