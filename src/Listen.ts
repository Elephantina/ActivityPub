import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Listen extends Base<ListenFields> {
	static create(fields: ListenFields) {
		return Base._create<ListenFields>({
			type: ModelType.Listen,
			...fields,
		})
	}
}

export type ListenFields = ActivityFields
