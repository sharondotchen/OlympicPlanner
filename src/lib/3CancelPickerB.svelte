<script lang="ts">
    let { goToSlide, userDisaster, userChoice, updateChoice } = $props();
    import DiseasePic from '../assets/disease.png';
  </script>
  
  <img src="{DiseasePic}" class="iconpics" alt="icon illustration of fire" />
  <p class="action" style="margin-top: 0;">You picked {userDisaster}.</p>
  
  <div class="simulation_text">
    <p>
      Townsville has been hit with an infectious disease outbreak, and the festival was postponed for a few months. There have been around a dozen deaths, but the infection rate has slowed since a vaccine was introduced.
      <br><br>
      Now that the rescheduled date is approaching, city officials insist that the infection rate has reached a manageable level, and that holding the event will help to reverse the economic slowdown caused by the outbreak. Additionally, they've laid out a plan for how to make sure cases won't spike during the festival. However, some local community members oppose the festival and argue hosting it during an outbreak is unsafe.

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
  