import build from '../index'

const test = async () => {
  const app = build

  const get = await app.inject({
    method: 'GET',
    url: '/user'
  })

  console.log('status code: ', get.statusCode)
  console.log('body: ', get.body)

  const post = await app.inject({
    method: 'POST',
    url: '/user',
    payload: {
      name: 'aaa',
      email: 'bbb@naver.com'
    }
  })

  console.log('status code: ', post.statusCode)
  console.log('body: ', post.body)
}
test()