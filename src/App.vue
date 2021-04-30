<template>
    <div id="app">
        <b-container>
            <img alt="ABMatrix" src="./assets/logo.svg" class="logo" />
        </b-container>
        <b-container>
            <landing-page></landing-page>
        </b-container>
    </div>
</template>

<script>
import LandingPage from '@/components/LandingPage'

export default {
    name: 'App',
    components: {
        'landing-page': LandingPage,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.logo {
    position: absolute;
    top: 10px;
    left: 10px;
    margin-bottom: 50px;
}
</style>
