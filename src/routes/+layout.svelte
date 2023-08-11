<script>
    import { page } from '$app/stores'
</script>

<header>

</header>

<main>
    <slot />
</main>


{#if !$page.url.pathname.toString().includes("/admin")}
    <footer class="extrainfo">

    </footer>
{/if}

<style>
    .extrainfo {
        width: 100vw;
        height: 30vh;
        background-color: rgba(0, 0, 0, 0.8);
    }

    :global(body) {
        padding: 0;
        margin: 0;
    }

    .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 25vw;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        z-index: 99;
    }

    .centering {
        position: relative;
        text-align: center;
        height: 100%;
    }

    .minilogoimg {
        height: 100%;
        margin-right: 5%;
    }

    .minilogotxt {
        position: relative;
        top: -15%;
        height: 70%;
    }

    .minilogo {
        height: 16.7vh;
        color:white;
        margin-bottom: 2vh;
        padding-bottom: 2vh;
        border-bottom: 2px solid red;
    }

    .bolden {
        font-weight: bolder !important;
    }

    .pagenavbut {
        width: 25vw;
        height: 9vh;

        background-color: transparent;
        border: 0;
        color: white;
        text-align: left;

        font-size: 3vh;
        font-family: "Kumbh Sans", sans-serif;
        font-weight: 200;
        line-height: 75px;
        letter-spacing: 3px;

        padding-left: 2vw;
        padding-bottom: 2vw;
    }

    .pagenavbut:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .dimmer {
        position: fixed;
        top:0;
        left:0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 100vh;
        z-index: 98;
    }
</style>