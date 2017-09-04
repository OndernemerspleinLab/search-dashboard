import { negate } from './functional'

export const existing = maybe => maybe != null

export const unexisting = negate(existing)

export const isString = maybeString => typeof maybeString === 'string'

export const isNumber = maybeNumber =>
	typeof maybeNumber === 'number' && !isNaN(maybeNumber)

export const isObject = maybeObject =>
	existing(maybeObject) && typeof maybeObject === 'object'
