/*
    API is interface between two systems so that they can interact with each other
*/

// Earlier XMLHttpRequest was used instead of fetch()
/*
    XMLHttpRequest.readyState()
Value	State	        Description
0	    UNSENT	        Client has been created. open() not called yet.
1	    OPENED	        open() has been called.
2	  HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	    LOADING	        Downloading; responseText holds partial data.
4	    DONE	        The operation is complete.
*/