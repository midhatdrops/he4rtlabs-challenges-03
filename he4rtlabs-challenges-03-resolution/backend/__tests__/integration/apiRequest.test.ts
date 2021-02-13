import request from 'supertest'
import dotenv from 'dotenv'

dotenv.config()
const DB_ADRESS = process.env.DB_ADRESS

describe('GET', () => {
  it('should get status 200 when request', async () => {
    const res = await request(DB_ADRESS).get('/')

    expect(res.status).toEqual(200)
  })

  it('should get user list', async () => {
    const res = await request(DB_ADRESS)
      .get('/')
      .then((res) => res.body)

    expect(res[0]).toHaveProperty('id', 1)
  })
})

describe('POST', () => {
  it('Should create a new user', async () => {
    const post = await request(DB_ADRESS)
      .post('/')
      .send({ username: 'Teste', passwordHash: '1234567889' })
      .then((res) => res.status)

    expect(post).toBe(201)
  })

  it('Should not create a new user', async () => {
    const post = await request(DB_ADRESS)
      .post('/')
      .send({ id: 1, username: 'Teste', passwordHash: '1234567889' })
      .then((res) => res.status)

    expect(post).toBe(500)
  })
})

describe('PUT', () => {
  it('Should Update an existent user', async () => {
    const res = await request(DB_ADRESS)
      .put('/1')
      .send({ username: 'Paulo', passwordHash: 'Maria' })
      .then((res) => res.status)

    expect(res).toBe(200)
  })
})

describe('DELETE', () => {
  it('Should Delete an user', async () => {
    const res = await request(DB_ADRESS)
      .delete('/4')
      .then((res) => res.status)

    expect(res).toBe(200)
  })
})
