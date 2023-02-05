import { ActorFields } from './Actor.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * Represents a service of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Service Docs}
 */
export class Service extends Base<ServiceFields> {
	static create(fields: ServiceFields) {
		return Base._create<ServiceFields>({
			type: ModelType.Service,
			...fields,
		})
	}
}

export type ServiceFields = ActorFields
