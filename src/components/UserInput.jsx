
export default function UserInput({onChange, userInput}) {
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" name="initial-investment" id="initial-investment" value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)} required />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" name="annual-investment" id="annual-investment" value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" name="expected-return" id="expected-return" value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} required />
                </p>
                <p>
                    <label htmlFor="duration">Duration (In Years)</label>
                    <input type="number" name="duration" id="duration" value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} required />
                </p>
            </div>
        </section>
    )
}