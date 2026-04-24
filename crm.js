window.addEventListener("DOMContentLoaded", () => {
  const m = erpData.months;
  lineChart(document.getElementById("crmSatisfaction"), m, erpData.crm.satisfaction, "Satisfaction");
  barChart(document.getElementById("crmRetention"), m, erpData.crm.retention, "Retention");
  barChart(document.getElementById("crmComplaints"), m, erpData.crm.complaints, "Complaints");
  lineChart(document.getElementById("crmResponse"), m, erpData.crm.responseTime, "Avg Response Time");
  radarChart(document.getElementById("crmTickets"), m, erpData.crm.ticketVolume, "Ticket Volume");
});
