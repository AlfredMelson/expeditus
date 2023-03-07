/* The following function creates an array of objects representing hardiness zones based
 * on temperature ranges. Each hardiness zone is represented by an object with three properties:
 *
 * zone: a string representing the zone number and letter (e.g. "0a", "1b")
 * start: a number representing the starting temperature of the zone in degrees Fahrenheit
 * end: a number representing the ending temperature of the zone in degrees Fahrenheit
 *
 * The function uses a loop to iterate over 14 different zones, creating two zones per
 * iteration (one with an a letter and one with a b letter). The starting and ending temperatures
 * for each zone are calculated based on the loop iteration and the letter of the zone.
 *
 * For example, on the first iteration of the loop, the startTemp and endTemp variables are set
 * to -70 and -65 respectively, which represent the starting and ending temperatures for the
 * 0a zone. The bStartTemp and bEndTemp variables are then set to -65 and -60 respectively,
 * which represent the starting and ending temperatures for the 0b zone.
 *
 * The zoneA and zoneB objects are then created and added to the zones array. This process is
 * repeated for each iteration of the loop, resulting in a total of 28 hardiness zones being
 * added to the zones array. Finally, the function returns the zones array.
 */

export function hardinessZones() {
  const zones = []
  for (let i = 0; i < 14; i++) {
    let startTemp, endTemp
    if (i === 0) {
      startTemp = -70
      endTemp = -65
    } else if (i === 13) {
      startTemp = 60
      endTemp = 65
    } else {
      startTemp = (i - 1) * 10 - 50
      endTemp = i * 10 - 50
    }

    const zoneA = {
      zone: `${i}a`,
      start: startTemp,
      end: endTemp,
    }

    const bStartTemp = startTemp + 5
    const bEndTemp = endTemp + 5
    const zoneB = {
      zone: `${i}b`,
      start: bStartTemp,
      end: bEndTemp,
    }

    zones.push(zoneA, zoneB)
  }

  return zones
}
