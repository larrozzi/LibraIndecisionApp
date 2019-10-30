console.log('utils.js is runnin'); 


//*********named exports**************
// export const square=(x)=> x*x;
// export const add =(a,b)=> a+b;

// or
// const square=(x)=> x*x;
// const add =(a,b)=> a+b;
//export{square,add};

//*********default export************** -
// const square=(x)=> x*x;
// const add =(a,b)=> a+b;
// const subtract =(a,b) => a-b;
// export{square,add,subtract as default}; // up to one default export 

//or
export const square=(x)=> x*x;
export const add =(a,b)=> a+b;
// const subtract =(a,b) => a-b;
// export default subtract;

//or
export default (a,b) => a-b;





