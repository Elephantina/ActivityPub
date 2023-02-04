import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Ignore extends Base<IgnoreFields> {
	static create(fields: IgnoreFields) {
		return Base._create<IgnoreFields>({
			type: ModelType.Ignore,
			...fields,
		})
	}
}

export interface IgnoreFields extends ActivityFields {}
