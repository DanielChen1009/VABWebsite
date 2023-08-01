<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">

<script>
    import Menu from "../../lib/Menu.svelte";
    import InfoBox from "../../lib/InfoBox.svelte";
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";

    function myFunction(x) {
        if (x.matches) { // If media query matches
            isMobile = true;
        } else {
            isMobile = false;
        }
    }
    onMount(() => {
        x = window.matchMedia("(max-width: 850px)")
        myFunction(x)
        x.addListener(myFunction)
    })
    let isMobile
    let x;
</script>

<div class="banner bannersize">
    <div class="imgwrapper bannersize center">
        <img class="bannerimg" src="">
        <img class="bannerimg" src="">
        <img class="bannerimg" src="">
    </div>
    <div class="title bannersize">
        About the Club
    </div>
</div>

<div class="page">
    <div class="abouttxt color text">
        <ul class="list">
            <li>Build a human carrying VTOL aircraft by 2026</li>
            <li>Grow the Berkeley aviation ecosystem, specifically targeting urban air mobility</li>
            <li>Provide hands on engineering and business experiences for our members</li>
        </ul>
        If any of our 3 goals pique your interest, you may be a great fit for one of our subteams!
    </div>
{#if !isMobile}
    <div class="stcontainer center color">
        <div class="stentry">
            <div class="imgbox">
                <img class="stimage" src="src/imgs/landingbg.png">
                <div class="labelbox">
                    Hardware
                </div>
            </div>
            <div class="textbox">

            </div>
        </div>
        <div class="stentry">
            <div class="imgbox">
                <img class="stimage" src="src/imgs/landingbg.png">
                <div class="labelbox">
                    Software
                </div>
            </div>
            <div class="textbox">

            </div>
        </div>
        <div class="stentry">
            <div class="imgbox">
                <img class="stimage" src="src/imgs/landingbg.png">
                <div class="labelbox">
                    Consulting
                </div>
            </div>
            <div class="textbox">

            </div>
        </div>
        <div class="stentry">
            <div class="imgbox">
                <img class="stimage" src="src/imgs/landingbg.png">
                <div class="labelbox">
                    Business/Ops
                </div>
            </div>
            <div class="textbox">

            </div>
        </div>
    </div>
{/if}

{#if isMobile}
    <div class="stcontainer center color">
            <div class="st">
                <InfoBox src="./src/imgs/landingbg.png" id="tag1" transform={false}>
                    <div class="internaltxt" transition:fade>
                        Hardware
                    </div>
                </InfoBox>
            </div>
        <div style="flex-basis: 100%; height: 0"></div>
        <div class="st">
            <InfoBox src="./src/imgs/landingbg.png" id="tag2" transform={false}>
                <div class="internaltxt" transition:fade>
                    Software
                </div>
            </InfoBox>
        </div>
        <div style="flex-basis: 100%; height: 0"></div>
        <div class="st">
            <InfoBox src="./src/imgs/landingbg.png" id="tag3" transform={false}>
                <div class="internaltxt" transition:fade>
                    Consulting / Business Dev
                </div>
            </InfoBox>
        </div>
        <div style="flex-basis: 100%; height: 0"></div>
        <div class="st">
            <InfoBox src="./src/imgs/landingbg.png" id="tag4" transform={false}>
                <div class="internaltxt" transition:fade>
                    Other Roles
                </div>
            </InfoBox>
        </div>
    </div>
{/if}
</div>

<Menu includeMainLogo={false}/>

<style>
    .labelbox {
        position: absolute;
        top: 60%;
        height: 25%;
        width: 100%;
        background-color: rgba(255, 39, 0, 0.80);

        color: white;
        font-size: 5vh;
        font-family: "Unica One", sans-serif;
        font-weight: 400;
        line-height: 75px;
        letter-spacing: 3.50px;
        word-wrap: break-word;
        text-align: center;
    }
    .stimage {
        height: 100%;
        filter: brightness(50%);
    }
    .imgbox {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 37%;
        height: 100%;
        margin-right: 3%;
        overflow: hidden;
        border-radius: 5vh;
    }
    .textbox {
        width: 60%;
        height: 100%;
        background-color: #D9D9D9;
        border-radius: 5vh;
    }
    .stentry {
        display: flex;
        justify-content: center;
        width: 90%;
        padding-left: 5%;
        padding-right: 5%;
        margin-top: 10vh;
        height: 40vh;
    }
    .internaltxt {
        color: black;
        font-size: 200%;
        font-family: "Unica One", cursive;
        font-weight: 400;
        line-height: 75px;
        letter-spacing: 6.65px;
        word-wrap: break-word;

        background-color: rgba(255, 255, 255, 0.6);

        position: absolute;
        top:0;
        z-index: 99;
        height: 100%;
        width: 90%;
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 2%;
        padding-left: 5%;
        padding-right: 5%;
    }
    .color {
        background-color: rgba(250, 250, 250, 0.98);
    }
    .text {
        color: black;
        font-size: 4vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        line-height: 130%;
        letter-spacing: 1px;
        word-wrap: break-word
    }

    .list {
        list-style-type: decimal;
    }

    .center {
        justify-content: center;
    }
    .page {
        display: block;
        position: relative;
        margin: 5vw
    }
    .stcontainer {
        position: relative;
        margin: 0;

        display: flex;
        flex-wrap: wrap;
    }
    .st {
        position:relative;
        aspect-ratio: 4/3;
        width: 60vw;
        margin: 5vw;
        border-radius: 5vh;
        overflow: hidden;
    }
    .abouttxt {
        position: relative;
        height: auto;
        padding: 0.1vh 5vw 5vh;
        margin: 0;
        border-bottom: #D9D9D9 1vw solid;
    }
    .imgwrapper {
        display: flex;
        position: absolute;
        justify-content: center;
        overflow: hidden;
    }
    .bannersize {
        width: 100vw;
        height: 47vh;
    }
    .bannerimg {
        display: block;
        float: left;
        padding: 0;
        margin: 0;
    }
    .title {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;

        color: white;
        font-size: 15vh;
        font-family: "Unica One", cursive;
        font-weight: 400;
        line-height: 16vh;
        letter-spacing: 6.65px;
        word-wrap: break-word;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        background-color: rgba(0, 0, 0, 0.5);
    }
</style>