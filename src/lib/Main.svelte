<script lang="ts">
import { onMount } from 'svelte';
import { Application } from 'pixi.js';
    import List from './components/List.svelte';
    import Group from './components/Group.svelte';

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
</script>

<main id="pixi" class="game">

</main>

<Group title="Languages" list={["Kotlin", "Java", "JavaScript", "TypeScript"]}/>
<List title="Languages" list={["Kotlin", "Java", "JavaScript", "TypeScript"]}/>
<style>
    .game{
        display: flex;
    }
</style>