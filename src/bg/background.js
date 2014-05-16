( function module( ){
	var listener = function listener( request, sender, sendResponse ){
		sendResponse( );
	};
	chrome.extension.onMessage.addListener( listener );
} )( );
