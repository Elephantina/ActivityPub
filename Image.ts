import { DocumentFields } from './Document.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * An image document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Image Docs}
 */
export class Image extends Base<ImageFields> {
	static create(fields: ImageFields) {
		return Base._create<ImageFields>({
			type: ModelType.Image,
			...fields,
		})
	}
}

export type ImageFields = DocumentFields
