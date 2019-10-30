
class Counter extends React.Component{
    
    constructor(props){
        super(props);
        //console.log(props.count);
        this.handleAddOne= this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
       // console.log(props.count);
        this.state={ // creates an obj
        count:0 //props.count
        }
    }

  componentDidMount(){
    console.log('fetching data');
    const json=localStorage.getItem('count');
    const countNum=parseInt(json,10);
    this.setState(()=> ({count:countNum}));
  }
  componentDidUpdate(prevProps,prevState){ // ***prevProps is necessary for prevState to work!!
    if (prevState.count !== this.state.count){
        console.log('saving data!'); 
        localStorage.setItem('count',this.state.count); // this fires everytime we change count
    }
    
  }

    handleAddOne(){
        //console.log('addOne');
        this.setState( (prevState)=>{
            return{ //returns our object with after updating count 
                count:prevState.count+1
            }
        })
        //this.state.count++;
        //console.log(this.count);
        //this.props.count+=1;
    };

    handleMinusOne(){
        //console.log('minusOne');
        this.setState( (prevState)=>{
        return{
            count:prevState.count-1
        }
    })
    }

    handleReset(){
      //  console.log('Reset');
        this.setState( ()=>{
            return{ //returns an object
                count:0
            }
        })
    }
   render(){
    return (
    <div> 
    <h1> Count:{this.state.count} </h1>
    <button onClick={this.handleAddOne}> +1 </button>
    <button onClick={this.handleMinusOne}> -1 </button>
    <button onClick={this.handleReset}> reset </button>
    </div>
    )
}
}
// Counter.defaultProps={
//     count:0
// }

ReactDOM.render(<Counter /> , document.getElementById('app') );
//ReactDOM.render(<Counter count={-2}/> , document.getElementById('app') ); // to rentder COunter in the <div> of id 'app'
// let count =0;
// const addOne=()=>{
//     //console.log("addOne",count);
//     count++;
//     renderCounterApp();
// };
// const minusOne=()=>{
//     //console.log("minusOne");
//     count--;
//     renderCounterApp();
// };
// const reset=()=>{
//    // console.log("reset");
//     count=0;
//     renderCounterApp();
// };

// //const someId="someIdhere"


// //console.log(templateTwo);

// // const user={ 
// //     name: 'Andrew',
// //     age:32,
// //      location:'NY'
// // };
  

// // function getLocation(location){
// //     if (location)
// //     return <p> Location: {location}</p>
// //    // else
// //     //return undefined;
// // }

// // const templateTwo = (
// //     <div>
// //         <h1>
// //            {user.name?user.name:'Anonymous'} 
// //         </h1>
       
// //         {(user.age && user.age>=19) && <p> Age: {user.age}</p> }
// //         {getLocation(user.location)}
// //     </div>
// // )

 

// //ReactDOM.render(templateTwo, appRoot);

// const renderCounterApp= ()=> {
//     const templateTwo=(
//         <div>
//         <h1> Count:{count}</h1>
//         <button onClick={addOne} className="button">  +1</button>
//        <button onClick={minusOne}> -1  </button>
//        <button onClick={reset}> reset </button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);  
// }

// renderCounterApp();

