<template>
  <div>
    <p class="element--text text-h6 text-center">{{ bigTitle }}</p>
    <v-timeline :dense="true">
      <v-timeline-item
        v-for="n in 100"
        :key="n"
        :fill-dot="true"
        :icon="icon"
        :icon-color="color"
        :right="true"
        :small="true"
      >
        <v-card id="timeline" class="elevation-2">
          <v-card-title class="headline pink--text text-subtitle-1">
            {{ title }}
          </v-card-title>
          <v-card-text class="element--text text-subtitle-2">
            {{ content }}
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
      default: 'CHAPTER #1: WHY ?',
    },
    icon: {
      type: String,
      default: 'mdi-heart',
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
}
</script>

<style lang="scss" scoped>
img {
  max-height: 150px;
}
</style>
