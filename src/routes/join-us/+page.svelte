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
            <img src="./src/imgs/joinusimgs/formsubtitle.png" style="width: 60%; margin-bottom: 5vh;">
            <form class="inputs">
                <div style="float:left; width: 60%">
                    <label style="width: 100%">
                        Name*
                        <br>
                        <div style="float:left; margin-right: 8%; width: 42%">
                            <input id="fname" type="text" value="" name="fname" style=" width: 100%">
                            <br>
                            <label for="fname">
                                <span>First</span>
                            </label>
                        </div>
                        <div style="float:left; margin-right: 8%; width: 42%">
                            <input id="lname" type="text" value="" name="lname" style=" width: 100%">
                            <br>
                            <label for="lname">
                                <span>Last</span>
                            </label>
                        </div>
                    </label>
                </div>
                <div style="float:left; width: 30%">
                    <label for="major" style="width: 100%">
                        Major*
                        <br>
                        <input id="major" type="text" value="" name="major" style="width: 100%">
                    </label>
                </div>
                <div style="float:left; margin-top: 2vh; width: 60%">
                    <label style="width: 100%">
                        Email*
                        <br>
                            <input id="email" type="text" value="" name="email" style="width: 92%">
                            <br>
                    </label>
                </div>
                <div style="float:left; width: 30%">
                    <label for="year" style=" margin-top: 2vh; width: 100%">
                        Year*
                        <br>
                        <input id="year" type="text" value="" name="year"  style="width: 100%">
                    </label>
                </div>
                <div style="float:left; margin-top: 2vh; width: 60%">
                    <label style="width: 100%">
                        Phone Number*
                        <br>
                        <input id="pnum" type="text" value="" name="pnum" style="width: 92%">
                        <br>
                    </label>
                </div>
                <div style="float:left; width: 30%">
                    <label for="refer" style=" margin-top: 2vh; width: 100%">
                        Referral Type
                        <br>
                        <input id="refer" type="text" value="" name="refer"  style="width: 100%">
                    </label>
                </div>
                <div class="prefcontact">
                    <div>

                    </div>
                    <label class="checkwrap" style="width: 100%">
                        <input id="emailcheck" type="checkbox" value="" name="emailcheck" >
                        <span class="checkbutton"></span>
                        Email Address
                    </label>
                    <label class="checkwrap" style="width: 100%">
                        <input id="textcheck" type="checkbox" value="" name="textcheck">
                        <span class="checkbutton"></span>
                        Text Message
                    </label>
                    <label class="checkwrap" style="width: 100%">
                        <input id="bothcheck" type="checkbox" value="" name="bothcheck">
                        <span class="checkbutton"></span>
                        Both
                    </label>
                </div>
                <div class="interests">
                    <div>

                    </div>
                    <label class="checkwrap" style="width: 100%">
                        <input id="engin" type="checkbox" value="" name="emailcheck" >
                        <span class="checkbutton"></span>
                        Engineering Teams
                    </label>
                    <label class="checkwrap" style="width: 100%">
                        <input id="business" type="checkbox" value="" name="textcheck">
                        <span class="checkbutton"></span>
                        Business Teams
                    </label>
                    <label class="checkwrap" style="width: 100%">
                        <input id="consulting" type="checkbox" value="" name="bothcheck">
                        <span class="checkbutton"></span>
                        Consulting Subteam
                    </label>
                </div>
                <div class="submits">

                </div>
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
    .checkwrap:hover input ~ .checkbutton {
        background-color: rgba(255, 39, 0, 0.80);
    }

    .checkwrap input:active ~ .checkbutton {
        background-color: #FF2700;
    }

    .checkwrap input:checked ~ .checkbutton {
        background-color: #FF2700;
    }
    .checkbutton {
        position: absolute;
        top:0;
        left:0;
        height: 100%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: #D9D9D9;
    }
    input[type=checkbox] {
        visibility: hidden;
    }
    .checkwrap {
        padding-left: 1vw;
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 1vh;
        margin-bottom: 1vh;
        cursor: pointer;
    }
    .interests {
        width: 30%;
        display: flex;
        flex-wrap: wrap;
    }
    .prefcontact {
        width: 30%;
        display: flex;
        flex-wrap: wrap;
    }

    .inputs {
        display: flex;
        flex-wrap: wrap;
    }
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