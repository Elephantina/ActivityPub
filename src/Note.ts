import {ObjectFields} from "./Object.ts";
import {ModelType} from "./_type.ts";
import {Base} from "./_base.ts";

/**
 * Represents a short written work typically less than a single paragraph in length.
 *
 * {@link https://www.w3.org/ns/activitystreams#Note Docs}
 */
export class Note extends Base<NoteFields> {
	static create(fields: NoteFields) {
		return Base._create<NoteFields>({
			type: ModelType.Note,
			...fields,
		})
	}
}

export interface NoteFields extends ObjectFields {}
