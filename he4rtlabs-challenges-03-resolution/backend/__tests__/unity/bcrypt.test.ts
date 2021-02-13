import bcrypt from 'bcrypt'

describe('Encrypting', () => {
  it('Should get a correct password', async () => {
    const salt = await bcrypt.genSalt(5)
    const password = '123456'
    const passwordHash = await bcrypt.hash(password, salt)
    const compare = bcrypt.compareSync(password, passwordHash)
    expect(compare).toBe(true)
  })

  it('Should not give a correct password', async () => {
    const salt = await bcrypt.genSalt(5)
    const password = '123456'
    const passwordHash = await bcrypt.hash(password, salt)
    const compare = bcrypt.compareSync('878770', passwordHash)
    expect(compare).toBe(false)
  })
})
