<script>
    import {fade} from "svelte/transition";

    let hovered = false;
    export let height;
    export let src;
</script>

<div on:mouseenter={() => {hovered = true;}} on:mouseleave={() => {hovered = false;}} role='presentation'>
    <img src={src} alt="" style="
        position: absolute;
        transform: translateX(-50%);
        height: {height}%;">
    {#if hovered}
        <slot/>
    {/if}
</div>
