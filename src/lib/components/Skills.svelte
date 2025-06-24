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
						<div class="mx-auto flex max-w-sm items-center gap-x-2 rounded-xl p-6 shadow-lg dark:shadow-none">
							{#if skill.icon != undefined}
								<img class="size-12 w-auto shrink-0" src={"/src/assets/" + skill.icon?.path} alt={skill.name} />
							{/if}
							<div>
								<div class="text-xl font-medium">{skill.name}</div>
							</div>
						  </div>
					</span>
				{/each}
			</div>
		</div>
		<div>
			<h3 class="text-xl font-semibold mb-4 text-center text-text-secondary">Secondary Skills</h3>
			<div class="flex flex-wrap justify-center gap-1">
				{#each secondarySkills as skill}
					<span class="bg-secondary text-text-primary py-2 px-1 rounded-lg">
						<div class="mx-auto flex max-w-sm items-center gap-x-2 rounded-xl p-3 shadow-lg dark:shadow-none">
							{#if skill.icon != undefined}
								<img class="size-6 shrink-0" src={"/src/assets/" + skill.icon?.path} alt={skill.name} />
							{/if}
								<div>
							  <div class="text-xl font-medium">{skill.name}</div>
							</div>
						  </div>
					</span>
				{/each}
			</div>
		</div>
	</div>
</Section>