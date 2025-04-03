<script lang="ts">
    import {slide} from 'svelte/transition';
    let {goToSlide, updateProblem, userProblem, showCity, userCity} = $props();
</script>

<p class="action"> Choose a problem:</p>

<!--Use these tabs to choose a problem-->
<nav class="menu">
    <ul>
        <li class="policing"><a href="#{userProblem}" onclick={()=>updateProblem("Policing")}>Policing</a></li>
        <li class="displacement"><a href="#{userProblem}" onclick={()=>updateProblem("Displacement")}>Displacement</a></li>
        <li class="economy"><a href="#{userProblem}" onclick={()=>updateProblem("Economy")}>Economy</a></li>
    </ul>
</nav>
<div id="city-picker">
    <p class="action">Pick an Olympics to learn more.</p>

<!--These if statements show different cities depending on the problem the user chooses.-->
{#if userProblem === "Policing"}
    <button class="rio-1" onclick={()=>showCity("rio-1")}>Rio de Janeiro 2016</button>
    {#if userCity === "rio-1"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>According to human rights organization Amnesty International, Rio de Janeiro's security forces killed more than 2,500 people in the seven years between the announcement of the Rio 2016 Olympic Games and the Games themselves. The majority of the victims were young Black men. During the two-week Games alone, Rio police killed eight more people. Although this pattern of racial violence and policing existed before the Olympics, the event was used as an opportunity to ramp up securitization at the expense of Rio's racialized and impoverished communities.</p>
    </div>
{/if}
    <button class="beijing" onclick={()=>showCity("beijing")}>Beijing 2008</button>
    {#if userCity === "beijing"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>In preparation for the 2008 Olympics, the Chinese government jailed hundreds of human rights activists and journalists, dedicated 100,000 security cameras in Beijing to Olympics-related surveillance, and forcibly evicted 1.25 million residents using violent force. Concerned about potential protests, the government also deployed a security force that outnumbered athletes by nearly nine to one. Although China's authoritarian reputation is nothing new, the government was able to use the Games as an excuse to massively expand surveillance and securitization measures in service of the Olympics' “celebration capitalism.”
        </p>
    </div>
    {/if}
    <button class="la" onclick={()=>showCity("la")}>Los Angeles 1984</button>
    {#if userCity === "la"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>After the 1984 Games were awarded in 1978, then-Mayor Tom Bradley did everything in his power to expand police militarization to crack down on the gang violence and drug crimes he believed would tank the city's reputation. Between 1974 and 1982, the LAPD budget more than doubled, and the police force became known for using excessive and brutal force, particularly against Black and Latino youth. The 1984 Olympics provided an avenue for Los Angeles to accelerate mass incarceration and intensify police brutality, which eventually led to the violent police assault of Rodney King in 1992 and the ensuing deadly riots.</p>
    </div>
    {/if}
{/if}
{#if userProblem === "Displacement"}
    <button class="rio-2" onclick={()=>showCity("rio-2")}>Rio de Janeiro 2016</button>
    <button class="atlanta" onclick={()=>showCity("atlanta")}>Atlanta 1996</button>
    <button class="seoul" onclick={()=>showCity("seoul")}>Seoul 1988</button>
{/if}
{#if userProblem === "Economy"}
    <button class="pyeongchang" onclick={()=>showCity("pyeongchang")}>Pyeongchang 2018</button>
    <button class="sochi" onclick={()=>showCity("sochi")}>Sochi 2014</button>
    <button class="athens" onclick={()=>showCity("athens")}>Athens 2004</button>
{/if}
</div>



<br><br><br>

<button class="navbutton" onclick={()=> goToSlide(9)}>← Back</button>
<button class="navbutton" onclick={()=> goToSlide(11)}>Next →</button>