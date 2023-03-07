/**
 * Returns the date with added `months` of delay.
 * @param {Number} months - the delay in months
 * @returns {Date}
 */
export function dateDelayMonths(months: number): Date {
  const date = new Date()
  date.setMonth(date.getMonth() + months)

  return date
}

/**
 * Returns the date with added `weeks` of delay.
 * @param {Number} weeks - the delay in months
 * @returns {Date}
 */
export function dateDelayWeeks(weeks: number): Date {
  const date = new Date()
  date.setHours(date.getDay() + weeks * 168)

  return date
}

/**
 * Returns the date with added `weeks` of delay.
 * @param {Number} days - the delay in months
 * @returns {Date}
 */
export function dateDelayDays(days: number): Date {
  const date = new Date()
  date.setHours(date.getDay() + days * 24)

  return date
}

/**
 * Returns the date with added `weeks` of delay.
 * @param {Number} hours - the delay in months
 * @returns {Date}
 */
export function dateDelayHours(hours: number): Date {
  const date = new Date()
  date.setHours(date.getHours() + hours)

  return date
}

/**
 * Returns the date with added `weeks` of delay.
 * @param {Number} minutes - the delay in months
 * @returns {Date}
 */
export function dateDelayMinutes(minutes: number): Date {
  const date = new Date()
  date.setMinutes(date.getMinutes() + minutes)

  return date
}
