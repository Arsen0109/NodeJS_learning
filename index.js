var rect = require('./rectangle')

function solveRect(h, w){
    rect(h, w, (err, rectangle) => {
        if (err){
            console.log("ERROR: ", err.message);
        }else{
            console.log("The square of rectangle is " + rectangle.square())
            console.log("The perimiter of rectangle is " + rectangle.perimiter())
        }
    });
}
solveRect(5, 4)
solveRect(0, 5)
solveRect(-3, 6)