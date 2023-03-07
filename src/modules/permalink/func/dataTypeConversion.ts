import { type Session } from 'next-auth'

interface IDataTypeConversion {
  data: Session | null
}

export function userEmailTypeConversion({ data }: IDataTypeConversion) {
  //receive data as possibily null
  const emailOfUser = data?.user !== undefined ? data.user.email : ''

  // convert null to undefined
  const userEmail = emailOfUser !== null ? emailOfUser : undefined

  // return userImage as a string or undefined
  return userEmail as string | undefined
}

export function userImageTypeConversion({ data }: IDataTypeConversion) {
  //receive data as possibily null
  const imageOfUser = data?.user !== undefined ? data.user.image : ''

  // convert null to undefined
  const userImage = imageOfUser !== null ? imageOfUser : undefined

  // return userImage as a string or undefined
  return userImage as string | undefined
}

export function userNameTypeConversion({ data }: IDataTypeConversion) {
  //receive data as possibily null
  const nameOfUser = data?.user !== undefined ? data.user.name : ''

  // convert null to undefined
  const userName = nameOfUser !== null ? nameOfUser : undefined

  // return username as a string or undefined
  return userName as string | undefined
}

export function dateTypeConversion(date: Date | null | undefined) {
  //receive data as possibily null
  const dateReceived = date !== undefined ? date : new Date()

  // convert null to undefined
  const confirmedDate = dateReceived !== null ? dateReceived : undefined

  // return userImage as a string or undefined
  return confirmedDate as Date
}
