<template>
    <b-container>
        <div class="player-container">
            <video-player
                class="vjs-custom-skin"
                :options="videoSrc"
            ></video-player>
        </div>
    </b-container>
</template>

<script>
//引入video样式
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

//引入hls.js
import 'videojs-contrib-hls.js/src/videojs.hlsjs'
import axios from 'axios'

export default {
    name: 'Replay',
    data() {
        return {
            submitted: false,
            deviceID: 'DID-0922f90a-9fc5-3e01-82e1-1a089f5f0859',
            factoryID: '62cf181d-4cb9-38b4-b14d-dc5beea9f18b',
            start: 1619765280650,
            end: 1619765880650,
            m3u8Filename: '',
            playerOptions: {
                playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                controls: true, //控制条
                preload: 'auto', //视频预加载
                muted: false, //默认情况下将会消除任何音频。
                loop: false, //导致视频一结束就重新开始。
                language: 'en',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                    {
                        type: 'application/x-mpegURL',
                        src: '',
                    },
                ],
                width: document.documentElement.clientWidth,
                notSupportedMessage: 'unsupported', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            },
        }
    },
    mounted() {
        axios
            .get(
                'replay?factoryID=' +
                    this.factoryID +
                    '&deviceID=' +
                    this.deviceID +
                    '&start=' +
                    this.start +
                    '&end=' +
                    this.end
            )
            .then(response => {
                console.log('response: ', response)
                this.m3u8Filename = response.data
            })
    },
    methods: {},
    computed: {
        videoSrc: function() {
            const playerOptions = this.playerOptions
            playerOptions.sources = [
                {
                    type: 'application/x-mpegURL',
                    src: 'static/' + this.m3u8Filename,
                },
            ]
            return playerOptions
        },
    },
}
</script>

<style scoped></style>
