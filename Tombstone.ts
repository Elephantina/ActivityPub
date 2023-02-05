import { ObjectFields } from './Object.ts'
import { DeletedValue, FormerTypeValue, ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * A Tombstone represents a content object that has been deleted.
 * It can be used in Collections to signify that there used to be an object
 * at this position, but it has been deleted.
 *
 * {@link https://www.w3.org/ns/activitystreams#Tombstone Docs}
 */
export class Tombstone extends Base<TombstoneFields> {
	static create(fields: TombstoneFields) {
		return Base._create<TombstoneFields>({
			type: ModelType.Tombstone,
			...fields,
		})
	}
}

export type TombstoneFields = ObjectFields & {
	/**
	 * On a Tombstone object, the formerType property identifies
	 * the type of the object that was deleted.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#formerType  Docs}
	 */
	formerType?: FormerTypeValue

	/**
	 * On a Tombstone object, the deleted property is a timestamp
	 * for when the object was deleted.
	 *
	 * If time must be specified - use {@link https://www.w3schools.blog/xsd-date-and-time-data-types xsd:dateTime}
	 *
	 * {@link https://www.w3.org/ns/activitystreams#deleted Docs}
	 */
	deleted?: DeletedValue
}
