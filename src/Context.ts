import { ContextValue } from './_type.ts'

export type WithContext = {
	/**
	 * JSON-LD uses the special @context property to define the processing context.
	 * The value of the @context property is defined by the [JSON-LD] specification.
	 *
	 * {@link https://www.w3.org/TR/activitystreams-core/#jsonld Docs}
	 */
	'@context'?: ContextValue | ContextValue[]
}
