<script lang="ts">
    export let nextPage: () => void;
    export let prevPage: () => void;

    // Navigation Buttons
        // Retake to 1Home.svelte
    
</script>

<button class="navbutton" on:click={prevPage}>← Back</button>
<button class="navbutton" on:click={nextPage}>Next →</button>