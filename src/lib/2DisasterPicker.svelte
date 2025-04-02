<script lang="ts">
    let { goToSlide, userDisaster, updateDisaster } = $props();
  
    function onDisasterSelect(choice: string) {
      updateDisaster(choice); // Only update the disaster choice, do NOT change page
    }
  </script>
  
  <div class="simulation_text">
    <p>Imagine that you're an event organizer for a beloved annual festival in your town, Townsville.
      <br><br>
      Every year, Townsvillians and people all across Townsville County look forward to the festival's delicious food, fun carnival games, and lucrative local business opportunities.</p>
    <br>
    <p class="action" style="margin-top: 0;">Suddenly, Townsville is struck by… (Pick a disaster)</p>
  </div>
  
  <br><br>
  
  <div id="disaster-picker">
    <!-- Clicking these buttons will ONLY update userDisaster, NOT move to the next page -->
    <button class="fire" onclick={() => onDisasterSelect("fire")}>A massive wildfire</button>
    <button class="disease" onclick={() => onDisasterSelect("disease")}>A serious infectious disease outbreak</button>
  </div>
  
  <br><br><br>
  
  <!-- The nav button controls when to actually move to the next page -->
  <button class="navbutton" onclick={() => goToSlide(1)}>← Back</button>
  
  <button 
    class="navbutton" 
    onclick={() => {
      if (userDisaster === 'fire') {
        goToSlide(3);  // Go to ThreeCancelPicker if disaster is fire
      } else if (userDisaster === 'disease') {
        goToSlide(4);  // Go to ThreeCancelPickerB if disaster is disease
      }
    }} 
    disabled={!userDisaster}  
  >Next →</button>
  