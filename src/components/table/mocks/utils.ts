// default  grouping function from the react-table utils
export function defaultGroupByFn(rows, columnId) {
  console.info(rows)
  const result = rows.reduce((prev, row) => {
    const resKey = `${row.values[columnId]}`
    prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : []
    prev[resKey].push(row)
    return prev
  }, {})
  console.info(result)
  return result
}

export function groupByService(rows, columnId) {
  const result = rows.reduce((prev, row) => {
    const servicesList = row.values[columnId]

    servicesList.forEach(s => {
      prev[s] = Array.isArray(prev[s]) ? prev[s] : []
      prev[s].push(row)
    })

    return prev
  }, {})
  return result
}

export const customGroupBy = (rows, columnId) =>
  columnId === "services" ? groupByService(rows, columnId) : defaultGroupByFn(rows, columnId)
