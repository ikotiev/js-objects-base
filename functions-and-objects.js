function getName(person){
    return person.name
}
 /*console.log(getNames({name: 'ilyas'}));*/


function getNames(person){
    let arr = [];
    arr.push(person.firstname);
    arr.push(person.lastname);
    return arr
}

function concatNames(obj, lastname){
    return `${obj.firstname} ${lastname}`
}
function correctName(object){
    if(object.fathername == undefined){
    var text = object.firstname;
    } else{
        var text = `${object.firstname} ${object.lastname} ${object.fathername}`
    } return text
}