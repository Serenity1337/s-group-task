let rows = []

export const getRows = () => [...rows]

export const addNewRow = (entry) => {
  rows = [...rows, entry]
}

export const editRow = (entry, index) => {
  rows[index] = entry
}

export const deleteRow = (index) => {
  rows = rows.filter((row, rowIndex) => rowIndex !== index)
}
