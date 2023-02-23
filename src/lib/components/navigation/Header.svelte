<script lang="ts">
    import Icon from '@iconify/svelte';
	import HeaderButton from './HeaderButton.svelte';

    let title = "Hi, I'm Simon :)";

    setInterval(() => {
        title = "Hi, I'm Simon ;)";
    }, 1000);
    setInterval(() => {
        title = "Hi, I'm Simon :)";
    }, 3000);
</script>

<div class="flex items-center justify-between box-border p-4 h-24">
    <div class="flex items-center">
        <a href="/" class="header__chevron outline-0" aria-label="home button">
            <Icon icon="material-symbols:chevron-right" height="4rem" />
        </a>
        <span class="text-3xl font-medium">{title}</span>
    </div>
    <div>
        <HeaderButton url="https://blog.simonschwedes.ch" text="Blog" disabled="{true}" />
    </div>
</div>

<style lang="scss">
    @keyframes chevron_animation {
        0% {
            transform: rotate(0deg) translateX(0px);
        }

        30% {
            transform: rotate(10deg) translateX(-2px);
        }

        50% {
            transform: rotate(0deg) translateX(5px);
        }

        60% {
            transform: rotate(-12deg) translateX(3px);
        }

        70% {
            transform: rotate(-7deg) translateX(4px);
        }

        85% {
            transform: rotate(-3deg) rotateX(2px);
        }

        100% {
            transform: rotate(0deg) translateX(0px);
        }
    }

    .header__chevron {
        animation: chevron_animation 4.5s linear infinite;
    }
</style>
