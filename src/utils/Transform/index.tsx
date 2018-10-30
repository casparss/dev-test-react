import { mapValues } from 'lodash'

export const arrayReplaceItem = (array: Array<any>, predicate: any, replacement: any) => {
  const newArray = [...array]
  newArray.splice(array.findIndex(predicate), 1, replacement)
  return newArray
}

export const replaceItemByID = (array: Array<any>, idArg: string, replacement: any) => {
  return arrayReplaceItem(
    array,
    ({ id }: { id: string }) => id === idArg,
    replacement
  )
}

export const findByID = (idArg: string, collection: Array<any>) =>
  collection.find(({ id } : {id: string}) => id === idArg)

//@TODO: move to selectors
const getSelected = (dictionaries: any) =>
  dictionaries.find(({ selected }: { selected: any }) => selected)

export const tableTransformer = (data: any, dictionaries: any) => {
  const selectedDictionary = getSelected(dictionaries)
  if(!selectedDictionary) return data

  const { mappings } = selectedDictionary
  const { tableBody, tableHead } = data

  const transformedBody = tableBody.map((row: any) => {
    const newRow = mapValues(row, (value, key) => {
      if(key === 'id') return value

      const { label } = tableHead.find((head: any) => head.name === key)
      const mapping = mappings.find(({ field, from }: { field: string, from: string, to: string }) => {
        const fieldMatch = field === label
        const valueMatch = from === value
        return fieldMatch && valueMatch
      })
      return mapping ? mapping.to : value
    })
    return newRow
  })
  return {
    tableHead,
    tableBody: transformedBody
  }
}
