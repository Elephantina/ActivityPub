import { DocumentFields } from './Document.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * Represents a video document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Video Docs}
 */
export class Video extends Base<VideoFields> {
	static create(fields: VideoFields) {
		return Base._create<VideoFields>({
			type: ModelType.Video,
			...fields,
		})
	}
}

export interface VideoFields extends DocumentFields {}
