export const loadField = (name = 'state') => {
  try {
    const serializedField = localStorage.getItem(name)
    if (serializedField === null) {
      return undefined
    }
    return JSON.parse(serializedField)
  } catch (error) {
    console.warn(error)
  }
}

export const saveField = (field, name = 'state') => {
  try {
    const serializedField = JSON.stringify(field)
    localStorage.setItem(name, serializedField)
  } catch (error) {
    console.warn(error)
  }
}

export const removeField = name => {
  localStorage.removeItem(name)
}
