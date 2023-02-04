import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

/**
 * Indicates that the actor accepts the object. The target property can be
 * used in certain circumstances to indicate the context into which the
 * object has been accepted.
 *
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accept Docs}
 */
export class Accept extends Base<AcceptFields> {
	static create(fields: AcceptFields) {
		return Base._create<AcceptFields>({
			type: ModelType.Accept,
			...fields,
		})
	}
}

export interface AcceptFields extends ActivityFields {}
