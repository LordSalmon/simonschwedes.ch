<script lang="ts">
    import type { Util } from "$lib/@types";
    import UtilsPreview from "$lib/components/utils/UtilsPreview.svelte";
    import { each } from "svelte/internal";

    const utils: Util[] = [
        {
            title: "PWGEN",
            url: "/utils/pwgen",
            description: "Generate a random password",
        },
    ];

    let search = ""
</script>

<svelte:head>
    <title>Utils</title>
</svelte:head>

<div class="box-border p-6">
    <div class="mb-8">
            <input value="{search}" />
    </div>
    <div class="flex flex-wrap justify-start items-start">
        {#each utils as util}
            <UtilsPreview {util} />
        {/each}
    </div>
</div>
