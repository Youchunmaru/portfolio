<script lang="ts">
	import { experiences } from '../model/Data';
	import Section from './Section.svelte';
</script>

<Section id="experience" title="Experience & Education">
	<div class="relative border-l-2 border-secondary pl-8">
		{#each experiences as exp}
			<div class="mb-12">
				<div
					class="absolute -left-4 top-1 w-8 h-8 bg-secondary rounded-full flex items-center justify-center"
				>
					<!--{#if exp.isEducation}
						<GraduationCap class="text-accent" size={20} />
					{:else}
						<Briefcase class="text-accent" size={20} />
					{/if}-->
				</div>
				<p class="text-sm text-text-secondary">{exp.startDate}</p>
				<h3 class="text-xl font-bold mt-1">{exp.qualification}</h3>
				<p class="text-md text-text-primary mb-2">{exp.school}</p>
				<ul class="list-disc list-inside text-text-secondary space-y-1">
					<!--{#each exp.description as desc}-->
						<li>{exp.description}</li>
					<!--{/each}-->
				</ul>
			</div>
		{/each}
	</div>
</Section>