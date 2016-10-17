/**
 * Created by averybunker on 10/16/16.
 */
var mathfun = require('./mathfun');

var processResults = function(err, results, time){
    if (err){
        console.log("ERROR: " + err.message);
    } else {
        console.log("The results are:  " + results + " (" + time + " ms)");
    }
};

for (var i=0l i<10; i++){
    console.log("Clling 'evenDoubler' with parameter '" + i + "'");
    mathfun.eventDoubler(i, processResults);
}

console.log("-----");

console.log("The 'foo' variable from module 'mathfun' = " + mathfun.foo);
console.log("The 'maxtime' variable is not exported: " + mathfun.maxTime);
