import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Remove extends Base<RemoveFields> {
	static create(fields: RemoveFields) {
		return Base._create<RemoveFields>({
			type: ModelType.Remove,
			...fields,
		})
	}
}

export type RemoveFields = ActivityFields
