fetch("https://api.puredns.org/leaderboard.json")
  .then((response) => response.json())
  .then((data) => createTable(data.data))
  .catch((error) => console.log(error));

const createTable = (data) => {
  const tableData = data;
  const leaderboardEl = document.getElementById("leaderboard");
  const currentTotalAmountEl = document.getElementById("currentTotalAmount");
  const targetTotalAmountEl = document.getElementById("targetTotalAmount");
  const totalAmountEl = document.getElementById("totalAmount");
  const progressEl = document.getElementById("progress");

  for (let i = 0; i < tableData.length; i++) {
    const amount =
      "Rp " + new Intl.NumberFormat(["id"]).format(tableData[i].amount);
    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + tableData[i].donator + "</td><td>" + amount + "</td>";
    leaderboardEl.appendChild(tr);
  }
  const currentTotalAmountRaw = tableData
    .map((amount) => amount.amount)
    .reduce((a, amount) => a + amount);
  const currentTotalAmount =
    "Rp " + new Intl.NumberFormat(["id"]).format(currentTotalAmountRaw);
  const targetAmount =
    "Rp " +
    new Intl.NumberFormat(["id"]).format(14000000 - currentTotalAmountRaw);
  currentTotalAmountEl.replaceWith(currentTotalAmount);
  targetTotalAmountEl.replaceWith(targetAmount);
  totalAmountEl.append(currentTotalAmount);
  progressEl.value = currentTotalAmountRaw;
};
