<script>
    import { page } from '$app/stores'
</script>

<header>

</header>

<main>
    <slot />
</main>


{#if !$page.url.pathname.toString().includes("/admin")}
<!--    <footer class="extrainfo">-->

<!--    </footer>-->
{/if}

<style>
    :global(html) {
        padding: 0;
        margin: 0;
    }
    :global(body) {
        padding: 0;
        margin: 0;
        overscroll-behavior-y: none;
        overscroll-behavior-x: none;
    }
</style>