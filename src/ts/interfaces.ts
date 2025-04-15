// create interfaces

interface IProfessionistaMedia {
    nome: string,
    cognome: string,
    specializzazione: string,   // Giornalismo, regia, produzione, ecc.
    fotoProfilo?: string,       // Optionale
    partecipaProgramma(programma: IProgrammaFormazione): void //per iscriversi ad un programma di formazione
}

interface IProgrammaFormazione {
    nome: string,
    descrizione: string,
    ambitoSpecializzazione: string,
    durata: string,
    elencoPartecipanti: IProfessionistaMedia[], //array dei professionisti
    aggiungiPartecipante(professionista: IProfessionistaMedia):void //per aggiungere un professionista al programma
}

interface IPiattaforma {
    nome: string,
    tipo: string, //stampato, online, audiovisivo
    descrizione: string,
    categoriaContenuto: string[], //array di vategorie di contenuto
    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string, titoloFormazione: IProgrammaFormazione): void //per pubblicare un contenuto
}

export { IProfessionistaMedia, IProgrammaFormazione, IPiattaforma } //export interfaces