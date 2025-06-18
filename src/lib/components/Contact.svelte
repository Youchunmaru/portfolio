<script lang="ts">
	import { personalInfo } from '../model/Data';
	import Section from './Section.svelte';
	import { Mail, Phone, MapPin } from '@lucide/svelte';
</script>

<Section id="contact" title="Get In Touch">
	<div class="text-center">
		<p class="text-lg text-text-secondary mb-8">
			I'm currently seeking new opportunities and would love to hear from you. Whether you have a
			question or just want to say hi, feel free to reach out.
		</p>
		<div class="space-y-4 max-w-sm mx-auto">
			<a
				href={`mailto:${personalInfo.email}`}
				class="flex items-center justify-center space-x-3 text-text-primary hover:text-accent transition-colors"
			>
				<Mail size={20} />
				<span>{personalInfo.email}</span>
			</a>
			<div class="flex items-center justify-center space-x-3 text-text-primary">
				<Phone size={20} />
				<span>{personalInfo.phone[0].number}</span>
			</div>
			<div class="flex items-center justify-center space-x-3 text-text-primary">
				<MapPin size={20} />
				<span>{personalInfo.address.street}</span>
			</div>
		</div>
	</div>
</Section>

<footer class="text-center py-6 bg-primary">
	<p class="text-text-secondary">
		&copy; {new Date().getFullYear()} {personalInfo.lastName}. All Rights Reserved.
	</p>
</footer>