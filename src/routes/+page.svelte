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
    import bg1 from "$lib/imgs/bg1.png";
    import bg2 from "$lib/imgs/bg2.png";
    import ButtonArrow from "$lib/imgs/ButtonArrow.svg";
    import futurex from "$lib/imgs/futurex.svg";
    import met from "$lib/imgs/met.png";
    import altium from "$lib/imgs/Altium.svg";
    import ansys from "$lib/imgs/ANSYS_logo.png"
    import render2 from "$lib/imgs/render2.png";


    let lightsOff = true;
    onMount(() => {
        console.log("Hello")
        lightsOff = true;
        setTimeout(() => {
            lightsOff = false;
            console.log("Lights On")
        }, 500);
    });

</script>
<div class="frame" style="display: flex; height: 155vh;">
    {#if lightsOff}
        <img class="background bgimg" src={bg1} out:fade style="z-index: 4">
        <div out:fade style="height:100%; width: 100%; z-index: 4; position:absolute; background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)"></div>
    {/if}
    <img class="background bgimg" src={bg2} style="z-index: 0">
    <div class="blurb1">
        Introducing UC Berkeley’s first and only student-made, human-carrying VTOL aircraft:
        <span style="font-weight: 400">Sparrow</span>
    </div>
<!--    <div class="blurb2">-->
<!--        Maiden Voyage 5.1.2024-->
<!--    </div>-->
    <div style="height:100%; width: 100%; z-index: 2; position:absolute; background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)"></div>
<!--    <div class="buttondiv removebg" style="width:30vw;position:relative;top:80vh;margin-right: 1vw;z-index: 99">-->
<!--        <button class="linkbutton" style="width:30vw;height: fit-content;padding: 1vh" on:click={() => {goto("https://docs.google.com/forms/d/1H0rnqDSQvxm_Ts2l6m8HJLUCT&#45;&#45;j7mLbsWFkAY_qxvU")}}>-->
<!--            <span class="buttontxt">-->
<!--                Engineering Application-->
<!--            </span>-->
<!--            <img class="arrow" src={ButtonArrow}>-->
<!--        </button>-->
<!--    </div>-->
<!--    <div class="buttondiv removebg" style="width:30vw;position:relative;top:80vh;margin-left: 1vw;z-index: 99">-->
<!--        <button class="linkbutton" style="width:30vw;height: fit-content;padding: 1vh" on:click={() => {goto("https://docs.google.com/forms/d/1ccl6zjIlmSbnQUjOkGFYJfPsiEbtbUxHwojbrDVUHiM")}}>-->
<!--            <span class="buttontxt">-->
<!--                Business Application-->
<!--            </span>-->
<!--            <img class="arrow" src={ButtonArrow}>-->
<!--        </button>-->
<!--    </div>-->
</div>


<div class="frame" style="display: flex; height: 140vh;">
    <img class="background" src={render2} out:fade style="position:absolute;height: 100%; z-index: 1">
    <div class="blurb3">
        VAB-2438 “Sparrow”
    </div>
    <div class="blurb4">
        8 motors | 2438 mm wheelbase | 42” propeller
    </div>
    <div style="height:100%; width: 100%; z-index: 2; position:absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%)"></div>
</div>

<Menu includeMainLogo={true}/>
<div class="textbg frame" style="height: 70vh; margin: 5vh 2vw 0 2vw; border-bottom: 1vh #C9C9C9 solid">
    <div class="text">
        We are VTOL at Berkeley: Berkeley’s only student-run organization dedicated to building
        a human-carrying, vertical takeoff and landing vehicle. Interested in aviation, and sustainable
        transport? We hope you’ll <a class="link" on:click={() => {goto("https://forms.gle/ekSC9BBSqd5N7VeYA")}}>join us</a> on the path to our maiden voyage!
    </div>
    <div class="buttondiv removebg">
        <button class="linkbutton" on:click={() => {goto("https://forms.gle/ekSC9BBSqd5N7VeYA")}}>
            <span class="buttontxt">
                Application
            </span>
            <img class="arrow" src={ButtonArrow}>
        </button>
    </div>
</div>

<div class="cutoff textbg frame" style="margin: 0 2vw 2vh 2vw;">
    <div class="title">
        <div class="titletxt">Partners & Clients</div>
    </div>
    <div class="sponsors">
        <img class="sponsorlogo" src={met} onclick="window.open('https://berkeley.edu/', '_blank')">
        <img class="sponsorlogo" src={altium} onclick="window.open('https://altium.com/', '_blank')">
        <img class="sponsorlogo" style="width:20%;height: auto;" src={ansys} onclick="window.open('https://ansys.com/', '_blank')">
    </div>
    <div class="buttondiv">
        <button class="linkbutton">
            <span class="buttontxt">
                Become a Partner
            </span>
            <img class="arrow" src={ButtonArrow}>
        </button>
    </div>
</div>

<style>
    @media only screen and (min-width: 768px) {
        .bgimg {
            height: 100%;
            position: absolute;
            object-fit: none;
            object-position: 50% 120%;
        }

        .blurb1 {
            position: absolute;
            top: 110vh;
            width: 80%;
            height: 20vh;
            z-index: 3;

            color: #D9D9D9;
            font-size: 3vw;
            font-family: "Open Sans", sans-serif;
            font-weight: 300;
            line-height: 180%;
            letter-spacing: 0.94px;
            word-wrap: break-word;
            text-align: center;
        }

        .blurb2 {
            position: absolute;
            top: 135vh;
            width: 80%;
            height: 15vh;
            z-index: 3;

            color: #D9D9D9;
            font-size: 2vw;
            font-family: "Open Sans", sans-serif;
            font-weight: 200;
            line-height: 100%;
            letter-spacing: 0.5vh;
            word-wrap: break-word;
            text-align: center;

            border-bottom: white 2vh solid;
        }

        .blurb3 {
            position: absolute;
            top: 8vh;
            width: 80%;
            height: 15vh;
            z-index: 3;

            color: #D9D9D9;
            font-size: 4vw;
            font-family: "Unica One", sans-serif;
            font-weight: 400;
            line-height: 75px;
            letter-spacing: 1px;
            word-wrap: break-word;
            text-align: center;
        }

        .blurb4 {
            position: absolute;
            top: 20vh;
            width: 80%;
            height: 15vh;
            z-index: 3;

            color: #D9D9D9;
            font-size: 2.5vw;
            font-family: "Open Sans", sans-serif;
            font-weight: 200;
            line-height: 75px;
            letter-spacing: 0.60px;
            word-wrap: break-word;
            text-align: center;
        }

        .text {
            color: black;
            font-size: 2vw;
            font-family: "Open Sans", sans-serif;
            font-weight: 300;
            line-height: 5vw;
            letter-spacing: 0.94px;
            word-wrap: break-word;
            padding-right: 8vw;
            padding-top: 8vh;
            padding-left: 10vw;
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
            line-height: 100%;
            letter-spacing: 3px;
            cursor: pointer;
        }

        .titletxt {
            position: relative;
            font-size: 6vw;
            top: 9vh;
            color: black;
            font-family: "Unica One", cursive;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: 7px;
            word-wrap: break-word;
            vertical-align: center;
        }
    }

    @media only screen and (max-width: 768px) {
        .bgimg {
            height: 100%;
            position: absolute;
            object-fit: none;
        }

        .blurb1 {
            position: absolute;
            top: 110vh;
            width: 80%;
            height: 20vh;
            z-index: 3;

            color: #D9D9D9;
            font-size: 6vw;
            font-family: "Open Sans", sans-serif;
            font-weight: 300;
            line-height: 180%;
            letter-spacing: 0.94px;
            word-wrap: break-word;
            text-align: center;
        }

        .blurb2 {
            position: absolute;
            top: 140vh;
            width: 80%;
            height: 10vh;
            z-index: 3;

            color: #D9D9D9;
            font-size: 5vw;
            font-family: "Open Sans", sans-serif;
            font-weight: 200;
            line-height: 100%;
            letter-spacing: 0.5vh;
            word-wrap: break-word;
            text-align: center;

            border-bottom: white 1vw solid;
        }

        .blurb4 {
            position: absolute;
            top: 20vh;
            width: 80%;
            height: 15vh;
            z-index: 3;

            color: #D9D9D9;
            font-size: 4.5vw;
            font-family: "Open Sans", sans-serif;
            font-weight: 200;
            line-height: 120%;
            letter-spacing: 0.60px;
            word-wrap: break-word;
            text-align: center;
        }

        .blurb3 {
            position: absolute;
            top: 8vh;
            width: 80%;
            height: 15vh;
            z-index: 3;

            color: #D9D9D9;
            font-size: 5vw;
            font-family: "Unica One", sans-serif;
            font-weight: 400;
            line-height: 75px;
            letter-spacing: 1px;
            word-wrap: break-word;
            text-align: center;
        }

        .text {
            color: black;
            font-size: 4vw;
            font-family: "Open Sans", sans-serif;
            font-weight: 300;
            line-height: 6vw;
            letter-spacing: 0.94px;
            word-wrap: break-word;
            padding-right: 8vw;
            padding-top: 8vw;
            padding-left: 10vw;
        }

        .linkbutton {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            height: 6vh;
            width: 60vw;
            border-radius: 3.5vh;
            background-color: black;
            color: white;
            font-size: 3vw;
            font-family: "Open Sans", sans-serif;
            font-weight: 300;
            letter-spacing: 3px;
            cursor: pointer;
        }

        .arrow {
            height: 30%;
        }

        .titletxt {
            position: relative;
            font-size: 12vw;
            top: 9vh;
            color: black;
            font-family: "Unica One", cursive;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: 7px;
            word-wrap: break-word;
            vertical-align: center;
        }
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

    .sponsors {
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 2vh;
    }

    .buttondiv {
        height: 20vh;
        text-align: center;
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
        text-decoration-color: #980000;
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
        overscroll-behavior-x: none;
    }
</style>