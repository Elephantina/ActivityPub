export type Modify<T, R> = Omit<T, keyof R> & R

type _objKey = string | number | symbol
type _objType = Record<_objKey, unknown>

export const HasKey = <T extends _objType>(
	obj: T,
	k: _objKey,
): k is keyof T => k in obj

export const DeepClone = <T>(arg: T): T => {
	if (!arg || typeof arg !== 'object') {
		return arg
	}
	if (arg instanceof Array) {
		return arg.map((item) => DeepClone(item)) as T
	}
	if (arg instanceof Date) {
		return new Date(arg.getTime()) as T
	}

	return Object.getOwnPropertyNames(arg).reduce((o, prop) => {
		Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(arg, prop)!)
		o[prop] = DeepClone(
			(arg as _objType)[prop],
		)
		return o
	}, Object.create(Object.getPrototypeOf(arg)))
}
