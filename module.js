const qs = require('querystring')

const bodyParser = (req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end', () => {
        // 把字符串格式的请求体数据=>对象格式
        const body = qs.parse(str)
        req.body = body
        next()
    })
}

module.exports = bodyParser