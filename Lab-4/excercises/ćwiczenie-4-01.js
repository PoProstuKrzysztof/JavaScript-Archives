/**
 * Zdefiniuj klasę TodoTask opisująca zadanie do wykonania
Właściwości
  - title: nazwa zadania
  - description: opis tekstowy zadania
  - deadline: ostateczny termin (data i czas) na wykonanie zadania
  - finished: termin wykonania zadania, data ustawienia pola done na true
  - done: pole logiczne oznaczające wykonanie zadania
  - created: data i czas utworzenia zadania
 Utworzone konstruktorem zadanie powinno:
   - automatycznie dodawać bieżącą datę i czas w polu created
   - w polu done mieć wartość false
   - w polu finished mieć wartość null
Próba utworzenia zadania z terminem z przeszłości w deadline powinno zgłosić błąd (wyjątek)
W utworzonym zadaniu:
 - możliwa jest zmiana opisu (description)
 - możliwa jest zmiana deadline pod warunkiem, że jest większy (późniejszy) od bieżącej daty o jeden dzień, jeśli nie to należy zgłosić wyjątek
 - możliwe jest ustawienie zadania jako wykonane (`done` na true) tylko raz, 
 - niemożliwe jest ustawianie pola finished, które powinno być automatycznie wypełniane (bieżąca data i czas) w chwili ustawienie done na true
 - niemożliwe jest ustawienia zadania jako wykonanego ( `done` na true), jeśli bieżąca data jest późniejsza od deadline.
 - zadanie po zatwierdzeniu lub po przekroczeniu deadlin'u nie może być zmieniane tzn. wywołanie któregokolwiek setter'a powinno zgłaszać wyjątek.
Parametry konstruktora
- tytuł (title)
- opis (description)
- planowany termin zakończenia (deadline)
- funkcję (callback bez argumentów) zwracający bieżącą datę
Klasa ustawia datę zakończenia i utworzenia wywołując callback z konstruktora.
Przykład korzystania z klasy:
const task = new TodoTask("JavaScript","Nauczyć się JavaScript'u", new Date(Date.parse("2024-01-30T00:00:00")), () => new Date(Date.now()));
console.log(task.title);
console.log(task.description);
console.log(task.done);
console.log(task.created);
task.done = true;
console.log(task.finished);
Uwaga
Zamiast znaku '#' użyj '_' do tworzenia pól prywatnych klasy TodoTask.

Zdefiniuj seter dla pola finished zgłaszający wyjątek
 */
class TodoTask {
    constructor(title, description, deadline, callback) {
        if (deadline < Date.now()) {
            throw new Error("Wrong date");
        }

        this.title = title;
        this._description = description;
        this._deadline = deadline;
        this._created = Date.now();
        this._done = false;
        this._finished = null;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        if (typeof value === "string" && !this._done) {
            this._description = value;
        } else {
            throw new Error();
        }
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value instanceof Date && value > this._created && !this._done && value < this._deadline) {
            this._deadline = value;
        } else {
            throw new Error();
        }
    }

    

    get done() {
        return this._done;
    }

    set done(value) {
        if (typeof value === "boolean" && !this._done && Date.now() <= this._deadline) {
            this._done = value;
            this._finished = this._done ? new Date(Date.now()) : null;


        } else {
            throw new Error();
        }
    }

    get title(){
        return this._title;
    }


    set title(value) {
        if (typeof value === "string" && value !== "" && !this._done) {
            this._title = value;
        } else {
            throw new Error();
        }
    }
    get finished() {
        return this._finished;
    }

    set finished(value) {
        throw new Error();
    }

    get created(){
        return this._created;
    }

    set created(value){
throw new Error();
    }
}




//Uwaga! Testy działają tylko w dniu zajęć tj. 26.11.2022
const now = () => new Date(Date.now());
const deadline = now();

let task = new TodoTask("title", "description", deadline, now);
try{
  task.deadline = new Date(Date.parse("2000-10-10"));
  console.log("Failed");
} catch {
  console.log("Passed");
}
try{
   task.done = true;
   console.log("Failed");
} catch {
   console.log("Passed");
}
/**try{
   task.description = "new";
   console.log("Failed");
} catch {
   console.log("1 Passed");
}

try{
   task.done = false;
   console.log("Failed");
} catch {
   console.log("2 Passed");
}
try{
   task.title = "";
   console.log("Failed");
} catch {
   console.log("3 Passed");
}
try{
   task.finished = null;
   console.log("Failed");
} catch {
   console.log("4 Passed");
}
if (task.finished.toString() === new Date(Date.now()).toString()){
   console.log("5 Passed");
} else {
   console.log("Failed");
}
*/



