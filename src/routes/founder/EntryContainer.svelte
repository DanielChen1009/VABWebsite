<script>
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView;
    export let dur;
    export let x_trans;
</script>

<div
        use:inview={{ unobserveOnEnter: true, rootMargin: '-30%', threshold: 0, root: document}}
        on:inview_change={({detail}) => {
            isInView = detail.inView;
        }}
        style="position:relative;"
>
    {#if isInView}
        <div transition:fly={{duration:dur, x: x_trans}}>
            <slot/>
        </div>
    {/if}
</div>