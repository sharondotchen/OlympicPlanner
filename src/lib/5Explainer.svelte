<script lang="ts">
   // export let nextPage: () => void;
   // export let prevPage: () => void;
   let {goToSlide}= $props();
	
    // Navigation Buttons
        // Back to 4Choice.svelte
        // Next to 6ProblemPicker.svelte
    
</script>

<p>The consequences of your choices as a Townsville event organizer only affect the people of Townsville County, but the Olympics can affect host city populations in the millions every two years — not to mention the thousands of migrant workers that make the Games possible every cycle. <br> <br>  Moreover, the Olympics aren't just harmful to host cities during times of disaster. Press “next” to see more examples of the “Olympic curse” in action.
    </p>

<button class="navbutton" onclick={()=> goToSlide(4)}>← Back</button>
<button class="navbutton" onclick={() =>goToSlide(6)}>Next →</button>