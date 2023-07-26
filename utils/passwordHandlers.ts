import bcrypt from 'bcrypt'

export const hashPassword = async (password: string) => {
  const passwordHash = await bcrypt.hash(password, 12)

  return passwordHash
}