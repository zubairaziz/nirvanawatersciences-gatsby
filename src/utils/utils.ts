export function formatPhoneNumber(phoneNumberString: string): string | null {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}.${match[3]}`
  }
  return null
}

export function cleanPhoneNumber(phoneNumberString: string): string | null {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `+1${match[1]}${match[2]}${match[3]}`
  }
  return null
}
