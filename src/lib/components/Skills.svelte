<script lang="ts">
	import { primarySkills, secondarySkills } from '../model/Data';
	import Section from './Section.svelte';
</script>

<Section id="skills" title="Technical Skills">
	<div class="space-y-8">
		<div>
			<h3 class="text-xl font-semibold mb-4 text-center text-text-secondary">Primary Skills</h3>
			<div class="flex flex-wrap justify-center gap-3">
				{#each primarySkills as skill}
					<span class="bg-accent text-background font-medium py-2 px-4 rounded-full">
						{skill.name}
					</span>
				{/each}
			</div>
		</div>
		<div>
			<h3 class="text-xl font-semibold mb-4 text-center text-text-secondary">Secondary Skills</h3>
			<div class="flex flex-wrap justify-center gap-3">
				{#each secondarySkills as skill}
					<span class="bg-secondary text-text-primary py-2 px-4 rounded-lg">
						{skill.name}
					</span>
				{/each}
			</div>
		</div>
	</div>
</Section>