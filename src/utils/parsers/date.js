export const dateDiffInDays = expireDate => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24
  if (!expireDate) {
    return
  }
  const now = new Date()
  const _expireDate = new Date(expireDate)
  const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const utc2 = Date.UTC(_expireDate.getFullYear(), _expireDate.getMonth(), _expireDate.getDate())

  return Math.floor((utc2 - utc1) / _MS_PER_DAY)
}

export const getExpireDateText = expireDays => {
  if (expireDays === 0) return 'expires today'
  if (expireDays === 1) return 'expires tomorrow'
  if (expireDays > 30) return 'expires in +30 days'
  if (expireDays > 0 && expireDays < 30) return `expires in ${expireDays} days`
  if (expireDays === -1) return 'expired yesterday'
  if (expireDays < -1) return `expired ${Math.abs(expireDays)} days ago`
  if (!expireDays) return ''
}
