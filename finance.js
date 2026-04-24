window.addEventListener("DOMContentLoaded", () => {
  const m = erpData.months;
  lineChart(document.getElementById("financeRevenue"), m, erpData.finance.revenue, "Revenue");
  barChart(document.getElementById("financeExpenses"), m, erpData.finance.expenses, "Expenses");
  lineChart(document.getElementById("financeProfit"), m, erpData.finance.operatingProfit, "Operating Profit");
  doughnutChart(document.getElementById("financeCash"), ["Cash In", "Cash Out"], [285, 200], "Cash Flow");
  radarChart(document.getElementById("financeBudget"), m, erpData.finance.budgetVsActual, "Budget vs Actual");
});
