var pretty = require("prettyjson");

function Data(db){
    this.put = function(key, value, callback){
        db.put(key, value, function(){
            callback();
        });
    };

    this.list = function(start, end){
        db.createReadStream({start:start,end:end})
            .on("data", function(data){
                console.log(pretty.render(data));
            });
    };
}

module.exports = Data;