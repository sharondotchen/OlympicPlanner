<script lang="ts">
        //export let nextPage: () => void;
       // export let prevPage: () => void;
    let {goToSlide, userDisaster, updateDisaster} = $props();
    
    // wildfire to 3A
    // outbreak to 3B
        
    // Navigation Buttons
        // Back to OlympicPlanner.svelte
        // Next to 3CancelPicker.svelte

    //import olympicplanner from '../lib/olympicplanner.json';
    //let disasterPicker = olympicplanner.find(item => item.name === "2DisasterPicker");

    //let { body, action, choice1, choice2 } = disasterPicker || {};
</script>


<p>Imagine that you're an event organizer for a beloved annual festival in your town, Townsville. 
<br>
<br>
 Every year, Townsvillians and people all across Townsville County look forward to the festival's delicious food, fun carnival games, and lucrative local business opportunities.</p>
 <br>
 <br>
<p class="action">Suddenly, Townsville is struck by… (Pick a disaster)</p>
<br>
<br>
<div id="disaster-picker">
    <button class="fire" onclick={()=> updateDisaster ("fire")}>A massive wildfire</button>
    <button class="disease" onclick={()=> updateDisaster ("disease")}>A serious infectious disease outbreak</button>
</div>

{#if userDisaster}
<p class="action">You picked {userDisaster}.</p>
{/if}

<button class="navbutton" onclick={()=> goToSlide (1)} disabled={!userDisaster}>← Back</button>
<button class="navbutton" onclick={()=> goToSlide (3)} disabled={!userDisaster}>Next →</button>