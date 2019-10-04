//This code was adapted from https://medium.com/@rodrwan/dictionaries-en-js-e2abd196f720
class Dictionary {
    constructor () {
    this.items = {}
  }
    has (key) {
    return this.items.hasOwnProperty(key)	
  }
    set (key, value) {
    this.items[key] = value
  }
    remove (key) {
      if (this.has(key)) {
        delete this.items[key]
      return true
    }
    return false
    }
  get (key) {
    return this.has(key) ? this.items[key] : undefined
  }
  values () {
    return Object.values(this.items)
  }

  size () {
    return Object.keys(this.items).length
  }
  
  keys () {
    return Object.keys(this.items)
  }
  getItems () {
    return this.items
  }
}


const dict = new Dictionary()

dict.set('Jonathan', 'jsolis9@gucol.mx')
dict.set('Luis Salas', 'lsalas@ucol.mx')
dict.set('Tyrion', 'tyrion@email.com')
dict.set('Diego', 'dvillasenor@ucol.mx')
dict.set('Enrique', 'jruvalcaba1@ucol.mx')

dict.set('Edad:',19)

console.log('HAS', dict.has('Gandalf'))
console.log('SIZE', dict.size())
console.log('KEYS', dict.keys())
console.log('VALUES', dict.values())
console.log('GET', dict.get('Tyrion'))

console.log('REMOVE', dict.remove('John'))
console.log('KEYS', dict.keys())
console.log('VALUES', dict.values())

console.log('GET ITEMS', dict.getItems())

//Pues hay que definir los campos
