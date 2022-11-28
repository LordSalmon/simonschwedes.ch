<script lang="ts">
    import type { Link } from "$lib/@types";
    import Icon from "@iconify/svelte";
    import Title from "../styling/Title.svelte";

    const socialMedia: Link[] = [
        {
            name: "GitHub",
            url: "https://github.com/LordSalmon",
            icon: "mdi:github",
        },
        {
            name: "Twitter",
            url: "https://twitter.com/LachsLord",
            icon: "mdi:twitter",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/simon-schwedes-2367561b3/",
            icon: "mdi:linkedin",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/simon.schwedes/",
            icon: "mdi:instagram",
        },
        {
            name: "Email",
            url: "mailto:simon@schwedes.eu",
            icon: "mdi:email",
        },
    ];
</script>

<section class="fixed bottom-0 right-0 h-full w-full flex flex-col items-end justify-end pointer-events-none text-white">
    {#each socialMedia as { name, url, icon }}
        <a 
            href={url} 
            target="_blank"
            rel="noopener noreferrer"
            class="pointer-events-auto text-3xl box-border px-8 py-[0.75rem] last:pb-8 hover:-rotate-3 transition-all duration-100 hover:scale-[1.1] text-gray-300 hover:text-white"
        >
            <Icon icon={icon} title="{name}" />
        </a>
    {/each}
</section>
