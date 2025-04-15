// import classes
import { ProfessionistaMedia, ProgrammaFormazione, Piattaforma } from "./classes";


// create instances of classes

//Video
const professionistaM = new ProfessionistaMedia('Martina', 'Bianchi', 'Videomaker', 'martina.jpg');
const professionistaG = new ProfessionistaMedia('Giulia', 'Neri', 'Graphic Designer', 'giulia.jpg');
const professionistaF = new ProfessionistaMedia('Francesca', 'Verdi', 'Fotografa', 'francesca.jpg');

//Giornalismo
const professionistaL = new ProfessionistaMedia('Laura', 'Rossi', 'Giornalista', 'Laura.jpg');
const professionistaS = new ProfessionistaMedia('Simona', 'Gallo', 'Social Media Manager', 'simona.jpg');

// create instances programs

const programmaMedia = new ProgrammaFormazione('Corso di Giornalismo', 'Corso di giornalismo', 'Giornalismo', '3 Mesi', [professionistaL, professionistaS]);
const programmaVideo = new ProgrammaFormazione('Corso di Videomaking', 'Corso di videomaking', 'Videomaking', '3 Mesi', [professionistaM, professionistaG, professionistaF]);

// 

// create instances platform

const giornalismo = new Piattaforma('Piattaforma Formazione', 'Online', 'Piattaforma di formazione online', ['Giornalismo', 'Fotografia']);
const video = new Piattaforma('Piattaforma Video', 'Online', 'Piattaforma di video online', ['Videomaking', 'Editing']);
// publish content

// add participants to the program

professionistaL.partecipaProgramma(programmaMedia);
//
professionistaM.partecipaProgramma(programmaVideo);