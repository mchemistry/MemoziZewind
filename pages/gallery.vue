<template>
  <v-container class="py-10 px-0 mx-auto gallery-page">
    <client-only>
      <vue-scroll :ops="ops">
        <vue-picture-swipe :items="items"></vue-picture-swipe>
      </vue-scroll>
    </client-only>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://picsum.photos/360/360',
          thumbnail: 'https://picsum.photos/360/360',
          w: 360,
          h: 360,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
        {
          src: 'https://picsum.photos/360/360',
          thumbnail: 'https://picsum.photos/360/360',
          w: 360,
          h: 360,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
        {
          src: 'https://picsum.photos/360/360',
          thumbnail: 'https://picsum.photos/360/360',
          w: 360,
          h: 360,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
        {
          src: 'https://picsum.photos/360/360',
          thumbnail: 'https://picsum.photos/360/360',
          w: 360,
          h: 360,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
        {
          src: 'https://picsum.photos/360/360',
          thumbnail: 'https://picsum.photos/360/360',
          w: 360,
          h: 360,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
        {
          src: 'https://picsum.photos/360/360',
          thumbnail: 'https://picsum.photos/360/360',
          w: 360,
          h: 360,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
        {
          src: 'https://picsum.photos/360/360',
          thumbnail: 'https://picsum.photos/360/360',
          w: 360,
          h: 360,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
        {
          src: 'https://picsum.photos/360/360',
          thumbnail: 'https://picsum.photos/360/360',
          w: 360,
          h: 360,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
        {
          src: 'https://picsum.photos/360/360',
          thumbnail: 'https://picsum.photos/360/360',
          w: 360,
          h: 360,
          alt:
            'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
          title: 'Some Picture',
        },
      ],
      ops: {
        rail: {
          opacity: '1',
          background: 'trasparent',
          border: 'none',
          specifyBorderRadius: '0px',
          size: '6px',
          gutterOfSide: '0px',
          keepShow: false,
        },
        bar: {
          background: 'rgba(240, 248, 255, 0.267)',
          keepShow: true,
          size: '3px',
          minSize: 0,
          specifyBorderRadius: '5px',
        },
        scrollButton: {
          enable: false,
          background: '#cecece',
        },
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 800,
        },
        vuescroll: {
          wheelScrollDuration: 0,
          wheelDirectionReverse: false,
        },
        maxHeight: 1,
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.gallery-page {
  overflow: hidden !important;
  .pswp__bg {
    background-color: #2f2f2f;
  }

  .my-gallery {
    display: flex;
    flex-flow: row wrap;
    figure {
      flex-grow: 1;
      min-width: 20%;
      margin-left: 5px;
      margin-right: 5px;
      a {
        img {
          border-radius: 10px;
          box-shadow: 5px 3px 5px #2f2f2f;
          &:hover {
            transform: scale(1.05);
            box-shadow: 5px 3px 5px #c9c3b2;
            transition: all 0.15s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
