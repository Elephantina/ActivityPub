import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Travel extends Base<TravelFields> {
	static create(fields: TravelFields) {
		return Base._create<TravelFields>({
			type: ModelType.Travel,
			...fields,
		})
	}
}

export type TravelFields = ActivityFields
