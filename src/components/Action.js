import React from 'react';


const Action =(props) => (
        <div> 
            <button className='big-button'
            //onClick={this.handlePick}
            onClick={props.handlePickOptions}
            disabled={!props.hasOptions}
            > What should I pick? </button>
        </div> 
    ); 

export default Action;

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
   