<script lang="ts">
  //export let restart: () => void;
  let {goToSlide} = $props();

    // Navigation Buttons
        // Retake to 1Home.svelte
    
</script>

<p>As you can see, the supposed benefits of hosting the Olympics rarely pay off for a host city's private citizens. It's not surprising that, especially in light of this year's devastating wildfires, the people of Los Angeles don't feel ready to host in three years. <br> <br> Luckily, the Olympics also has a long history of citizen mobilization against Olympic bids. In 1972, Denver citizens organized against the 1976 Olympic bid, citing economic and environmental reasons, and successfully rejected the Games. More recently, both Boston and Calgary pulled out of bids for 2024 and 2026 respectively due to economic concerns about the increasingly expensive event. Angelenos have the power to change their city's fate in the same way. </p>

<button class="navbutton" onclick={()=>goToSlide(1)}>↻ Back to Start</button>