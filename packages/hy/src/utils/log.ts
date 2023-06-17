const info = (msg: string) => {
  console.log(`%c ${msg}`,'color: blue');
}

const error = (msg: string) => {
  console.log(`%c ${msg}`,'color: red');
}

const warn = (msg: string) => {
  console.log(`%c ${msg}`,'color: orange');
}

export default {
  info,
  error,
  warn,
}