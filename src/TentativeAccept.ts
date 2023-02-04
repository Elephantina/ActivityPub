import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

/**
 * A specialization of Accept indicating that the acceptance is tentative.
 *
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativeaccept Docs}
 */
export class TentativeAccept extends Base<TentativeAcceptFields> {
	static create(fields: TentativeAcceptFields) {
		return Base._create<TentativeAcceptFields>({
			type: ModelType.TentativeAccept,
			...fields,
		})
	}
}

export interface TentativeAcceptFields extends ActivityFields {}
