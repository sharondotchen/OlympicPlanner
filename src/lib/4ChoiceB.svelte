<script lang="ts">
    let {goToSlide, userChoice,} = $props();
    

</script>


<div id="disaster-picker">
    <button class="cancelled">You chose not to cancel.</button>
    <div id = "not-cancelled">
    <p>Townsville city officials use the event as a chance to champion their “recovery” narrative, and some local businesses are happy with the increased foot traffic, but the festival also means the Townsville budget is stretched too thin to provide meaningful affordable housing solutions to the displaced victims of the fire. 
        <br><br>
        The City of Los Angeles would agree with your decision. 
        <br><br>
        Since the International Olympic Committee awarded Los Angeles the 2028 Olympic bid in 2017, the activist group NOlympics LA has been calling for its cancellation, citing LA’s already-dire housing crisis as well as the harmful legacy of the 1984 Games on racialized policing and mass incarceration. NOlympics LA has renewed their activism with even more urgency after this year’s devastating fires — unlike in Townsville, the LA fires resulted in 29 confirmed casualties, thousands of destroyed buildings, and an unknown number of displaced Angelenos. Also unlike Townsville, in LA, taxpayers are liable for any Olympic-related expenses should LA28 run over the $7 billion budget (which, based on recent Games, is likely). 
        <br><br>
        Despite these serious concerns, shared by a statistically significant number of Angelenos, thus far city officials have given no indication that they are considering cancelling the Olympics. LA Mayor Karen Bass’ fire response efforts have also left much to be desired, and the fires have already exacerbated the existing problems with LA’s brutal rental market. NOlympics LA organizers argue that the city should cancel the Games and instead focus on protecting victims of the fire from displacement and homelessness; hosting the Olympics would only contribute to further destruction.  </p>
    </div>
  </div>

<br><br><br>
<button class="navbutton" onclick={()=> goToSlide(1)}>↻ Retake Quiz</button>
<button class="navbutton" onclick={()=> goToSlide(9)}>Next →</button>