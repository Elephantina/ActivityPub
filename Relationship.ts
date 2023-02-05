import { ObjectFields } from './Object.ts'
import { ModelType, ObjectValue, RelationshipValue, SubjectValue } from './_type.ts'
import { Base } from './_base.ts'

/**
 * Describes a relationship between two individuals. The subject and
 * object properties are used to identify the connected individuals.
 * See {@link https://www.w3.org/TR/activitystreams-vocabulary/#connections 5.2 Representing Relationships Between Entities}
 * for additional information.
 *
 * {@link https://www.w3.org/ns/activitystreams#Relationship Docs}
 */
export class Relationship extends Base<RelationshipFields> {
	static create(fields: RelationshipFields) {
		return Base._create<RelationshipFields>({
			type: ModelType.Relationship,
			...fields,
		})
	}
}

export type RelationshipFields = ObjectFields & {
	/**
	 * On a Relationship object, the subject property identifies one of the connected individuals.
	 * For instance, for a Relationship object describing "John is related to Sally",
	 * subject would refer to John.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#subject Docs}
	 */
	subject?: SubjectValue

	/**
	 * When used within a Relationship describes the entity to which the subject is related.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#object Docs}
	 */
	object?: ObjectValue | ObjectValue[]

	/**
	 * On a Relationship object, the relationship property
	 * identifies the kind of relationship that exists between subject and object.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#relationship Docs}
	 */
	relationship?: RelationshipValue
}
