<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">

<script>
    import {fade} from "svelte/transition";
    import InfoBox from "$lib/InfoBox.svelte";
    import {Menu} from "$lib";

    import banner from "$lib/imgs/meettheteamimgs/banner.jpeg"
    import alanpfp from "$lib/imgs/meettheteamimgs/alanpfp.jpg"
    import alvinpfp from "$lib/imgs/meettheteamimgs/alvinpfp.jpg"
    import antoniapfp from "$lib/imgs/meettheteamimgs/antoniapfp.jpg"
    import christinepfp from "$lib/imgs/meettheteamimgs/christinepfp.jpg"
    import cindypfp from "$lib/imgs/meettheteamimgs/cindypfp.jpg"
    import danielpfp from "$lib/imgs/meettheteamimgs/danielpfp.jpg"
    import haripfp from "$lib/imgs/meettheteamimgs/haripfp.jpg"
    import shasipfp from "$lib/imgs/meettheteamimgs/shasipfp.jpg"
    import senguptapfp from "$lib/imgs/meettheteamimgs/senguptapfp.jpg"
    import frankpfp from "$lib/imgs/meettheteamimgs/frankpfp.jpg"
    import {onMount} from "svelte";

    onMount(() => {
        const resizeOps = () => {
            document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
        };

        resizeOps();
        window.addEventListener("resize", resizeOps);
    })

</script>
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
<div class="banner bannersize">
    <div class="imgwrapper bannersize center">
        <img class="bannerimg" src={banner}>
        <img class="bannerimg" src={banner}>
        <img class="bannerimg" src={banner}>
    </div>
    <div class="title bannersize">
        Meet the Team
    </div>
</div>
<div class="section-header">
    Officers
</div>
<div class="fullsize">
    <div class="entrycontainer">
        <div class="titlecontainer">Alan Zhang</div>
        <div class="infocontainer">
            <InfoBox src={alanpfp} id="p1" transform={true} top={90}>
                <div slot="hovered" transition:fade={{duration: 200}} class="textinfo">Alan, an undergraduate studying MechE and Business,
                    prototyped a multi-rotor aircraft in high school and founded FPV Creator. He has  worked as a drone
                    operator for Oscar-winning short "Simulacra," and is the first undergraduate involved with the Berkeley
                    Aviation Innovation Research (AIR) Lab.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Alan !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Hari Parthasarathy</div>
        <div class="infocontainer">
            <InfoBox src={haripfp} id="p3" transform={true} top={0}>
                <div slot="hovered" transition:fade={{duration: 200}} class="textinfo">Hari is a rising sophomore studying BioE
                    and Business, with an interest for aviation sparked during his NASA internship.
                    He has researched with Rice University and Johns Hopkins and has worked with several
                    startups in technical and business roles. In his free time, he enjoys movies, cooking, poker,
                    and exploring new experiences!
                </div>
            </InfoBox>
        </div>
    </div> <!-- Hari !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Shasi Pinninti</div>
        <div class="infocontainer">
            <InfoBox src={shasipfp} id="p4" transform={true}>
                <div slot="hovered" transition:fade={{duration: 200}} class="textinfo">Shasi is a MechE and Business double major.
                    He has worked with aerospace firms such as NASA and Blue Origin, helping to re-define their strategic
                    roadmaps. He is also well-versed in the field of finance, having been responsible for
                    risk/growth analytics on a ~$1.7B loan portfolio as well as commodities research for the
                    Indian conglomerate, Vedanta Group.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Shasi !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Christine Gu</div>
        <div class="infocontainer">
            <InfoBox src={christinepfp} id="p5" transform={true}>
                <div slot="hovered" transition:fade={{duration: 200}} class="textinfo">Christine, an undergraduate in Chemical
                    Engineering, has seven years of experience in yearbook production. She was once Editor in Chief,
                    which granted her an extensive repertoire that includes professional photography, sophisticated
                    graphic design, effective team coordination, and astute production leadership.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Christine !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Antonia d'Auria</div>
        <div class="infocontainer">
            <InfoBox src={antoniapfp} id="p6" transform={true} top={20}>
                <div slot="hovered" transition:fade={{duration: 200}} class="textinfo">Antonia is an undergraduate studying Sociology.
                    She has eight years of leadership experience in collaborative work through management in orchestras
                    and musical ensemble groups. These experiences gave her a strong suite in public speaking,
                    English rhetoric, and improvised management. In her free time, she also practices sewing,
                    makeup artistry, pottery, and baking.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Antonia !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Daniel Chen</div>
        <div class="infocontainer">
            <InfoBox src={danielpfp} id="p7" transform={true}>
                <div slot="hovered" transition:fade={{duration: 200}} class="textinfo"> Daniel is a EECS and Business double major
                    that dabbles in all things programming related from ML models to frontend development. Recently, he
                    has gained in interest in fractional order signal processing, variability quantification through
                    the analysis of long-range dependence in complex timeseries, and algorithmic trading.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Daniel !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Cindy Huang</div>
        <div class="infocontainer">
            <InfoBox src={cindypfp} id="p8" transform={true}>
                <div slot="hovered" transition:fade={{duration: 200}} class="textinfo">Cindy is an undergraduate studying Mech E and
                    business. Her experiences spans across robotics/automation, manufacturing, and aeronautical
                    engineering.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Cindy !-->
</div>
<div class="section-header">
    Advisors
</div>
<div class="fullsize">
    <div class="entrycontainer">
        <div class="titlecontainer">Raja Sengupta</div>
        <div class="infocontainer">
            <InfoBox src={senguptapfp} id="p1" transform={true} top={90}>
                <div slot="hovered" transition:fade={{duration: 200}} class="textinfo" style="font-size: 1.25vh;">
                    Raja Sengupta is a Professor of Civil and Environmental Engineering at UC Berkeley.
                    Sengupta’s research focuses on automated cars, drones, connected cars, smartphone apps
                    for economics & transportation, wireless networking, and control theory. He likes to do
                    research on the industry and get it into the marketplace, and he holds car-to-road networking
                    patents with Toyota, a UAV patent with BAE Aerospace, and car-to-car networking contributions
                    standardized by the SAE into J2945. Sengupta has been an advisor to the World Bank, is a recipient
                    of the USDOT’s Connected Vehicle Technology award in 2011, the UC Berkeley Energy and Climate
                    Lectures Innovation award in 2014, and has authored over a hundred papers spanning control theory,
                    networking, drones, and transportation.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Raja !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Frank Ketcham</div>
        <div class="infocontainer">
            <InfoBox src={frankpfp} id="p1" transform={true} top={90}>
                <div slot="hovered" transition:fade={{duration: 200}} class="textinfo" style="font-size: 1.25vh;">
                    Frank is a highly experienced aviation professional with over 35 years of experience. He holds
                    several FAA ratings and is certified to fly a multitude of aircraft including the Airbus A320,
                    A330 and A350 and is currently a pilot for a major US Airline. He has over 20,000 hours of both
                    domestic and international flying experience. In 2020 he completed building of a Vans RV-14A
                    experimental aircraft with state of the area avionics. He is experienced in both manned and
                    unmanned systems and holds an FAA Remote Pilot FAR 107 license and has a variety of experience
                    with FAA certification and airworthiness. Additionally, he has  held a staff position as a
                    Commercial Aviation Specialist at UC Berkeley School of Engineering since 2008.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Frank !-->
</div>

<Menu includeMainLogo={false}/>

<style>
    .section-header {
        display: flex;
        width: 100%;
        height: 10vw;
        color: black;
        text-align: center;
        align-items: center;
        justify-content: center;

        font-size: 10vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;

        padding: 5vh 0 5vh 0;
    }
    .textinfo {
        color: black;
        font-size: 1.75vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 320;
        line-height: 210%;
        word-wrap: break-word;

        position: absolute;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        text-align: left;
        padding: 5%;
    }
    .titlecontainer {
        color: white;
        font-size: 90%;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: 1.40px;
        word-wrap: break-word;

        background-color: rgba(152, 0, 0, 0.80);
        position: relative;
        height: 15%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .infocontainer {
        position: relative;
        width: 100%;
        height: 85%;
        overflow: hidden;

        text-align: center;
        background-color: #D9D9D9;
    }

    .entrycontainer {
        height: 53vh;
        aspect-ratio: 2/3;
        position: relative;
        margin-left: 1vw;
        margin-right: 1vw;
        margin-bottom: 2vh;
    }

    @media only screen and (min-width: 768px) {
        .fullsize {
            width: 90vw;
            height: auto;
            padding: 0 5vw 0 5vw;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .bannersize {
            width: 100vw;
            height: 47vh;
        }
    }

    @media only screen and (max-width: 768px) {
        .fullsize {
            width: 90vw;
            height: auto;
            padding: 0 5vw 0 5vw;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .bannersize {
            width: 100vw;
            height: 47vh;
        }
    }

    .imgwrapper {
        display: flex;
        position: absolute;
        justify-content: center;
        overflow: hidden;
    }
    .bannerimg {
        display: block;
        height: 100%;
    }
    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .title {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;

        color: white;
        font-size: 10vw;
        font-family: "Unica One", cursive;
        font-weight: 400;
        line-height: 100%;
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
    }
</style>