<script lang="ts">
    let {goToSlide, userChoice,} = $props();
    //export let nextPage: () => void;
    //export let restart: () => void;
    // 4A
        // scrolldown info
        
    // 4B
        // scrolldown info
        
    // Navigation Buttons
        // Retake to 1Home.svelte
        // Next to 5Explainer.svelte
    
</script>


<div id="disaster-picker">
    <button class="cancelled">You chose not to cancel.</button>
    <div id = "not-cancelled">
        <p>
            Townsville city officials use the event as a chance to champion their “recovery” narrative, but the festival ends up costing more than normal to accommodate for outbreak-related adjustments, and infection rates increase regardless. 
            <br><br>
            The Japanese government would agree with your decision.
            <br><br>
            The 2021 Tokyo Olympics, originally slated for 2020, were postponed for a year due to the COVID-19 pandemic. However, as the Games approached, nine prefectures including Tokyo were still under a state of emergency, and citizens and medical professionals alike urged the Games’ cancellation. Anti-Olympic activist group Hangorin No Kai (反五輪の会) also invoked the harmful legacy of displacement from the 1964 Games, highlighting the stories of roughly 200 families who were evicted from public housing in 2013 due to Olympics-related construction — several of whom had also faced eviction ahead of the 1964 Olympics. Unlike Townsville, Japan had a significant aging population, a severe shortage of medical professionals, and only an 8% vaccination rate just one month away from the Games (compared to 45% in the U.S. and 10% per country on average worldwide).
            <br><br>
            Despite these serious concerns, the 2021 Olympics proceeded as planned. As expected, COVID cases surged to record rates during the Games. In fact, the Japanese government deliberately delayed announcing a deadly new COVID variant because of the Olympics. Furthermore, half a million potentially life-saving COVID tests flowed into the Olympic village throughout the two-week duration of the Olympics, while the Japanese public confronted testing kit shortages. Although International Olympic Committee President Thomas Bach called Tokyo “the best-ever prepared Olympic city,” for the most part, the Japanese public vehemently disagreed.
        </p>
            
    </div>
  </div>

<br><br><br>
<button class="navbutton" onclick={()=> goToSlide(1)}>↻ Retake Quiz</button>
<button class="navbutton" onclick={()=> goToSlide(9)}>Next →</button>