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
          src: 'https://i.ibb.co/Jzmvdh4/1.png',
          thumbnail: 'https://i.ibb.co/FWHMzdj/1.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/L84Mmyr/2.png',
          thumbnail: 'https://i.ibb.co/KypnXPj/2.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/H7hkXXj/3.png',
          thumbnail: 'https://i.ibb.co/fGWp97P/3.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/zRcJgPz/4.png',
          thumbnail: 'https://i.ibb.co/mJhns09/4.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/mTQVfQj/5.png',
          thumbnail: 'https://i.ibb.co/TmpMb1P/5.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/zPkbq0y/6.png',
          thumbnail: 'https://i.ibb.co/56zcfb0/6.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/DDCrxmB/7.png',
          thumbnail: 'https://i.ibb.co/LYsZPK5/7.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/wNyq7bN/8.png',
          thumbnail: 'https://i.ibb.co/SVVC0y7/8.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/nwjP4x4/9.png',
          thumbnail: 'https://i.ibb.co/frbZn9n/9.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/3NQb57L/10.png',
          thumbnail: 'https://i.ibb.co/VtCjVd0/10.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 349,
          src: 'https://i.ibb.co/Scgj3tx/11.png',
          thumbnail: 'https://i.ibb.co/R7m7MMV/11.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 455,
          src: 'https://i.ibb.co/9HnpDkS/12.png',
          thumbnail: 'https://i.ibb.co/yRZPxC7/12.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/B42VMTB/13.png',
          thumbnail: 'https://i.ibb.co/stbM4J7/13.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/5nG91pQ/14.png',
          thumbnail: 'https://i.ibb.co/31QNB4d/14.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 707,
          src: 'https://i.ibb.co/z4dsqHC/15.png',
          thumbnail: 'https://i.ibb.co/8jgyn45/15.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 819,
          src: 'https://i.ibb.co/s5RmcMB/16.png',
          thumbnail: 'https://i.ibb.co/sQMZqP1/16.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 462,
          src: 'https://i.ibb.co/Z1NXZx1/17.png',
          thumbnail: 'https://i.ibb.co/x3khsZM/17.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/t2y2Xbc/18.png',
          thumbnail: 'https://i.ibb.co/267csSN/18.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 465,
          src: 'https://i.ibb.co/Fxxz87H/19.png',
          thumbnail: 'https://i.ibb.co/qJXZ1mp/19.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/T2PqGx7/20.png',
          thumbnail: 'https://i.ibb.co/LR18kmm/20.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 853,
          src: 'https://i.ibb.co/VjXN5Rx/21.png',
          thumbnail: 'https://i.ibb.co/89C1xCR/21.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 725,
          src: 'https://i.ibb.co/W6JFD53/22.png',
          thumbnail: 'https://i.ibb.co/X5Lsx82/22.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
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
