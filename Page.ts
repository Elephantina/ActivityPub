import { DocumentFields } from './Document.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * Represents a Web Page
 *
 * {@link https://www.w3.org/ns/activitystreams#Page Docs}
 */
export class Page extends Base<PageFields> {
	static create(fields: PageFields) {
		return Base._create<PageFields>({
			type: ModelType.Page,
			...fields,
		})
	}
}

export type PageFields = DocumentFields
