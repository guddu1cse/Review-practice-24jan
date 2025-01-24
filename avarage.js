//calculate avg population region wise
const data = require('./data/data.js');

function avg(){
    const avarge = data.reduce((acc , currVal)=>{
        if(!acc[currVal.region]){
            acc[currVal.region] = {
                count:0,
                total:0,
            }
        }
        acc[currVal.region].count++;
        acc[currVal.region].total+=currVal.population;

        return acc;
    } ,{});

    return Object.fromEntries(
        Object.entries(avarge).map(([key , value])=> {
            return [key , value.total / value.count];
        })
    );
}

console.log(avg());