import { MockDataOptions } from './interface'

class Mock {
  string (length: number = 10): string {
    const characters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  number (min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  boolean (): boolean {
    return Math.random() < 0.5
  }

  date (): Date {
    const start = new Date(1970, 0, 1)
    const end = new Date()
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
  }

  time (): string {
    const hours = this.number(0, 23)
      .toString()
      .padStart(2, '0')
    const minutes = this.number(0, 59)
      .toString()
      .padStart(2, '0')
    const seconds = this.number(0, 59)
      .toString()
      .padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  datetime (): string {
    const date = this.date()
    const year = date
      .getFullYear()
      .toString()
      .padStart(4, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date
      .getDate()
      .toString()
      .padStart(2, '0')
    const time = this.time()
    return `${year}-${month}-${day} ${time}`
  }

  array (length: number, generator: () => any): any[] {
    const result = []
    for (let i = 0; i < length; i++) {
      result.push(generator())
    }
    return result
  }

  object (options: MockDataOptions): any {
    const result = {}
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        result[key] = this.custom(options[key])
      }
    }
    return result
  }

  custom (generator: () => any): any {
    return generator()
  }

  rule (type: string, options: MockDataOptions = {}): any {
    switch (type) {
      case 'string':
        const length = options.length || 10
        return this.string(length)
      case 'number':
        const min = options.min || 0
        const max = options.max || 100
        return this.number(min, max)
      case 'boolean':
        return this.boolean()
      case 'date':
        return this.date()
      case 'time':
        return this.time()
      case 'datetime':
        return this.datetime()
      default:
        return null
    }
  }

  template (template: any): any {
    if (Array.isArray(template)) {
      return template.map(item => this.template(item))
    } else if (typeof template === 'object') {
      const result = {}
      for (const key in template) {
        if (template.hasOwnProperty(key)) {
          result[key] = this.template(template[key])
        }
      }
      return result
    } else if (typeof template === 'string') {
      const match = template.match(/^(\w+)\((.*)\)$/)
      if (match) {
        const type = match[1]
        const options = match[2].split(',').reduce((result, item) => {
          const [key, value] = item.split(':')
          result[key] = value
          return result
        }, {})
        return this.rule(type, options)
      } else {
        return template
      }
    } else {
      return template
    }
  }

  generate (count: number, generator: () => any): any[] {
    const result = []
    for (let i = 0; i < count; i++) {
      result.push(generator())
    }
    return result
  }
}

export default Mock
