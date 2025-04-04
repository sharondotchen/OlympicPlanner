<script lang="ts">
    import {slide} from 'svelte/transition';
    let {goToSlide, updateProblem, userProblem, showCity, userCity} = $props();
    
</script>

<p class="chooseproblem"> CHOOSE A PROBLEM:</p>

<nav class="menu">
    <ul>
        <li class="policing {userProblem === 'Policing' ? 'active' : ''}">
            <a href="#{userProblem}" onclick={()=>updateProblem("Policing")}>POLICING</a>
        </li>
        <li class="displacement {userProblem === 'Displacement' ? 'active' : ''}">
            <a href="#{userProblem}" onclick={()=>updateProblem("Displacement")}>DISPLACEMENT</a>
        </li>
        <li class="economy {userProblem === 'Economy' ? 'active' : ''}">
            <a href="#{userProblem}" onclick={()=>updateProblem("Economy")}>ECONOMY</a>
        </li>
    </ul>
</nav>
<hr>
<br>
<div id="city-picker">
    <p class="action">Pick an Olympics to learn more.</p>
<br>
<!--These if statements show different cities depending on the problem the user chooses.-->
{#if userProblem === "Policing"}
    <button class="rio-1" onclick={()=>showCity("rio-1")}>Rio de Janeiro 2016</button>
    {#if userCity === "rio-1"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>According to human rights organization <a href="https://www.amnesty.org/en/latest/campaigns/2016/06/deadly-side-rio-olympics-2016/">Amnesty International</a>, Rio de Janeiro's security forces killed more than 2,500 people in the seven years between the announcement of the Rio 2016 Olympic Games and the Games themselves. The majority of the victims were young Black men. During the two-week Games alone, Rio police <a href="https://www.amnesty.org/en/latest/press-release/2016/08/brazil-rio-s-olympic-legacy-shattered-with-no-let-up-in-killings-by-police/">killed</a> eight more people. Although this pattern of racial violence and policing existed before the Olympics, the event was used as an opportunity to ramp up securitization at the expense of Rio's racialized and impoverished communities.</p>
    </div>
{/if}
    <button class="beijing" onclick={()=>showCity("beijing")}>Beijing 2008</button>
    {#if userCity === "beijing"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>In preparation for the 2008 Olympics, the Chinese government <a href="https://www.huffpost.com/entry/the-olympics-unveiling-po_b_117403">jailed</a> hundreds of human rights activists and journalists, dedicated 100,000 security cameras in Beijing to Olympics-related surveillance, and forcibly evicted 1.25 million residents using violent force. Concerned about potential protests, the government also <a href="https://www.independent.co.uk/news/world/asia/paramilitary-olympics-beijing-at-least-94-000-security-staff-ndash-but-only-10-500-athletes-808490.html">deployed</a> a security force that outnumbered athletes by nearly nine to one. Although China's authoritarian reputation is nothing new, the government was able to use the Games as an excuse to massively expand surveillance and securitization measures in service of the Olympics' "<a href="https://www.versobooks.com/blogs/news/2798-celebration-capitalism-olympics-economics">celebration capitalism</a>.”
        </p>
    </div>
    {/if}
    <button class="la" onclick={()=>showCity("la")}>Los Angeles 1984</button>
    {#if userCity === "la"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>After the 1984 Games were awarded in 1978, then-Mayor Tom Bradley did everything in his power to expand police militarization to crack down on the gang violence and drug crimes he <a href="https://www.washingtonpost.com/news/made-by-history/wp/2017/08/06/the-1984-olympics-fueled-l-a-s-war-on-crime-will-the-2028-games-do-the-same/">believed</a> would tank the city's reputation. Between 1974 and 1982, the LAPD budget more than <a href="https://nolympicsla.com/2020/06/29/examining-the-la-1984-olympic-legacy-capitalism-police-violence-and-privatization/">doubled</a>, and the police force became known for using excessive and brutal force, particularly against Black and Latino youth. The 1984 Olympics <a href="https://web.archive.org/web/20160219013044/https://www.thenation.com/article/want-understand-1992-la-riots-start-1984-la-olympics/">provided</a> an avenue for Los Angeles to accelerate mass incarceration and intensify police brutality, which eventually led to the violent police assault of Rodney King in 1992 and the ensuing deadly riots.</p>
    </div>
    {/if}
    <br>
{/if}
{#if userProblem === "Displacement"}
    <button class="rio-2" onclick={()=>showCity("rio-2")}>Rio de Janeiro 2016</button>
    {#if userCity === "rio-2"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>Since the International Olympic Committee <a href="https://www.olympics.com/ioc/2016-host-city-election">awarded</a> Rio de Janeiro the 2016 Olympic bid in 2009, the Rio city government has forcibly <a href="https://www.vox.com/2016/6/27/12026098/rio-olympics-2016-removals-eviction">evicted and relocated</a> more than 77,000 impoverished, predominantly Black citizens from Rio's favelas into public housing further away from the city center. This action was part of a concerted effort to displace and conceal Rio's poor from the international gaze, buying into the Olympics' “<a href="https://www.versobooks.com/blogs/news/2798-celebration-capitalism-olympics-economics">celebration capitalism</a>” of neoliberal exceptionalism.</p>
        </div>
    {/if}
    <button class="atlanta" onclick={()=>showCity("atlanta")}>Atlanta 1996</button>
    {#if userCity === "atlanta"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>In what one Georgia resident <a href="https://archive.nytimes.com/www.nytimes.com/specials/olympics/cntdown/0714oly-run-mitchell.html">called</a> a “two-week face-lift,” the City of Atlanta <a href="https://ceasefiremagazine.co.uk/olympics-opportunity-cleanse-city/">razed</a> 2,000 public housing units to make way for Olympic construction, evicting 6,000 residents; displaced 30,000 more residents through Olympics-related gentrification; and <a href="https://www.nytimes.com/1996/07/01/us/as-olympics-approach-homeless-are-not-feeling-at-home-in-atlanta.html">made</a> more than 9,000 arrests of the city's homeless population between May 1995 and 1996. These “<a href="https://southernspaces.org/2006/whatwuzit-1996-atlanta-summer-olympics-reconsidered/">clean up</a>” efforts depended on the destruction of Atlanta's poor, historically Black neighborhoods and militant sweeps of homeless residents in the name of Olympics boosterism.</p>
        </div>
    {/if}
    <button class="seoul" onclick={()=>showCity("seoul")}>Seoul 1988</button>
    {#if userCity === "seoul"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>In the lead-up to the 1988 Olympics, former South Korean president and military dictator Chun Doo-hwan <a href="https://www.cnn.com/2016/10/25/asia/south-korea-brothers-home-abuse/index.html">authorized</a> the detainment of thousands of South Korean citizens — mostly children, the homeless, and the disabled — in “welfare facilities” that oversaw some of the most horrifying human rights abuses in South Korean history. Former inmates, many of whom were children at the time, <a href="https://apnews.com/general-news-43ad81ac09564c90bc6e6b3cd005d73d">recall</a> years of daily sexual and physical abuse for which they have since received no reparations or apologies. At the most deadly of these facilities, there were more than 500 documented deaths between 1975 and 1986. The Olympics created an opportunity and a rationale for Chun to carry out these heinous atrocities.</p>
        </div>
    {/if}
    <br>
{/if}
{#if userProblem === "Economy"}
    <button class="pyeongchang" onclick={()=>showCity("pyeongchang")}>Pyeongchang 2018</button>
    {#if userCity === "pyeongchang"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>The 2018 Winter Olympics <a href="https://thinkprogress.org/pyeongchang-2018-let-the-games-destruction-and-debt-begin-bc0e545e5747/">overran</a> its budget by almost double, far overburdening Gangwon, one of the poorest provinces in South Korea. The Games also <a href="https://www.theguardian.com/sport/2018/feb/16/the-olympics-are-killing-us-ski-shop-owners-left-out-in-pyeongchang-cold">proved</a> to be ruinous for local ski shop owners, whose livelihoods depend on tourism at the local slopes that were taken over by the Olympics. Even more problematically, Olympic preparations included <a href="https://www.theguardian.com/environment/2015/sep/16/olympic-organisers-destroy-sacred-south-korean-forest-to-create-ski-run">decimating</a> a “sacred” 500-year-old forest to accommodate construction of another ski slope. Even by Olympic standards, Pyeongchang's sacrifices didn't remotely pay off — the 2018 Games were the least-watched Olympics in history before Beijing 2022 took the title.</p>
        </div>
    {/if}
    <button class="sochi" onclick={()=>showCity("sochi")}>Sochi 2014</button>
    {#if userCity === "sochi"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>The 2014 Olympics was the most expensive Olympics in history, costing over $50 billion — more than the cost of every single previous Winter Games combined. According to a report by <a href="https://www.bloomberg.com/news/articles/2014-01-02/the-2014-winter-olympics-in-sochi-cost-51-billion">Bloomberg</a>, much of the reason for this exorbitant price tag lies in Putin's corruption and rampant cases of fraud and fund mismanagement in the Games' construction. And although private banks and financiers footed the bill, the workers who made the Games possible <a href="https://world.time.com/2014/01/30/sochi-workers-faced-rampant-abuses-building-olympic-sites/">paid the price</a> of “delayed wages, dire working conditions, and in some cases violent abuse.” The Olympics has always been a hotbed for labor abuses, and this exploitation does nothing to lessen Games' financial burden.</p>
        </div>
    {/if}
    <button class="athens" onclick={()=>showCity("athens")}>Athens 2004</button>
    {#if userCity === "athens"}
    <div class="city-info" in:slide={{duration:500}} out:slide>
        <p>Greece was already mired in public debt before the 2004 Olympics — but the Games <a href="https://archive.is/20230509223717/https://www.bloomberg.com/news/articles/2012-08-02/how-the-2004-olympics-triggered-greeces-decline">added</a> 7 billion euros to the tally, and less than 10 years later, many Greeks <a href="https://www.theguardian.com/sport/2012/may/09/athens-2004-olympics-athletes-home">blamed</a> the Games for the country's steep economic decline. And although some of the Olympic infrastructure projects helped Athens in the long run, many of the Olympic facilities became crumbling, underutilized manifestations of the country's crippling debt after the Games ended. The Olympics is never a win for host cities — only for the International Olympic Committee, which <a href="https://www.politico.eu/article/how-the-olympics-rotted-greece/">walked away</a> with $985 million in 2004 while Athens was left to sink even deeper into debt.</p>
        </div>
    {/if}
    <br>
{/if}
<p class="action">This list is by no means exhaustive. For more information, visit <a href="https://nolympicsla.com/resources/">https://nolympicsla.com/resources/</a>.</p>
<br>
</div>

<br><br><br>

<button class="navbutton" onclick={()=> goToSlide(9)}>← Back</button>
<button class="navbutton" onclick={()=> goToSlide(11)}>Next →</button>