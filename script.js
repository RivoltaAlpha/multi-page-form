document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".form-step");
  const nextBtns = document.querySelectorAll(".next-btn");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const form = document.getElementById("multiStepForm");
  const thankYouMessage = document.getElementById("thankyou-message");

  let currentStep = 0;

  nextBtns.forEach((button) => {
    button.addEventListener("click", () => {
      steps[currentStep].classList.remove("form-step-active");
      currentStep++;
      if (currentStep >= steps.length) {
        currentStep = steps.length - 1;
      }
      steps[currentStep].classList.add("form-step-active");
      updateStepsIndicator();
    });
  });

  prevBtns.forEach((button) => {
    button.addEventListener("click", () => {
      steps[currentStep].classList.remove("form-step-active");
      currentStep--;
      if (currentStep < 0) {
        currentStep = 0;
      }
      steps[currentStep].classList.add("form-step-active");
      updateStepsIndicator();
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitting")
    form.style.display = "none";
    thankYouMessage.style.display = "block";
    console.log("submitted")
  });

  function updateStepsIndicator() {
    const stepIndicators = document.querySelectorAll(".step");
    stepIndicators.forEach((step, index) => {
      if (index <= currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }

  const toggleSwitch = document.getElementById("toggleSwitch");
  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", function () {
      const text = document.getElementById("toggleText");
      if (this.checked) {
        text.textContent = "Yearly Billing";
      } else {
        text.textContent = "Monthly Billing";
      }
    });
  }

  const calculateButton = document.getElementById("calculateButton");
  if (calculateButton) {
    calculateButton.addEventListener("click", calculateTotal);
  } else {
    console.error("Calculate button not found");
  }

  function calculateTotal() {
    console.log("calculateTotal function started"); // Check if function is called
    var addons = document.querySelectorAll('.addon input[type="checkbox"]');
    var totalCost = 0;
    addons.forEach(function (addon) {
      console.log("Checking addon:", addon.id); // Log each addon being checked
      if (addon.checked) {
        console.log("Addon selected:", addon.id, "Value:", addon.value); // Log selected addons
        totalCost += parseInt(addon.value);
      }
    });
    console.log("Total Cost calculated:", totalCost); // Log the final total cost
    document.getElementById("totalCostDisplay").textContent =
      "Total Cost: $" + totalCost;
  }
});
