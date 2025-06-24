<script lang="ts">
    import type { Project } from '../../types/interfaces';
	import { projects } from '../model/Data';
	import * as icons from '@lucide/svelte';


	let {project, index}: {project: Project, index: number} = $props();
	let clicked = $state(false);

	const onclick = function (e: Event) {
		e.preventDefault();
		clicked = !clicked;
	};

	// @ts-ignore
	//const LucideIcon = icons[project.icon?.name];//todo: fix this
	const Git = icons['Github'];
	const isEven = index % 2 === 0;
</script>

<div
	class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary p-6 rounded-lg shadow-lg"
>
	<div class={`md:order-${isEven? 1 : 2}`}>
		<img
			src={"/src/assets/" + project.icon?.path}
			alt={project.title}
			class="rounded-md w-full h-auto aspect-video"
		/>
	</div>
	<div class={`md:order-${isEven? 2 : 1}`}>
		<h3 class="text-2xl font-bold mb-3 text-accent">{project.title}</h3>
		<div class="flex flex-wrap gap-2 mb-4">
			{#each project.technologies as tech}
				<span class="bg-secondary text-text-primary text-sm font-medium px-3 py-1 rounded">
					{#if tech.icon != undefined}
						<img class="size-4 shrink-0" src={"/src/assets/" + tech.icon?.path} alt={tech.name} />
					{/if}
					<div>
						<div>{tech.name}</div>
					</div>
				</span>
			{/each}
		</div>
		{#if !clicked}
			<a href="_blank" {onclick} class="text-text-secondary mb-4">{@html project.tldr} more...</a>
		{:else}
			<p class="text-text-secondary mb-4">{@html project.description}</p>
		{/if}
		<div class="flex items-center space-x-4 mt-4">
			{#if project.link}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors"
					aria-label="View on GitHub"
				>
					<Git size={20} />
				</a>
			{/if}
		</div>
	</div>
</div>