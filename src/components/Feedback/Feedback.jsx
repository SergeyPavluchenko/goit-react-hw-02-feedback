import React, { Component } from "react";
import { FeedbackBlok } from "./Feedback.style";



class Feedback extends Component{
    render() {
        return (
            <FeedbackBlok>
                <p>Pleace leave feedback</p>
                <div>
                    <button className="button__style" type="button">good</button>
                    <button className="button__style" type="button">bad</button>
                    <button className="button__style" type="button">neutral</button>
                </div>
            </FeedbackBlok>
        )
    }
}

export default Feedback;