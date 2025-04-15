<script lang="ts">
  //export let restart: () => void;
  let {goToSlide} = $props();

    // Navigation Buttons
        // Retake to 1Home.svelte
    
</script>

<div class="simulation_text">
<p>As you can see, the supposed benefits of hosting the Olympics rarely pay off for a host city's private citizens. It's not surprising that, especially in light of this year's devastating wildfires, the people of Los Angeles don't feel ready to host in three years. <br> <br> Luckily, the Olympics also has a long history of citizen mobilization against Olympic bids. In 1972, Denver citizens <a href="https://www.washingtonpost.com/sports/olympics/2022/01/23/denver-olympics-1976-voter-referendum/">organized</a> against the 1976 Olympic bid, citing economic and environmental reasons, and successfully rejected the Games. More recently, both <a href="https://www.wgbh.org/news/local/2024-07-19/no-boston-olympics-reflects-on-its-victory-nine-years-ago">Boston</a> and <a href="https://www.cbc.ca/sports/olympics/calgary-2026-plebiscite-jamie-strashin-1.4904585">Calgary</a> pulled out of bids for 2024 and 2026 respectively due to economic concerns about the <a href="https://www.weforum.org/stories/2016/07/the-cost-to-cities-of-hosting-the-olympics-since-1964/">increasingly expensive</a> event.</p>
<p class="highlight">Angelenos have the power to change their city's fate in the same way.</p>
<p class="action">Start now by sending the city a <a href="https://cityclerk.lacity.org/publiccomment/?cfnumber=15-0989-S44">public comment</a> or joining <a href="https://nolympicsla.com/join-us/">NOlympics LA</a>.</p>
</div>
<br><br>
<button class="navbutton" onclick={()=>goToSlide(1)}>↻ Back to Start</button>

<style>
  @keyframes highlight{
    from {background-position: 0}
    to {background-position: -100%}
}
.highlight{
  animation-name: highlight;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  background-size: 200%;
  background-image: linear-gradient(to right, transparent 50%, var(--accent) 50%)
}
</style>