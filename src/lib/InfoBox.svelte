<script>
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";

    onMount(() => {
        const img = document.getElementById(id);
        img.style.transform = transform ? "translateX(-50%)" : "none";
        console.log(transform)
    })
    let hovered = false;
    export let transform;
    export let src;
    export let id;
    export let top = 50;
</script>

<div on:mouseenter={() => {hovered = true; console.log("MOUSE ENTERED")}} on:mouseleave={() => {hovered = false;}} role='presentation'>
    <img id={id} src={src} alt="" style="
        position: absolute;
        transform: translateX(-50%) ;
        height: 100%;
        object-fit: cover;
        width: 100%;
        object-position: 50% {top}%">
    {#if hovered}
        <slot name="hovered"/>
    {/if}
    {#if !hovered}
        <slot name="inert"/>
    {/if}
</div>