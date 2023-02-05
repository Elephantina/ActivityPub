import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ActivityFields } from './Activity.ts'

export class Offer extends Base<OfferFields> {
	static create(fields: OfferFields) {
		return Base._create<OfferFields>({
			type: ModelType.Offer,
			...fields,
		})
	}
}

export type OfferFields = ActivityFields
