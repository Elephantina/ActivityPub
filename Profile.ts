import { ObjectFields } from './Object.ts'
import { DescribesValue, ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * A Profile is a content object that describes another Object,
 * typically used to describe Actor Type objects. The describes property
 * is used to reference the object being described by the profile.
 *
 * {@link https://www.w3.org/ns/activitystreams#Profile Docs}
 */
export class Profile extends Base<ProfileFields> {
	static create(fields: ProfileFields) {
		return Base._create<ProfileFields>({
			type: ModelType.Profile,
			...fields,
		})
	}
}

export type ProfileFields = ObjectFields & {
	/**
	 * On a Profile object, the describes property identifies
	 * the object described by the Profile.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#describes Docs}
	 */
	describes?: DescribesValue
}
