<script lang="ts">
    export let nextPage: () => void;
    export let prevPage: () => void;
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

<button class="navbutton" on:click={prevPage}>← Back</button>
<button class="navbutton" on:click={nextPage}>Next →</button>