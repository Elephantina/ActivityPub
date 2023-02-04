import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Delete extends Base<DeleteFields> {
	static create(fields: DeleteFields) {
		return Base._create<DeleteFields>({
			type: ModelType.Delete,
			...fields,
		})
	}
}

export interface DeleteFields extends ActivityFields {}
