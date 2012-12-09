self.port.on("start", function() {
    console.log('on-cool');
   $( 'body' ).on( 'focus.ime', 'input:not([type]), input[type=text], input[type=search], textarea',
    function () {
        console.log("body");
        $( this ).ime();
    } );
  });

//var jquery = require("self").data.url("jquery.ime/libs/jquery-1.8.3.js");
/*$( window ).on( 'focus.ime', 'input:not([type]), input[type=text], input[type=search], textarea',
    function () {
    //    console.log("loading");
        $( this ).ime();
});*/ 
