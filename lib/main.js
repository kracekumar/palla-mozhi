var widgets = require("widget");
var tabs = require("tabs");
var self = require("self");

var scripts = [
        self.data.url("jquery.ime/libs/jquery.js"),

        self.data.url("jquery.ime/src/jquery.ime.js"),
        self.data.url("jquery.ime/src/jquery.ime.inputmethods.js"),
        self.data.url("jquery.ime/src/jquery.ime.preferences.js"),
        self.data.url("jquery.ime/src/jquery.ime.selector.js"),

        /*self.data.url("jquery.ime/rules/am/am-transliteration.js"),
        self.data.url("jquery.ime/rules/as/as-avro.js"),
        self.data.url("jquery.ime/rules/as/as-bornona.js"),
        self.data.url("jquery.ime/rules/as/as-inscript.js"),
        self.data.url("jquery.ime/rules/as/as-transliteration.js"),
        self.data.url("jquery.ime/rules/be/be-latin.js"),
        self.data.url("jquery.ime/rules/be/be-transliteration.js"),
        self.data.url("jquery.ime/rules/ber/ber-tfng.js"),
        self.data.url("jquery.ime/rules/bn/bn-avro.js"),
        self.data.url("jquery.ime/rules/bn/bn-inscript.js"),
        self.data.url("jquery.ime/rules/bn/bn-nkb.js"),
        self.data.url("jquery.ime/rules/bn/bn-probhat.js"),
        self.data.url("jquery.ime/rules/brx/brx-inscript.js"),
        self.data.url("jquery.ime/rules/cyrl/cyrl-palochka.js"),
        self.data.url("jquery.ime/rules/da/da-normforms.js"),
        self.data.url("jquery.ime/rules/de/de.js"),
        self.data.url("jquery.ime/rules/eo/eo-transliteration.js"),
        self.data.url("jquery.ime/rules/fi/fi-transliteration.js"),
        self.data.url("jquery.ime/rules/fo/fo-normforms.js"),
        self.data.url("jquery.ime/rules/gu/gu-inscript.js"),
        self.data.url("jquery.ime/rules/gu/gu-transliteration.js"),
        self.data.url("jquery.ime/rules/he/he-standard-2012-extonly.js"),
        self.data.url("jquery.ime/rules/he/he-standard-2012.js"),
        self.data.url("jquery.ime/rules/hi/hi-bolnagri.js"),
        self.data.url("jquery.ime/rules/hi/hi-inscript.js"),
        self.data.url("jquery.ime/rules/hi/hi-transliteration.js"),
        self.data.url("jquery.ime/rules/is/is-normforms.js"),
        self.data.url("jquery.ime/rules/jv/jv-transliteration.js"),
        self.data.url("jquery.ime/rules/ka/ka-transliteration.js"),
        self.data.url("jquery.ime/rules/kn/kn-inscript.js"),
        self.data.url("jquery.ime/rules/kn/kn-kgp.js"),
        self.data.url("jquery.ime/rules/kn/kn-transliteration.js"),
        self.data.url("jquery.ime/rules/kok/kok-inscript2.js"),
        self.data.url("jquery.ime/rules/mai/mai-inscript.js"),
        self.data.url("jquery.ime/rules/ml/ml-inscript.js"),
        self.data.url("jquery.ime/rules/ml/ml-transliteration.js"),
        self.data.url("jquery.ime/rules/mn/mn-cyrl.js"),
        self.data.url("jquery.ime/rules/mr/mr-inscript.js"),
        self.data.url("jquery.ime/rules/mr/mr-inscript2.js"),
        self.data.url("jquery.ime/rules/mr/mr-transliteration.js"),
        self.data.url("jquery.ime/rules/ne/ne-inscript.js"),
        self.data.url("jquery.ime/rules/ne/ne-inscript2.js"),
        self.data.url("jquery.ime/rules/ne/ne-transliteration.js"),
        self.data.url("jquery.ime/rules/no/no-normforms.js"),
        self.data.url("jquery.ime/rules/no/no-tildeforms.js"),
        self.data.url("jquery.ime/rules/or/or-inscript.js"),
        self.data.url("jquery.ime/rules/or/or-lekhani.js"),
        self.data.url("jquery.ime/rules/or/or-transliteration.js"),
        self.data.url("jquery.ime/rules/pa/pa-inscript.js"),
        self.data.url("jquery.ime/rules/pa/pa-phonetic.js"),
        self.data.url("jquery.ime/rules/pa/pa-transliteration.js"),
        self.data.url("jquery.ime/rules/ru/ru-jcuken.js"),
        self.data.url("jquery.ime/rules/sa/sa-inscript.js"),
        self.data.url("jquery.ime/rules/sa/sa-inscript2.js"),
        self.data.url("jquery.ime/rules/sa/sa-transliteration.js"),
        self.data.url("jquery.ime/rules/sah/sah-transliteration.js"),
        self.data.url("jquery.ime/rules/se/se-normforms.js"),
        self.data.url("jquery.ime/rules/si/si-singlish.js"),
        self.data.url("jquery.ime/rules/si/si-wijesekara.js"),
        self.data.url("jquery.ime/rules/sv/sv-normforms.js"),
        self.data.url("jquery.ime/rules/ta/ta-99.js"),
        self.data.url("jquery.ime/rules/ta/ta-bamini.js"),
        self.data.url("jquery.ime/rules/ta/ta-inscript.js"),
        self.data.url("jquery.ime/rules/ta/ta-transliteration.js"),
        self.data.url("jquery.ime/rules/te/te-inscript.js"),
        self.data.url("jquery.ime/rules/te/te-transliteration.js"),
        self.data.url("jquery.ime/rules/ur/ur-transliteration.js"),*/
        self.data.url("content.js")
        ]

/*var _panel = require("panel").Panel({
    width: 240,
    height: 320,
    content: "palla-mozhi (பல  மொழி )",
    contentScriptFile : scripts,
}); */

var widget = widgets.Widget({
  id: "mozilla-link",
  label: "palla-mozhi (பல  மொழி ) - Multilanguage input for any text input.",
  content: "palla-mozhi (பல  மொழி )",
  contentStyleFile: self.data.url("jquery.ime/css/jquery.ime.css"),
  contentScriptFile : scripts,
  //panel: _panel, 
  //contentScriptWhen: "ready",
  onClick: function() {
    console.log('on-click');
    widget.port.emit("start");
    /*$( 'body' ).on( 'focus.ime', 'input:not([type]), input[type=text], input[type=search], textarea',
    function () {
        $( this ).ime();
    } );*/
  }
  /*onAttach: function(worker) {
    worker.postMessage(self.data.load("jquery.ime/css/jquery.ime.css"));
  }*/
}); 
widget.on('load', function() {
    console.log("load");
    widget.port.emit("start");
});
/*
tabs.on('load', function(){
    console.log("tab-onload");
});*/
console.log("blaj");
//widget.port.emit("start");
/*widget.port.on("start", function() {
  //  console.log("start");
    $( 'body' ).on( 'focus.ime', 'input:not([type]), input[type=text], input[type=search], textarea',
    function () {
        $( this ).ime();
    } );
});

_panel.port.on("start", function() {
    widget.port.emit("start");
});

var pageWorker = require("page-worker").Page({
  contentScriptFile: scripts,
  contentURL: self.data.url("panel.html"),
  onMessage: function(message) {
    console.log(message);
  }
});
*/
/*
var pageMod = require("page-mod");
 
pageMod.PageMod({
  include: "*.*.*",
  contentScript: 'window.alert("Page matches ruleset");'
});
/*
widget.on('ready', function() {
    console.log("loading");
    $( 'body' ).on( 'focus.ime', 'input:not([type]), input[type=text], input[type=search], textarea',
    function () {
        $( this ).ime();
    } );
    //tabs.open("http://kracekumar.com");
  });*/
//start();