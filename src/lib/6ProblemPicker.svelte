<script lang="ts">
    export let nextPage: () => void;
    export let prevPage: () => void;
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

<button class="navbutton" on:click={prevPage}>← Back</button>
<button class="navbutton" on:click={nextPage}>Next →</button>