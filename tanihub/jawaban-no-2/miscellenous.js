/* 
    Capitalize case in sentence
*/
function capitalCase(string) {
    var splitted = string.split(' ');
    var arr = [];

    splitted.forEach((e,i) => {
        arr.push(e[0].toUpperCase() + e.substring(1));
    });

    return arr.join(' ');
}

console.log(setTitle("sesuatu yang sangat luar biasa"));