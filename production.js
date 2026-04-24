window.addEventListener("DOMContentLoaded", () => {
  const m = erpData.months;
  barChart(document.getElementById("prodUnits"), m, erpData.production.units, "Units Produced");
  lineChart(document.getElementById("prodDefect"), m, erpData.production.defectRate, "Defect Rate");
  lineChart(document.getElementById("prodUptime"), m, erpData.production.machineUptime, "Machine Uptime");
  barChart(document.getElementById("prodLabor"), m, erpData.production.laborHours, "Labor Hours");
  doughnutChart(document.getElementById("prodDowntime"), ["Downtime", "Available"], [erpData.production.downtime.at(-1), 100 - erpData.production.downtime.at(-1)], "Downtime");
});
