import React from 'react';

 const Option =(props)=> (  
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

export default Option;
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
