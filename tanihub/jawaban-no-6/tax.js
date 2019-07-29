var range = [
    {
        min : 0,
        max :50000,
        tax : 5
    }, {
        min : 50000,
        max :250000,
        tax : 15
    }, {
        min : 250000,
        max :500000,
        tax : 25
    }, {
        min : 500000,
        max :0,
        tax : 30
    }
]

function taxIncome(income, range){
    var i = 0;
    var tax = 0;
    var restincome = income;
    
    while(i < (range.length-1) && restincome > range[i].max) {
        tax = tax + (range[i].max * range[i].tax / 100);
        console.log("tax 0 :  " + (range[i].max * range[i].tax / 100));
        
        restincome = restincome - tax;
        console.log("restincome 0 :  " + restincome);
        // console.log("restincome :  " + restincome);
        i++;
        
    }

    if(i <=  range.length && restincome > 0 ){
        tax = tax + ( restincome * range[i].tax/100 );
    }

    return tax;
}

var income = 75000;
console.log("Annual Income : " + income + "\nAnnual Tax : " + taxIncome(income, range));


var income = 750000;
console.log("Annual Income : " + income + "\nAnnual Tax : " + taxIncome(income, range));
