<script lang="ts">
    export let nextPage: () => void;
    export let prevPage: () => void;
	
    // Navigation Buttons
        // Back to 4Choice.svelte
        // Next to 6ProblemPicker.svelte
    
</script>

<button class="navbutton" on:click={prevPage}>← Back</button>
<button class="navbutton" on:click={nextPage}>Next →</button>