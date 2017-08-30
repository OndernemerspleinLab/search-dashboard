// @flow

export const existing = (maybe: mixed): %checks => maybe != null

export const unexisting = (maybe: mixed): %checks => !existing(maybe)

export const isString = (maybeString: mixed): %checks =>
	typeof maybeString === 'string'

export const isNumber = (maybeNumber: mixed): %checks =>
	typeof maybeNumber === 'number' && !isNaN(maybeNumber)
