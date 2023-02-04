import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Create extends Base<CreateFields> {
	static create(fields: CreateFields) {
		return Base._create<CreateFields>({
			type: ModelType.Create,
			...fields,
		})
	}
}

export interface CreateFields extends ActivityFields {}
