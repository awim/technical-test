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
    var tax = [];
    var restincome = income;
    
    do{
        if(range[i].max > 0 && restincome > range[i].max){
            restincome = restincome - range[i].max;
            tax.push(range[i].max * range[i].tax / 100);
        } else {
            tax.push(restincome * range[i].tax / 100);
            break;
        }

        i++;
    } while(i < range.length);

    return tax;
}

var income = 75000;
var annualTax = taxIncome(income, range);
console.log("Annual Income : " + income);
console.log("Annual Tax : " + annualTax);


var income = 750000;
console.log("Annual Income : " + income + "\nAnnual Tax : " + taxIncome(income, range));
