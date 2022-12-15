import React from "react";
import Feedback from "../Feedback/Feedback";

import { Statistic } from "components/Statistic/Statistic";
import { GlobalStyle } from "../GlobalStyles";
import { HeaderFeedback, } from "./App.styles";


const App = () => (
    <>
        <div>
            <HeaderFeedback>Feedback</HeaderFeedback>
            <Feedback />
            <Statistic/>
            <GlobalStyle/>
    
        </div>
    </>

)

export default App;