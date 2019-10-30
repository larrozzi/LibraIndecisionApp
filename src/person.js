console.log("person.js is running");

export const isAdult=(age)=> age>=18;
export const canDrink=(age)=>(age>=21);

const  isSeniorCitizen=(age) => age>=60;
export default isSeniorCitizen;