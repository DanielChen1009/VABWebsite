<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">

<script>
    import {onMount} from "svelte";
    import EntryContainer from "./EntryContainer.svelte";
    import Menu from "../../lib/Menu.svelte";
    import founderimgright from "$lib/imgs/founderimgs/founderimgright.png";
    import founderimgleft from "$lib/imgs/founderimgs/founderimgleft.png";
    import founderimgcenter from "$lib/imgs/founderimgs/founderimgcenter.png";
    import p1 from "$lib/imgs/founderimgs/p1.png";
    import p2 from "$lib/imgs/founderimgs/p2.png";
    import p3 from "$lib/imgs/founderimgs/p3.png";
    import p4 from "$lib/imgs/founderimgs/p4.png";
    import p5 from "$lib/imgs/founderimgs/p5.png";
    import p6 from "$lib/imgs/founderimgs/p6.png";
    import circle from "$lib/imgs/founderimgs/circle.svg";


    let h1 = 0, h2 = 0, h3 = 0, h4 = 0, h5 = 0, h6 = 0;
    let clientHeight;
    let mounted;
    onMount(() => {
        clientHeight = document.documentElement.clientHeight;
        mounted = true;
        document.addEventListener("change", () => {
            clientHeight = document.documentElement.clientHeight;
        })
        document.addEventListener("click", () => {
            console.log(h1);
            console.log(h2);
            console.log(clientHeight);
            console.log(clientHeight);
        })
    })

</script>
{#if mounted}
<div class="banner bannersize">
    <div class="imgwrapper bannersize center">
        <img class="bannerimg" src={founderimgright}>
        <img class="bannerimg" src={founderimgleft}>
        <img class="bannerimg" src={founderimgcenter}>
        <img class="bannerimg" src={founderimgright}>
        <img class="bannerimg" src={founderimgleft}>
    </div>
    <div class="title bannersize">
        FOUNDER'S STORY
        <div class="circle red center"></div>
    </div>
</div>
<div class="timelinewrapper">
    <div class="midline center"></div>
    <div class="dot red center" style="top: 40vh;"></div>
    <div class="dot red center" style="top: 80vh;"></div>
    <div class="dot red center" style="top: 120vh;"></div>
    <div class="dot red center" style="top: 160vh;"></div>
    <div class="dot red center" style="top: 200vh;"></div>
    <div class="dot red center" style="top: 240vh;"></div>
    <div class="dot black center" style="top: 280vh;"></div>
    <div class="entrycontainer centerleft" style="top: {clientHeight * 0.405 - h1/2}px;">
        <EntryContainer dur="1000" x_trans="-300">
            <div class="age">
                Age 11
            </div>
            <div class="content" bind:clientHeight={h1}>
                Alan Zhang was born in 2004 in Guangzhou, China. At the young age of 11,
                he sparked an interest in making DIY kits after learning to use a soldering
                iron and glue gun.
            </div>
            <div style="width: 100%; display:flex; justify-content: right">
                <div class="timeimgwrapper" style="justify-content: right;">
                    <img src={p1} class="timelineimg">
                </div>
            </div>
        </EntryContainer>
    </div>
    <div class="entrycontainer centerright" style="top: {clientHeight * 0.805 - h2/2}px;">
        <EntryContainer dur="1000" x_trans="300">
            <div style="width: 100%; display:flex; justify-content: right">
                <div class="age">
                    Age 13
                </div>
            </div>
            <div class="content" bind:clientHeight={h2}>
                Two years later, at age 13: he assembled his first toy drone
                and GoPro to shoot into the skies. Upon being gifted a DJI Phantom 4,
                his interest in drone aviation soon became an obsession.
            </div>
            <div style="width: 100%; display:flex; justify-content: left">
                <div class="timeimgwrapper" style="justify-content: left;">
                    <img src={p2} class="timelineimg">
                </div>
            </div>
        </EntryContainer>
    </div>
    <div class="entrycontainer centerleft" style="top: {document.documentElement.clientHeight * 1.205 - h3/2}px;">
        <EntryContainer dur="1000" x_trans="-300">
            <div class="age">
                Age 14
            </div>
            <div class="content" bind:clientHeight={h3}>
                Alan built his first FPV drone a year later (14),
                and competed in the BIEA International STEM Competition for drone
                design, where he won as an International Finalist and recipient of the
                Most Creative Award.
            </div>
            <div style="width: 100%; display:flex; justify-content: right">
                <div class="timeimgwrapper" style="justify-content: right;">
                    <img src={p3} class="timelineimg">
                </div>
            </div>
        </EntryContainer>
    </div>
    <div class="entrycontainer centerright" style="top: {document.documentElement.clientHeight * 1.605 - h4/2}px;">
        <EntryContainer dur="1000" x_trans="300">
            <div style="width: 100%; display:flex; justify-content: right">
                <div class="age">
                    Age 15
                </div>
            </div>
            <div class="content" bind:clientHeight={h4}>
                At age 15, he co-founded “FPV Creator,” a VC-backed startup what specialized
                in designing drones, drop-shipping parts, and helping others share his own passion.
                While doing so, he quickly accumulated over 30,000 online followers on Instagram and YouTube.
            </div>
            <div style="width: 100%; display:flex; justify-content: left">
                <div class="timeimgwrapper" style="justify-content: left;">
                    <img class="timelineimg" src={p4}>
                </div>
            </div>
        </EntryContainer>
    </div>
    <div class="entrycontainer centerleft" style="top: {document.documentElement.clientHeight * 2.005 - h5/2}px;">
        <EntryContainer dur="1000" x_trans="-300">
            <div class="age">
                Age 16
            </div>
            <div class="content" bind:clientHeight={h5}>
                During high school, Alan launched a drone club at his high school, named Project Leelyn Drone,
                fundraising over $25,000 and led the world’s first team of high school students in engineering
                a human-carrying electric aircraft.
            </div>
            <div style="width: 100%; display:flex; justify-content: right">
                <div class="timeimgwrapper" style="justify-content: right;">
                    <img src={p5} class="timelineimg">
                </div>
            </div>
        </EntryContainer>
    </div>
    <div class="entrycontainer centerright" style="top: {document.documentElement.clientHeight * 2.405 - h6/2}px;">
        <EntryContainer dur="1000" x_trans="300">
            <div style="width: 100%; display:flex; justify-content: right">
                <div class="age">
                    Present
                </div>
            </div>
            <div class="content" bind:clientHeight={h6}>
                Today, Alan Zhang attends the University of California, Berkeley as a student within the Management,
                Entrepreneurship, and Technology (M.E.T) Program; he double majors in Mechanical Engineering and Business
                Administration. Apart from joining Berkeley’s Aviation Innovation Research Lab, he launched his own
                student-run VTOL organization: VTOL @ Berkeley. He’s been able to deeply discuss topics in aviation
                and eVTOL with the founders of Opener and XPeng AeroHT, both industrial leaders in the field.
            </div>
            <div style="width: 100%; display:flex; justify-content: left">
                <div class="timeimgwrapper" style="justify-content: left;">
                    <img src={p6} class="timelineimg">
                </div>
            </div>
        </EntryContainer>
    </div>
</div>
{/if}

<Menu includeMainLogo={false}/>
<style>
    .timelineimg {
        width: 97%;
    }
    .timeimgwrapper {
        display: flex;
        width: 60%;
        background-color: #980000;
        margin: 0;
    }
    .centerleft {
        left: 4vw;
    }

    .centerright {
        right: 4vw;
    }

    .content {
        position: relative;
        color: black;
        font-size: 2.5vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        line-height: 32px;
        letter-spacing: 0.40px;
        word-wrap: break-word;
        text-align: left;

        background-color: #D9D9D9;
        padding: 2vh 2vw 2vh 2vw;
    }
    .age {
        display: inline-block;
        color: white;
        font-size: 2vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0.36px;
        word-wrap: break-word;

        background-color: #980000;
        padding: 0 1vw 0 1vw;
    }
    .entrycontainer {
        display: block;
        position: absolute;
        width: 40vw;
    }
    .black {
        background-color: black;
    }
    .red {
        background-color: #980000;
    }

    .dot {
        position: absolute;
        border-radius: 2.5vw;
        width: 5vw;
        height: 5vw;
    }
    .center {
        left: 50%;
        transform: translateX(-50%);
    }
    .midline {
        position: relative;
        height: 282.5vh;
        width: 1%;
        background-color: black;
        top: 0;
    }
    .timelinewrapper {
        position: relative;
        height: 350vh;
        width: 100%;
    }
    .bannersize {
        width: 100%;
        height: 47vh;
    }
    .circle {
        position: absolute;
        top: 50vh;
        width: 10vw;
        height: 10vw;
        border-radius: 5vw;
        transform: translate(-50%, -50%);
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
        line-height: 100%;
        letter-spacing: 6.65px;
        word-wrap: break-word;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);
    }
    .bannerimg {
        display: block;
        float: left;
        padding: 0;
        margin: 0;
    }

    .imgwrapper {
        display: flex;
        position: absolute;
        justify-content: center;
        overflow: hidden;
    }
</style>