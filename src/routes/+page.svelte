<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">

<script>
    import {fly, fade, crossfade} from "svelte/transition"
    import { beforeUpdate, afterUpdate } from 'svelte';
    import { onMount } from 'svelte';
    import {goto} from "$app/navigation";

    onMount(async () => {document.addEventListener("mousedown", (e) => {
        if (!visible && e.target.id === "dim") {
            visible = true;
            console.log(e.target.id)
            console.log(e.target.tagName)
        }
    });})

    let scrollPos;
    beforeUpdate(() => {
        scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    });

    afterUpdate(() => {
        if (scrollPos) document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
    });

    const [send, receive] = crossfade({
        duration: (d) => Math.sqrt(d * 200),

        fallback(node, params) {
            const style = getComputedStyle(node);
            const transform = style.transform === 'none' ? '' : style.transform;

            return fade;
        }
    });
    let visible = true;
</script>
<div class="frame">
    <img class="background" src="./src/imgs/landingbg.png" width="100%">
</div>

{#key visible}
    <img class={"logoimg " + "dimmed"} out:fade src="./src/imgs/VABLogo.png">
    <img class={"logotxt " + "dimmed"} out:fade src="./src/imgs/logotxt.png">
    <img class={"blurb " + (visible ? "" : "dimmed")} transition:fade src="./src/imgs/blurb.png">
{/key}
{#if visible}
    <img class="hamburger" transition:fade src="./src/imgs/hamburger.png" on:click={() => {
            visible=false;
    }}>
    <img class="logotxt" in:receive={{key: "txt"}} out:send={{key: "txt"}} src="./src/imgs/logotxt.png">
    <img class="logoimg" in:receive={{key: "logo"}} out:send={{key: "logo"}} src="./src/imgs/VABLogo.png">
{/if}
{#if !visible}
    <div id="dim" class="dimmer" transition:fade>
    </div>
    <div id="menu" transition:fly={{duration:500, x: -300}} class="menu">
        <div id="logos" class="minilogo">
            <div class="centering">
                <img class="minilogoimg" in:receive={{key: "logo"}} out:send={{key: "logo"}} src="./src/imgs/VABLogo.png" on:click={() => {
            visible=true
        }}>
                <img class="minilogotxt" in:receive={{key: "txt"}} out:send={{key: "txt"}} src="./src/imgs/logotxt.png">
            </div>
        </div>
        <button class="pagenavbut bolden">Home</button>
        <button class="pagenavbut" on:click={() => {goto("/founder")}}>Founder's Story</button>
        <button class="pagenavbut" on:click={() => {goto("/what-we-do")}}>What We Do</button>
        <button class="pagenavbut" on:click={() => {goto("/meet-the-team")}}>Meet the Team</button>
        <button class="pagenavbut" on:click={() => {goto("/members-partners")}}>Members & Partners</button>
        <button class="pagenavbut" on:click={() => {goto("/sponsors-clients")}}>Sponsors & Clients</button>
        <button class="pagenavbut" on:click={() => {goto("/join-us")}}>Join Us!</button>
    </div>
{/if}
<div class="textbg frame">
    <div class="text">
        We are VTOL at Berkeley: Berkeley’s only student-run organization dedicated to building
        a human-carrying, vertical takeoff and landing vehicle. Interested in aviation, and sustainable
        transport? We hope you’ll <a class="link" on:click={() => {goto("/join-us")}}>join us</a> on the path to our maiden voyage!
    </div>
    <div class="buttondiv removebg">
        <button class="linkbutton" on:click={() => {goto("/join-us")}}>
            Become a Member
            <img src="./src/imgs/ButtonArrow.png">
        </button>
    </div>
</div>

<div class="cutoff textbg frame">
    <div class="title">
        <div class="titletxt">Partners & Clients</div>
    </div>
    <div class="sponsors">

    </div>
    <div class="buttondiv">
        <button class="linkbutton">
            Become a Partner
            <img src="./src/imgs/ButtonArrow.png">
        </button>
    </div>
</div>

<style>
    .removebg {
        background-color: transparent !important;
    }

    .cutoff {
        height: 80vh !important;
    }

    .linkbutton {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        height: 7vh;
        width: 30vw;
        border-radius: 3.5vh;
        background-color: black;
        color: white;
        font-size: 4vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        letter-spacing: 3px;
    }

    .sponsors {
        height: 30vh;
    }

    .buttondiv {
        background-color: white;
        height: 20vh;
        text-align: center;
    }

    .titletxt {
        position: relative;
        font-size: 12vh;
        top: 9vh;
        color: black;
        font-family: "Unica One", cursive;
        font-weight: 400;
        line-height: 95px;
        letter-spacing: 7px;
        word-wrap: break-word;
        vertical-align: center;
    }

    .title {
        background-color: white;
        height: 30vh;
        width: 100vw;
        padding-left: 10vw;
    }

    .link {
        color:black;
        text-decoration-color: rgba(255, 39, 0, 1);
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

    .text {
        color: black;
        font-size: 6.5vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        line-height: 75px;
        letter-spacing: 0.94px;
        word-wrap: break-word;
        padding-right: 8vw;
        padding-top: 8vh;
        padding-left: 10vw;
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

    .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 25vw;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        z-index: 99;
    }

    .hamburger {
        position: fixed;
        top: 1vh;
        left: 3vw;
        width: 5vw;
    }

    .gone {
        filter: opacity(0%);
    }

    .dimmed {
        filter: brightness(50%);
    }

    .logoimg {
        position:absolute;
        top: 11vh;
        left: 30vw;
        height: 27vh;
    }

    .logotxt {
        position:absolute;
        top: 15vh;
        left: 45vw;
        height: 20vh;
    }

    .blurb {
        position:absolute;
        left: 15vw;
        top: 40vh;
        width: 70vw;
    }

    .background {
        filter: brightness(50%);
    }

    .frame {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    .textbg {
        background-color: rgba(0, 0, 0, 0.2);
    }

    :global(body) {
        padding:0;
        margin:0;
        overscroll-behavior-y: none;
    }
</style>