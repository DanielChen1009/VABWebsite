<script>
    export let data;
    console.log(data.entries);

    function checkPrefContact(entry) {
        if (entry["data"]["bothcheck"] || (entry["data"]["emailcheck"] && entry["data"]["textcheck"])) {
            return "Both";
        }
        if (entry["data"]["emailcheck"]) {
            return "Email";
        }
        if (entry["data"]["textcheck"]) {
            return "Text";
        }
    }

    function checkTeamInterest(entry) {
        let ret = [];
        if (entry["data"]["engin"]) {
            ret.push("Engineering");
        }
        if (entry["data"]["business"]) {
            ret.push("Business");
        }
        if (entry["data"]["consulting"]) {
            ret.push("Consulting");
        }
        return ret;
    }
</script>

<div class="center fullsize">
    <div class="table-wrapper">
        <div class="table-scroll">
            <table class="table">
                <thead>
                <tr>
                    <th class="header" style="border-left: none">Name</th> <th class="header">Major</th>
                    <th class="header">Year</th> <th class="header">Email</th>
                    <th class="header">Phone Number</th> <th class="header">Preferred Contact</th>
                    <th class="header">Team Interest</th> <th class="header"  style="border-right: none">Referral</th>
                </tr>
                </thead>
                <tbody>
                {#each data.entries as entry}
                    <tr>
                        <td class="cell" style="border-left: none">
                            {entry["data"]["fname"]} {entry["data"]["lname"]}
                        </td>
                        <td class="cell">
                            {entry["data"]["major"]}
                        </td>
                        <td class="cell">
                            {entry["data"]["year"]}
                        </td>
                        <td class="cell">
                            {entry["data"]["email"]}
                        </td>
                        <td class="cell">
                            {entry["data"]["pnum"]}
                        </td>
                        <td class="cell">
                            {checkPrefContact(entry)}
                        </td>
                        <td class="cell">
                            {#each checkTeamInterest(entry) as tint}
                                <div style="margin-bottom: 0.25vh">{tint}</div>
                            {/each}
                        </td>
                        <td class="cell" style="border-right: none">
                            {entry["data"]["refer"]}
                        </td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    .header {
        padding: 1vw;
        border: #FF4D2D 4px solid;

        color: black;
        font-size: 1.5vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 800;
        line-height: 100%;
        letter-spacing: 1px;
        word-wrap: break-word;
        margin-bottom: 1vh;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fullsize {
        width: 100vw;
        height: 100vh;
    }
    .table-wrapper {
        position:relative;
        border: #FF4D2D 10px solid;
        border-radius: 1vh;;
    }
    .table-scroll {
        height: 80vh;
        width: 80vw;
        overflow:auto;
    }
    .cell {
        border: #FF4D2D 2px solid;
        padding: 1vw;

        color: black;
        font-size: 1.5vh;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: 0.25vh;
        word-wrap: break-word;
        margin-bottom: 1vh;
    }
    .table {
        border: #FF4D2D 1px solid;
        border-collapse: collapse;
        width: 100%;
    }

    :global(body) {
        padding:0;
        margin:0;
        overscroll-behavior-y: none;
        overscroll-behavior-x: none;
    }
</style>