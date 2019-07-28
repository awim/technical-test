function Hero(name, alterEgo, gender, powers){
    this.name = name;
    this.alterEgo = alterEgo;
    this.gender = gender;
    this.powers = powers;
}

var arr = [{
    name: 'Clark Kent',
    alterEgo: 'Superman',
    gender: 'Male',
    powers: ['super human strength', 'flight', 'x-ray vision', 'heat vision']
  }, {
    name: 'Barry Allen',
    alterEgo: 'The Flash',
    gender: 'Male',
    powers: ['super speed', 'phasing', 'time travel', 'dimensional travel']
  }, {
    name: 'Diana Prince',
    alterEgo: 'Wonder Woman',
    gender: 'Female',
    powers: ['super human strength', 'super human reflexes', 'super human agility', 'flight']
  }, {
    name: 'Bruce Banner',
    alterEgo: 'The Hulk',
    gender: 'Male',
    powers: ['super human strength', 'thunder clap', 'super healing factor']
  }, {
    name: 'Wade Wilson',
    alterEgo: 'Deadpool',
    gender: 'Male',
    powers: ['super healing factor', 'super human agility']
  }, {
    name: 'Jean Grey',
    alterEgo: 'Phoenix',
    gender: 'Female',
    powers: ['telepathy', 'telekinesis', 'rearrange matter at will']
  }, {
    name: 'Wanda Maximoff',
    alterEgo: 'Scarlet Witch',
    gender: 'Female',
    powers: ['reality manipulation', 'astral projection', 'psionic']
  }];
  
//alterEgo
Hero.heros = function(tuple){
    alterEgo = [];
    tuple.forEach((x, y) => { alterEgo.push(x['alterEgo']); });

    return alterEgo;
}

//powers
Hero.allpowers = function(tuple){
    powers = [];
    tuple.forEach((x, y) => { 
        x['powers'].forEach((x) => {
        if(!powers.includes(x)) powers.push(x); 
        } );
    });

    return powers;
}


//groupGender
Hero.groupBy = function(tuple, key){
    keyGroup = [];

    tuple.forEach((x) => {
        if(x[key] instanceof Array) {
            keyGroup = [];
            console.log(key + " is array, we not supported group list by array for this moment");
            throw BreakException;
        }
            
        member = keyGroup.find( (e) => {            
            if (e[key] == x[key]){
                delete x[key];
                e['heros'].push(x);
                return e;
            }
        });

        if(!member || typeof member === undefined) {
            member = {};
            member[key] = x[key];
            member['heros'] = [];
            keyGroup.push( member );
        }        
    });

    return keyGroup;
}

//transpose
Hero.transpose = function(tuple, filter){
    record = [];
    
    field = []; 
    filter.forEach((x) => {
        field.push(x.replace(/([a-z])([A-Z])/g, '$1 $2'));
    });

    record.push(field);

    tuple.forEach((e) => {
        row = [];
        filter.forEach((f) => {
            row.push(e[f]);
        });
        record.push(row);
    });

    return record;
}


console.log("=> print out heros : ");
console.log(Hero.heros(arr));

console.log("\n=> print out all hero powers : ");
console.log(Hero.allpowers(arr));

console.log("\n=> print out hero group by : ");
// console.log(Hero.groupBy(arr, 'gender'));
Hero.groupBy(arr, 'gender').forEach((x) => {
    console.log(x);
});

console.log("\n=> print out hero transpose : ");
console.log(Hero.transpose(arr, ['name', 'alterEgo', 'gender']));