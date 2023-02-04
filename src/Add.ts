import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

/**
 * Indicates that the actor has added the object to the target. If the
 * target property is not explicitly specified, the target would need
 * to be determined implicitly by context. The origin can be used to
 * identify the context from which the object originated.
 *
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-add Docs}
 */
export class Add extends Base<AddFields> {
	static create(fields: AddFields) {
		return Base._create<AddFields>({
			type: ModelType.Add,
			...fields,
		})
	}
}

export interface AddFields extends ActivityFields {}
