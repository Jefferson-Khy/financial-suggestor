import React from "react";
import "../styles/StepProgression.css";

function StepProgression() {
  return (
    <>
      <div class="stepper-wrapper">
        <div class="stepper-item completed">
          <div class="step-counter">1</div>
          <div class="step-name">Step 1</div>
        </div>
        <div class="stepper-item completed">
          <div class="step-counter">2</div>
          <div class="step-name">Step 2</div>
        </div>
        <div class="stepper-item active">
          <div class="step-counter">3</div>
          <div class="step-name">Step 3</div>
        </div>
        <div class="stepper-item">
          <div class="step-counter">4</div>
          <div class="step-name">Step 4</div>
        </div>
        <div class="stepper-item">
          <div class="step-counter">5</div>
          <div class="step-name">Step 5</div>
        </div>
        <div class="stepper-item">
          <div class="step-counter">6</div>
          <div class="step-name">Step 6</div>
        </div>
      </div>
    </>
  );
}

export default StepProgression;
