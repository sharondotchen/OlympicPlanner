<script lang="ts">
    import OlympicPlanner from './lib/OlympicPlanner.svelte';
    import TwoDisasterPicker from './lib/2DisasterPicker.svelte';
    import ThreeCancelPicker from './lib/3CancelPicker.svelte';
    import FourChoice from './lib/4Choice.svelte';
    import FiveExplainer from './lib/5Explainer.svelte';
    import SixProblemPicker from './lib/6ProblemPicker.svelte';
    import SevenEnd from './lib/7End.svelte';
    import Disease from './lib/quizchoices/Disease.svelte';
    import Fire from './lib/quizchoices/Fire.svelte';

   let currentSlide = $state(1);
   let userDisaster =$state();
   let userChoice = $state();

   function goToSlide(slideNum){
    currentSlide = slideNum;
   }
   function updateDisaster(newDisaster){
    userDisaster = newDisaster;
   }
   function updateChoice (newChoice){
    userChoice = newChoice;
   }
  </script>

    {#if currentSlide == 1}
    <OlympicPlanner {goToSlide}/>
    {/if}
    {#if currentSlide == 2}
    <TwoDisasterPicker {goToSlide} {userDisaster} {updateDisaster}/>
    {/if}
    {#if currentSlide == 3}
    <ThreeCancelPicker {goToSlide} {userDisaster} {userChoice} {updateChoice}/>
    {/if}
    {#if currentSlide == 4}
    <FourChoice {goToSlide} {userChoice}/>
    {/if}
    {#if currentSlide == 5}
    <FiveExplainer {goToSlide}/>
    {/if}
    {#if currentSlide == 6}
    <SixProblemPicker {goToSlide}/>
    {/if}
    {#if currentSlide == 7}
    <SevenEnd {goToSlide}/>
    {/if}
 
  <!--<svelte:component this={CurrentPage} nextPage={nextPage} prevPage={prevPage} restart={restart} />-->
  
   <!-- {#if pages[currentPage]}
    <button class="navbutton" on:click={prevPage} disabled={currentPage === 0}>← Back</button>
    <button class="navbutton" on:click={nextPage} disabled={currentPage === pages.length - 1}>Next →</button>
  {/if} -->
  
  
  <!--<OlympicPlanner/>-->