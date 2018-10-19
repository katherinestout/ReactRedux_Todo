import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {BrowserRouter as Router, Route} from 'react-router-dom';



class Center extends Component {
 
    render() {
      return (
        <div className="Center">
         <div>Age: <span> {this.props.age}</span></div>
         <button onClick={this.props.onAgeUp}>Age UP</button>
         <button onClick = {this.props.onAgeDown}>Age Down</button>
         <hr/>
         <div>History</div>
         <div>
            <ul>{
              this.props.history.map(el => (
                <li key={el.id}>
                  {el.age}
                </li>
              ))
            }</ul>
         </div>
        </div>
      );
    }
  }
  //if you want to access the store from anywhere you need to map it
  //map props to store and actions
  
  //we need to map state to props so it is available to us
  //-when state is changed-
  const mapStateToProps = state => {
  return{
    age: state.age,
    history: state.history
  };
  };
  const mapDispatchToProps = dispatch => {
    return {
      onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
      onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1})
    };
  };
  
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps) (Center);