<template>
  <div class="card"></div>
</template>

<script>
export default {}
</script>

<style scoped>
@keyframes flipped {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}
.card {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  z-index: 1;
  background: #161122;
  box-shadow: 6px 6px 6px #0f1a24, -4px -4px 4px #1f2327;
  padding: 2px;
  background-image: url('https://picsum.photos/200/300');
}
.card:hover {
  animation: flipped 1s forwards;
  transform-style: preserve-3d;
}
</style>
