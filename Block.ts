import { Base } from './_base.ts'
import { ModelType } from './_type.ts'
import { IgnoreFields } from './TentativeAccept.ts'

export class Block extends Base<BlockFields> {
	static create(fields: BlockFields) {
		return Base._create<BlockFields>({
			type: ModelType.Block,
			...fields,
		})
	}
}

export type BlockFields = IgnoreFields
