var widgets = require("widget");
var tabs = require("tabs");
 
var widget = widgets.Widget({
  id: "mozilla-link",
  label: "palla-mozhi (பல  மொழி ) - Multilanguage input for any text input.",
  contentURL: "http://kracekumar.com/favico",
  onClick: function() {
    tabs.open("http://kracekumar.com");
  }
});