const data = require('./data/data.js');

function getCountries(){
    const countries = [];
    data.forEach((val)=>{
        const values = Object.values({...val["currencies"]});
        if(!values[0] || !values[0].symbol) ;
        else if(values[0].symbol === "$") countries.push(val.name.common);
    });

    return countries;
}

console.log(getCountries());