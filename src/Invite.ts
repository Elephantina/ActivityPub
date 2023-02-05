import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { OfferFields } from './TentativeAccept.ts'

export class Invite extends Base<InviteFields> {
	static create(fields: InviteFields) {
		return Base._create<InviteFields>({
			type: ModelType.Invite,
			...fields,
		})
	}
}

export type InviteFields = OfferFields
