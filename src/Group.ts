import { ActorFields } from './Actor.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * Represents a formal or informal collective of Actors
 *
 * {@link https://www.w3.org/ns/activitystreams#Group Docs}
 */
export class Group extends Base<GroupFields> {
	static create(fields: GroupFields) {
		return Base._create<GroupFields>({
			type: ModelType.Group,
			...fields,
		})
	}
}

export interface GroupFields extends ActorFields {}
