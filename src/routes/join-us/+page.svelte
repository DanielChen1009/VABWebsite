<script>
    import Menu from "../../lib/Menu.svelte";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">

<div class="bannersize banner"></div>
<div class="fullsize">
    <div class="border">
        <div class="form">
            <img src="./src/imgs/joinusimgs/formtitle.png" style="width: 60%">
            <img src="./src/imgs/joinusimgs/formsubtitle.png" style="width: 60%">
            <form>
                <div style="float:left;">
                    <label>
                        Name*
                        <br>
                        <div style="float:left; margin-right:20px;">
                            <input id="fname" type="text" value="" name="fname">
                            <br>
                            <label for="fname">
                                <span>First</span>
                            </label>
                        </div>
                        <div style="float:left; margin-right:20px;">
                            <input id="lname" type="text" value="" name="lname">
                            <br>
                            <label for="lname">
                                <span>Last</span>
                            </label>
                        </div>
                    </label>
                </div>
                <div style="float:left;">
                    <label for="major">
                        Major*
                        <br>
                        <input id="major" type="text" value="" name="major">
                    </label>
                </div>
                <br style="">
                <div style="float:left; margin-right: 20px">
                    <label>
                        Email*
                        <br>
                            <input id="email" type="text" value="" name="email">
                            <br>
                            <label for="email">
                                <span>First</span>
                            </label>
                    </label>
                </div>
                <div style="float:left;">
                    <label for="major">
                        Major*
                        <br>
                        <input id="major" type="text" value="" name="major">
                    </label>
                </div>
                <br>

            </form>
        </div>
        <div class="imgwrapper">
            <img src="./src/imgs/joinusimgs/campanile.png" class="img">
        </div>
        <div class="title">Recruitment Form</div>
    </div>
</div>

<Menu includeMainLogo={false}/>

<style>
    input, label {
        display:inline-block;
    }

    .form {
        width: 80%;
        margin-top: 7vh;
        margin-left: 3vw;
    }
    .imgwrapper {
        display: flex;
        position: relative;
        height: 102%;
        overflow: hidden;
        padding: 0;
        margin: 0;
        justify-content: center;
        transform: translateY(-1%);
        z-index: -1;
    }
    .img {
        height: 102%;
    }
    .title {
        position: absolute;
        background-color: #FF2700;

        color: white;
        font-size: 3vh;
        font-family: "Unica One", cursive;
        font-weight: 400;
        letter-spacing: 1.40px;
        word-wrap: break-word
    }
    .border {
        display: flex;
        position: relative;
        border: 1vw #FF2700 solid;
        height: 90%;
        width: 80vw;
        padding: 0;
        margin: 0;
        justify-content: center;
    }

    .bannersize {
        width: 100vw;
        height: 35vh;
    }
    .banner {
        background-color: black;
    }
    .fullsize {
        display: flex;
        height: 80vh;
        margin: 2vw;
        justify-content: center;
        align-content: center;
    }
</style>