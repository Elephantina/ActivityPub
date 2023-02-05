import { ObjectFields } from './Object.ts'
import { Base } from './_base.ts'
import { ModelType } from './_type.ts'

/**
 * Represents a document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Document Docs}
 */
export class Document extends Base<DocumentFields> {
	static create(fields: DocumentFields) {
		return Base._create<DocumentFields>({
			type: ModelType.Document,
			...fields,
		})
	}
}

export type DocumentFields = ObjectFields
