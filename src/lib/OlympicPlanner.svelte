 <script lang="ts">
    // start button to move to 2DisasterPicker.svelte
   // export let nextPage: () => void;
   let {goToSlide} = $props();
</script>


<h1 style="margin-bottom: 0.5rem;">Why LA28 Can't Happen</h1>
<p style="margin-top: 0;">by Sharon Chen and Juliana George</p>
<br>
<br>
<img src="src/assets/olympic_cover.svg" alt="cover illustration with olympic logo" />
<br>
<br>
<br>
<br>
<button class="navbutton" onclick={()=> goToSlide(2)}>Start →</button>

<style>
  :global(body) {
  background-color: var(--bg-color);
  }
</style>