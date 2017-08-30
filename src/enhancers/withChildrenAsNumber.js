// @flow

import { withProps } from 'recompose'
import { isNumber } from '../utils/predicates'
import { formatNumber } from '../utils/strings'

type Props = {
	number: mixed,
	decimalsCount: number,
	defaultString: string,
}

export const formatNumberAsChildren = ({
	number,
	decimalsCount = 1,
	defaultString = '-',
}: Props) => ({
	children: isNumber(number)
		? formatNumber(decimalsCount)(number)
		: defaultString,
})

export const withChildrenAsFormattedNumber = withProps(formatNumberAsChildren)
