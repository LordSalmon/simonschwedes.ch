<script lang="ts">
    import type { Util } from "$lib/@types";

    export let util: Util;
</script>

<a
    class="bg-slate-400 bg-opacity-50 rounded-lg box-border p-4 shadow-sm transition-all duration-200 hover:bg-opacity-70 cursor-pointer"
    href={util.url}
>
    <div>
        <span class="text-lg">{util.title}</span>
    </div>
    <div>
        <span>{util.description}</span>
    </div>
</a>
