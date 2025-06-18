<script lang="ts">
	import { projects } from '../model/Data';
	import Section from './Section.svelte';
	import ProjectCard from './ProjectCard.svelte';
</script>

<Section id="projects" title="Projects">
	<div class="space-y-12">
		{#each projects as project, i}
			<ProjectCard {project} index={i} />
		{/each}
	</div>
</Section>