import { copy } from './gettersSetters'

export const defaultSorter = (value1, value2) =>
	value1 > value2 ? 1 : value2 > value1 ? -1 : 0

export const reverseSorter = (value1, value2) => defaultSorter(value2, value1)

export const sortBy = (comparatorValueMapper, comparator = defaultSorter) => (
	list = [],
) =>
	copy(list).sort((value1, value2) =>
		comparator(comparatorValueMapper(value1), comparatorValueMapper(value2)),
	)
