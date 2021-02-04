<template>
    <div id="app">
        <app-navbar/>
        
        <app-footer :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />

        <transition name="fade-slide-vertical">
            <snackbar action="Reload" @click="refresh" v-if="updateExists">An updated version of the site is available.</snackbar>
        </transition>
    </div>
</template>

<script>
    console.log("Running app.vue")
</script>