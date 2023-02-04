import { assertEquals } from 'https://deno.land/std@0.176.0/testing/asserts.ts'
import { DeepClone, HasKey } from './_util.ts'

Deno.test(function testHasKey() {
	const symbolKey = Symbol('ab')

	const testdata: {
		obj: Record<string | number | symbol, unknown>
		key: string | number | symbol
		expect: boolean
	}[] = [
		{ obj: { 1: 1 }, key: 1, expect: true },
		{ obj: { 1: 1 }, key: 2, expect: false },
		{ obj: { a: 1 }, key: 'a', expect: true },
		{ obj: { a: 1 }, key: 'b', expect: false },
		{ obj: { true: 1 }, key: 'true', expect: true },
		{ obj: { true: 1 }, key: 0, expect: false },
		{ obj: { false: 1 }, key: 'false', expect: true },
		{ obj: { false: 1 }, key: 0, expect: false },
		{ obj: { symbolKey: 1 }, key: symbolKey, expect: false },
	]

	testdata.forEach((e) => {
		assertEquals(HasKey(e.obj, e.key), e.expect)
	})
})

Deno.test(function testDeepClone() {
	{
		const obj = { a: 1, b: 2, c: { a: 1, b: 2, c: 3 } }
		const cloneObj = DeepClone(obj)
		const expectObj = { a: 1, b: 2, c: { a: 1, b: 2, c: 3 } }

		obj.c.a = 2
		assertEquals(cloneObj, expectObj)
	}
	{
		const arr = [1, 2, 3, 4]
		const obj = { a: 1, b: 2, c: { a: arr } }
		const cloneObj = DeepClone(obj)
		const expectObj = { a: 1, b: 2, c: { a: [1, 2, 3, 4] } }

		arr[3] = 2222
		assertEquals(cloneObj, expectObj)
	}
	{
		const t = new Date()
		const obj = { a: 1, b: 2, c: { a: t } }
		const cloneObj = DeepClone(obj)
		const expectObj = { a: 1, b: 2, c: { a: new Date(t.getTime()) } }

		obj.c.a = new Date()
		assertEquals(cloneObj, expectObj)
	}
})
