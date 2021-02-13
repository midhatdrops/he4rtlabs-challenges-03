import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authSecret = process.env['AUTH_SECRET']

describe('JWT Token', () => {
  it('Should generate a valid JWT', () => {
    const token = jwt.sign(
      { username: 'João', password: 'Blabla' },
      authSecret,
      {
        expiresIn: '1h',
      }
    )

    expect(jwt.verify(token, authSecret)).toHaveProperty('username', 'João')
  })
})
