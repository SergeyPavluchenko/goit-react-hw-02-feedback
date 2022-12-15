import { StatisticBlock, StatisticTitle } from "./Statistic.styles"


export const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <>
            <StatisticBlock>
            <StatisticTitle>Statistic</StatisticTitle>
            <p className=""><samp>Good: { good }</samp></p>
            <p className=""><samp>Neutral: { neutral }</samp></p>
            <p className=""><samp>Bad: { bad }</samp></p>
            <p className=""><samp>Total: { total }</samp></p>
            <p className=""><samp>Positive Feedback: { positiveFeedback }</samp></p>
        </StatisticBlock>
        </>
        )

}