var pretty = require("prettyjson");

function Data(db){
    this.put = function(key, value, callback){
        db.put(key, value, function(){
            callback();
        });
    };

    this.query = function(filter){
        var results = [];
        db.createReadStream()
            .on("data", function(data){
                if (filter(data.value))
                    results.push(data.value);
            })
            .on("end", function(){
                console.log(pretty.render(results));
            });
    };
}

module.exports = Data;