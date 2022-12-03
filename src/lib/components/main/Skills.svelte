<script lang="ts">
    import { client, getURLForSource } from "$lib/sanity/client";
    import { getSkills } from "$lib/sanity/queries";
    import Title from "$lib/components/styling/Title.svelte";

    async function fetchSkills(): Promise<any[]> {
        const skills = await client.fetch(getSkills);
        return skills;
    }
</script>

<section>
    <Title>✌🏻 Cool Technologies:</Title>
    {#await fetchSkills()}
        <p>loading...</p>
    {:then skills}
        <div class="grid grid-cols-8">
            {#each skills as skill}
                <a
                    class="p-2 grid place-items-center"
                    title={skill.title}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        class="w-10"
                        src={getURLForSource(skill.image).url()}
                        alt="{skill.title}-Logo"
                    />
                </a>
            {/each}
        </div>
    {/await}
</section>
