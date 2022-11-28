<script lang="ts">
    import { client, getURLForSource } from "$lib/sanity/client";
    import { getSkills } from "$lib/sanity/queries";

    async function fetchSkills(): Promise<any[]> {
        const skills = await client.fetch(getSkills);
        return skills;
    }
</script>

<section>
    {#await fetchSkills()}
        <p>loading...</p>
    {:then skills}
        <div class="flex items-center">
            {#each skills as skill}
                <div class="p-2">
                    <img
                        class="w-10"
                        src={getURLForSource(skill.image).url()}
                        alt="{skill.title}-Logo"
                    />
                </div>
            {/each}
        </div>
    {/await}
</section>
