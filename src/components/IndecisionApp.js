import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
 
    // constructor(props){ 
    //     super(props);
    //     this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    //     this.handlePickOptions=this.handlePickOptions.bind(this);
    //     this.handleAddOption=this.handleAddOption.bind(this);
    //     this.handleDeleteOption=this.handleDeleteOption.bind(this);
    //     // this.state={
    //     //     options:[] //props.options
    //     // };
    // }
    state= {
        options:[],
        selectedOption: undefined
    }
    handleClearSelectedOption=()=>{
        this.setState(()=> ({selectedOption: undefined}));
    }
    handleDeleteOptions=()=>{
        this.setState(()=> ({ options:[] } ));
        // this.setState(() => {
        //     return{
        //         options:[] 
        //     }
        //  }
        // ) 
    }
    handleDeleteOption=(optiontoRemove)=>{
        this.setState((prevState)=> ({
            options:prevState.options.filter((option)=> {
                return optiontoRemove!==option;
            })
        }))
        //console.log('hdo',option);
    }

    handlePickOptions=()=>{
        this.setState(() => {
            const randomNum= Math.floor(Math.random()*this.state.options.length);
          //  console.log( this.state.options[rand omNum]);
          //alert (this.state.options[randomNum]) 
            this.setState(  //passing an update function
            ()=>({selectedOption: [this.state.options[randomNum]]})
            ) 
        })   
    }
    handleAddOption=(option)=>{ 
        if(!option){
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        //alert (option) 
        this.setState((prevState) => ({options:prevState.options.concat(option)}));
    }
    componentDidMount(){
        try{
            //console.log('fetching data');
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
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
            
        );  
    }    
}

export default IndecisionApp;