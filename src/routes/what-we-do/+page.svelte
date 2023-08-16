<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">

<script>
    import Menu from "$lib/Menu.svelte";
    import InfoBox from "$lib/InfoBox.svelte";
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";
    import bannerbg from "$lib/imgs/whatwedoimgs/bannerbg.png";
    import consulting from "$lib/imgs/whatwedoimgs/consulting.png";
    import hardware from "$lib/imgs/whatwedoimgs/hardware.png";
    import marketing from "$lib/imgs/whatwedoimgs/marketing.png";
    import software from "$lib/imgs/whatwedoimgs/software.png";
    import sponsorr from "$lib/imgs/whatwedoimgs/sponsorr.png";

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
        <img class="bannerimg" src={bannerbg}>
        <img class="bannerimg" src={bannerbg}>
        <img class="bannerimg" src={bannerbg}>
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
                <img class="stimage" src={hardware}>
                <div class="labelbox">
                    Hardware
                </div>
            </div>
            <div class="textbox">
                <div class="textinternal">
                    The Hardware team delves into the intricacies of aircraft design, spanning mechanical,
                    thermal, and aeronautical domains. Team members will hone skills in research, design,
                    CAD modeling, construction, and testing of the airframe, propulsion, and electrical subsystems.
                    Ideal candidates are from majors like MechE, AeroE, MSE, EECS, and other engineering disciplines.
                </div>
            </div>
        </div>
        <div class="stentry">
            <div class="imgbox">
                <img class="stimage" src={software}>
                <div class="labelbox">
                    Software
                </div>
            </div>
            <div class="textbox">
                <div class="textinternal">
                    Focused on technological advances, the Software team is centered on developing the
                    flight control system, simulations, air mobility management, and automation controls.
                    We primarily look for individuals majoring in EECS, Computer Science, and Data Science.

                </div>
            </div>
        </div>
        <div class="stentry">
            <div class="imgbox">
                <img class="stimage" src={consulting}>
                <div class="labelbox">
                    Consulting
                </div>
            </div>
            <div class="textbox">
                <div class="textinternal">
                    Drawing upon the collective expertise of VTOL at Berkeley, the Consulting team
                    offers services to pioneering companies in the mobility sector. Team members will refine
                    their skills in professional research, business analysis, and impactful presentation.
                    Business Administration majors are especially suited for this subteam.
                </div>
            </div>
        </div>
        <div class="stentry">
            <div class="imgbox">
                <img class="stimage" src={marketing}>
                <div class="labelbox">
                    Marketing
                </div>
            </div>
            <div class="textbox">
                <div class="textinternal">
                    The Marketing team is responsible for creating compelling visual and digital
                    content, from flyers and posters to social media interactions. Team members
                    will create photos, videos, and graphics to amplify the club's public engagement.
                    We welcome individuals with professional experience in related fields.
                </div>
            </div>
        </div>
        <div class="stentry">
            <div class="imgbox">
                <img class="stimage" src={sponsorr}>
                <div class="labelbox">
                    Sponsor Relations
                </div>
            </div>
            <div class="textbox">
                <div class="textinternal">
                    Dedicated to forging strong industry partnerships, the Sponsor Relations team
                    tirelessly pursues potential sponsors and keeps them apprised of our progress.
                    Team members will develop expertise in designing pitch decks, crafting presentations,
                    and reaching out to potential corporate partners.
                </div>
            </div>
        </div>
    </div>
{/if}

{#if isMobile}
    <div class="stcontainer center color">
            <div class="st">
                <InfoBox src={hardware} id="tag1" transform={false}>
                    <div class="internaltxt" transition:fade>
                        Hardware
                    </div>
                </InfoBox>
            </div>
        <div style="flex-basis: 100%; height: 0"></div>
        <div class="st">
            <InfoBox src={software} id="tag2" transform={false}>
                <div class="internaltxt" transition:fade>
                    Software
                </div>
            </InfoBox>
        </div>
        <div style="flex-basis: 100%; height: 0"></div>
        <div class="st">
            <InfoBox src={consulting} id="tag3" transform={false}>
                <div class="internaltxt" transition:fade>
                    Consulting
                </div>
            </InfoBox>
        </div>
        <div class="st">
            <InfoBox src={marketing} id="tag4" transform={false}>
                <div class="internaltxt" transition:fade>
                    Marketing
                </div>
            </InfoBox>
        </div>
        <div style="flex-basis: 100%; height: 0"></div>
        <div class="st">
            <InfoBox src={sponsorr} id="tag5" transform={false}>
                <div class="internaltxt" transition:fade>
                    Sponsor Relations
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
        background-color: rgba(152, 0, 0, 0.80);

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
    .textinternal {
        padding: 3vw;

        color: black;
        font-size: 1.4vw;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        line-height: 150%;
        letter-spacing: 0.90px;
        word-wrap: break-word
    }

    .textbox {
        width: 60%;
        height: 100%;
        background-color: #D9D9D9;
        border-radius: 5vh;

        display: flex;
        align-items: center;
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
        font-size: 3vh;
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
        float: left;
        padding: 0;
        margin: 0;
        width: 100vw;
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

    :global(body) {
        padding:0;
        margin:0;
        overscroll-behavior-y: none;
        overscroll-behavior-x: none;
        overflow-x: hidden;
    }
</style>