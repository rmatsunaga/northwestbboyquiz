import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Question(props) {
  var question = {
    0: "What year did Dialtone & Fever One battle into Massive Monkees?",
    1: "Who won 2nd at the Northwest Sweet 16 in 2018?",
    2: "In 2018, at the Massive Monkees day Footwork battle tiebreaker for top 8, who notified bboy Makoto that he made it?",
    3: "What jam did Deathray make an appearance with bboy Tye the Jedi in 2018?"
  };

  return (
    <h2>
      {question.props.number}
    </ h2>
  );
}

function Answer(props) {
  var answer = {
    0: 2009,
    1: 2012,
    2: 2017,
    3: "Bboy Samson",
    4: "Bgirl Selma Soul",
    5: "Bboy Kulani",
    6: "Joe Stolte",
    7: "Alien Ness",
    8: "Andren.io",
    9: "Pro Kids 10th Anniversary",
    10: "Break Wars",
    11: "Uncomfortably Fresh 17th Anniversary"
  };

  return (
    <input type="checkbox"> {answer.props.number}
  );
}

class Questions extends React.Component{
  renderQuestion(i) {
    return (
      <Question
        number = {i}
      />
    );
  }

  renderAnswer(i) {
    return (
      <Answer
        number = {i}
      />
    );
  }

  render(){
    return(
      <div>
        <div className="Q1">
          {this.renderQuestion(0)}
          {this.renderAnswer(0)}
          {this.renderAnswer(1)}
          {this.renderAnswer(2)}
        </div>
        <div className="Q2">
          {this.renderQuestion(1)}
          {this.renderAnswer(3)}
          {this.renderAnswer(4)}
          {this.renderAnswer(5)}
        </div>
        <div className="Q3">
          {this.renderQuestion(2)}
          {this.renderAnswer(6)}
          {this.renderAnswer(7)}
          {this.renderAnswer(8)}
        </div>
        <div className="Q4">
          {this.renderQuestion(3)}
          {this.renderAnswer(9)}
          {this.renderAnswer(10)}
          {this.renderAnswer(11)}
        </div>
      </div>
    );
  }
}

class Quiz extends React.Component {
  render(){
    return(
      <Questions />
    );
  }
}

ReactDOM.render(<Quiz />, document.getElementById('root'));
