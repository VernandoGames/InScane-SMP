<template class="command">
    <div class="container">
        <slot />
        <h2>{{ Name }}</h2>
        <p>{{ description }}</p>
        <p class="lowercase"><strong>Usage:</strong><code>/{{ Name }} {{ args }}</code></P>
    </div>
</template>

<style>
    .container {
        margin: 0 auto;
        max-width: 1120px;
    }
    .lowercase {
        text-transform: lowercase;
    }
</style>

<script>
export default {
    Name: 'command name',
    description: '',
    args: '',
    props: [ 'Name', 'description', 'args' ]
 };
</script>