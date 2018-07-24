import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Answer(props) {

    return(
      <div>
        <input type="radio" value = {props.answer[0]} name= {props.qNum + ""} onClick = {(e) => props.onCorrect(e)}/>{props.answer[0]} <br />
        <input type="radio" value = {props.answer[1]} name= {props.qNum + ""} onClick = {(e) => props.onCorrect(e)}/>{props.answer[1]} <br />
        <input type="radio" value = {props.answer[2]} name= {props.qNum + ""} onClick = {(e) => props.onCorrect(e)}/>{props.answer[2]} <br />
        <input type="radio" value = {props.answer[3]} name= {props.qNum + ""} onClick = {(e) => props.onCorrect(e)}/>{props.answer[3]} <br />
      </div>
  );
}

class Question extends React.Component{

  render(){
    return(
      <h2>
        {this.props.question[this.props.qNum]}
      </ h2>
    );
  }
}


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      userAnswer: [
        ["2009", "2012", "2018", "2017"],
        ["Bboy Samson", "Bboy Pele", "Bgirl Selma Soul", "Bboy Kulani"],
        ["Joe Stolte", "Alien Ness", "Keebz", "Andre Nguyen"],
        ["Uncomfortably Fresh 17th Ann", "Break Wars", "Pro Kids 10th Ann", "Daft Funk Crew: Manko's Birthday"],
      ],
      question: [
        "What year did Dialtone & Fever One battle into Massive Monkees?",
        "Who won 2nd at the Northwest Sweet 16 in 2018?",
        "In 2018 at Massive Monkee Day Footwork battle tiebreaker for the top 8 position, who notified Bboy Makoto that he made it?",
        "What jam did Deathray make an appearance with a Canadiam bboy in 2018?"
      ],
      correctQuestions: 0,
      answer: ["2017", "Bboy Kulani", "Alien Ness", "Pro Kids 10th Ann"],
      totalQuestions: 4,
      result: true,
    };
  };

  handleClick(e) {
    if(e.target.value === this.state.answer[0] || e.target.value === this.state.answer[1] || e.target.value === this.state.answer[2] || e.target.value === this.state.answer[3]){
      this.setState((state) => ({
        correctQuestions: this.state.correctQuestions + 1}),
        console.log(e.value)
      );
    }
  }

  renderQuiz(){
    return(
      <form>
        <Question qNum = {0} question={this.state.question} />
        <Answer qNum = {0} answer={this.state.userAnswer[0]} onCorrect={i => this.handleClick(i)}/>
        <Question qNum = {1} question={this.state.question} />
        <Answer qNum = {1} answer={this.state.userAnswer[1]} onCorrect={i => this.handleClick(i)}/>
        <Question qNum = {2} question={this.state.question} />
        <Answer qNum = {2} answer={this.state.userAnswer[2]} onCorrect={i => this.handleClick(i)}/>
        <Question qNum = {3} question={this.state.question} />
        <Answer qNum = {3} answer={this.state.userAnswer[3]} onCorrect={i => this.handleClick(i)}/>
        <input type="submit" onClick = {(e) => {
          e.preventDefault();
          return(
            this.setState((state)=>({
              result: !this.state.result,
              correctQuestions: this.state.correctQuestions
            }))
          );
        } }/>
      </form>
    );

  }
  renderResult(){
    return(
      <h1> You got {this.state.correctQuestions} out of {this.state.totalQuestions}</h1>
    );
  }

  render(){

    return(
      <div>
        {this.state.result ? this.renderQuiz() : this.renderResult()}
      </div>
    );
  }
}


ReactDOM.render(<Quiz />, document.getElementById('root'));
