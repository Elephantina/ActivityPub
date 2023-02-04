import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Flag extends Base<FlagFields> {
	static create(fields: FlagFields) {
		return Base._create<FlagFields>({
			type: ModelType.Flag,
			...fields,
		})
	}
}

export interface FlagFields extends ActivityFields {}
