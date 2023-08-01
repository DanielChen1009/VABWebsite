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
    import {Menu} from "$lib/index.ts";

    let scrollPos;
    let lightsOff = true;
    onMount(() => {
        setTimeout(() => {
            lightsOff = false;
        }, 500);
    });
    beforeUpdate(() => {
        scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    });

    afterUpdate(() => {
        if (scrollPos) document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
    });
</script>
<div class="frame" style="display: flex; height: 140vh;">
    {#if lightsOff}
        <img class="background" src="./src/imgs/bg1.png" out:fade style="position:absolute;height: 100%; z-index: 10">
    {/if}
    <img class="background" src="./src/imgs/bg2.png" style="position:absolute;height: 100%">
    <div class="blurb1">
        Introducing UC Berkeley’s first and only student-made, human-carrying VTOL aircraft:
        <span style="font-weight: 400">Sparrow</span>
    </div>
    <div class="blurb2">
        Maiden Voyage 5.1.2024
    </div>
</div>

<Menu includeMainLogo={true}/>
<div class="textbg frame" style="height: 70vh; margin: 5vh 2vw 0 2vw; border-bottom: 1vh #C9C9C9 solid">
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

<div class="cutoff textbg frame" style="margin: 0 2vw 2vh 2vw;">
    <div class="title">
        <div class="titletxt">Partners & Clients</div>
    </div>
    <div class="sponsors">
        <img class="sponsorlogo" src="./src/imgs/met.png" onclick="window.open('https://met.berkeley.edu/', '_blank')">
        <img style="height: 25vh" class="sponsorlogo" src="./src/imgs/futurex.png" onclick="window.open('https://www.futurexcapital.com/', '_blank')">
    </div>
    <div class="buttondiv">
        <button class="linkbutton">
            Become a Partner
            <img src="./src/imgs/ButtonArrow.png">
        </button>
    </div>
</div>

<style>
    .blurb2 {
        position: absolute;
        top: 125vh;
        width: 70%;
        height: 20vh;

        color: #D9D9D9;
        font-size: 4vh;
        font-family: "Open Sans", sans-serif;
        font-style: italic;
        font-weight: 100;
        line-height: 100%;
        letter-spacing: 0.5vh;
        word-wrap: break-word;
        text-align: center;
    }
    .blurb1 {
        position: absolute;
        top: 100vh;
        width: 70%;
        height: 20vh;

        color: #D9D9D9;
        font-size: 5vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        line-height: 180%;
        letter-spacing: 0.94px;
        word-wrap: break-word;
        text-align: center;
    }

    .sponsorlogo {
        height: 20vh;
        justify-content: center;
        cursor: pointer;
        margin: 3vh
    }

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
        height: 6vh;
        width: 30vw;
        border-radius: 3.5vh;
        background-color: black;
        color: white;
        font-size: 3vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        letter-spacing: 3px;
        cursor: pointer;
    }

    .sponsors {
        height: 30vh;
        display: flex;
        align-items: center;
        padding-left: 2vh;
    }

    .buttondiv {
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
        line-height: 100%;
        letter-spacing: 7px;
        word-wrap: break-word;
        vertical-align: center;
    }

    .title {
        text-align: center;
        height: 30vh;
        padding-left: 10vw;
    }

    .link {
        color:black;
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: rgba(255, 39, 0, 1);
    }

    .text {
        color: black;
        font-size: 4vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        line-height: 75px;
        letter-spacing: 0.94px;
        word-wrap: break-word;
        padding-right: 8vw;
        padding-top: 8vh;
        padding-left: 10vw;
    }

    .background {
        filter: brightness(100%);
    }

    .frame {
        position: relative;
        justify-content: center;
        overflow: hidden;
        background-color: black;
    }

    .textbg {
        background-color: rgba(0, 0, 0, 0.05);
    }

    :global(body) {
        padding:0;
        margin:0;
        overscroll-behavior-y: none;
    }
</style>