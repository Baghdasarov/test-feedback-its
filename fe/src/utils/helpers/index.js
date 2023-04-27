export const replaceNonAscii = (str) => {
  const normalizedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  return normalizedStr.replace(/[^\x00-\x7F]/g, function (char) {
    const asciiChar = char.charCodeAt(0)
    if (asciiChar === 8217) {
      return "'"
    } else if (asciiChar === 8211 || asciiChar === 8212) {
      return '-'
    } else {
      return ''
    }
  })
}
