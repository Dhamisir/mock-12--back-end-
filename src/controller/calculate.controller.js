
// authCalculateController
function authCalculateController(p, i, n) {
    i = i / 100;
    // Take help for below 
    // Total Maturity Value(F) = P [({(1+i) ^n}-1)/i]
    // Total Maturity Value(F) = 1,00,000[({1 + 0.071) ^ 15}-1)/0.071]
    // Total Maturity Value(F) = 27,12,139 

    // Total Investment Amount = Annual Instalment Amount * Total No. of Years
    //                                                 = 1,00,000 * 15 = 15,00,000

    // Total Interest Gained = Total Maturity Value - Total Investment Amount
    //                                             = 27,12,139 - 15,00,000
    //                                             = 12,12,139

    let totalMaturity = Math.round(p * ((((1 + i) ** n) - 1) / i));
    let totalInvestment = p * n;
    let totalGained = totalMaturity - totalInvestment;
    return {
        status: 201,
        payload: { totalMaturity, totalInvestment, totalGained }
    }
}

module.exports = { authCalculateController };