// import interfaces

import { IProfessionistaMedia, IProgrammaFormazione, IPiattaforma } from "./interfaces.js";

// create classes

class ProfessionistaMedia implements IProfessionistaMedia {
    constructor(
        public nome: string,
        public cognome: string,
        public specializzazione: string,
        public fotoProfilo?: string
    ) {}
    partecipaProgramma(programma: IProgrammaFormazione): void {
        programma.aggiungiPartecipante(this);
    }
}

class ProgrammaFormazione implements IProgrammaFormazione {
    constructor(
        public nome: string,
        public descrizione: string,
        public ambitoSpecializzazione: string,
        public durata: string,
        public elencoPartecipanti: IProfessionistaMedia[] = [],
    ) {}
    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        this.elencoPartecipanti.push(professionista);
        console.log(`
            Partecipante:
            ${professionista.nome} ${professionista.cognome}`
        )
    }
}

class Piattaforma implements IPiattaforma {
    constructor(
        public nome: string,
        public tipo: string,
        public descrizione: string,
        public categoriaContenuto: string[],
        public elencoContenuti: string[] = [],
    ) {}
    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string, titoloFormazione: IProgrammaFormazione): void {
        this.elencoContenuti.push(contenuto);
        console.log(
            `Contenuto "${contenuto}"
            pubblicato da: ${professionista.nome} ${professionista.cognome},
            per il programma "${titoloFormazione.nome}"
            della durata di ${titoloFormazione.durata}.
            Descrizione: ${titoloFormazione.descrizione}
            Ambito di specializzazione: ${titoloFormazione.ambitoSpecializzazione}
            `)}
}

export { ProfessionistaMedia, ProgrammaFormazione, Piattaforma } //export classes