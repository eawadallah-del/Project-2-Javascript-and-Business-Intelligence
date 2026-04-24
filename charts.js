function lineChart(ctx, labels, data, label) {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label,
        data,
        tension: 0.35,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function barChart(ctx, labels, data, label) {
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{ label, data }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function pieChart(ctx, labels, data, label) {
  return new Chart(ctx, {
    type: "pie",
    data: {
      labels,
      datasets: [{ label, data }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function doughnutChart(ctx, labels, data, label) {
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [{ label, data }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function radarChart(ctx, labels, data, label) {
  return new Chart(ctx, {
    type: "radar",
    data: {
      labels,
      datasets: [{ label, data }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}
