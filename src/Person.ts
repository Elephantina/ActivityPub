import { ActorFields } from './Actor.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * Represents an individual person
 *
 * {@link https://www.w3.org/ns/activitystreams#Person Docs}
 */
export class Person extends Base<PersonFields> {
	static create(fields: PersonFields) {
		return Base._create<PersonFields>({
			type: ModelType.Person,
			...fields,
		})
	}
}

export interface PersonFields extends ActorFields {}
