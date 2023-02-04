import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Like extends Base<LikeFields> {
	static create(fields: LikeFields) {
		return Base._create<LikeFields>({
			type: ModelType.Like,
			...fields,
		})
	}
}

export interface LikeFields extends ActivityFields {}
