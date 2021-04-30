<template>
    <div>
        <component v-bind:is="component"></component>
        <b-button
            v-on:click="component = 'live-streaming'"
            class="option-button"
            >Live</b-button
        >
        <b-button v-on:click="component = 'replay'" class="option-button"
            >Replay</b-button
        >
    </div>
</template>

<script>
import LiveStreaming from '@/components/LiveStreaming'
import Replay from '@/components/Replay'

export default {
    name: 'LandingPage',
    components: {
        'live-streaming': LiveStreaming,
        replay: Replay,
    },
    data() {
        return {
            component: 'live-streaming',
        }
    },
}
</script>

<style scoped>
.option-button {
    margin: 10px;
    width: 100px;
    display: table-cell;
    vertical-align: middle;
    text-transform: uppercase;
}
</style>
