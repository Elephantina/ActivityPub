import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { IntransitiveActivityFields } from './IntransitiveActivity.ts'

/**
 * 	An IntransitiveActivity that indicates that the actor has arrived
 * 	at the location. The origin can be used to identify the context from
 * 	which the actor originated. The target typically has no defined meaning.
 *
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-arrive Docs}
 */
export class Arrive extends Base<AddFArriveFieldsields> {
	static create(fields: ArriveFields) {
		return Base._create<ArriveFields>({
			type: ModelType.Arrive,
			...fields,
		})
	}
}

export interface ArriveFields extends IntransitiveActivityFields {}
