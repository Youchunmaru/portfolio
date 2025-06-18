<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<section {id} class="py-16 md:py-24 px-4">
	<div class="container mx-auto max-w-4xl">
		<h2 class="text-3xl font-bold mb-8 text-accent text-center">{title}</h2>
		<slot />
	</div>
</section>