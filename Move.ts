import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Move extends Base<MoveFields> {
	static create(fields: MoveFields) {
		return Base._create<MoveFields>({
			type: ModelType.Move,
			...fields,
		})
	}
}

export type MoveFields = ActivityFields
