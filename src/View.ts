import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class View extends Base<ViewFields> {
	static create(fields: ViewFields) {
		return Base._create<ViewFields>({
			type: ModelType.View,
			...fields,
		})
	}
}

export interface ViewFields extends ActivityFields {}
