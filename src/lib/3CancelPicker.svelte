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

<p>You picked {userDisaster}.</p>
<br>
<p class="action">What do you do?</p>
<br>
<button class="cancel" onclick={()=> updateChoice ("to cancel")}>Cancel the festival.</button>
<button class="dont-cancel" onclick={()=> updateChoice ("not to cancel")}>Don't cancel — Townsville needs this!</button>
<br>
<br>
{#if userChoice}
<p class="action">You chose {userChoice}.</p>
{/if}
<button class="navbutton" onclick={()=> goToSlide(2)} disabled={!userChoice}>← Back</button>
<button class="navbutton" onclick={()=> goToSlide(4)} disabled={!userChoice}>Next →</button>