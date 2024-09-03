<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">

<script>
    import {crossfade, fade, fly} from "svelte/transition";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    import blurb from "$lib/imgs/blurb.png";
    import hamburger from "$lib/imgs/hamburger.svg";
    import landingbg from "$lib/imgs/landingbg.png";
    import logotxt from "$lib/imgs/logotxt.png";
    import VABLogo from "$lib/imgs/VABLogo.png";

    const [send, receive] = crossfade({
        duration: 500,

        fallback(node, params) {
            const style = getComputedStyle(node);
            const transform = style.transform === 'none' ? '' : style.transform;

            return fade;
        }
    });

    onMount(async () => {
        document.addEventListener("mousedown", (e) => {
        if (!visible && e.target.id === "dim") {
            visible = true;
        }
        });
        const resizeOps = () => {
            document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
        };

        resizeOps();
        window.addEventListener("resize", resizeOps);
    })

    let visible = true;
    export let includeMainLogo;
</script>
{#if includeMainLogo}
    {#key visible}
        <img class={"logoimg " + "dimmed"} src={VABLogo}>
        <img class={"logotxt " + "dimmed"} src={logotxt}>
    {/key}
{/if}

{#if visible}
    <img class="hamburger" transition:fade={{duration: 100}} src={hamburger} on:click={() => {
            visible=false;
        }}>
{/if}
{#if includeMainLogo}
    {#if visible}
        <img class="logotxt" in:receive={{key: "txt"}} out:send={{key: "txt"}} src={logotxt}>
        <img class="logoimg" in:receive={{key: "logo"}} out:send={{key: "logo"}} src={VABLogo}>
    {/if}
{/if}
{#if !visible}
    <div id="dim" class="dimmer" transition:fade>
    </div>
    <div id="menu" transition:fly={{duration:500, x: -300}} class="menu">
        <div id="logos" class="minilogo">
            <div class="centering">
                <img class="minilogoimg" in:receive={{key: "logo"}} out:send={{key: "logo"}} src={VABLogo} on:click={() => {
                visible=true
            }}>
                <img class="minilogotxt" in:receive={{key: "txt"}} out:send={{key: "txt"}} src={logotxt}>
            </div>
        </div>
        <button class="pagenavbut bolden" on:click={() => {goto("/");}}>Home</button>
        <button class="pagenavbut" on:click={() => {goto("/founder");}}>Founder's Story</button>
        <button class="pagenavbut" on:click={() => {goto("/what-we-do");}}>What We Do</button>
        <button class="pagenavbut" on:click={() => {goto("/meet-the-team");}}>Meet the Team</button>
<!--        <button class="pagenavbut" on:click={() => {goto("/members-partners");}}>Members & Partners</button>-->
<!--        <button class="pagenavbut" on:click={() => {goto("/sponsors-clients");}}>Sponsors & Clients</button>-->
        <button class="pagenavbut" on:click={() => {goto("https://docs.google.com/forms/d/e/1FAIpQLSdkQBg3J5mFe9zi3aKACAkQKn1AL1d5BYlJW6aMLrzLxIw0bA/viewform?usp=sf_link"); visible = true}}>Interest Form</button>
        <button class="pagenavbut" on:click={() => {goto("https://forms.gle/ekSC9BBSqd5N7VeYA"); visible = true}}>Round 1 Application</button>
<!--        <button class="pagenavbut" on:click={() => {goto("https://docs.google.com/forms/d/e/1FAIpQLSdkQBg3J5mFe9zi3aKACAkQKn1AL1d5BYlJW6aMLrzLxIw0bA/viewform?usp=sf_link"); visible = true}}>Interest Form</button>-->
<!--        <button class="pagenavbut" on:click={() => {goto("https://docs.google.com/forms/d/1ccl6zjIlmSbnQUjOkGFYJfPsiEbtbUxHwojbrDVUHiM"); visible = true}}>Business Application</button>-->
    </div>
{/if}

<style>
    .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 35vh;
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
        width: 40%;
        margin-right: 5%;
    }

    .minilogotxt {
        position: relative;
        width: 40%;
        top: -15%;
    }

    .minilogo {
        height: 16.7vh;
        color:white;
        margin-bottom: 2vh;
        padding-bottom: 2vh;
        border-bottom: 2px solid #980000;
    }

    .bolden {
        font-weight: bolder !important;
    }

    .pagenavbut {
        width: 100%;
        height: 9vh;

        background-color: transparent;
        border: 0;
        color: white;
        display: flex;
        align-items: center;
        text-align: left;

        font-size: 3vh;
        font-family: "Kumbh Sans", sans-serif;
        font-weight: 200;
        line-height: 110%;
        letter-spacing: 3px;

        padding-left: 2vw;
        padding-bottom: 1vw;
        padding-top: 1vw;
    }

    .pagenavbut:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }

    .dimmer {
        position: fixed;
        top:0;
        left:0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        min-height: 100vh;
        height: fit-content;
        z-index: 98;
    }

    .hamburger {
        position: fixed;
        top: 1vh;
        left: 3vh;
        width: 8vh;
        z-index: 99;
    }
    @media only screen and (min-width: 768px) {
        .logoimg {
            position: absolute;
            top: 2.5vw;
            left: 34vw;
            height: 14vw;
            z-index: 3;
        }

        .logotxt {
            position: absolute;
            top: 5vw;
            left: 48vw;
            height: 10vw;
            z-index: 3;
        }
    }

    @media only screen and (max-width: 768px) {
        .logoimg {
            position: absolute;
            top: 20vh;
            left: 20vw;
            height: 30vw;
            z-index: 3;
        }

        .logotxt {
            position: absolute;
            top: 22.5vh;
            left: 48vw;
            height: 20vw;
            z-index: 3;
        }
    }

    .blurb {
        position:absolute;
        left: 15vw;
        top: 80vh;
        width: 70vw;
    }
</style>