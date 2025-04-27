<script lang="ts">
    import type { Technology } from '../model/Technology';
    let {title, list = []}: {title: string, list: Technology[]} = $props();
</script>

<div class="group">
    <p class="group-title">{title}</p>
    <div class="group-content">
        {#each list as item}
        <div class="group-item" title={item.getLevel()}>
            <img src={item.getLogo()} alt={item.getName()}>
            <p>{item.getName()}</p>
        </div>
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
    .group-content img{
        width: 2em;
        height: 2em;
    }
    .group-title{
        font-size: 2em;
        color: var(--on-surface);
        justify-self: start;
    }
    .group-item{
        background-color: var(--primary);
        border-radius: .5em;
        color: var(--on-primary);
        margin: .5em;
        padding: .5em;
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        align-items: center;
    }
</style>