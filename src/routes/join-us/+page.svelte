<script>
    import Menu from "../../lib/Menu.svelte";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">


<div class="banner bannersize">
    <div class="imgwrapper bannersize center">
        <img class="bannerimg" src="">
        <img class="bannerimg" src="">
        <img class="bannerimg" src="">
    </div>
    <div class="title bannersize">
        Join Us!
    </div>
</div>
<div class="fullsize">
    <div class="border">
        <div class="form">
            <img src="./src/imgs/joinusimgs/formtitle.png" style="width: 60%">
            <img src="./src/imgs/joinusimgs/formsubtitle.png" style="width: 60%; margin-bottom: 5vh;">
            <form class="inputs" method="POST" action="?/create">
                <div style="float:left; width: 60%">
                    <label style="width: 100%">
                        <div class="txtinp"> Name* </div>
                        <span style="float:left; margin-right: 8%; width: 42%">
                            <input class="inp" id="fname" type="text" value="" name="fname" style=" width: 100%" required>
                            <label class="sublabel" for="fname">
                                <span>First Name</span>
                            </label>
                        </span>
                        <span style="float:left; margin-right: 8%; width: 42%">
                            <input class="inp" id="lname" type="text" value="" name="lname" style=" width: 100%" required>
                            <label class="sublabel" for="lname">
                                <span>Last Name</span>
                            </label>
                        </span>
                    </label>
                </div>
                <div style="float:left; width: 30%">
                    <label for="major" style="width: 100%">
                        <div class="txtinp"> Major* </div>
                        <input class="inp" id="major" type="text" value="" name="major" style="width: 100%" required>
                    </label>
                </div>
                <div style="float:left; margin-top: 2vh; width: 60%">
                    <label style="width: 100%">
                        <div class="txtinp"> Email* </div>
                        <input class="inp" id="email" type="text" value="" name="email" style="width: 92%" required>
                    </label>
                </div>
                <div style="float:left; width: 30%">
                    <label for="year" style=" margin-top: 2vh; width: 100%">
                        <div class="txtinp"> Graduation Year* </div>
                        <input class="inp" id="year" type="text" value="" name="year"  style="width: 100%" required>
                    </label>
                </div>
                <div id="spacer" style="flex-basis: 100%; height: 2vh"></div>
                <div style="float:left; margin-top: 2vh; width: 60%">
                    <label style="width: 100%">
                        <div class="txtinp"> Phone Number* </div>
                        <input class="inp" id="pnum" type="text" value="" name="pnum" style="width: 92%" required>
                    </label>
                </div>
                <div style="float:left; width: 30%">
                    <label for="refer" style=" margin-top: 2vh; width: 100%">
                        <div class="txtinp"> Referral Type </div>
                        <input class="inp" id="refer" type="text" value="" name="refer"  style="width: 100%">
                    </label>
                </div>
                <div class="prefcontact">
                    <div class="txtinp">
                        Preferred Contact
                    </div>
                    <label class="checkwrap" style="width: 100%">
                        <input id="emailcheck" type="checkbox" name="emailcheck" >
                        <span class="checkbutton"></span>
                        Email Address
                    </label>
                    <label class="checkwrap" style="width: 100%">
                        <input id="textcheck" type="checkbox" name="textcheck">
                        <span class="checkbutton"></span>
                        Text Message
                    </label>
                    <label class="checkwrap" style="width: 100%">
                        <input id="bothcheck" type="checkbox" name="bothcheck">
                        <span class="checkbutton"></span>
                        Both
                    </label>
                </div>
                <div class="interests">
                    <div class="txtinp">
                        Interests
                    </div>
                    <label class="checkwrap" style="width: 100%">
                        <input id="engin" type="checkbox" name="engin" >
                        <span class="checkbutton"></span>
                        Engineering Teams
                    </label>
                    <label class="checkwrap" style="width: 100%">
                        <input id="business" type="checkbox" name="business">
                        <span class="checkbutton"></span>
                        Business Teams
                    </label>
                    <label class="checkwrap" style="width: 100%">
                        <input id="consulting" type="checkbox" name="consulting">
                        <span class="checkbutton"></span>
                        Consulting Subteam
                    </label>
                </div>
                <div class="submits">
                    <button class="submitbutton" id="submit" type="submit">
                        Submit Form
                    </button>
                </div>
            </form>
        </div>
        <div class="campanilewrapper">
            <img src="./src/imgs/joinusimgs/campanile.png" class="img">
        </div>
        <div class="boxtitle">Recruitment Form</div>
    </div>
</div>

<Menu includeMainLogo={false}/>

<style>
    .submitbutton {
        font-size: 2vh;
        font-family: "Unica One", sans-serif;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 5px;
        word-wrap: break-word;

        margin-top: 10vh;
        width: 100%;
        height: 5vh;
        color: white;
        background-color: rgba(255, 39, 0, 0.80);
        border-radius: 1vh;
        border: none;
        filter: drop-shadow(0 0.25vh 0.25vh rgba(0, 0, 0, 0.5));
    }
    .submitbutton:hover {
        background-color: rgba(255, 39, 0, 0.8);
        filter: drop-shadow(0 0.1vh 0.25vh rgba(0, 0, 0, 0.5));
    }
    .sublabel {
        color: rgba(255, 39, 0, 0.80);
        font-size: 1.5vh;
        font-family: "Unica One", sans-serif;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 1px;
        word-wrap: break-word;
        filter: drop-shadow(0 0.25vh 0.25vh rgba(0, 0, 0, 0.5));
    }
    .txtinp {
        color: black;
        font-size: 2vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: 0.25vh;
        word-wrap: break-word;
        filter: drop-shadow(0 0.25vh 0.25vh rgba(0, 0, 0, 0.5));
        margin-bottom: 1vh;
    }
    .inp {
        background-color: #D9D9D9;
        border-radius: 0.75vh;
        border: none;
        height: 3vh;
        padding-left: 1vh;
        font-size: 1.5vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        line-height: 100%;
    }
    .checkwrap:hover input ~ .checkbutton {
        background-color: rgba(255, 39, 0, 0.5);
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
        margin-top: 3vh;
    }
    .submits {
        width: 30%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 3vh;
    }
    .prefcontact {
        width: 30%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 3vh;
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
        position: absolute;
        justify-content: center;
        overflow: hidden;
    }
    .campanilewrapper {
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
    .boxtitle {
        position: absolute;
        background-color: #FF2700;
        color: white;
        font-size: 3vh;
        font-family: "Unica One", cursive;
        font-weight: 400;
        letter-spacing: 1.40px;
        word-wrap: break-word;
        padding-left: 2vh;
        padding-right: 2vh;
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
        background-color: grey;
    }
    .fullsize {
        display: flex;
        height: 80vh;
        margin: 2vw;
        justify-content: center;
        align-content: center;
    }
</style>