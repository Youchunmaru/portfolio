<script lang="ts">

let {name, map = []}: {name: string, map: {name: string, value: string}[]} = $props();
 
</script>


<div class="map">
    <p class="map-title">{name}</p>
    <table>
        <tbody class="map-content">
            {#each map as item}
            <tr class="map-item">
                <td>{item.name}: </td>
                <td>{item.value}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .map{
        background-color: var(--surface);
        border-radius: .5em;
        padding: 1em;
        margin: 1em;
    }
    .map-title{
        font-size: 2em;
        color: var(--on-surface);
        justify-self: start;
    }
    .map-content{
        text-align: start;
    }
    .map-item{
        color: var(--on-surface);
    }

    .map-item td {
        padding: 0.5em;
    }
</style>