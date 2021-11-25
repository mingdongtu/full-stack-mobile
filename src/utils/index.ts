class tools {
  dealMoney(value: number | string): {} {
    let integer, decimal
    if (value.toString().split('').includes('.')) {
      const income_array = value.toString().split('.')
      integer = income_array[0]
      decimal = `.${income_array[1]}`
      integer = integer
        .split('')
        .reverse()
        .map((item, index, array) => {
          if ((index + 1) % 3 === 0) {
            console.log(index, item)
            return `,${item}`
          } else {
            return item
          }
        })
        .reverse()
        .join('')
      console.log(integer)
      return {
        integer,
        decimal,
      }
    }
    return value.toString()
  }
}
const Utils = new tools()
export default Utils
