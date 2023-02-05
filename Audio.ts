import { ModelType } from './_type.ts'
import { Base } from './_base.ts'
import { DocumentFields } from './Document.ts'

/**
 * Represents an audio document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Audio Docs}
 */
export class Audio extends Base<AudioFields> {
	static create(fields: AudioFields) {
		return Base._create<AudioFields>({
			type: ModelType.Audio,
			...fields,
		})
	}
}
export type AudioFields = DocumentFields
