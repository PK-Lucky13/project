class hero {
  constructor(name, age, type){
    this.name = name
    this.age = age
    this.type = type
    this.weapon
    this.attack = ["magia", "espada", "artes marciais", "shuriken"]
  }
  atacar(){
    switch(true){
      case this.type == "mago":
        this.weapon = this.attack[0]
        break
      case this.type == "guerreiro":
        this.weapon = this.attack[1]
        break
      case this.type == "monge":
        this.weapon = this.attack[2]
      break
      case this.type == "ninja":
        this.weapon = this.attack[3]
      break
      default:
        console.log("Classe inválida de herói.")
    }
    console.log(`O ${this.type} atacou usando ${this.weapon}`)
  }
}

let raphael = new hero("Raphael", "25", "guerreiro")
raphael.atacar()
