// class Personnage {
//   constructor(pseudo, classe, sante, attaque, niveau) {
//     this.pseudo = pseudo;
//     this.classe = classe;
//     this.sante = sante;
//     this.attaque = attaque;
//     this.niveau = niveau;
//   }
//   get informations() {
//     return (
//       this.pseudo +
//       " (" +
//       this.classe +
//       ") a " +
//       this.sante +
//       " points de vie et est au niveau " +
//       this.niveau +
//       "."
//     );
//   }
//   evoluer() {
//     this.niveau += 1;
//     console.log(this.pseudo + " (" + this.classe + ") passe au niveau " + this.niveau + " !"
//     );
//   }
//   verifierSante() {
//     if (this.sante <= 0) {
//         this.sante = 0;
//       console.log(this.pseudo + " a perdu !"
//       );
//     }
//     else{
//         console.log(
//           this.pseudo + " (" + this.classe + ") a une santé de " + this.sante + " points de vie et est au niveau " + this.niveau
//         );
//     }
//   }
// }

// class Magicien extends Personnage {
//   constructor(pseudo, classe, sante, attaque, niveau) {
//     super(pseudo, "magicien", 170, 90, 1 /*classe, sante, attaque, niveau*/);
//   }
//   attaquer(personnageAdverse) {
//     personnageAdverse.sante -= this.attaque;
//     console.log(this.pseudo + " attaque " + personnageAdverse.pseudo + " en lançant un sort ( " + this.attaque + " dégâts)");
//   }
//   coupDouble(personnageAdverse) {
//     personnageAdverse.sante = personnageAdverse.sante - (this.attaque * 5);
//     console.log(this.pseudo + " attaque " + personnageAdverse.pseudo + " en lançant une double attaque ( " + (this.attaque * 5) + " dégâts)");
//   }
// }

// class Guerrier extends Personnage {
//   constructor(pseudo, classe, sante, attaque, niveau) {
//     super(pseudo, "guerrier", 350, 50, 1/*classe, sante, attaque, niveau*/);
//   }
//   attaquer(personnageAdverse) {
//      personnageAdverse.sante = personnageAdverse.sante - this.attaque;
//     console.log(
//       this.pseudo +
//         " attaque " +
//         personnageAdverse.pseudo +
//         " avec une épée ( " +
//         this.attaque +
//         " dégâts)"
//     );
//   }
// }

// var PersonnageThor = new Guerrier("Thor"/*, "guerrier", 350, 50, 1*/);
// var PersonnageGandalf = new Magicien("Gandalf"/*, "magicien", 170, 90, 1*/);

// console.log(PersonnageThor.informations);
// console.log(PersonnageGandalf.informations);

// PersonnageGandalf.attaquer(PersonnageThor);
// PersonnageGandalf.evoluer();
// PersonnageThor.verifierSante();
// PersonnageThor.attaquer(PersonnageGandalf);
// PersonnageThor.evoluer();
// PersonnageGandalf.verifierSante();
// PersonnageGandalf.coupDouble(PersonnageThor);
// PersonnageThor.verifierSante();
// //console.log(personnageAdverse.informations);

class Personnage {
  constructor(pseudo, classe, sante, attaque){
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }
  get informations() {
    return this.pseudo + " ( " + this.classe + " ) a " + this.sante + " points de vie et est au niveau " + this.niveau; 
  }
  evoluer() {
    this.niveau ++;
    console.log(this.pseudo + " passe au niveau " + this.niveau);
  }
  verifierSante() {
    if (this.sante <= 0) {
      this.sante == 0;
      console.log(this.pseudo + " a perdu");
    }
  }
}

class Magicien extends Personnage {
  constructor(pseudo, classe, sante, attaque) {
    super(pseudo, "Magicien", 170, 90);
  }
  attaquer(personnageAdverse) {
    personnageAdverse.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnageAdverse.pseudo +
        " en lançant un sort ( " +
        this.attaque +
        " dégâts! )"
    );
    this.evoluer(); // Ici this.evoluer fait evoluer le personnage courant c-a-d Gandalf
    personnageAdverse.verifierSante();
  }
  coupsSpecial(personnageAdverse) {
    personnageAdverse.sante -= this.attaque * 5;
    console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + personnageAdverse.pseudo + " ( " + (this.attaque * 5) + " dégâts)" );
    this.evoluer();
    personnageAdverse.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo, classe, sante, attaque) {
    super(pseudo, "Guerrier", 350, 50);
  }
  attaquer(personnageAdverse) {
    personnageAdverse.sante -= this.attaque;
    console.log(this.pseudo + " attaque " + personnageAdverse.pseudo + " avec son épée ( " + this.attaque + " dégâts )");
    this.evoluer(); // Ici this.evoluer fait evoluer le personnage courant c-a-d Thor
    personnageAdverse.verifierSante();
  }
  coupsSpecial(personnageAdverse) {
    personnageAdverse.sante -= this.attaque * 5;
    console.log(this.pseudo + " attaque avec son coup spécial haches de guerre" + personnageAdverse.pseudo + " ( " + (this.attaque * 5) + " dégâts)");
    this.evoluer();
    personnageAdverse.verifierSante();
  }
}

var gandalf = new Magicien("Gandalf");
var thor = new Guerrier("Thor");

console.log(gandalf.informations);
console.log(thor.informations);

gandalf.attaquer(thor);
console.log(thor.informations);

thor.attaquer(gandalf);
console.log(gandalf.informations);

thor.coupsSpecial(gandalf);

