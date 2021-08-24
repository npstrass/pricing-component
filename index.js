const billingBtn = document.getElementById("billingBtn");
const billingSwitch = document.getElementById("billingSwitch");

const costNum = document.getElementById("costNum");
const slider = document.getElementById("slider");
const viewNum = document.getElementById("viewNum");

billingBtn.addEventListener("click", () => {
  if (
    billingBtn.classList.contains("leftBillingBtn") &&
    billingSwitch.classList.contains("leftBillingSwitch")
  ) {
    billingBtn.classList.remove("leftBillingBtn");
    billingSwitch.classList.remove("leftBillingSwitch");
    updateValues();
  } else {
    billingBtn.classList.add("leftBillingBtn");
    billingSwitch.classList.add("leftBillingSwitch");
    updateValues();
  }
});

slider.addEventListener("input", () => {
  updateValues();
});

function updateValues() {
  if (billingBtn.classList.contains("leftBillingBtn")) {
    costNum.innerText = slider.value - slider.value * 0.25;
  } else {
    costNum.innerText = slider.value;
  }

  if (slider.value === "8") {
    viewNum.innerText = 50;
  } else if (slider.value === "12") {
    viewNum.innerText = 75;
  } else if (slider.value === "16") {
    viewNum.innerText = 100;
  } else if (slider.value === "20") {
    viewNum.innerText = 125;
  } else if (slider.value === "24") {
    viewNum.innerText = 150;
  }
}
