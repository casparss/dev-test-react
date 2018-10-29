export const arrayReplaceItem = (array: Array<any>, predicate: any, replacement: any) => {
  const newArray = [...array]
  newArray.splice(array.findIndex(predicate), 1, replacement)
  return newArray
}
