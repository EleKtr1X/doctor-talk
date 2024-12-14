<button {... $$restProps}>
    <slot />
</button>

<style>
    button {
        padding: 1em 1.5em;
        border: none;
        border-radius: 0.25em;
        background-color: car(--accent-colour);
        font-size: 1em;
    }
</style>