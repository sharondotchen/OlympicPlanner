<script lang="ts">
        export let nextPage: () => void;
        export let prevPage: () => void;
    
    // wildfire to 3A
    // outbreak to 3B
        
    // Navigation Buttons
        // Back to OlympicPlanner.svelte
        // Next to 3CancelPicker.svelte
    import olympicplanner from '../lib/olympicplanner.json';
    let disasterPicker = olympicplanner.find(item => item.name === "2DisasterPicker");

    let { body, action, choice1, choice2 } = disasterPicker || {};
</script>

<h1> hello test </h1>

<button class="navbutton" on:click={prevPage}>← Back</button>
<button class="navbutton" on:click={nextPage}>Next →</button>