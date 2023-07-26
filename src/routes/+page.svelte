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
    beforeUpdate(() => {
        scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    });

    afterUpdate(() => {
        if (scrollPos) document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
    });

</script>
<div class="frame">
    <img class="background" src="./src/imgs/landingbg.png" style="width: 100vw">
</div>

<Menu includeMainLogo={true}/>
<div class="textbg frame" style="height: 70vh; margin: 2vh 2vw 0 2vw; border-bottom: 1vh #C9C9C9 solid">
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
        <img class="sponsorlogo" src="./src/imgs/futurex.png" onclick="window.open('https://www.futurexcapital.com/', '_blank')">
    </div>
    <div class="buttondiv">
        <button class="linkbutton">
            Become a Partner
            <img src="./src/imgs/ButtonArrow.png">
        </button>
    </div>
</div>

<style>
    .sponsorlogo {
        justify-content: center;
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
    }

    .sponsors {
        height: 30vh;
        display: flex;
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
        line-height: 95px;
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
        overflow: hidden;
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