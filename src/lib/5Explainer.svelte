<script lang="ts">
   let {goToSlide}= $props();
</script>

<div class="simulation_text">
    <p>The consequences of your choices as a Townsville event organizer only affect the people of Townsville County, but the Olympics can affect host city populations in the millions every two years — not to mention the thousands of migrant workers that make the Games possible every cycle. Moreover, the Olympics aren't just harmful to host cities during times of disaster. </p>
    <p class="highlight">Press “next” to see more examples of the “Olympic curse” in action.</p>
</div>
<br>
<br>


<button class="navbutton" onclick={() =>goToSlide(10)}>Next →</button>

<style>
@keyframes highlight{
    from {background-position: 0}
    to {background-position: -100%}
}
.highlight{
  animation-name: highlight;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  background-size: 196%;
  background-image: linear-gradient(to right, transparent 50%, var(--accent) 50%)
}
</style>