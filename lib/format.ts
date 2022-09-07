export const format = (dateString: string) => {
  const date = new Date(dateString)
  let formatted_date =
    date.getFullYear() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getDate() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds()
  return formatted_date
}
