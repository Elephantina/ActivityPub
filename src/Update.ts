import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Update extends Base<UpdateFields> {
	static create(fields: UpdateFields) {
		return Base._create<UpdateFields>({
			type: ModelType.Update,
			...fields,
		})
	}
}

export type UpdateFields = ActivityFields
