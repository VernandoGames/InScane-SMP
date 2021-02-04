<template class="rule">
    <div class="container">
        <slot />
        <h2><strong>#{{ num }}</strong> :</h2><p> {{ context }}</p>
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
    num: 1,
    context: '',
    props: [ 'num', 'context' ]
 };
</script>