import { get, getIn, set } from './gettersSetters'
it('should get a value', () => {
	const expectedResult = 'value'
	const source = { test: expectedResult }
	const result = get('test')(source)
	expect(result).toBe(expectedResult)
})

it('should get undefined when getting from unexisting objects', () => {
	const result = get('test')(null)
	expect(result).toBeUndefined()
})

it('should get a nested value', () => {
	const expectedResult = 'value'
	const source = { outer: { inner: expectedResult } }
	const result = getIn(['outer', 'inner'])(source)
	expect(result).toBe(expectedResult)
})

it('should get undefined when getting from unexisting objects', () => {
	const source = { outer: { inner: 'test' } }
	const result = getIn(['outer', 'inner', 'nowhere', 'here'])(source)
	expect(result).toBeUndefined()
})

it('should set a value on an object', () => {
	const source = { original: 'originalValue' }
	const result = set('new', 'newValue')(source)
	const expectedResult = {
		original: 'originalValue',
		new: 'newValue',
	}

	expect(result).toEqual(expectedResult)
	expect(result).not.toBe(source)
})

it('should create a new object when setting on an empty source', () => {
	const source = null
	const result = set('new', 'newValue')(source)
	const expectedResult = {
		new: 'newValue',
	}

	expect(result).toEqual(expectedResult)
})

it('should set a value on an array', () => {
	const source = ['first', 'originalValue']
	const result = set(1, 'newValue')(source)
	const expectedResult = ['first', 'newValue']

	expect(result).toEqual(expectedResult)
	expect(result).not.toBe(source)
})
