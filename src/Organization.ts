import { ActorFields } from './Actor.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * Represents an organization
 *
 * {@link https://www.w3.org/ns/activitystreams#Organization Docs}
 */
export class Organization extends Base<OrganizationFields> {
	static create(fields: OrganizationFields) {
		return Base._create<OrganizationFields>({
			type: ModelType.Organization,
			...fields,
		})
	}
}

export interface OrganizationFields extends ActorFields {}
