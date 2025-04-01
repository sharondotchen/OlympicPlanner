<html lang="en">
	<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
	</head>
</html>

<script>
	import OlympicPlanner from './lib/OlympicPlanner.svelte';
  import TwoDisasterPicker from './lib/2DisasterPicker.svelte';
  import ThreeCancelPicker from './lib/3CancelPicker.svelte';
  import FourChoice from './lib/4Choice.svelte';
  import FiveExplainer from './lib/5Explainer.svelte';
  import SixProblemPicker from './lib/6ProblemPicker.svelte';
  import SevenEnd from './lib/7End.svelte';

  let currentPage = 0;

  const pages = [
    OlympicPlanner,
    TwoDisasterPicker,
    ThreeCancelPicker,
    FourChoice,
    FiveExplainer,
    SixProblemPicker,
    SevenEnd
  ];

  function nextPage() {
    if (currentPage < pages.length - 1) {
      currentPage++;
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
    }
  }

  $: CurrentPage = pages[currentPage];
</script>

<svelte:component this={CurrentPage} nextPage={nextPage} prevPage={prevPage} />
<!--
  {#if pages[currentPage]}
  <button class="navbutton" on:click={prevPage} disabled={currentPage === 0}>← Back</button>
  <button class="navbutton" on:click={nextPage} disabled={currentPage === pages.length - 1}>Next →</button>
{/if} -->


<!--<OlympicPlanner/>-->