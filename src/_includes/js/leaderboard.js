fetch("/data/leaderboard.json")
  .then((response) => response.json())
  .then((data) => createTable(data.data))
  .catch((error) => console.log(error));

const createTable = (data) => {
  const tableData = data;
  const leaderBoard = document.getElementById("leaderboard");
  const totalAmount = document.getElementById("totalAmount");
  for (let i = 0; i < tableData.length; i++) {
    const amount =
      "Rp " + tableData[i].amount.toLocaleString().replace(",", ".");
    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + tableData[i].donator + "</td><td>" + amount + "</td>";
    leaderBoard.appendChild(tr);
  }
  const totalAmountData =
    "Rp " +
    tableData
      .map((amount) => amount.amount)
      .reduce((a, amount) => a + amount)
      .toLocaleString()
      .replace(",", ".");
  totalAmount.append(totalAmountData);
};
