import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardText, Button } from 'reactstrap';
import './index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Answer(props) {

    return(
      <div className = "answerBundle">
        <div className = "oneAnswer"><input
          type="radio"
          value = {props.answer[0]}
          name= {props.qNum}
          onClick = {(e) => props.onCorrect(e)}
        />{props.answer[0]}<br /></div>
        <div className = "oneAnswer"><input
          type="radio"
          value = {props.answer[1]}
          name= {props.qNum}
          onClick = {(e) => props.onCorrect(e)}
        />{props.answer[1]}<br /></div>
        <div className = "oneAnswer"><input
          type="radio"
          value = {props.answer[2]}
          name= {props.qNum}
          onClick = {(e) => props.onCorrect(e)}
        />{props.answer[2]}<br /></div>
        <div className = "oneAnswer"><input
            type="radio"
            value = {props.answer[3]}
            name= {props.qNum}
            onClick = {(e) => props.onCorrect(e)}
          />{props.answer[3]}<br /></div>
      </div>
  );
}

class Question extends React.Component{

  render(){
    return(
      <div>
      <h2 className = "greenQuestion">
        Question {this.props.qNum + 1}
      </h2>
      <h2 className = "question">
        {this.props.question[this.props.qNum]}
      </ h2>
      </div>
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
        "In 2018 at Massive Monkee Day Footwork battle, who notified Bboy Makoto that he passed?",
        "What jam did Deathray make an appearance with a Canadiam bboy in 2018?"
      ],
      correctQuestions: 0,
      answer: ["2017", "Bboy Kulani", "Alien Ness", "Pro Kids 10th Ann"],
      totalQuestions: 4,
      result: true,
      q1Correct: false,
      q2Correct: false,
      q3Correct: false,
      q4Correct: false
    };
  };

  handleClick(e) {
    if(e.target.name === "0"){
      if(e.target.value === this.state.answer[0]){
        this.setState((state) => ({
          correctQuestions: this.state.correctQuestions + 1,
          q1Correct: true
        }))
      } else if (this.state.q1Correct) {
        this.setState((state)=>({
          correctQuestions: this.state.correctQuestions - 1,
          q1Correct: false
        }))
      }
    } else if(e.target.name === "1"){
      if(e.target.value === this.state.answer[1]){
        this.setState((state)=>({
          correctQuestions: this.state.correctQuestions + 1,
          q2Correct: true
        }))
      } else if (this.state.q2Correct) {
        this.setState((state)=>({
          correctQuestions: this.state.correctQuestions - 1,
          q2Correct: false
        }))
      }
    } else if(e.target.name === "2"){
      if(e.target.value === this.state.answer[2]){
        this.setState((state)=>({
          correctQuestions: this.state.correctQuestions + 1,
          q3Correct: true
        }))
      } else if (this.state.q3Correct) {
        this.setState((state)=>({
          correctQuestions: this.state.correctQuestions - 1,
          q3Correct: false
        }))
      }
    } else if(e.target.name === "3"){
      if(e.target.value === this.state.answer[3]){
        this.setState((state)=>({
          correctQuestions: this.state.correctQuestions + 1,
          q4Correct: true
        }))
      } else if (this.state.q4Correct) {
        this.setState((state)=>({
          correctQuestions: this.state.correctQuestions - 1,
          q4Correct: false
        }))
      }
    }
  }

  renderQuiz(){
    return(
      <ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
        <form className = "container">
          <div className = "qBundle"><Card><CardText>
            <Question qNum = {0} question={this.state.question} />
            <Answer qNum = {0} answer={this.state.userAnswer[0]} onCorrect={i => this.handleClick(i)} q4Correct= {this.state.q1Correct}/>
          </CardText></Card></div>

          <div className = "qBundle"><Card><CardText>
            <Question qNum = {1} question={this.state.question} />
            <Answer qNum = {1} answer={this.state.userAnswer[1]} onCorrect={i => this.handleClick(i)} q4Correct= {this.state.q2Correct}/>
          </CardText></Card></div>

          <div className = "qBundle"><Card><CardText>
            <Question qNum = {2} question={this.state.question} />
            <Answer qNum = {2} answer={this.state.userAnswer[2]} onCorrect={i => this.handleClick(i)} q4Correct= {this.state.q3Correct}/>
          </CardText></Card></div>

          <div className = "qBundle"><Card><CardText>
            <Question qNum = {3} question={this.state.question} />
            <Answer qNum = {3} answer={this.state.userAnswer[3]} onCorrect={i => this.handleClick(i)} q4Correct= {this.state.q4Correct}/>
          </CardText></Card></div>

          <input className = "submit" type="submit" onClick = {(e) => {
            e.preventDefault();
            return(
              this.setState((state)=>({
                result: !this.state.result,
                correctQuestions: this.state.correctQuestions
              }))
            );
          } }/>
        </form>
      </ReactCSSTransitionGroup>
    );

  }
  renderResult(){
    return(
      <h1> You got {this.state.correctQuestions} out of {this.state.totalQuestions} correct!</h1>
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
