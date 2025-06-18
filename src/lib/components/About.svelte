<script lang="ts">
	import { otherExperience } from '../model/Data';
	import Section from './Section.svelte';
</script>

<Section id="about" title={"Hobbys"}>
	<div class="bg-primary p-8 rounded-lg shadow-lg text-center">
		{#each otherExperience as item}
			<div class="mb-6 last:mb-0">
				<h3 class="text-xl font-semibold text-accent mb-2">{item.name}</h3>
				<p class="text-text-secondary leading-relaxed">{item.description}</p>
			</div>
		{/each}
	</div>
</Section>