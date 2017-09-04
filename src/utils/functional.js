import { compose } from 'recompose'
export const negate = fn => (...args) => !fn(...args)

export const composeLeftToRight = (...fns) => compose(...fns.reverse())
