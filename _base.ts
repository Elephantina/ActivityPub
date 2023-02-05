import { WithContext } from './Context.ts'
import { DeepClone } from './_util.ts'

export class Base<T extends WithContext> {
	public fields: T

	protected constructor(fields: T) {
		this.fields = { ...DeepClone(fields) }
	}

	protected static _create<T extends WithContext>(fields: T) {
		const data = new Base<T>(fields)
		return new Proxy(data, {
			get(target: Base<T>, p: keyof Base<T> & keyof T) {
				return p in target ? target[p] : target.fields[p]
			},
			// deno-lint-ignore no-explicit-any
			set(target: Base<T>, p: keyof Base<T> & keyof T, newValue: any): boolean {
				target.fields[p] = newValue
				return true
			},
		}) as Base<T> & T & WithContext
	}

	// deno-lint-ignore no-explicit-any
	public toPlain(): Record<string, any> {
		// deno-lint-ignore no-explicit-any
		const result = {} as Record<string, any>
		if ('@context' in this.fields) {
			result['@context'] = this.fields['@context']
		}
		for (const [key, value] of Object.entries(this.fields)) {
			if (key === '@context') continue

			const isFunction = typeof value === 'function'
			const isArray = Array.isArray(value)
			const isNull = value === null
			const isUndefined = value === undefined
			const isObject = !isArray && !isNull && typeof value === 'object'
			const isPlain = !isArray && !isNull && !isUndefined && !isObject && !isFunction

			if (isArray) {
				result[key] = value.map((v) => this.parseValue(v))
			} else if (isNull || isUndefined) {
				result[key] = null
			} else if (isObject) {
				result[key] = {}
				Object.entries(value).forEach(([k, v]) => result[key][k] = this.parseValue(v))
			} else if (isPlain) {
				result[key] = this.parseValue(value)
			} else {
				throw new Error(`Unable to convert key ${key} with value ${value}. Type of value: ${typeof value}`)
			}
		}
		return result
	}

	public toJSON(): string {
		return JSON.stringify(this.toPlain())
	}
	// deno-lint-ignore no-explicit-any
	protected parseValue(value: any): any {
		return value instanceof Base ? value.toPlain() : value.valueOf()
	}
}
