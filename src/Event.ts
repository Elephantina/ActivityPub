import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { ObjectFields } from './Object.ts'

/**
 * Represents any kind of event
 *
 * {@link https://www.w3.org/ns/activitystreams#Event Docs}
 */
export class Event extends Base<EventFields> {
	static create(fields: EventFields) {
		return Base._create<EventFields>({
			type: ModelType.Event,
			...fields,
		})
	}
}

export interface EventFields extends ObjectFields {}
