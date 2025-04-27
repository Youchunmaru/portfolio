<script lang="ts">
import { onMount } from 'svelte';
import { Application } from 'pixi.js';
import Group from './components/Group.svelte';
import { Technology } from './model/Technology';
import { Level } from './model/Level';
import kotlin from '../assets/kotlin.png';
import Map from './components/Map.svelte';

const javaT  = new Technology("Java", Level.ADVANCED);
const kotlinT  = new Technology("Kotlin", Level.INTERMEDIATE, kotlin);
const jsT  = new Technology("JavaScript", Level.INTERMEDIATE);
const tsT  = new Technology("TypeScript", Level.INTERMEDIATE);
const cSharpT = new Technology("C#", Level.BEGINNER);
const languageStack = [javaT, kotlinT, jsT, tsT, cSharpT];
const springF = new Technology("Spring", Level.INTERMEDIATE);
const reactF = new Technology("Svelte", Level.INTERMEDIATE);
const frameworkStack = [springF, reactF];
</script>

<main id="pixi" class="game">

</main>
<Map name="Languages" map={[{"name": "Kotlin", "value": "Beginner"}, {"name": "Java", "value": "Intermediate"}, {"name": "JavaScript", "value": "Advanced"}, {"name": "TypeScript", "value": "Advanced"}]}/>
<Group title="Languages" list={languageStack}/>
<Group title="Frameworks" list={frameworkStack}/>
<style>
    .game{
        display: flex;
    }
</style>