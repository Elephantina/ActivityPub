import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Undo extends Base<UndoFields> {
	static create(fields: UndoFields) {
		return Base._create<UndoFields>({
			type: ModelType.Undo,
			...fields,
		})
	}
}

export type UndoFields = ActivityFields
