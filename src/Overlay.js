import { setStyle } from './_helpers'

export default class Overlay {

  constructor (el, instance) {
    this.el = el
    this.instance = instance
    this.parent = null
  }

  init () {
    const options = this.instance.options

    setStyle(this.el, {
      zIndex: 998,
      backgroundColor: options.bgColor,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      transition: `opacity
        ${options.transitionDuration}s
        ${options.transitionTimingFunction}`
    })

    this.el.addEventListener('click', () => this.instance.close())
  }

  updateStyle () {
    const options = this.instance.options

    setStyle(this.el, {
      backgroundColor: options.bgColor,
      transition: `opacity
        ${options.transitionDuration}s
        ${options.transitionTimingFunction}`
    })
  }

  setParent (parent) {
    this.parent = parent
  }

  insert () {
    this.parent.appendChild(this.el)
  }

  remove () {
    this.parent.removeChild(this.el)
  }

  show () {
    setTimeout(() => this.el.style.opacity = this.instance.options.bgOpacity, 30)
  }

  hide () {
    this.el.style.opacity = 0
  }
}
