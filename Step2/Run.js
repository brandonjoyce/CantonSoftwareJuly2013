var level = require("levelup");
var db = level(__dirname + "/app_data", {keyEncoding: "utf8", valueEncoding: "json"});
var Data = require("./Data.js");
var data = new Data(db);

data.put("event~9999", {title: 'Canton Software Craftsmanship'}, function(){
    data.put("event~9999~attendee", {name: 'Brandon Joyce'}, function(){
        data.query(function(data) {
            return (data.name === "Brandon Joyce");
        });
    });
});