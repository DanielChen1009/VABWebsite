<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">

<script>

</script>

<div class="banner bannersize">
    <div class="imgwrapper bannersize center">
        <img class="bannerimg" src="./src/imgs/founderimgs/founderimgright.png">
        <img class="bannerimg" src="./src/imgs/founderimgs/founderimgleft.png">
        <img class="bannerimg" src="./src/imgs/founderimgs/founderimgcenter.png">
        <img class="bannerimg" src="./src/imgs/founderimgs/founderimgright.png">
        <img class="bannerimg" src="./src/imgs/founderimgs/founderimgleft.png">
    </div>
    <div class="title bannersize">
        FOUNDER'S STORY
        <img class="circle top center" src="./src/imgs/founderimgs/circle.svg">
    </div>
</div>
<div class="timelinewrapper">
    <div class="midline center"></div>
    <div class="dot orange center" style="top: 40vh;"></div>
    <div class="dot orange center" style="top: 80vh;"></div>
    <div class="dot orange center" style="top: 120vh;"></div>
    <div class="dot orange center" style="top: 160vh;"></div>
    <div class="dot orange center" style="top: 200vh;"></div>
    <div class="dot orange center" style="top: 240vh;"></div>
    <div class="dot black center" style="top: 280vh;"></div>
</div>

<style>
    .black {
        background-color: black;
    }
    .orange {
        background-color: #FF4D2D;
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
        width: 100vw;
    }
    .bannersize {
        width: 100vw;
        height: 47vh;
    }
    .circle {
        position: absolute;
        top: 50vh;
        left: 50vw;
        width: 10vw;
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
        line-height: 75px;
        letter-spacing: 6.65px;
        word-wrap: break-word;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);
        border-bottom: 5vh black solid;
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

    .banner {
        letter-spacing: 0;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>