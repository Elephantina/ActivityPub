import { LinkFields } from './Link.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * A specialized Link that represents an @mention.
 *
 * {@link https://www.w3.org/ns/activitystreams#Mention Docs}
 */
export class Mention extends Base<MentionFields> {
	static create(fields: MentionFields) {
		return Base._create<MentionFields>({
			type: ModelType.Mention,
			...fields,
		})
	}
}

export type MentionFields = LinkFields
