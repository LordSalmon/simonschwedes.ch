<script lang="ts">
    export let url: string;
    export let text: string;
    export let target: "_blank" | undefined = undefined;
    export let disabled: boolean = false;

    $: anchorClass = ["px-3 text-xl outline-none", disabled ? "text-gray-500 font-semibold" : ""].join(" ");

</script>

<a 
    href="{disabled ? '' : url}" 
    target="{target}" 
    class="{anchorClass}"
    title="{disabled ? 'This feature is not yet implemented' : ''}"
>
    {text}
</a>