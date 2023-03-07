/* The following function convert fahrenheit to celcius (°F to °C)
 * and returns the result rounded to the nearest whole number.
 */

export function fahrenheitToCelcius(fahrenheit: number): number {
  return Math.round(((fahrenheit - 32) * 5) / 9)
}
