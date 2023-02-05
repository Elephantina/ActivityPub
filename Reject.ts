import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Reject extends Base<RejectFields> {
	static create(fields: RejectFields) {
		return Base._create<RejectFields>({
			type: ModelType.Reject,
			...fields,
		})
	}
}

export type RejectFields = ActivityFields
