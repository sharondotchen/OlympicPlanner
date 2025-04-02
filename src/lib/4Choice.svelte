<script lang="ts">
    let {goToSlide, userChoice,} = $props();
    //export let nextPage: () => void;
    //export let restart: () => void;
    // 4A
        // scrolldown info
        
    // 4B
        // scrolldown info
        
    // Navigation Buttons
        // Retake to 1Home.svelte
        // Next to 5Explainer.svelte
    
</script>

<p>You chose {userChoice}.</p>

<button class="navbutton" onclick={()=> goToSlide(1)}>↻ Retake Quiz</button>
<button class="navbutton" onclick={()=> goToSlide(5)}>Next →</button>