import { CollectionFields } from './Collection.ts'
import { Modify } from './_util.ts'
import {
	ModelType,
	OrderedCollectionCurrentValue,
	OrderedCollectionFirstValue,
	OrderedCollectionItemsValue,
	OrderedCollectionLastValue,
} from './_type.ts'
import { Base } from './_base.ts'

/**
 * A subtype of Collection in which members of
 * the logical collection are assumed to always be strictly ordered.
 *
 * {@link https://www.w3.org/ns/activitystreams#OrderedCollection Docs}
 */
export class OrderedCollection extends Base<OrderedCollectionFields> {
	static create(fields: OrderedCollectionFields) {
		return Base._create<OrderedCollectionFields>({
			type: ModelType.OrderedCollection,
			...fields,
		})
	}
}

export type OrderedCollectionFields = Modify<CollectionFields, {
	/**
	 * In a paged OrderedCollection, indicates the page that contains
	 * the most recently updated member items.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#current Docs}
	 */
	current?: OrderedCollectionCurrentValue

	/**
	 * In a paged OrderedCollection, indicates the furthest proceeding
	 * page of items in the collection.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#first Docs}
	 */
	first?: OrderedCollectionFirstValue

	/**
	 * In a paged OrderedCollection, indicates the furthest proceeding
	 * page of the collection.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#last Docs}
	 */
	last?: OrderedCollectionLastValue

	/**
	 * Identifies the items contained in a collection.
	 * The items might be ordered or unordered.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#items Docs}
	 */
	items?: OrderedCollectionItemsValue[]
}>
