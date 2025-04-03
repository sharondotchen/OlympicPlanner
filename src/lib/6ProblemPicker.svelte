<script lang="ts">
    let {goToSlide, updateProblem, userProblem, showCity, userCity} = $props();
   
    // Choose A Problem
        // Policing
                // 3 dropdown clickable buttons
    
            // Displacement
                // 3 dropdown clickable buttons
    
            // Economy
                // 3 dropdown clickable buttons
        
    // Navigation Buttons
        // Back to 5Explainer.svelte
        // Next to 7End.svelte
    
</script>

<p class="action"> Choose a problem:</p>

<nav class="menu">
    <ul>
        <li class="policing"><a href="#{userProblem}" onclick={()=>updateProblem("Policing")}>Policing</a></li>
        <li class="displacement"><a href="#{userProblem}" onclick={()=>updateProblem("Displacement")}>Displacement</a></li>
        <li class="economy"><a href="#{userProblem}" onclick={()=>updateProblem("Economy")}>Economy</a></li>
    </ul>
</nav>
<div class="city-picker">
    <p class="action">Pick an Olympics to learn more.</p>
{#if userProblem === "Policing"}
    <button class="rio-1" onclick={()=>showCity("rio-1")}>Rio de Janeiro 2016</button>
    <button class="beijing" onclick={()=>showCity("beijing")}>Beijing 2008</button>
    <button class="la" onclick={()=>showCity("la")}>Los Angeles 1984</button>
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

<button class="navbutton" onclick={()=> goToSlide(9)}>← Back</button>
<button class="navbutton" onclick={()=> goToSlide(11)}>Next →</button>