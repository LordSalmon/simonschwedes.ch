import { client } from "$lib/sanity/client";
import { getSkills } from "$lib/sanity/queries";

export async function load() {
    return {
        skills: await client.fetch(getSkills)
    }
}