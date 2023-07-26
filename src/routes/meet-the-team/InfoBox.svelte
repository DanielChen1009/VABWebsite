<script>
    import {fade} from "svelte/transition";

    let hovered = false;
    export let width;
    export let src;
</script>

<div on:mouseenter={() => {hovered = true;}} on:mouseleave={() => {hovered = false;}} role='presentation'>
    <img src={src} alt="" style="
        position: absolute;
        transform: translateX(-50%);
        height: 100%;
        object-fit: cover;
        width: {width}%;">
    {#if hovered}
        <slot/>
    {/if}
</div>
