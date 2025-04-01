<script lang="ts">
    export let nextPage: () => void;
    export let restart: () => void;
    // 4A
        // scrolldown info
        
    // 4B
        // scrolldown info
        
    // Navigation Buttons
        // Retake to 1Home.svelte
        // Next to 5Explainer.svelte
    
</script>

<button class="navbutton" on:click={restart}>↻ Retake Quiz</button>
<button class="navbutton" on:click={nextPage}>Next →</button>