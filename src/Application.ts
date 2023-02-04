import { ActorFields } from './Actor.ts'
import { Base } from './_base.ts'
import { ModelType } from './_type.ts'

/**
 * Describes a software application
 *
 * {@link https://www.w3.org/ns/activitystreams#Application Docs}
 */
export class Application extends Base<ApplicationFields> {
	static create(fields: ApplicationFields) {
		return Base._create<ApplicationFields>({
			type: ModelType.Application,
			...fields,
		})
	}
}
export interface ApplicationFields extends ActorFields {}
