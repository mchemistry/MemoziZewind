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
          src: 'https://i.ibb.co/51xmS55/1.png',
          thumbnail: 'https://i.ibb.co/3TYvN53/1.png',
          alt: 'Image Of My Special Girl',
          title: 'You 💖',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/wBfsTFV/2.png',
          thumbnail: 'https://i.ibb.co/Yk17qpH/2.png',
          alt: 'Image Of My Special Girl',
          title: 'Sooo beautiful ❤️',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/cCmxJCX/3.png',
          thumbnail: 'https://i.ibb.co/1RCFKww/3.png',
          alt: 'Image Of My Special Girl',
          title: 'You - like a fall 💗',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/cXnMrPk/4.png',
          thumbnail: 'https://i.ibb.co/59FDkRJ/4.png',
          alt: 'Image Of My Special Girl',
          title: 'You - like a blackhole ⚫',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/C7CdnFg/5.png',
          thumbnail: 'https://i.ibb.co/nDgVFTz/5.png',
          alt: 'Image Of My Special Girl',
          title: 'You - like a sunshine ☀️',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/KbRcTR7/6.png',
          thumbnail: 'https://i.ibb.co/98bDZbb/6.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/qMYC875/7.png',
          thumbnail: 'https://i.ibb.co/RT2Ghhy/7.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/9Wkhy1D/8.png',
          thumbnail: 'https://i.ibb.co/JkJnt9C/8.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/QHfzrdg/9.png',
          thumbnail: 'https://i.ibb.co/wLT0R1L/9.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 960,
          src: 'https://i.ibb.co/WxtZ5fQ/10.png',
          thumbnail: 'https://i.ibb.co/Ybt64tp/10.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 349,
          src: 'https://i.ibb.co/sjJyQ7y/11.png',
          thumbnail: 'https://i.ibb.co/64rJvBL/11.png',
          alt: 'Image Of My Special Girl',
          title: 'You - on top 3143 👆 - STRONGER 💪',
        },
        {
          w: 640,
          h: 455,
          src: 'https://i.ibb.co/r4Ny764/12.png',
          thumbnail: 'https://i.ibb.co/YcgKzph/12.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/7XQkLnj/13.png',
          thumbnail: 'https://i.ibb.co/KNtFdvF/13.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/q5G8m92/14.png',
          thumbnail: 'https://i.ibb.co/rtVYrcW/14.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 707,
          src: 'https://i.ibb.co/6sJd81C/15.png',
          thumbnail: 'https://i.ibb.co/9tjN8cM/15.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 819,
          src: 'https://i.ibb.co/qyGHn2Z/16.png',
          thumbnail: 'https://i.ibb.co/jRcQ7x5/16.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 462,
          src: 'https://i.ibb.co/Trp42Tq/17.png',
          thumbnail: 'https://i.ibb.co/7KY03Z7/17.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/LRmrt5j/18.png',
          thumbnail: 'https://i.ibb.co/7yvMXn3/18.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 465,
          src: 'https://i.ibb.co/LZ7vqHC/19.png',
          thumbnail: 'https://i.ibb.co/nz9jYJG/19.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/6RCKkYX/20.png',
          thumbnail: 'https://i.ibb.co/f2ZsDrS/20.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 853,
          src: 'https://i.ibb.co/vP78Fd0/21.png',
          thumbnail: 'https://i.ibb.co/fqMyqG9/21.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 725,
          src: 'https://i.ibb.co/c2jfBn6/22.png',
          thumbnail: 'https://i.ibb.co/s3HT0kx/22.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 423,
          src: 'https://i.ibb.co/4fVpnKv/23.png',
          thumbnail: 'https://i.ibb.co/2nqCmhy/23.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/jJvSCNk/24.png',
          thumbnail: 'https://i.ibb.co/LJB3K04/24.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 510,
          src: 'https://i.ibb.co/Z1mfBr6/25.png',
          thumbnail: 'https://i.ibb.co/g4QFWC2/25.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/W0hKTDH/26.png',
          thumbnail: 'https://i.ibb.co/VTFVwgw/26.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/SNNj4Gc/27.png',
          thumbnail: 'https://i.ibb.co/mhVzNs3/27.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 853,
          src: 'https://i.ibb.co/ngk56T5/28.png',
          thumbnail: 'https://i.ibb.co/dtf3kmb/28.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/QHHSyYJ/29.png',
          thumbnail: 'https://i.ibb.co/hmyYNKT/29.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/prKMsds/30.png',
          thumbnail: 'https://i.ibb.co/wrTdY8F/30.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 649,
          src: 'https://i.ibb.co/M5dyrSK/31.png',
          thumbnail: 'https://i.ibb.co/zNcxfhw/31.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 426,
          src: 'https://i.ibb.co/f1H1PVL/32.png',
          thumbnail: 'https://i.ibb.co/gyQdQMj/32.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 442,
          src: 'https://i.ibb.co/4gC2BcS/33.png',
          thumbnail: 'https://i.ibb.co/jht9fpG/33.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 427,
          src: 'https://i.ibb.co/PNxzKRS/34.png',
          thumbnail: 'https://i.ibb.co/c8zhfpC/34.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/hZMZGQC/35.png',
          thumbnail: 'https://i.ibb.co/WgKdx2D/35.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/yB89Vmq/36.png',
          thumbnail: 'https://i.ibb.co/XDPwkmx/36.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 427,
          src: 'https://i.ibb.co/JxXn7Lr/37.png',
          thumbnail: 'https://i.ibb.co/R7x3Gnm/37.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 640,
          src: 'https://i.ibb.co/ssTPTWv/38.png',
          thumbnail: 'https://i.ibb.co/Cnfx45J/38.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 805,
          src: 'https://i.ibb.co/Xk22dkh/39.png',
          thumbnail: 'https://i.ibb.co/bdDCfcF/39.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 619,
          src: 'https://i.ibb.co/zNfw0hg/40.png',
          thumbnail: 'https://i.ibb.co/ZKmg8z2/40.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 853,
          src: 'https://i.ibb.co/zJHfGTz/41.png',
          thumbnail: 'https://i.ibb.co/RyFbT5v/41.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/Rp8jJ0W/42.png',
          thumbnail: 'https://i.ibb.co/jDcNPtP/42.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 480,
          src: 'https://i.ibb.co/cJn177r/43.png',
          thumbnail: 'https://i.ibb.co/xCLVRHs/43.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 415,
          src: 'https://i.ibb.co/fSTwHBM/44.png',
          thumbnail: 'https://i.ibb.co/4YtRs6g/44.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 415,
          src: 'https://i.ibb.co/YXLYRfB/45.png',
          thumbnail: 'https://i.ibb.co/WKJGW0M/45.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 461,
          src: 'https://i.ibb.co/BnRzN8s/46.png',
          thumbnail: 'https://i.ibb.co/Qfs57B5/46.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 463,
          src: 'https://i.ibb.co/n3rDhq0/47.png',
          thumbnail: 'https://i.ibb.co/XWV50gG/47.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 437,
          src: 'https://i.ibb.co/5syxRJz/48.png',
          thumbnail: 'https://i.ibb.co/n1jpzzM/48.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 514,
          src: 'https://i.ibb.co/sCVZhff/49.png',
          thumbnail: 'https://i.ibb.co/2kkyqQ4/49.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 639,
          h: 443,
          src: 'https://i.ibb.co/JFBk6Wy/50.png',
          thumbnail: 'https://i.ibb.co/ZVkV7rj/50.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 522,
          src: 'https://i.ibb.co/hBMN2Cj/51.png',
          thumbnail: 'https://i.ibb.co/B4KNVmT/51.png',
          alt: 'Image Of My Special Girl',
          title: 'Made with heart <3',
        },
        {
          w: 640,
          h: 427,
          src: 'https://i.ibb.co/8MJZM1N/52.png',
          thumbnail: 'https://i.ibb.co/SdG4SXS/52.png',
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
