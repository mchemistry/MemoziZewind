<template>
  <client-only>
    <vue-picture-swipe
      :items="[
        {
          src: 'https://picsum.photos/200/300',
          thumbnail: 'https://picsum.photos/200/300',
          w: 200,
          h: 300,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
        {
          src: 'https://picsum.photos/200/300',
          thumbnail: 'https://picsum.photos/200/300',
          w: 200,
          h: 300,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
      ]"
      :options="options"
    />
  </client-only>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      required: false,
      default() {
        return {
          bgOpacity: 0.95,
          shareEl: true,
          zoomEl: true,
        }
      },
    },
  },
}
</script>
