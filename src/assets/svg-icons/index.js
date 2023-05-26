import Vue from 'vue'

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
const iconMap = requireAll(req)

Vue.prototype.$IconSvg = iconMap.map(e => e.default.id.slice(3))
// Vue.prototype.$IconSvg = iconMap.map(e => {
//     console.log(e)
//     return e.default.id.slice(3)
// })
