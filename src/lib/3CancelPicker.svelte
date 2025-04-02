<script lang="ts">
import Fire from './quizchoices/Fire.svelte';
import Disease from './quizchoices/Disease.svelte';

let {goToSlide, userDisaster, userChoice, updateChoice,} = $props();
    //export let nextPage: () => void;
    //export let prevPage: () => void;
    // 3A
        // cancel to 4A
        // don't cancel to 4B
        
    // 3B
        // cancel to 4A
        // don't cancel to 4B
        
    // Navigation Buttons
        // Back to 2DisasterPicker.svelte
        // Next to 4Choice.svelte
    
</script>

<p class="action" style="margin-top: 0;">You picked {userDisaster}.</p>
<div class = "simulation_text">
    <p>A massive wildfire has consumed a large swath of Townsville, leaving hundreds of Townsvillians displaced from their homes and even causing a few deaths.  
    <br>
    <br>
    The Townsville Festival isn’t for several months, and there’s some time to rebuild before the event takes place. Everyone in Townsville really looks forward to the festival every year, and vendors and city officials are encouraging you to proceed with the festival to lift everyone’s spirits. The event would also bring some much-needed business and cash flow into the Townsville economy. However, some local community members are pushing for the festival to be cancelled, and they say that the funds normally allocated to the festival planning should be donated to fire victims and dedicated to rebuilding.</p>
    <p class="action" style="margin-top: 0;">What do you do?</p>
    </div>
    <br>
    <div id="disaster-picker" >
        <button class="cancel" onclick={()=> updateChoice ("to cancel")}>Cancel the festival.</button>
        <button class="dont-cancel" onclick={()=> updateChoice ("not to cancel")}>Don't cancel — Townsville needs this!</button>
    </div>
    <br>
    <br>
    <br>



<button class="navbutton" onclick={() => goToSlide(2)}>← Back</button>
<button class="navbutton" onclick={()=> goToSlide(4)} disabled={!userChoice}>Next →</button>