import React from 'react';


//stateless functional component 
const Header = (props) => (
        <div className="header">
        <h1 className="header__title"> {props.title}</h1>
          {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    );

Header.defaultProps={
    title:"A Libra's Indecision App"
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

export default Header;
