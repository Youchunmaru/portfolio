<script lang="ts">
    import type { Icon } from "../../types/interfaces";
    import * as icons from '@lucide/svelte';
    let {icon = {
        name: "",
        path: "",
        type: ""
    }, link = ""}: {icon: Icon, link: string} = $props();

    // @ts-ignore
    const LucideIcon = icons[icon.name];

</script>

<a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    class="text-text-secondary hover:text-accent transition-colors"
    aria-label="GitHub Profile"
>
    <LucideIcon size={32} />
</a>