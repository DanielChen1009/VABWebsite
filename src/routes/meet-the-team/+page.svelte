<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">

<script>
    import {fade} from "svelte/transition";
    import InfoBox from "../../lib/InfoBox.svelte";
    import {Menu} from "$lib";
</script>

<div class="banner bannersize">
    <div class="imgwrapper bannersize center">
        <img class="bannerimg" src="src/imgs/meettheteamimgs/banner.png">
        <img class="bannerimg" src="src/imgs/meettheteamimgs/banner.png">
        <img class="bannerimg" src="src/imgs/meettheteamimgs/banner.png">
    </div>
    <div class="title bannersize">
        Meet Our Leadership
    </div>
</div>

<div class="fullsize">
    <div class="entrycontainer">
        <div class="titlecontainer">Alan Zhang</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/alanpfp.jpeg" id="p1" transform={true} top={90}>
                <div transition:fade={{duration: 200}} class="textinfo">Alan, an undergraduate studying MechE and Business,
                    prototyped a multi-rotor aircraft in high school and founded FPV Creator. He has  worked as a drone
                    operator for Oscar-winning short "Simulacra," and is the first undergraduate involved with the Berkeley
                    Aviation Innovation Research (AIR) Lab.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Alan !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Alvin Xiao</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/alvinpfp.jpeg" id="p2" transform={true} top={100}>
                <div transition:fade={{duration: 200}} class="textinfo">Alvin, an undergraduate
                    studying MSE and Business, boasts extensive venture capital experience.
                    He raised ~$15M for a portfolio company and was selected to help lead
                    his firm’s most recent investment fund of ~$700M. He's also worked as a PM,
                    helping Tencent CEO, Ma Huateng, confirm game event development and company
                    acquisition details.
                </div>
            </InfoBox>
        </div>
    </div> <!-- Alvin !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Hari Parthasarathy</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/haripfp.jpeg" id="p3" transform={true} top={0}>
                <div transition:fade={{duration: 200}} class="textinfo">Hari is a rising sophomore studying BioE
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
            <InfoBox src="./src/imgs/meettheteamimgs/shasipfp.jpeg" id="p4" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Shasi is a MechE and Business double major.
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
            <InfoBox src="./src/imgs/meettheteamimgs/christinepfp.png" id="p5" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Christine, an undergraduate in Chemical
                    Engineering, has seven years of experience in yearbook production. She was once Editor in Chief,
                    which granted her an extensive repertoire that includes professional photography, sophisticated
                    graphic design, effective team coordination, and astute production leadership.

                </div>
            </InfoBox>
        </div>
    </div> <!-- Christine !-->
    <div class="entrycontainer">
        <div class="titlecontainer">Antonia Dauria</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/antoniapfp.png" id="p6" transform={true} top={20}>
                <div transition:fade={{duration: 200}} class="textinfo">Antonia is an undergraduate studying Sociology.
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
            <InfoBox src="./src/imgs/meettheteamimgs/danielpfp.jpeg" id="p7" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo"> Daniel is a EECS and Business double major
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
            <InfoBox src="./src/imgs/meettheteamimgs/alanpfp.png" id="p8" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute
                </div>
            </InfoBox>
        </div>
    </div> <!-- Cindy !-->
</div>

<Menu includeMainLogo={false}/>

<style>
    .textinfo {
        color: black;
        font-size: 15px;
        font-family: "Open Sans", sans-serif;
        font-weight: 320;
        line-height: 30px;
        letter-spacing: 0.30px;
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

        background-color: rgba(255, 39, 0, 0.80);
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

    .fullsize {
        height: auto;
        padding: 10vh 5vw 10vh 5vw;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .imgwrapper {
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
    .bannersize {
        width: 100vw;
        height: 47vh;
    }
    .bannerimg {
        display: block;
        padding: 0;
        margin: 0;
    }
    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
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

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        background-color: rgba(0, 0, 0, 0.5);
    }
</style>