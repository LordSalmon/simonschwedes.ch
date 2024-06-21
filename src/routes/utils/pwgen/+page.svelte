<script lang="ts">
    let passwordField;
    let password = "";
    let passwordLength = 60;
    let useNumbers = true;
    let useUppercase = true;
    let useSpecialCharacters = true;

    function generatePassword() {
        const numbers = "0123456789";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = uppercase.toLowerCase();
        const specialCharacters = "!@#$%&()_-+={}[];:<>.?|~";
        const characters = [
            useNumbers ? numbers : "",
            useUppercase ? uppercase : "",
            useSpecialCharacters ? specialCharacters : "",
            lowercase,
        ].join("");
        password = Array(passwordLength)
            .fill(characters)
            .map((x) => x[Math.floor(Math.random() * x.length)])
            .join("");
    }

    generatePassword();

    function setPassword(e: Event) {
        password = (e.target as HTMLInputElement).value;
    }
</script>

<div class="box-border p-6 flex justify-center items-start">
    <div>
        <div
            class="border-2 rounded border-white box-border py-2 px-4 bg-gray-900 bg-opacity-50"
        >
            <input
                class="bg-transparent outline-none border-0 w-full"
                bind:this={passwordField}
                bind:value={password}
                on:input={setPassword}
            />
        </div>
        <span>{password}</span>
    </div>
</div>
