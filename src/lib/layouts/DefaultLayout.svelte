<script lang="ts">
    import SocialMedia from "$lib/components/main/SocialMedia.svelte";
import Footer from "$lib/components/navigation/Footer.svelte";
    import Header from "$lib/components/navigation/Header.svelte";
    import "../styles/global.scss";
</script>

<div>
    <div class="default__layout">
        <Header />
        <div class="layout__slot">
            <slot>
                <h1>Default Layout</h1>
            </slot>
        </div>
    
        {#if false}
            <Footer>ich bin ein slot footer</Footer>
        {/if}
    </div>
    <SocialMedia />
</div>

<style lang="scss">
    .default__layout {
        min-height: 100vh;
        background: linear-gradient(to bottom, rgb(5, 2, 23) 0%, rgb(13, 15, 102) 100%);
        color: rgb(234, 233, 233);
        display: grid;
        grid-template-rows: min-content 1fr min-content;
    }
</style>