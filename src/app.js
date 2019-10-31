import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; //for having all browser show the same thing
import './styles/styles.scss';  

// //const template= <p> testing 123</p>; //this won't work because babel is not functional so it won't convert it to jsx
// const template= <p> THIS jsx from webpack</p> // same as React.createElement('p',{}, 'THIS jsx');
// ReactDOM.render(template,document.getElementById('app'));

 ReactDOM.render(<IndecisionApp/>,document.getElementById('app')); 

// render some layout with jsx
// const Layout =(props) => {
//     return ( 
//     <div>
//         <p> header</p>
//         {props.children}
//         <p> footer</p>
//     </div>
//     );
// }

// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1> Page Title</h1>
//             <p> this is a page</p>
//         </div>
//     </Layout>
//     ),document.getElementById('app')); 

//************************
// class OldSyntax{
//     constructor(){
//         this.name= 'yass';
//         this.getGreeting= this.getGreeting.bind(this);
//     }
//     getGreeting(){   
//         return `hi, my name is ${this.name}.`; //this is undefined without the bind
//     }
// } 
// const oldSyntax = new OldSyntax(); 
// const getGreeting = oldSyntax.getGreeting;

// console.log(getGreeting())  ; 

// // ****Or
// class NewSyntax{
//     name = "habib";  //key value pair  not variable declaring
//     getGreeting =()=> { // arrow function don't have a this so they get the class this
//         return `hi, my name is ${this.name}.`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting =  newSyntax.getGreeting;
// console.log(newGetGreeting());

//************************************ 
// //import'./utils.js';
// // import subtract,{add,square,} from './utils.js' //name of default doesn't matter

// // console.log('app.js is runnin!!!');
// // console.log(square(4));
// // console.log(add(2,5)); 
// // //console.log(anyname(8,5)); //name of default doesn't matter
// // console.log(subtract(8,5)); //name of default doesn't matter

// import isSenior,{isAdult,canDrink} from './person.js';

// console.log(isAdult(15));
// console.log(canDrink(15));
// console.log(isAdult(25));
// console.log(canDrink(35));

// console.log(isSenior(60));
// console.log(isSenior(50));

// import validator from 'validator';
// console.log(validator.isEmail('test'));
// console.log(validator.isEmail('test@gmail.com'));

//*************************************
// const jsx= (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

// const User=(props)=>{
//     return ( 
//         <div>
//         <p> name:{props.name} </p>
//         <p> age: {props.age}</p>
//         </div>
//     )
//} 