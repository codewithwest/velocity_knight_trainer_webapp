import { main_logo } from "./imageProvider"

// const resolve = 'https://node-rest-six.vercel.app'
try {
    var resolve = 'https://node-rest-six.vercel.app'

} catch (error) {
    resolve = 'http://192.168.202.34:3070'
}

const aboutCards = [
    [main_logo, 'this', 'this', 'this'],
]
export { resolve, aboutCards }