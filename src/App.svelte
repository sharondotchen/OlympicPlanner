<script lang="ts">
  import OlympicPlanner from './lib/OlympicPlanner.svelte';
  import TwoDisasterPicker from './lib/2DisasterPicker.svelte';
  import ThreeCancelPicker from './lib/3CancelPicker.svelte';
  import ThreeCancelPickerB from './lib/3CancelPickerB.svelte';
  import FourChoice from './lib/4Choice.svelte';
  import FourChoiceB from './lib/4ChoiceB.svelte';
  import FourChoiceC from './lib/4ChoiceC.svelte';
  import FourChoiceD from './lib/4ChoiceD.svelte';
  import FiveExplainer from './lib/5Explainer.svelte';
  import SixProblemPicker from './lib/6ProblemPicker.svelte';
  import SevenEnd from './lib/7End.svelte';

  let currentSlide = $state(1);
  let userDisaster = $state();
  let userChoice = $state();
  let userProblem = $state("Policing");
  let userCity = $state();

  function goToSlide(slideNum) {
    currentSlide = slideNum;
  }

  function updateDisaster(newDisaster) {
    userDisaster = newDisaster;
  }

  function updateChoice(newChoice) {
    userChoice = newChoice;
  }

  // Logic to determine which slide to navigate to based on the disaster choice
  function handleDisasterChoiceChange() {
    if (userDisaster === 'fire') {
      goToSlide(3);  // Go to ThreeCancelPicker if disaster is fire
    } else {
      goToSlide(4);  // Go to ThreeCancelPickerB if disaster is not fire
    }
  }

  function updateProblem(newProblem) {
    userProblem = newProblem;
  }

  function showCity(newCity){
    userCity = newCity;
  }
</script>

<div id="planner">
  {#if currentSlide == 1}
    <OlympicPlanner {goToSlide} />
  {/if}
  {#if currentSlide == 2}
    <TwoDisasterPicker 
      {goToSlide} 
      {userDisaster} 
      {updateDisaster} 
      on:disasterChoiceChange={handleDisasterChoiceChange} 
    />
  {/if}
  {#if currentSlide == 3}
    <ThreeCancelPicker {goToSlide} {userDisaster} {userChoice} {updateChoice} />
  {/if}
  {#if currentSlide == 4}
    <ThreeCancelPickerB {goToSlide} {userDisaster} {userChoice} {updateChoice} />
  {/if}
  {#if currentSlide == 5}
    <FourChoice {goToSlide} />
  {/if}
  {#if currentSlide == 6}
    <FourChoiceB {goToSlide} />
  {/if}
  {#if currentSlide == 7}
    <FourChoiceC {goToSlide} />
  {/if}
  {#if currentSlide == 8}
    <FourChoiceD {goToSlide} />
  {/if}
  {#if currentSlide == 9}
    <FiveExplainer {goToSlide} />
  {/if}
  {#if currentSlide == 10}
    <SixProblemPicker {goToSlide} {updateProblem} {userProblem} {showCity} {userCity}/>
  {/if}
  {#if currentSlide == 11}
    <SevenEnd {goToSlide} />
  {/if}
</div>
