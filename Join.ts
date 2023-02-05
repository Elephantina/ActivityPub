import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Join extends Base<JoinFields> {
	static create(fields: JoinFields) {
		return Base._create<JoinFields>({
			type: ModelType.Join,
			...fields,
		})
	}
}

export type JoinFields = ActivityFields
