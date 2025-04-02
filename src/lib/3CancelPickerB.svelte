<script lang="ts">
    import Fire from './quizchoices/Fire.svelte';
    import Disease from './quizchoices/Disease.svelte';
    
    let {goToSlide, userDisaster, userChoice, updateChoice,} = $props();
        //export let nextPage: () => void;
        //export let prevPage: () => void;
        // 3A
            // cancel to 4A
            // don't cancel to 4B
            
        // 3B
            // cancel to 4A
            // don't cancel to 4B
            
        // Navigation Buttons
            // Back to 2DisasterPicker.svelte
            // Next to 4Choice.svelte
        
    </script>
    
    <p class="action" style="margin-top: 0;">You picked {userDisaster}.</p>
    <div class = "simulation_text">
        <p>Townsville has been hit with an infectious disease outbreak, and the elderly and immunocompromised are especially vulnerable. There have been around a dozen deaths so far, but the infection rate has slowed since a vaccine was introduced. The festival was pushed back for a few months.  
        <br>
        <br>
        Now that the rescheduled date is approaching, there is disagreement about whether to cancel the event. City officials insist that the infection rate has reached a manageable level, and that holding the event will help to reverse the economic slowdown caused by the outbreak. Additionally, they’ve laid out a plan for how to make sure cases won’t spike during the festival: limiting attendance to Townsvillians who are vaccinated and must quarantine separately from those that are vulnerable. However, some local community members oppose the festival and argue hosting it during an outbreak is unsafe.        <br>
        <p class="action" style="margin-top: 0;">What do you do?</p>
        </div>
        <br>
        <div id="disaster-picker" >
            <button class="cancel" onclick={()=> updateChoice ("to cancel")}>Cancel the festival.</button>
            <button class="dont-cancel" onclick={()=> updateChoice ("not to cancel")}>Don't cancel — Townsville needs this!</button>
        </div>
        <br>
        <br>
        <br>
    
    
    
    <button class="navbutton" onclick={() => goToSlide(2)}>← Back</button>
    <button class="navbutton" onclick={()=> goToSlide(4)} disabled={!userChoice}>Next →</button>