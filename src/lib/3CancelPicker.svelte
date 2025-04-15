<script lang="ts">
    let { goToSlide, userDisaster, userChoice, updateChoice } = $props();
    import FirePic from '../assets/fire.png';
  </script>
  

  <img src="{FirePic}" class="iconpics" alt="icon illustration of fire" />
  <p class="action" style="margin-top: 0;">You picked {userDisaster}.</p>
  <br>
  <div class="simulation_text">
    <p>
      A massive wildfire has consumed a large swath of Townsville, leaving hundreds of Townsvillians displaced from their homes and even causing a few deaths.  
      <br><br>
      The Townsville Festival is coming up. Everyone in Townsville really looks forward to the festival every year, and vendors and city officials are encouraging you to proceed with the festival to lift everyone's spirits. The event would also bring some much-needed business and cash flow into the Townsville economy. However, some local community members are pushing for the festival to be cancelled, and they say that the funds normally allocated to the festival planning should be donated to fire victims and dedicated to rebuilding.
    </p>
    <p class="action" style="margin-top: 0;">What do you do?</p>
  </div>
  
  <br>
  
  <div id="disaster-picker">
    <button class="cancel" onclick={() => updateChoice("to cancel")}>Cancel the festival.</button>
    <br>
    <button class="dont-cancel" onclick={() => updateChoice("not to cancel")}>Don't cancel — Townsville needs this!</button>
  </div>
  
  <br><br><br>
  
  <!-- Navigation Buttons -->
  <button class="navbutton" onclick={() => goToSlide(2)}>← Back</button>
  
  <button 
    class="navbutton" 
    onclick={() => {
      if (userChoice === "to cancel") {
        goToSlide(5); // Go to FourChoice.svelte
      } else if (userChoice === "not to cancel") {
        goToSlide(6); // Go to FourChoiceB.svelte
      }
    }} 
    disabled={!userChoice}  
  >Next →</button>
  