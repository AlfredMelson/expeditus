import * as FpArray from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import * as FpOption from 'fp-ts/Option'
import parseUrl from 'parse-url'

interface ParsedUrl {
  protocols: string[]
  protocol: string
  port?: string
  resource: string
  user: string
  pathname: string
  hash: string
  search: string
  href: string
  query: {
    [key: string]: unknown
  }
}

function tryParsingUrl(url: string): FpOption.Option<ParsedUrl> {
  return FpOption.tryCatch(() => parseUrl(url))
}

function getTopLevelDomain(resource: string): FpOption.Option<string> {
  return pipe(resource, resource => resource.split('.'), FpArray.last)
}

export function isDotCom(url: string): boolean {
  return pipe(
    url,
    tryParsingUrl,
    FpOption.map(parsedUrl => parsedUrl.resource),
    FpOption.chain(getTopLevelDomain),
    FpOption.exists(topLevelDomain => topLevelDomain === 'com'),
  )
}
