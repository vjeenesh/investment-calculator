import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({userInput}) {
    const results = calculateInvestmentResults(userInput);
    // console.log(results);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map(resultYear => {
                        const totalInterest = resultYear.valueEndOfYear - resultYear.annualInvestment * resultYear.year - initialInvestment;
                        const totalAmountInvested = resultYear.valueEndOfYear - totalInterest;
                        return (
                            <tr key={resultYear.year}>
                                <td>{resultYear.year}</td>
                                <td>{formatter.format(resultYear.valueEndOfYear)}</td>
                                <td>{formatter.format(resultYear.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}