import React from "react";
import Feedback from "../Feedback/Feedback";

import { GlobalStyle } from "../GlobalStyles";
import { HeaderFeedback, } from "./App.styles";


const App = () => (
    <>
        <HeaderFeedback>Feedback</HeaderFeedback>
        <Feedback/>
        <GlobalStyle/>
    </>
)

export default App;