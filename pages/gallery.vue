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
          src: 'https://i.ibb.co/wSLfFfv/1.png',
          thumbnail: 'https://i.ibb.co/51Cx4RT/1.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/dDkmsx2/2.png',
          thumbnail: 'https://i.ibb.co/8sGh4pn/2.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/9bVhVy8/3.png',
          thumbnail: 'https://i.ibb.co/zXT0zmH/3.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/jZv4Nxd/4.png',
          thumbnail: 'https://i.ibb.co/rHkzWG8/4.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/nb0H1JR/5.png',
          thumbnail: 'https://i.ibb.co/RzYFkjC/5.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/HTCX76w/6.png',
          thumbnail: 'https://i.ibb.co/Jk471kf/6.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/svhdzm1/7.png',
          thumbnail: 'https://i.ibb.co/mqyg2Z2/7.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/XS2MVVT/8.png',
          thumbnail: 'https://i.ibb.co/LCVT0jM/8.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/YjXgzJH/9.png',
          thumbnail: 'https://i.ibb.co/yQNxZVM/9.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/9ZbM56w/10.png',
          thumbnail: 'https://i.ibb.co/7brCsm2/10.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 349,
          src: 'https://i.ibb.co/nLG6YZx/11.png',
          thumbnail: 'https://i.ibb.co/MZ3G279/11.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 455,
          src: 'https://i.ibb.co/9wyvLsP/12.png',
          thumbnail: 'https://i.ibb.co/fXQJ3js/12.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/b2YwQ3D/13.png',
          thumbnail: 'https://i.ibb.co/YjCdnsq/13.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/z69PhxV/14.png',
          thumbnail: 'https://i.ibb.co/ft2gnpk/14.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 707,
          src: 'https://i.ibb.co/1qffrYM/15.png',
          thumbnail: 'https://i.ibb.co/TgynSjh/15.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 819,
          src: 'https://i.ibb.co/sw2mNt0/16.png',
          thumbnail: 'https://i.ibb.co/Q9yksNn/16.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 462,
          src: 'https://i.ibb.co/nPGCd00/17.png',
          thumbnail: 'https://i.ibb.co/T8PPRTV/17.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/6JjBF7y/18.png',
          thumbnail: 'https://i.ibb.co/BjMqNw0/18.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 465,
          src: 'https://i.ibb.co/FxCG5DP/19.png',
          thumbnail: 'https://i.ibb.co/BZ9X91T/19.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/zhtHBpx/20.png',
          thumbnail: 'https://i.ibb.co/WHwckNg/20.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 853,
          src: 'https://i.ibb.co/FVsq1Fj/21.png',
          thumbnail: 'https://i.ibb.co/RH9hK12/21.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 725,
          src: 'https://i.ibb.co/tcypkMd/22.png',
          thumbnail: 'https://i.ibb.co/1bpN3M0/22.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 423,
          src: 'https://i.ibb.co/1MQ8Kgp/23.png',
          thumbnail: 'https://i.ibb.co/bL4Rbmw/23.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/t83Xpp8/24.png',
          thumbnail: 'https://i.ibb.co/VVFHSpJ/24.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 510,
          src: 'https://i.ibb.co/KLtbTqF/25.png',
          thumbnail: 'https://i.ibb.co/CHzLCGS/25.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/kH3GDXr/26.png',
          thumbnail: 'https://i.ibb.co/k4vbKKG/26.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/C8M5qRM/27.png',
          thumbnail: 'https://i.ibb.co/1ZJ9DVp/27.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 853,
          src: 'https://i.ibb.co/7Q3GmCf/28.png',
          thumbnail: 'https://i.ibb.co/CwL3y0m/28.png',
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
