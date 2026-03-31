import StatisticLine from "./StatisticLine";
export default function Statistics({ good, neutral, bad }) {
   const calcAverage = (good, neutral, bad) => {
      const sum = good + neutral + bad;
      return (good - bad) / sum;
   };

   const calcPositive = (good, neutral, bad) => {
      return (good / (good + bad + neutral)) * 100;
   };

   // return early if no feedback yet
   if (good + neutral + bad === 0) return <p>No feedback given</p>;

   return (
      <>
         <StatisticLine text="good" value={good} />
         <StatisticLine text="neutral" value={neutral} />
         <StatisticLine text="bad" value={bad} />
         <StatisticLine text="all" value={good + neutral + bad} />
         <StatisticLine
            text="average"
            value={calcAverage(good, neutral, bad)}
         />
         <StatisticLine
            text="positive"
            value={`${calcPositive(good, neutral, bad)}%`}
         />
      </>
   );
}
