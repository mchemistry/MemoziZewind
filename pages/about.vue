<template>
  <div id="about" class="d-flex flex-column justify-center align-center">
    <transition name="fade" appear mode="out-in">
      <strong v-if="activeMovieCredits === 1" class="element--text project-name"
        >MEMOZI ZEWIND</strong
      >
      <div
        v-else-if="activeMovieCredits === 2"
        class="about-page__container"
        :style="activeMovieCredits && { display: 'block' }"
      >
        <div v-for="(item, i) in aboutData" :key="i" class="mb-10 text__intro">
          <p class="job element--text">{{ item.job.toUpperCase() }}</p>
          <p v-for="(name, j) in item.names" :key="j" class="name text-body-2">
            {{ name.toUpperCase() }} <br />
          </p>
        </div>
      </div>
      <p v-else class="final-text text-h5">
        MADE WITH <v-icon color="red icon__heart">mdi mdi-heart</v-icon> FOR
        EVERYTHING IN MY MIND !
      </p>
    </transition>
  </div>
</template>

<script>
import { about } from '@/static/data/about.json'
const ABOUT_STATUS = Object.freeze({ LOGO: 1, INFO: 2, MADE: 3 })

export default {
  layout: 'empty',
  data() {
    return {
      activeMovieCredits: ABOUT_STATUS.LOGO,
    }
  },
  computed: {
    aboutData: () => about,
  },
  mounted() {
    setTimeout(() => {
      this.activeMovieCredits = ABOUT_STATUS.INFO
    }, 3000)
    setTimeout(() => {
      this.activeMovieCredits = ABOUT_STATUS.MADE
    }, 23000)
  },
}
</script>

<style lang="scss" scoped>
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
      .name {
        font-size: 16px;
      }
      .job {
        font-size: 24px;
      }
    }
  }
  .final-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .text--icon__heart {
      animation: heart-beats 2s infinite;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .project-name {
    font-size: 40px !important;
  }
  .final-text {
    font-size: 16px !important;
  }
}
</style>
