const svgYes =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="rgba(47,204,113,1)"/></svg>';
const svgNo =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" fill="rgba(149,164,166,1)"/></svg>';

const checkDNSEl = document.getElementById("test-dns");
const checkDoTEl = document.getElementById("test-dot");
const checkDoHEl = document.getElementById("test-doh");
const checkDoQEl = document.getElementById("test-doq");
const checkColoEl = document.getElementById("test-colo");

fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-dns.puredns.org",
)
  .then((response) => response.text())
  .then((data) => checkDNS(data))
  .catch((error) => checkDNS(error));

fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-dot.puredns.org",
)
  .then((response) => response.text())
  .then((data) => checkDoT(data))
  .catch((error) => checkDoT(error));

fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-doh.puredns.org",
)
  .then((response) => response.text())
  .then((data) => checkDoH(data))
  .catch((error) => checkDoH(error));

fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-doq.puredns.org",
)
  .then((response) => response.text())
  .then((data) => checkDoQ(data))
  .catch((error) => checkDoQ(error));

fetch(window.location.origin + "/ping")
  .then((response) => response.headers.get("PureDNS-ID"))
  .then((data) => checkColo(data))
  .catch((error) => checkColo(error));

const checkDNS = (data) => {
  if (data == "ok") {
    checkDNSEl.innerHTML = svgYes;
    confetti();
  } else {
    checkDNSEl.innerHTML = svgNo;
  }
};

const checkDoT = (data) => {
  if (data == "ok") {
    checkDoTEl.innerHTML = svgYes;
    confetti();
  } else {
    checkDoTEl.innerHTML = svgNo;
  }
};

const checkDoH = (data) => {
  if (data == "ok") {
    checkDoHEl.innerHTML = svgYes;
    confetti();
  } else {
    checkDoHEl.innerHTML = svgNo;
  }
};

const checkDoQ = (data) => {
  if (data == "ok") {
    checkDoQEl.innerHTML = svgYes;
    confetti();
  } else {
    checkDoQEl.innerHTML = svgNo;
  }
};

const checkColo = (data) => {
  if (/(cgk|sin)/.test(data)) {
    checkColoEl.innerHTML = data;
  } else {
    checkColoEl.innerHTML = "null";
  }
};
