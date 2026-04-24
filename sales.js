window.addEventListener("DOMContentLoaded", () => {
  const m = erpData.months;
  barChart(document.getElementById("salesOnline"), m, erpData.sales.online, "Online Sales");
  lineChart(document.getElementById("salesRetail"), m, erpData.sales.retail, "Retail Sales");
  barChart(document.getElementById("salesEnterprise"), m, erpData.sales.enterprise, "Enterprise Sales");
  lineChart(document.getElementById("salesLeads"), m, erpData.sales.leads, "Leads");
  doughnutChart(document.getElementById("salesConversion"), ["Converted", "Not Converted"], [15, 85], "Conversion Rate");
});
