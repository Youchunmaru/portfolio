<script lang="ts">
    let {title, list = []}: {title: string, list: string[]} = $props();
</script>

<div class="group">
    <p class="group-title">{title}</p>
    <div class="group-content">
        {#each list as item}
            <p class="group-item">{item}</p>
        {/each}
    </div>
</div>

<style>
    .group{
        background-color: var(--surface);
        border-radius: .5em;
        padding: 1em;
        margin: 1em;
    }
    .group-content{
        display: flex;
        flex-wrap: wrap;
    }
    .group-title{
        font-size: 2em;
        color: var(--on-surface);
        justify-self: start;
        margin: .5em 0;
    }
    .group-item{
        background-color: var(--primary);
        border-radius: .5em;
        color: var(--on-primary);
        margin: .5em;
        padding: .5em;
    }
</style>