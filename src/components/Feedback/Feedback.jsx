// import { Statistic } from "components/Statistic/Statistic";
import React, { Component } from "react";
import { FeedbackBlok, FeedbackText, ButtonFeedback, } from "./Feedback.styles";



class Feedback extends Component{
    state = {
    good: 0,
    neutral: 0,
    bad: 0
    }

    ButtoGood = event => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    }
    ButtonNeutral = event => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    }

    ButtoBad = event => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    }

    render() {
        return (
            <>
            <FeedbackBlok>
                <FeedbackText>Pleace leave feedback</FeedbackText>
                <span>{this.state.good}</span>
                <span>{this.state.neutral}</span>
                <span>{this.state.bad}</span>

                <div>
                    <ButtonFeedback onClick={this.ButtoGood}>good</ButtonFeedback>
                    <ButtonFeedback onClick={this.ButtonNeutral}>neutral</ButtonFeedback>
                    <ButtonFeedback onClick={this.ButtoBad}>bad</ButtonFeedback>
                </div>
            </FeedbackBlok>
            {/* <Statistic/> */}
            </>
            
        )
    }
}

export default Feedback;