import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Dislike extends Base<DislikeFields> {
	static create(fields: DislikeFields) {
		return Base._create<DislikeFields>({
			type: ModelType.Dislike,
			...fields,
		})
	}
}

export interface DislikeFields extends ActivityFields {}
