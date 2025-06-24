<script lang="ts">
	import { personalInfo } from '../model/Data';
    import Social from './Social.svelte';
</script>

<section class="min-h-screen flex items-center justify-center text-center bg-primary p-4">
	<div class="max-w-3xl">
		<h1 class="text-5xl md:text-7xl font-bold text-text-primary mb-4">{personalInfo.firstName} {personalInfo.lastName}</h1>
		<p class="text-xl md:text-2xl text-accent mb-6">Software Developer</p>
		<p class="text-lg text-text-secondary mb-8">
			{@html personalInfo.summary}
		</p>
		<div class="flex justify-center space-x-6">
            {#each personalInfo.socials as item}
                <Social icon={item.icon} link={item.link} />
            {/each}
		</div>
	</div>
</section>