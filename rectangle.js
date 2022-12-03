module.exports = (x, y, callback) => {
    if(x <= 0 || y <= 0){
        setTimeout(() => 
        callback(
            new Error("Error elements should be greater 0"),
            null),
        2000)
    }else{
        setTimeout(() => 
        callback(null,
        {
            perimiter: () => (2*(x+y)),
            square: () => (x*y)
        }))
    }
}