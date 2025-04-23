<script lang="ts">
import { onMount } from 'svelte';
import { Application } from 'pixi.js';
    import List from './components/List.svelte';
    import Group from './components/Group.svelte';
    import { Technology } from './model/Technology';
    import { Level } from './model/Level';
    import kotlin from "../assets/kotlin.png"

/*onMount(() => {
    console.log('App mounted');
    const game = new Application();
    const pixi = document.getElementById("pixi");
    if (pixi) {
        game.init({
            resizeTo: pixi,
            backgroundColor: 0x1099bb,
        }).then(it => {
            document.getElementById("pixi")?.appendChild(game.canvas);
            
        });
    }
});*/
const tech = new Technology("Kotlin", kotlin, Level.BEGINNER);
</script>

<main id="pixi" class="game">

</main>

<Group title="Languages" list={[tech]}/>
<List title="Languages" list={["Kotlin", "Java", "JavaScript", "TypeScript"]}/>
<style>
    .game{
        display: flex;
    }
</style>