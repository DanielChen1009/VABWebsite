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

<div class="halfsize">
    <div class="entrycontainer">
        <div class="titlecontainer">Alan Zhang</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/alanpfp.png" id="p1" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute
                </div>
            </InfoBox>
        </div>
    </div>
    <div class="entrycontainer">
        <div class="titlecontainer">Alvin Xiao</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/alanpfp.png" id="p2" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute
                </div>
            </InfoBox>
        </div>
    </div>
    <div class="entrycontainer">
        <div class="titlecontainer">Hari Parthasarathy</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/alanpfp.png" id="p3" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute
                </div>
            </InfoBox>
        </div>
    </div>
    <div class="entrycontainer">
        <div class="titlecontainer">Shasi Pinninti</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/shasipfp.jpeg" id="p4" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute
                </div>
            </InfoBox>
        </div>
    </div>
</div>
<div class="halfsize" style="padding-top: 0">
    <div class="entrycontainer">
        <div class="titlecontainer">Christine Gu</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/alanpfp.png" id="p5" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute
                </div>
            </InfoBox>
        </div>
    </div>
    <div class="entrycontainer">
        <div class="titlecontainer">Antonia Dauria</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/alanpfp.png" id="p6" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute
                </div>
            </InfoBox>
        </div>
    </div>
    <div class="entrycontainer">
        <div class="titlecontainer">Daniel Chen</div>
        <div class="infocontainer">
            <InfoBox src="./src/imgs/meettheteamimgs/danielpfp.jpeg" id="p7" transform={true}>
                <div transition:fade={{duration: 200}} class="textinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute
                </div>
            </InfoBox>
        </div>
    </div>
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
    </div>
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
        background-color: rgba(155, 155, 155, 0.8);
        text-align: left;
        padding: 5%;
    }
    .titlecontainer {
        color: white;
        font-size: 20px;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        line-height: 75px;
        letter-spacing: 1.40px;
        word-wrap: break-word;

        background-color: rgba(255, 39, 0, 0.80);
        position: relative;
        height: 15%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
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
        height: 60vh;
        width: 20vw;
        position: relative;
        margin-left: 4vw;
    }

    .halfsize {
        height: 60vh;
        padding: 10vh 0 10vh 0;
        display: flex;
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