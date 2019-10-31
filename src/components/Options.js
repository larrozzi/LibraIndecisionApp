
import React from 'react';
import Option from './Option';

const Options =(props) => (
        <div>
            <div className='widget-header'>
                <h3 className='widget-header__title'> Your Options</h3>
                <button 
                className="button button--link"
                onClick= {props.handleDeleteOptions}>Remove All
                </button>
            </div>
         {props.options.length===0 && <p className='widget__msg'> Please add an option to get started!</p>}
         {props.options.map((anOption,index) =>(
            <Option
                key ={anOption} 
                optionText={anOption}
                count={index+1}
                handleDeleteOption={props.handleDeleteOption} 
            />
        ))
    }
        {/*<Option />*/} 
        </div>
    ); 


export default Options;
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

