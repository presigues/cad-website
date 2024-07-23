AFRAME.registerComponent('button', {
    init() {
      const btn = document.getElementById('backtomain')
      btn.addEventListener('click', () => {
        window.open('https://google.com', '_blank')
      })
    }
  })