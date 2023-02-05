import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Follow extends Base<FollowFields> {
	static create(fields: FollowFields) {
		return Base._create<FollowFields>({
			type: ModelType.Follow,
			...fields,
		})
	}
}

export type FollowFields = ActivityFields
