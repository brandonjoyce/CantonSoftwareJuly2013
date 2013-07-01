var pretty = require("prettyjson");
var events = require("events");
var util = require("util");

function Data(db){
    var $this = this;
    events.EventEmitter.call(this);
    this.put = function(key, value, callback){
        var batch = [];
        var item = {key: key, value: value};
        batch.push({type: 'put', key: item.key, value: item.value});
        $this.emit("creating", {item: item, batch: batch});
        db.batch(batch, function(){
            callback(item);
        });
    };

    this.findBy = function(property, value){
        var results = [];
        //eg: index~name~Brandon+Joyce
        var startKey = "index~" + property + "~" + value
        db.createReadStream({start:startKey, end:startKey + "~"})
            .on("data", function(data){
                results.push(data.value);
            })
            .on("end", function(){
                console.log(pretty.render(results));
            });
    };
}

util.inherits(Data, events.EventEmitter);

module.exports = Data;