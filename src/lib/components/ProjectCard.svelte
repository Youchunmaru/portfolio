<script lang="ts">
    import type { Project } from '../../types/interfaces';
	import { projects } from '../model/Data';
	import * as icons from '@lucide/svelte';


	let {project, index}: {project: Project, index: number} = $props();

	// @ts-ignore
	//const LucideIcon = icons[project.icon?.name];//todo: fix this

	const isEven = index % 2 === 0;
</script>

<div
	class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary p-6 rounded-lg shadow-lg"
>
	<div class={`md:order-${isEven? 1 : 2}`}>
		<img
			src={project.icon?.path}
			alt={project.title}
			class="rounded-md w-full h-auto object-cover aspect-video"
		/>
	</div>
	<div class={`md:order-${isEven? 2 : 1}`}>
		<h3 class="text-2xl font-bold mb-3 text-accent">{project.title}</h3>
		<p class="text-text-secondary mb-4">{project.description}</p>
		<div class="flex flex-wrap gap-2 mb-4">
			{#each project.technologies as tech}
				<span class="bg-secondary text-text-primary text-sm font-medium px-3 py-1 rounded">
					{tech}
				</span>
			{/each}
		</div>
		<div class="flex items-center space-x-4">
			{#if project.link}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors"
					aria-label="View on GitHub"
				>
					<!--<Github size={20} />-->
					<span>Code</span>
				</a>
			{/if}
			{#if project.link}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors"
					aria-label="View Live Site"
				>
					<!--<ExternalLink size={20} />-->
					<span>Live Demo</span>
				</a>
			{/if}
		</div>
	</div>
</div>