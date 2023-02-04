import { CollectionPageNextValue, CollectionPagePartOfValue, CollectionPagePrevValue, ModelType } from './_type.ts'
import { CollectionFields } from './Collection.ts'
import { Base } from './_base.ts'

/**
 * Used to represent distinct subsets of items from a Collection.
 *
 * {@link https://www.w3.org/ns/activitystreams#CollectionPage Docs}
 */
export class CollectionPage extends Base<CollectionPageFields> {
	static create(fields: CollectionPageFields) {
		return Base._create<CollectionPageFields>({
			type: ModelType.CollectionPage,
			...fields,
		})
	}
}

export interface CollectionPageFields extends CollectionFields {
	/**
	 * Identifies the Collection to which a CollectionPage objects items belong.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#partOf Docs}
	 */
	partOf?: CollectionPagePartOfValue

	/**
	 * In a paged Collection, indicates the next page of items.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#next Docs}
	 */
	next?: CollectionPageNextValue

	/**
	 * In a paged Collection, identifies the previous page of items.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#prev Docs}
	 */
	prev?: CollectionPagePrevValue
}
