import { withProps } from 'recompose'
import { isNumber } from '../utils/predicates'
import { formatNumber } from '../utils/strings'

export const formatNumberAsChildren = ({
	number,
	decimalsCount = 1,
	defaultString = '-',
}) => ({
	children: isNumber(number)
		? formatNumber(decimalsCount)(number)
		: defaultString,
})

export const withChildrenAsFormattedNumber = withProps(formatNumberAsChildren)
