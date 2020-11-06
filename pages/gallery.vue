<template>
  <v-container class="py-10 px-0 mx-auto gallery-page">
    <client-only>
      <vue-picture-swipe
        :items="items"
        class="gallery"
        :options="ops"
      ></vue-picture-swipe>
    </client-only>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          w: 640,
          h: 960,
          src: 'https://picsum.photos/300',
          thumbnail: 'https://picsum.photos/300',
          alt: 'Image',
          title: 'You 💖',
        },
      ],
      ops: {
        history: true,
        closeOnScroll: false,
        bgOpacity: 0.95,
        preload: [1, 3],
      },
    }
  },
}
</script>
<style scoped>
.gallery-page {
  overflow: hidden !important;
  margin: 0 auto;
  display: flex;
  justify-items: center;
  justify-content: center;
}
>>> .my-gallery {
  display: flex !important;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin: 0 auto !important;
}
>>> figure {
  flex-grow: 1;
  min-width: 20%;
  margin-left: 5px;
  margin-right: 5px;
  display: flex !important;
  justify-content: center;
  align-content: center;
}
>>> a {
  width: 360px;
  height: 360px;
  margin-top: 12px;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
}
>>> img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  display: block;
  width: 360px;
  height: auto;
}
>>> img:hover {
  transform: scale(1.1);
  transition: all 0.5s ease-in-out;
  box-sizing: border-box;
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
>>> .pswp__img {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
>>> .pswp__img:hover {
  transform: none !important;
}
</style>
