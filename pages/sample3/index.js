const createMatrix = (list, colN) => {
  const reduceFun = colN => (matrix, cur, index) =>
    index % colN === 0
        [...matrix, [cur]]
        [...matrix.slice(0, -1), [...matrix.at(-1), cur]]
  return list.reduce(reduceFun(colN), [])
}

const range = (n, fn) => [...Array(n).keys()].map(fn)
const add = n => m => n + m
const add1 = add(1)
const matrix = createMatrix(range(9, add1), 3)
matrix.map(row => <div className= 'row'>row.map(col => <square 
value = {col}</div>))
