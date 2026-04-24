window.addEventListener("DOMContentLoaded", () => {
  const m = erpData.months;
  lineChart(document.getElementById("supplyInventory"), m, erpData.supply.inventory, "Inventory");
  barChart(document.getElementById("supplyLeadTime"), m, erpData.supply.supplierLeadTime, "Lead Time");
  lineChart(document.getElementById("supplyOnTime"), m, erpData.supply.onTimeDelivery, "On-Time Delivery");
  barChart(document.getElementById("supplyCost"), m, erpData.supply.procurementCost, "Procurement Cost");
  radarChart(document.getElementById("supplyStockouts"), m, erpData.supply.stockouts, "Stockouts");
});
