<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">

<script>
    import {onMount} from "svelte";

    onMount(() => {
    })
</script>
<div class="fullsize center">
    <div class="logincontainer center">
        <div class="center">
            <div class="title">
                SIGN IN
            </div>
            <form class="center" method="POST" action="?/login">
                <div style=" width: 100%; padding-bottom: 1vw">
                    <label class="center" style="width: 100%">
                        <div class="label"> Email </div>
                        <input class="inp" id="email" name="email" type="email" value="" placeholder="Email" required>
                    </label>
                </div>
                <div style="width: 100%">
                    <label class="center" for="password" style="width: 100%">
                        <div class="label"> Password </div>
                        <input class="inp" id="password" type="password" value="" name="password" placeholder="Password" required>
                    </label>
                </div>
                <div class="submits">
                    <button class="submitbutton" id="submit" type="submit">
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<style>
    .title {
        margin-bottom: 3vw;

        color: black;
        font-size: 3vw;
        font-family: "Unica One", sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
        word-wrap: break-word;
    }
    .submitbutton {
        margin-top: 3vw;
    }
    .logincontainer {
        width: 20vw;
        height: 30vw;
        padding: 1vw;
        border-radius: 1vw;
        background-color: white;
        border: #FF4D2D 5px solid;
    }
    .fullsize {
        width: 100vw;
        height: 100vh;
    }
    .center {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .inp {
        width: 100%;
        height: 3vw;
        margin-top: 1vw;
        margin-bottom: 1vw;
        border-radius: 5px;
        border: #FF4D2D 2px solid;

        padding-left: 5%;
    }
    ::placeholder {
        color: black;
        opacity: 0.8;
        font-family: "Open Sans", sans-serif;
    }
    .label {
        width: 100%;

        color: black;
        font-size: 1vw;
        font-family: "Open Sans", sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
        word-wrap: break-word;
    }
    .submitbutton {
        width: 10vw;
        height: 3vw;
        border-radius: 0.75vw;
        border: none;
        background-color: #FF4D2D;
        color: white;

        font-size: 1.5vw;
        font-family: "Unica One", sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
        word-wrap: break-word;
    }

    :global(body) {
        padding:0;
        margin:0;
        overscroll-behavior-y: none;
        overscroll-behavior-x: none;
    }
</style>