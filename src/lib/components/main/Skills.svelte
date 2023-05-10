<script lang="ts">
    import { getURLForSource } from "$lib/sanity/client";
    import Title from "$lib/components/styling/Title.svelte";
    import type { Skill } from "$lib/@types";

    export let skills: Skill[];
</script>

<section>
    <Title>✌🏻 Cool Technologies:</Title>
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
                    width="40"
                    height="40"
                />
            </a>
        {/each}
    </div>
</section>
