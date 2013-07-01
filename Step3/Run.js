var level = require("levelup");
var db = level(__dirname + "/app_data", {keyEncoding: "utf8", valueEncoding: "json"});
var Data = require("./Data.js");
var data = new Data(db);
var DataHandler = require("./DataHandler.js");
var dataHandler = new DataHandler(data);

data.put("event~9999", {title: 'Canton Software Craftsmanship'}, function(item){
    data.put("event~9999~attendee", {name: 'Brandon Joyce'}, function(item){
        data.findBy("name", "Brandon Joyce");
    });
});