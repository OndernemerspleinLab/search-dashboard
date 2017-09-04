import { existing, isObject } from './predicates'

export const get = key => object => (existing(object) ? object[key] : undefined)

export const getIn = (keys = []) => object =>
	keys.reduce((childObject, key) => get(key)(childObject), object)

export const empty = objectOrArray => (Array.isArray(objectOrArray) ? [] : {})
export const copy = objectOrArray =>
	Array.isArray(objectOrArray)
		? objectOrArray.slice()
		: Object.assign({}, objectOrArray)

export const assign = newProperties => object =>
	Object.assign(empty(object), object, newProperties)

export const set = (key, value) => object => assign({ [key]: value })(object)

export const setIn = ([key, ...restKeys] = [], value) => object =>
	restKeys.length <= 0
		? set(key)(object)
		: set(key, setIn([restKeys], value)(get(key)(object)))(object)

export const update = (key, updater) => object =>
	set(key, updater(get(key)(object)))(object)

export const updateIn = ([key, ...restKeys] = [], updater) => (object = {}) =>
	restKeys.length <= 0
		? update(key, updater)(object)
		: updateIn(key, updateIn([restKeys], updater)(get(key)(object)))(object)

export const defaultTo = defaultValue => (value = defaultValue) => value

export const ensureReturnObject = fn => (...args) => {
	const result = fn(...args)
	return isObject(result) ? result : {}
}
