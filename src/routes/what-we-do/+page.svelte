<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">

<script>
    import Menu from "../../lib/Menu.svelte";
    import InfoBox from "../../lib/InfoBox.svelte";
    import {fade} from "svelte/transition";
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
</div>

<Menu includeMainLogo={false}/>

<style>
    .internaltxt {
        color: black;
        font-size: 10vh;
        font-family: "Unica One", cursive;
        font-weight: 400;
        line-height: 75px;
        letter-spacing: 6.65px;
        word-wrap: break-word;

        background-color: rgba(255, 255, 255, 0.6);

        position: absolute;
        z-index: 99;
        height: 100%;
        width: 90%;
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 5%;
        padding-left: 5%;
        padding-right: 5%;
    }
    .color {
        background-color: rgba(250, 250, 250, 0.98);
    }
    .text {
        color: black;
        font-size: 6vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        line-height: 75px;
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
        display: flex;
        flex-wrap: wrap;
    }
    .st {
        position:relative;
        height: 60vh;
        width: 60vw;
        margin: 5vw;
        border-radius: 1vw;
        overflow: hidden;
    }
    .abouttxt {
        position: relative;
        height: 80vh;
        padding: 0.1vh 5vw 10vh;
        border-bottom: #D9D9D9 2vh solid;
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
        line-height: 75px;
        letter-spacing: 6.65px;
        word-wrap: break-word;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);
    }
</style>