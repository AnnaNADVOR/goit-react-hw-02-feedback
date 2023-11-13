import { Component } from "react";

import Section from "../Feedback/Section/Section";
import Statistics from "../Feedback/Statistics/Statistics";
import FeedbackOptions from "../Feedback/FeedbackOptions/FeedbackOptions";
import Notification from "../Feedback/Notification/Notification";
import { Container } from "./App.styled";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  onLeaveFeedback = (event) => {
    let option = event.currentTarget.id;
 
   this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  });
  }

  countTotalFeedback() {
    let feedbacksArr = Object.values(this.state);  
    let total = 0; 

    for (let i = 0; i <feedbacksArr.length; i += 1) {
      total += feedbacksArr[i]; 
    }

    return total; 
  }

  countPositivePercentage() {
    return Math.round(this.state.good * 100 / this.countTotalFeedback()) || 0;  
   
  }

  render() {
    return (
      <Container>           
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />            
        </Section> 
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
            total={this.countTotalFeedback()}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            percentage={this.countPositivePercentage()}
            />) :
            (<Notification message="There is no feedback" />)
          }          
        </Section>  
      </Container>
    )
  }

}
     
export default App;


