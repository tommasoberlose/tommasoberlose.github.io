# Sito Web Dott.ssa Virginia Berlose - Istruzioni per la Produzione

Questo progetto è stato configurato per utilizzare Tailwind CSS con un processo di build, che è l'approccio consigliato per un sito web di produzione. Questo garantisce prestazioni ottimali creando un singolo file CSS di piccole dimensioni, contenente solo gli stili effettivamente utilizzati nella pagina.

## Prerequisiti

Prima di iniziare, assicurati di avere installato sul tuo computer:

* [Node.js](https://nodejs.org/) (che include npm)

## Installazione e Avvio

Segui questi passaggi per generare il file `output.css` e visualizzare il sito correttamente.

### 1. Scarica i File

Assicurati di avere tutti i file di questo progetto nella stessa cartella:

* `index.html`

* `package.json`

* `tailwind.config.js`

* `input.css`

### 2. Installa le Dipendenze

Apri un terminale (o prompt dei comandi) nella cartella del progetto e lancia il seguente comando per installare Tailwind CSS:

```
npm install

```

Questo comando leggerà il file `package.json` e installerà le dipendenze necessarie.

### 3. Compila il CSS per la Produzione

Una volta completata l'installazione, puoi generare il file CSS finale. Lancia questo comando:

```
npm run build

```

Questo comando eseguirà lo script definito in `package.json`, scansionerà il file `index.html` in cerca delle classi Tailwind utilizzate e genererà un nuovo file chiamato `output.css` nella stessa cartella. Questo è il file CSS ottimizzato che verrà utilizzato dal tuo sito.

### 4. Sviluppo (Opzionale)

Se hai bisogno di fare ulteriori modifiche al design, puoi avviare Tailwind in modalità "watch". In questo modo, ogni modifica che salverai nel file `index.html` causerà una ricompilazione automatica del file `output.css`.

Per avviare la modalità "watch", usa il comando:

```
npm run watch

```

Lascia il terminale aperto mentre lavori. Per fermarlo, premi `Ctrl + C`.

### 5. Apri il Sito

Ora puoi aprire il file `index.html` direttamente nel tuo browser. Verrà caricato con gli stili corretti dal file `output.css` che hai appena generato.
