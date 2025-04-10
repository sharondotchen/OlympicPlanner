 <script lang="ts">
   let {goToSlide} = $props();
   import OlympicCover from '../assets/olympic_cover.svg';
   </script>

<div class="title">
<h1 style="margin-bottom: 0.5rem;">Why LA28 Can't Happen</h1>
<p style="margin-top: 0;text-align: center">by Sharon Chen and Juliana George</p>
<br>
<br>
<img class="title-img" src="{OlympicCover}" alt="cover illustration with olympic logo" />
</div>
<br>
<br>
<br>
<button class="navbutton" onclick={()=> goToSlide(2)}>Find out why!</button>

<style>
  :global(body) {
  background-color: var(--bg-color);
  }
</style>