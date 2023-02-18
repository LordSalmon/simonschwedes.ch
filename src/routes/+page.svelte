<script lang="ts">
    import Skills from "$lib/components/main/Skills.svelte";
    import type { PageData } from "./$types";

export let data: PageData;

</script>

<section class="flex flex-col items-start sm:w-full md:w-[80vw] box-border px-8">
    <Skills skills={data.skills} />
</section>