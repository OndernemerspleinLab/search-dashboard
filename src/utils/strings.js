export const formatNumber = decimalCount => (number: number): string => {
	const [integers = '', decimals = ''] = number.toString().split('.')

	const formattedDecimals = decimals
		.padEnd(decimalCount, '0')
		.slice(0, decimalCount)

	const formattedIntegers = integers.padStart(1, '0')

	return `${formattedIntegers},${formattedDecimals}`
}
