import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { RejectFields } from './Reject.ts'

export class TentativeReject extends Base<TentativeRejectFields> {
	static create(fields: TentativeRejectFields) {
		return Base._create<TentativeRejectFields>({
			type: ModelType.TentativeReject,
			...fields,
		})
	}
}

export type TentativeRejectFields = RejectFields
