<template>
    <footer>
        <container>
            <a href="" id="dark-mode-link" @click="toggleDarkMode">
                <em class="fa" :class="darkMode ? 'fa-sun-o' : 'fa-moon-o'"></em>
                Turn {{ darkMode ? 'on' : 'off' }} the lights
            </a>
        </container>
    </footer>
</template>