// document.querySelectorAll(".step").forEach((step) => {
//   step.addEventListener("click", function () {
//     const stepNumber = this.getAttribute("data-step");
//     showStep(stepNumber);
//     document.addEventListener("click").style.display = "none";
//   });
// });

// document.getElementById("nextStep").addEventListener("click", function () {
//   const nameInput = document.getElementById("name");
//   const phoneInput = document.getElementById("phone");
//   const emailInput = document.getElementById("email");
//   if (
//     phoneInput.checkValidity() &&
//     emailInput.checkValidity() &&
//     nameInput.checkValidity()
//   ) {
//     showStep(2); // Move to the next step
//   } else {
//     document.querySelector(".error-message").style.display = "block";
//   }
// });

// function nextStep(step) {
//   document.getElementById(`step${step}`).classList.remove("active");
//   document.getElementById(`step${step + 1}`).classList.add("active");
// }

// function prevStep(step) {
//   document.getElementById(`step${step}`).classList.remove("active");
//   document.getElementById(`step${step - 1}`).classList.add("active");
// }

// function showStep(step) {
//   document.querySelectorAll(".step").forEach((s) => {
//     s.classList.remove("active");
//   });
//   document.querySelectorAll(".form-step").forEach((formStep) => {
//     formStep.classList.remove("form-step-active");
//   });
//   document.querySelector(`.step[data-step="${step}"]`).classList.add("active");
//   document
//     .querySelector(`.form-step[data-step="${step}"]`)
//     .classList.add("form-step-active");
// }
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".form-step");
  const nextBtns = document.querySelectorAll(".next-btn");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const form = document.getElementById("multiStepForm");

  let currentStep = 0;

  nextBtns.forEach((button) => {
    button.addEventListener("click", () => {
      steps[currentStep].classList.remove("form-step-active");
      currentStep++;
      steps[currentStep].classList.add("form-step-active");
      updateStepsIndicator();
    });
  });

  prevBtns.forEach((button) => {
    button.addEventListener("click", () => {
      steps[currentStep].classList.remove("form-step-active");
      currentStep--;
      steps[currentStep].classList.add("form-step-active");
      updateStepsIndicator();
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted");
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
});
