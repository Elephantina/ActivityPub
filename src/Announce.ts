import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Announce extends Base<AnnounceFields> {
	static create(fields: AnnounceFields) {
		return Base._create<AnnounceFields>({
			type: ModelType.Announce,
			...fields,
		})
	}
}

export interface AnnounceFields extends ActivityFields {}
