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
