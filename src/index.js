import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Answer(props) {
  const answer = [
    [2009, 2012, 2018, 2017],
    ["Bboy Samson", "Bboy Pele", "Bgirl Selma Soul", "Bboy Kulani"],
    ["Joe Stolte", "Alien Ness", "Keebz", "Andre Nguyen"],
    ["Uncomfortably Fresh 17th Ann", "Break Wars", "Pro Kids 10th Ann", "Daft Funk Crew: Manko's Birthday"]
  ];

    return(
      <div>
        <div><input type="checkbox" /> {answer[props.aNum][0]}</div>
        <div><input type="checkbox" /> {answer[props.aNum][1]}</div>
        <div><input type="checkbox" /> {answer[props.aNum][2]}</div>
        <div><input type="checkbox" /> {answer[props.aNum][3]}</div>
      </div>
  );
}

function Question (props){

  var question = [
    "What year did Dialtone & Fever One battle into Massive Monkees?",
    "Who won 2nd at the Northwest Sweet 16 in 2018?",
    "In 2018 at Massive Monkee Day Footwork battle tiebreaker for the top 8 position, who notified Bboy Makoto that he made it?",
    "What jam did Deathray make an appearance with a Canadiam bboy in 2018?"
  ];
  return(
    <h2>
      {question[props.qNum]}
    </ h2>
  );

}

class Questions extends React.Component{

  render() {
    return(
      <div>
        <Question qNum = {this.props.qNum} />
        <Answer aNum = {this.props.qNum} />
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
