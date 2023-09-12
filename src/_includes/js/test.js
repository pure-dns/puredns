const svgYes =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="rgba(47,204,113,1)"/></svg>';
const svgNo =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" fill="rgba(149,164,166,1)"/></svg>';

const testDNSEl = document.getElementById("test-dns");
fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-dns.puredns.org",
)
  .then((response) => response.text())
  .then((data) => testDNS(data))
  .catch((error) => testDNS(error));

const testDNS = (data) => {
  if (data == "ok") {
    testDNSEl.innerHTML = svgYes;
  } else {
    testDNSEl.innerHTML = svgNo;
  }
};

const testDOTEl = document.getElementById("test-dot");
fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-dot.puredns.org",
)
  .then((response) => response.text())
  .then((data) => testDOT(data))
  .catch((error) => testDOT(error));

const testDOT = (data) => {
  if (data == "ok") {
    testDOTEl.innerHTML = svgYes;
  } else {
    testDOTEl.innerHTML = svgNo;
  }
};

const testDOHEl = document.getElementById("test-doh");
fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-doh.puredns.org",
)
  .then((response) => response.text())
  .then((data) => testDOH(data))
  .catch((error) => testDOH(error));

const testDOH = (data) => {
  if (data == "ok") {
    testDOHEl.innerHTML = svgYes;
  } else {
    testDOHEl.innerHTML = svgNo;
  }
};

const testDOQEl = document.getElementById("test-doq");
fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-doq.puredns.org",
)
  .then((response) => response.text())
  .then((data) => testDOQ(data))
  .catch((error) => testDOQ(error));

const testDOQ = (data) => {
  if (data == "ok") {
    testDOQEl.innerHTML = svgYes;
  } else {
    testDOQEl.innerHTML = svgNo;
  }
};

const testColoEl = document.getElementById("test-colo");
fetch(window.location.origin + "/ping")
  .then((response) => response.headers.get("PureDNS-ID"))
  .then((data) => testColo(data))
  .catch((error) => testColo(error));

const testColo = (data) => {
  if (/(cgk|sin)/.test(data)) {
    testColoEl.innerHTML = data;
  } else {
    testColoEl.innerHTML = "No Data";
  }
};

const testResolver1El = document.getElementById("test-resolver-1");
fetch("https://ipv4-resolver1.puredns.org/ping")
  .then((response) => response.text())
  .then((data) => testResolver1(data))
  .catch((error) => testResolver1(error));

const testResolver1 = (data) => {
  if (data == "ok") {
    testResolver1El.innerHTML = "YES";
  } else {
    testResolver1El.innerHTML = "NO";
  }
};

const testResolver2El = document.getElementById("test-resolver-2");
fetch("https://ipv4-resolver2.puredns.org/ping")
  .then((response) => response.text())
  .then((data) => testResolver2(data))
  .catch((error) => testResolver2(error));

const testResolver2 = (data) => {
  if (data == "ok") {
    testResolver2El.innerHTML = "YES";
  } else {
    testResolver2El.innerHTML = "NO";
  }
};

const testResolver1Ipv6El = document.getElementById("test-resolver-1-ipv6");
fetch("https://ipv6-resolver1.puredns.org/ping")
  .then((response) => response.text())
  .then((data) => testResolver1Ipv6(data))
  .catch((error) => testResolver1Ipv6(error));

const testResolver1Ipv6 = (data) => {
  if (data == "ok") {
    testResolver1Ipv6El.innerHTML = "YES";
  } else {
    testResolver1Ipv6El.innerHTML = "NO";
  }
};

const testResolver2Ipv6El = document.getElementById("test-resolver-2-ipv6");
fetch("https://ipv6-resolver2.puredns.org/ping")
  .then((response) => response.text())
  .then((data) => testResolver2Ipv6(data))
  .catch((error) => testResolver2Ipv6(error));

const testResolver2Ipv6 = (data) => {
  if (data == "ok") {
    testResolver2Ipv6El.innerHTML = "YES";
  } else {
    testResolver2Ipv6El.innerHTML = "NO";
  }
};

const testFilterFamilyEl = document.getElementById("test-filter-family");
fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-family.puredns.org",
)
  .then((response) => response.text())
  .then((data) => testFilterFamily(data))
  .catch((error) => testFilterFamily(error));

const testFilterFamily = (data) => {
  if (data == "ok") {
    testFilterFamilyEl.innerHTML = "YES";
  } else {
    testFilterFamilyEl.innerHTML = "NO";
  }
};

const testFilterSecurityEl = document.getElementById("test-filter-security");
fetch(
  "https://" +
    Math.random().toString(36).substring(2) +
    ".test-security.puredns.org",
)
  .then((response) => response.text())
  .then((data) => testFilterSecurity(data))
  .catch((error) => testFilterSecurity(error));

const testFilterSecurity = (data) => {
  if (data == "ok") {
    testFilterSecurityEl.innerHTML = "YES";
  } else {
    testFilterSecurityEl.innerHTML = "NO";
  }
};

// Remember scroll position
document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};
