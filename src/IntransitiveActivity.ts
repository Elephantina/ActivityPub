import { ActivityFields } from './Activity.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * Instances of intransitiveActivity are a subtype of
 * Activity representing intransitive actions. The
 * object property is therefore inappropriate for these activities.
 *
 * {@link https://www.w3.org/ns/activitystreams#IntransitiveActivity Docs}
 */
export class IntransitiveActivity extends Base<IntransitiveActivityFields> {
	static create(fields: IntransitiveActivityFields) {
		return Base._create<IntransitiveActivityFields>({
			type: ModelType.IntransitiveActivity,
			...fields,
		})
	}
}
export type IntransitiveActivityFields = Omit<ActivityFields, 'object'>
