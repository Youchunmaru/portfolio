<script lang="ts">
import { onMount } from 'svelte';
import Group from './components/Group.svelte';
import { Technology } from './model/Technology';
import { Level } from './model/Level';
import kotlin from '../assets/kotlin.png';
import Map from './components/Map.svelte';
    import Personal from './components/Personal.svelte';
    import Skills from './components/Skills.svelte';
    import Projects from './components/Projects.svelte';
    import Experience from './components/Experience.svelte';
    import About from './components/About.svelte';
    import Contact from './components/Contact.svelte';

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

<Personal />
<Skills />
<Projects />
<Experience />
<About />
<Contact />
<style>
    @reference "tailwindcss";
    .game{
        display: flex;
    }
</style>