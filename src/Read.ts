import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Read extends Base<ReadFields> {
	static create(fields: ReadFields) {
		return Base._create<ReadFields>({
			type: ModelType.Read,
			...fields,
		})
	}
}

export interface ReadFields extends ActivityFields {}
