console.log('app.js is runnin');

// JSX - JavaScript XML
const app={
    title: "Yassine's Indecision App",  
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

//console.log("form before submission");
const onFormSubmit=(e)=>{
    e.preventDefault();
   //console.log("form submitted");
    const option= e.target.elements.option.value; 
    if (option){
        app.options.push(option); 
        e.target.elements.option.value='';
        //console.log(app.options.length);
        renderForm();
    }
};
const onRemoveALL =() =>{  
    app.options= [];
    renderForm();
} 
const onMakeDecision=() =>{
const randomNum= Math.floor(Math.random()*app.options.length);
const randomOption= app.options[randomNum];
alert(randomOption);
//console.log (randomNum);
}
//const numbers =[5,6,2];

function getOptions(options){
    return(
       <div> 
        <p> {app.options.length>0 ?'Here are your Options:':'No options available'}</p>
        {/*<p> {app.options.length}</p>*/}
        <button disabled={app.options.length==0} onClick = {onMakeDecision}> What should I do? </button>
        <button onClick ={onRemoveALL}> Remove All</button>
        {
          //  [99,4,63,77]
        //  [ <p key="1"> a</p>,<p key="2">b</p>,<p key="3">c</p> ]
        // numbers.map((aNumber) => {
        //     //return aNumber*3;
        //     return <p key = {aNumber}>Number: {aNumber}</p>
        // }) 
        }
        <ol>
        {
        app.options.map((anOption) =>{
            return <li key = {anOption}> {anOption}</li>
        })
        }
        </ol>
        {// these brackets are only here for commenting 
    //    <ol>
    //         <li>Item 1</li>
    //         <li>Item 2</li>
    //         <li>Item 3</li>
    //     </ol>
        }
        <form onSubmit={onFormSubmit}> 
        <input type="text" name="option"/>
        <button> Add Option</button>
        
        </form>
       </div> 
    )
}

const appRoot = document.getElementById('app');

const renderForm = () => {

    const template = (
        <div> 
            <h1> {app.title} </h1> 
           <h3>{app.subtitle && <p> {app.subtitle}</p>}</h3>
            {app.options && getOptions(app.options)}
        </div>
        ); 
    ReactDOM.render(template, appRoot); 
 }
   

//ReactDOM.render(template, appRoot);  

renderForm();