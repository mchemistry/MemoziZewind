<template>
  <div id="about" class="d-flex flex-column justify-center align-center">
    <transition name="fade" appear mode="out-in">
      <strong v-if="!activeMovieCredits" class="element--text project-name"
        >MEMOZI ZEWIND</strong
      >
      <div
        v-else
        class="about-page__container"
        :style="activeMovieCredits && { display: 'block' }"
      >
        <div v-for="(item, i) in aboutData" :key="i" class="mb-10 text__intro">
          <p class="job element--text">{{ item.job.toUpperCase() }}</p>
          <p v-for="(name, j) in item.names" :key="j" class="name text-body-2">
            {{ name.toUpperCase() }} <br />
          </p>
        </div>
        <p class="text-intro">
          MADE WITH <v-icon color="red icon__heart">mdi mdi-heart</v-icon> FOR
          EVERYTHING IN MY MIND !
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { about } from '@/static/data/about.json'
export default {
  layout: 'empty',
  data() {
    return {
      activeMovieCredits: null,
    }
  },
  computed: {
    aboutData: () => about,
  },
  mounted() {
    setTimeout(() => {
      this.activeMovieCredits = true
    }, 3000)
  },
}
</script>

<style lang="scss" scoped>
@keyframes credits {
  0% {
    top: calc(80vh + 60px);
  }
  100% {
    top: -500%;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
#about {
  .project-name {
    font-size: 80px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .about-page__container {
    display: none;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    height: 90vh;
    width: 90vw;
    overflow: hidden;
    .text__intro {
      position: relative;
      transition-delay: 0;
      animation: 60s credits linear infinite;
      .icon__heart {
        position: relative;
        animation: 1.5s blink linear infinite;
      }
    }
    .name {
      font-size: 16px;
    }
    .job {
      font-size: 24px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .project-name {
    font-size: 40px;
  }
}
</style>
