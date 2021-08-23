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
}
