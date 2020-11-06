<template>
  <div>
    <p class="element--text text-h6 text-center">{{ bigTitle }}</p>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(n, i) in data"
        :key="i"
        :fill-dot="true"
        :icon="n.icon"
        :icon-color="n.color"
        :small="true"
      >
        <v-card id="timeline" class="elevation-2">
          <v-card-title class="headline pink--text text-subtitle-1">
            <v-chip class="mx-2 py-1" color="success" text-color="white" label>
              <!-- <v-avatar left>
                <v-icon>mdi-book-open-page-variant</v-icon>
              </v-avatar> -->
              {{ n.book }} </v-chip
            >{{ n.title }}
          </v-card-title>
          <div class="d-flex justify-center align-center">
            <img v-if="n.hasImg" :src="n.imgSrc" alt="image" />
          </div>
          <v-card-text class="element--text text-subtitle-2">
            {{ n.content }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '28 / 02 / 1995 - How do you feel today',
    },
    content: {
      type: String,
      default:
        'Trước đây mọi người chưa có một nền tảng thống nhất để làm việc. Lúc thì trao đổi qua app nhắn tin, lúc thì lại lên Facebook. Tình trạng trôi tin nhắn, trôi luôn cả công việc thường xuyên xảy ra. Có những lúc mình đã tag 1 số nhân sự trong group chat chẳng hạn, người ta vẫn bị nhỡ thông tin thậm chí thấy nhưng vẫn im lặng bỏ qua. Tôi nhận ra, cách quản lý thủ công hiện tại đang vô tình đẩy các trưởng ...',
    },
    bigTitle: {
      type: String,
      default: 'CHAPTER #1: PAIN & DARKNESS',
    },
    icon: {
      type: String,
      default: 'mdi-book-open-page-variant',
    },
    color: {
      type: String,
      default: 'pink',
    },
    imgSrc: {
      type: String,
      default: 'https://picsum.photos/500/300?image=40',
    },
    hasImg: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      data: [
        {
          title: '12 / 06 / 2019 - RIP NEKO !',
          content:
            'Nó là mèo đực, nó đã đến tuổi, nó đi suốt , chỉ có tối mới về, ăn cơm rồi lại đi. Lần này mẹ tôi đã biết ý xích nó lại trong đoạn thép fi-6. Nó không như mọi ngày, hôm nay có gì đó khác lạ lắm, nó không ăn cơm, mặc dù cơm rất ngon. Đến tối nó vùng vẫy đứt luôn cả đoạn dây thép đo, rồi đi mất..... Cho đến hôm nay đã 1 tuần , tôi k thấy nó về nữa...',
          icon: 'mdi-cat',
          color: 'red',
          hasImg: false,
          book: 'CAT',
          ref: [12, 6, 19],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 80%;
  margin: 0 auto;
}
</style>
