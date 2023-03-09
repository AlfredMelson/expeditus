import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/lib/Option'

/*
 * This truncateText function takes a string and a number as input and returns a string as output. It uses the map method from FP-TS to apply a series of transformations to the input string and convert it into the desired output.
 * First, the O.fromNullable function is used to convert the input string into an option type. This is useful because it allows us to handle the case where the input is null or undefined.
 * Next, the map method is used to apply the replace method to the input string, removing any HTML tags from the text.
 * The next step in the pipeline uses the map method again to truncate the text if it is longer than the specified length. If the text is longer than the specified length, it is truncated and an ellipsis is added to the end. Otherwise, the original text is returned.
 * Finally, the getOrElse method is used to handle the case where the input string is null or undefined. In this case, the function returns an empty string.
 */

export const truncateText = (text: string, length: number) => {
  return pipe(
    O.fromNullable(text),
    O.map(text => text.replace(/(<([^>]+)>)/gi, '')),
    O.map(cleanText =>
      cleanText.length > length ? cleanText.substring(0, length) + '...' : cleanText,
    ),
    O.getOrElse(() => ''),
  )
}
