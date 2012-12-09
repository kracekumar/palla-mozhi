//var jquery = require("self").data.url("jquery.ime/libs/jquery-1.8.3.js");
//console.log('content.js');
self.port.on("start", function() {
    console.log('on-cool');
    console.log(document);
    $( 'body' ).on( 'focus.ime', 'input:not([type]), input[type=text], input[type=search], textarea',
    function () {
        console.log("inside");
        $( this ).ime();
    } );
  });
}); 
