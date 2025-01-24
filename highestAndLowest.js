const data = require('./data/data.js');


function maxMin(){
    let maxC = "";
    let minC = "";
    let max = -1* Infinity;
    let min =  Infinity;

    data.forEach((val)=>{
        if(min > val.area){
            min = val.area;
            minC = val.name.common;
        }

        if(max < val.area ){
            max = val.area;
            maxC = val.name.common;
        }
    });

    return {
        highest : {country : [maxC] , area : [max]},
        lowest : {country : [minC] , area : [min]}
    }
}

console.log(maxMin());