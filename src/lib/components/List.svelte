<script lang="ts">

let {title, list = []} : {title: string, list: string[]} = $props();

</script>

<div class="list">
    <p class="list-title">{title}</p>
    {#each list as item}
        <p class="list-item">{item}</p>
    {/each}
</div>



<style>
    .list{
        background-color: var(--surface);
        border-radius: .5em;
        padding: 1em;
        margin: 1em;
    }
    .list-title{
        font-size: 2em;
        color: var(--on-surface);
    }
    .list-item{
        background-color: var(--primary);
        border-radius: .5em;
        color: var(--on-primary);
        padding: .5em;
        margin: .5em;
    }
</style>