import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css' // If ypu need load compiled AOS css here in plugin

Vue.use(
  AOS.init({
    disable: false,
    startEvent: 'load',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: true,
    disableMutationObserver: false,
    debounceDelay: 0,
    throttleDelay: 0,

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 0,
    delay: 0,
    duration: 400,
    easing: 'ease-in-out-quad',
    once: true,
    mirror: true,
    anchorPlacement: 'center-center',
  })
)
