<div class="banner">
    <div class="imgwrapper">
        <img class="bannerimg" src="./src/imgs/founderimgs/founderimgleft.png">
        <img class="bannerimg" src="./src/imgs/founderimgs/founderimgcenter.png">
        <img class="bannerimg" src="./src/imgs/founderimgs/founderimgright.png">
    </div>
</div>

<style>
    .bannerimg {
        display: block;
        float: left;
        height: 47vh;
        padding: 0;
        margin: 0;

    }

    .imgwrapper {
        display: flex;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
    }

    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 47vh;
        letter-spacing: 0;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 20;
    }
</style>