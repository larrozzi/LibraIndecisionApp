var nameVar= 'yassine';
nameVar='balsam';
console.log('nameVar',nameVar);

let nameLet='jeff';

console.log('nameLet',nameLet);

function getPetName(){
    var petName ='vicky';
    return petName;
}

//console.log(petName);
console.log(getPetName());

const fullName='Yassine Laaroussi';
let firstName;
if (fullName){
 firstName= fullName.split(' ')[0]; // firsName.split() is an array
console.log(firstName);
}

console.log(firstName);