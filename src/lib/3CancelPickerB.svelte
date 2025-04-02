<script lang="ts">
    let { goToSlide, userDisaster, userChoice, updateChoice } = $props();
  </script>
  
  <p class="action" style="margin-top: 0;">You picked {userDisaster}.</p>
  
  <div class="simulation_text">
    <p>
      A serious infectious disease outbreak is spreading rapidly in Townsville, leading to hospitalizations and public health restrictions.
      <br><br>
      Some believe the festival should still proceed with precautions, while others argue that it should be canceled for public safety.
    </p>
    <p class="action" style="margin-top: 0;">What do you do?</p>
  </div>
  
  <br>
  
  <div id="disaster-picker">
    <button class="cancel" onclick={() => updateChoice("to cancel")}>Cancel the festival.</button>
    <button class="dont-cancel" onclick={() => updateChoice("not to cancel")}>Don't cancel — The festival can adapt!</button>
  </div>
  
  <br><br><br>
  
  <!-- Navigation Buttons -->
  <button class="navbutton" onclick={() => goToSlide(2)}>← Back</button>
  
  <button 
    class="navbutton" 
    onclick={() => {
      if (userChoice === "to cancel") {
        goToSlide(7); // Go to FourChoiceC.svelte
      } else if (userChoice === "not to cancel") {
        goToSlide(8); // Go to FourChoiceD.svelte
      }
    }} 
    disabled={!userChoice}  
  >Next →</button>
  