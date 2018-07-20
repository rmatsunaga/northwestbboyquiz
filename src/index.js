import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Answer extends React.Component{
  render(){
    return(
      <div>
        <input type="checkbox" />
        <div>2009</div>
      </div>
    );
  }
}

function Question (props){

  var question = {
    0: "What year did Dialtone & Fever One battle into Massive Monkees?",
    1: "Who won 2nd at the Northwest Sweet 16 in 2018?",
    2: "In 2018 at Massive Monkee Day Footwork battle tiebreaker for the top 8 position, who notified Bboy Makoto that he made it?",
    3: "What jam did Deathray make an appearance with a Canadiam bboy in 2018?"
  };
  return(
    <h2>
      {question.props.qNum}
    </ h2>
  );

}

class Questions extends React.Component{

  render() {
    return(
      <div>
        <Question qNum = {this.props.qNum} />
        <Answer qNum = {this.props.qNum} />
      </div>
    );
  }
}

class Quiz extends React.Component {
  render(){
    return(
      <div>
        <Questions qNum = {0} />
        <Questions qNum = {1} />
        <Questions qNum = {2} />
        <Questions qNum = {3} />
      </div>
    );
  }
}

ReactDOM.render(<Quiz />, document.getElementById('root'));
