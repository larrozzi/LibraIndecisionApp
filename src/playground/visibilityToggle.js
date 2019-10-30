class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);// preserves the this binding for function
        this.state={
            visibility:false
        }
    }
    handleToggleVisibility(){
    //this.setState((prevState)=>{visibility:!prevState.visibility})
        this.setState((prevState)=>{
          //  console.log(!prevState.visibility)
            return{ visibility:!prevState.visibility}
        });
    }
    render()  { 
        return (
        <div>
        <h1> Visibility Toggle </h1>
        <button onClick={this.handleToggleVisibility}> {this.state.visibility? 'Hide details':'Show details'}</button>
        {this.state.visibility &&
            (<div>
                <p> Hey. These are some details you can now see!</p> </div>
            )
        }    
        </div>
        )
    };
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app') ); 


// console.log('visibility toggle.js is runnin');

//  const visible={
//     title: "Visibility Toggle",
//     detail: ""
// }

// let i=0;
// let turn=0;

// let showDetails=()=>{
//     turn=i%2;
//     rendervisibilitybutton();
// }

// let hideDetails=()=>{
//     turn=i%2;
//     rendervisibilitybutton();
// }

// let visToggle=()=>{
//     if (turn==0){
//         i++;
//         visible.detail=undefined;
//        return  <button onClick= {showDetails}> {'Show details'}</button>}
//     else{
//         i++;       
//         visible.detail="here are the details";
//        return <button onClick={hideDetails}> {'Hide details'}</button>  
//     }
//      // still not sure whats the diff between showDetails and showDetails() in this function   
// }
// const appRoot = document.getElementById('app');

// const rendervisibilitybutton = () => {
//     const template3 =(
//         <div>
//         <h1> {visible.title} </h1>
//         {visToggle()}
//         { <p> {visible.detail} </p>}
//         </div>
//         );
//     ReactDOM.render(template3, appRoot); 
// }

// rendervisibilitybutton();