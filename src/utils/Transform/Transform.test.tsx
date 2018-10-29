import { arrayReplaceItem } from './'

describe('Transform utils', () => {
    it('arrayReplaceItem() replaces array value immutably', () => {
      const arr = ['one', 'two', 'three', 'four']
      const predicate = (stringVal: string) => stringVal === 'two'
      const replacement = 'Zwie'

      const newArray = arrayReplaceItem(arr, predicate, replacement)
      expect(newArray[1]).toBe(replacement)
    })
})
