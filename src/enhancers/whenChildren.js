// @flow
import { branch, renderNothing } from 'recompose'
import { unexisting } from '../utils/predicates'

export const whenChildren = branch(
	({ children }) => unexisting(children),
	renderNothing,
)
