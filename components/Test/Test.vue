<template>
  <div>
    <input v-model="value" type="range" min="0" max="1000" />
    <span class="mt-4">Value is {{ value }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
$input-slider-height: 18px;
$slider-width-number: 240;
$slider-width: #{$slider-width-number}px;
$slider-height: 2px;
$background-slider: #c7c7c7;
$background-filled-slider: #e33d44;
$thumb-width: 10px;
$thumb-height: 10px;
$thumb-radius: 5px;
$thumb-background: #fff;
$thumb-border: 1px solid #777;
$shadow-size: -8px;
$fit-thumb-in-slider: -4px;
$loading-progress-width: 50%;
$loading-progress-height: 2px;
$loading-progress-background-color: #fa9a9f;
$loading-progress-fit: 0;

@function makelongshadow($color, $size) {
  $val: 5px 0 0 $size $color;

  @for $i from 6 through $slider-width-number {
    $val: #{$val}, #{$i}px 0 0 $size #{$color};
  }

  @return $val;
}

div {
  height: 100px;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input[type='range'] {
  align-items: center;
  appearance: none;
  background: none;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  width: $slider-width;
  height: $input-slider-height;
  &:focus {
    box-shadow: none;
    outline: none;
  }

  &::-webkit-slider-thumb {
    width: $thumb-width;
    height: $thumb-height;
    appearance: none;
    background: $thumb-background !important;
    left: 4px;
    border-radius: $thumb-radius;
    box-shadow: makelongshadow($background-slider, $shadow-size);
    margin-top: $fit-thumb-in-slider;
  }

  &::-webkit-slider-runnable-track {
    background: $background-filled-slider;
    content: '';
    height: $slider-height;
    pointer-events: none;
    margin-top: $fit-thumb-in-slider;
  }

  &::-moz-range-track {
    width: $slider-width;
    height: $slider-height;
  }

  &::-moz-range-thumb {
    width: $thumb-width;
    height: $thumb-height;
    background: $thumb-background;
    border-radius: $thumb-radius;
    border: $thumb-border;
    position: relative;
  }

  &::-moz-range-progress {
    height: $slider-height;
    background: $background-filled-slider;
    border: 0;
    margin-top: 0;
  }

  &::-ms-track {
    background: red;
    border: 0;
    border-color: red;
    border-radius: 0;
    border-width: 0;
    color: red;
    height: $slider-height;
    margin-top: 12px;
    width: 150%;
  }

  &::-ms-thumb {
    width: $thumb-width;
    height: $thumb-height;
    background: $thumb-background;
    border-radius: $thumb-radius;
    border: $thumb-border;
    display: none;
  }

  &::-ms-fill-lower {
    background: $background-filled-slider;
    border-radius: 0;
  }

  &::-ms-fill-upper {
    background: $background-slider;
    border-radius: 0;
  }

  &::-ms-tooltip {
    display: none;
  }
}
</style>
