import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Leave extends Base<LeaveFields> {
	static create(fields: LeaveFields) {
		return Base._create<LeaveFields>({
			type: ModelType.Leave,
			...fields,
		})
	}
}

export type LeaveFields = ActivityFields
