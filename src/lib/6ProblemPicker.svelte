<script lang="ts">
    let {goToSlide} = $props();
   // export let nextPage: () => void;
   // export let prevPage: () => void;
    // Choose A Problem
        // Policing
                // 3 dropdown clickable buttons
    
            // Displacement
                // 3 dropdown clickable buttons
    
            // Economy
                // 3 dropdown clickable buttons
        
    // Navigation Buttons
        // Back to 5Explainer.svelte
        // Next to 7End.svelte
    
</script>

<p class="action"> Choose a problem:</p>

<button class="navbutton" onclick={()=> goToSlide(9)}>← Back</button>
<button class="navbutton" onclick={()=> goToSlide(11)}>Next →</button>