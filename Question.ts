import { AnyOfValue, ClosedValue, ModelType, OneOfValue } from './_type.ts'
import { IntransitiveActivityFields } from './IntransitiveActivity.ts'
import { Base } from './_base.ts'

/**
 * Represents a question being asked. Question objects are an extension
 * of IntransitiveActivity. That is, the Question object is an Activity,
 * but the direct object is the question itself, and therefore it would
 * not contain an object property.
 *
 * Either of the anyOf and oneOf properties MAY be used to express possible
 * answers, but a Question object MUST NOT have both properties.
 *
 * {@link https://www.w3.org/ns/activitystreams#Question Docs}
 */
export class Question extends Base<QuestionFields> {
	static create(fields: QuestionFields) {
		return Base._create<QuestionFields>({
			type: ModelType.Question,
			...fields,
		})
	}
}

export type QuestionFields = IntransitiveActivityFields & {
	/**
	 * Identifies an exclusive option for a Question.
	 * Use of oneOf implies that the Question can have only a single answer.
	 * To indicate that a Question can have multiple answers, use anyOf.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#oneOf Docs}
	 */
	oneOf?: OneOfValue[]

	/**
	 * Identifies an inclusive option for a Question.
	 * Use of anyOf implies that the Question can have multiple answers.
	 * To indicate that a Question can have only one answer, use oneOf.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#anyOf Docs}
	 */
	anyOf?: AnyOfValue[]

	/**
	 * Indicates that a question has been closed, and answers are no longer accepted.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#closed Docs}
	 */
	closed?: ClosedValue
}
