<template>
	<Header />
	<div class="text-center">
		<h1>Meditação</h1>
	</div>
	<div class="container">
		<!-- <input type="range" min="0" max="100" step="1" v-model="seekValue" @change="onSeek" />
		<audio
			src="src/assets/musica/agua.mp3"
			ref="audioPlayer"
			@timeupdate="onPlaying"
			crossorigin="anonymous"
		>
			Your browser does not support the
			<code>audio</code> element.
		</audio>
		<p>{{ currentTime }}</p>
		<div>
			<button v-on:click="play()">play</button>
			<button @click="pause">pause</button>
			<button @click="stop">stop</button>
			<button @click="setSpeed(0.5)">0.5x</button>
			<button @click="setSpeed(1)">1x</button>
			<button @click="setSpeed(1.5)">1.5x</button>
			<button @click="setSpeed(2)">2x</button>
		</div>-->


		<audio controls>
			<source src="horse.ogg" type="audio/ogg" />
			<source src="../assets/musica/t-rex-roar.mp3" type="audio/mpeg" />Your browser does not support the audio element.
		</audio>
		
		
		<div class="container">
      <div class="card">
        <div class="card-body text-center">

          <p>Built with <a target="_blank" href="https://mdbootstrap.com/docs/standard/">Material Design for Bootstrap</a> - free and powerful Bootstrap UI KIT</p>

          <a class="btn btn-primary me-2" href="https://mdbootstrap.com/docs/standard/getting-started/installation/" target="_blank" role="button">Download MDB UI KIT <i class="fas fa-download ms-2"></i></a>
          <a class="btn btn-danger me-2" target="_blank" href="https://mdbootstrap.com/docs/standard/" role="button">Learn more</a>
          <a class="btn btn-success me-2" target="_blank" href="https://mdbootstrap.com/docs/standard/getting-started/" role="button">Tutorials</a>
          <a class="btn btn-dark me-2" target="_blank" href="https://github.com/mdbootstrap/mdb-ui-kit" role="button">GitHub <i class="fab fa-github ms-2"></i></a>
			<audio controls>
			<source src="horse.ogg" type="audio/ogg" />
			<source src="../assets/musica/agua.mp3" type="audio/mpeg" />Your browser does not support the audio element.
		</audio>

        </div>
      </div>
    </div>

	</div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
	name: "Meditcao",
	components: {
		Header
	},
	data() {
		return {
			currentTime: 0,
			seekValue: 0
		};
	},
	methods: {
		play() {
			this.$refs.audioPlayer.play();
		},
		pause() {
			this.$refs.audioPlayer.pause();
		},
		stop() {
			const { audioPlayer } = this.$refs;
			audioPlayer.pause();
			audioPlayer.currentTime = 0;
		},
		setSpeed(speed) {
			this.$refs.audioPlayer.playbackRate = speed;
		},
		onPlaying() {
			const { audioPlayer } = this.$refs;
			if (!audioPlayer) {
				return;
			}
			this.currentTime = audioPlayer.currentTime;
			this.seekValue =
					(audioPlayer.currentTime / audioPlayer.duration) * 100;
		},
		onSeek() {
			const { audioPlayer } = this.$refs;
			const seekto = audioPlayer.duration * (this.seekValue / 100);
			audioPlayer.currentTime = seekto;
		}
	}
};
</script>
