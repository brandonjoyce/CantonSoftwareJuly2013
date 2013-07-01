function DataHandler(emitter){
    emitter.on("creating", function(context){
        var item = context.item;
        if(item.value.name){
            context.batch.push(
                {
                    type:'put',
                    key:'index~name~' + item.value.name,
                    value: item.key
                });
        }
    });
}

module.exports = DataHandler;