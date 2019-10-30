// const obj ={
//     name: 'yass',
//     getName(){
//         return this.name;
//     }
// }
// const getName=obj.getName.bind(obj); //transfers the context of object into the funtion
// console.log( getName());

class IndecisionApp extends React.Component{
    constructor(props){ 
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePickOptions=this.handlePickOptions.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.state={
            options:[] //props.options
        };
    }
    componentDidMount(){
        try{
            console.log('fetching data');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
            this.setState(()=> ({options: options}));
            }   
        }
        catch (e){
            //do nothing
        }
    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
            const json= JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
           // console.log('saving data!'); 
        }
       
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleDeleteOptions(){
        this.setState(()=> ({ options:[] } ));
        // this.setState(() => {
        //     return{
        //         options:[] 
        //     }
        //  }
        // ) 
    }
    handleDeleteOption(optiontoRemove){
        this.setState((prevState)=> ({
            options:prevState.options.filter((option)=> {
                return optiontoRemove!==option;
            })
        }))
        //console.log('hdo',option);
    }

    handlePickOptions(){
        this.setState(() => {
            const randomNum= Math.floor(Math.random()*this.state.options.length);
          //  console.log( this.state.options[randomNum]);
          alert (this.state.options[randomNum]) 
        })   
    }
    handleAddOption(option){ 
        if(!option){
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        //alert (option) 
        this.setState((prevState) => ({options:prevState.options.concat(option)}));
        // this.setState((prevState) => {
        //     return{ 
        //         options:prevState.options.concat([option])
        //     }
        // })
       
    
    }
    render(){
       // const title="Yassine's Indecision App";
        const subtitle='Put your life in the hands of a computer';
        //const options = ['thing one', ' thing two', ' thing three'];
        //console.log(optionsLength);
        return(
            <div>
                <Header  subtitle={subtitle}/> 
                <Action 
                hasOptions={this.state.options.length>0} 
                handlePickOptions={this.handlePickOptions}
                />    
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption }
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        );  
    }    
}
// IndecisionApp.defaultProps = {
//     options:[]
// }
//stateless functional component 
const Header = (props) => {
    return (
        <div>
        <h1> {props.title}</h1>
          {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
Header.defaultProps={
    title:"Yassine's Indecision App"
}
//class based component
// class Header extends React.Component {
//     render(){
//         //console.log(this.props);
//         return (
//             <div>
//                 <h1> {this.props.title}</h1>
//                 <h2> {this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
 
const Action =(props) => {
    return(
        <div> 
            <button 
            //onClick={this.handlePick}
            onClick={props.handlePickOptions}
            disabled={!props.hasOptions}
            > What should Our collective name be? </button>
        </div> 
    ); 
}
// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handlepick');
//     // }
//     render(){
//         return(
//             <div> 
//                 <button 
//                 //onClick={this.handlePick}
//                 onClick={this.props.handlePickOptions}
//                 disabled={!this.props.hasOptions}
//                 > What should I do? </button>
//             </div> 
//         ); 
//     } 
// }
   
const Options =(props) => {
    return(
        <div>
        <button onClick= {props.handleDeleteOptions}>Remove All</button>
        {props.options.length===0 && <p> Please add an option to get srarted!</p>}
        {props.options.map((anOption) =>(
            <Option
                key ={anOption} 
                optionText={anOption}
                handleDeleteOption={props.handleDeleteOption} 
            />
        ))
    }
        {/*<Option />*/} 
        </div>
    ); 
}
// class Options extends React.Component{

//     // constructor(props){
//     //     super(props);
//     //     this.handleRemoveAll=this.handleRemoveAll.bind(this); // so we can use (this) inside the function handleRemoveAll
//     // }
//     // handleRemoveAll(){
//     //     console.log(this.props.options);
//     //   //  alert('handleRemoveALL');
//     // }
//     render(){
//         return(
//             <div>
//             {/*Options component here*/}
//             {/*this.props.options.length*/}
//             {/*<button onClick= {this.handleRemoveAll}>Remove All</button>*/}
//             <button onClick= {this.props.handleDeleteOptions}>Remove All</button>
//             {this.props.options.map((anOption) =>{
//                 return <Option key ={anOption} optionText={anOption} />
//                 //<p key = {anOption}> {anOption}</p>
//             })
//         }
//             <Option /> 
//             </div>
//         ); 
//     }
// }

const Option =(props)=>{
    return (  
        <div>
        {props.optionText}
        <button 
            onClick={(e)=>{
                props.handleDeleteOption(props.optionText); // arrow function to pass the right thing instead of the event argument e to the handleDeleteOption function
            }}
        > 
        remove 
        </button>
        </div>
    );
};
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//             {/*Option component here*/}
//             {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        }
    }
        handleAddOption(e){
        e.preventDefault(); // prevents full page refresh

        const option= e.target.elements.option.value.trim(); 
        const error=this.props.handleAddOption(option);
        
        this.setState(() => ({error}) );
        // this.setState(() => {
        //     return {error:error}
        // })

        if (!error){
            e.target.elements.option.value= ''; //clear input data works only on class
        }
       
    }

   
    render(){
        return (
            <div>   
                {/*AddOption component here*/}
                {this.state.error&& <p> {this.state.error} </p>}
                <form onSubmit={this.handleAddOption}>  
                    <input type="text" name="option"/>
                    <button > Add Option</button>
                </form>
            </div>
        );
    }
}
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
ReactDOM.render(<IndecisionApp  />,document.getElementById('app')); 