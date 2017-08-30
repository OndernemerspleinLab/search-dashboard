// @flow

export const existing = (maybe: mixed): %checks => maybe != null

export const unexisting = (maybe: mixed): %checks => !existing(maybe)
