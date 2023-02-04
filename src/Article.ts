import { ObjectFields } from './Object.ts'
import { ModelType } from './_type.ts'
import { Base } from './_base.ts'

/**
 * Represents any kind of multi-paragraph written work
 *
 * {@link https://www.w3.org/ns/activitystreams#Article Docs}
 */
export class Article extends Base<ArticleFields> {
	static create(fields: ArticleFields) {
		return Base._create<ArticleFields>({
			type: ModelType.Article,
			...fields,
		})
	}
}
export interface ArticleFields extends ObjectFields {}
