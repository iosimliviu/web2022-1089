# TOPIC: Javascript

# Având funcția `hash(input, dictionary)` unde:
- `input` este un string (ex. "The dog is walking fast")
- `dictionary` este un vector ce conține o serie de string-uri (ex. ['walking', 'fast'])

# Completați următoarele cerințe:
- `input` trebuie să fie de tip `string`. Dacă este dat un input de alt tip se va arunca un `Error` cu mesajul `Input should be a string`; (20%)
- `dictionary` este un vector de elemente de tip `string`. Dacă cel puțin un element nu este `string` se va arunca un `Error` cu mesajul `Invalid dictionary format`; (20%)
- Dacă `dictionary` conține cuvinte, acestea vor fi înlocuite în `input` cu regula ca prima literă să fie urmată de o serie de caractere `#`, urmate de ultima literă. Lungimea cuvântului rezultat este acceași ca a celui inițial (ex. 'walking' va deveni 'w#####g') ; (20%)
- Funcția returnează un string nou, `input` rămânând modificat; (20%)
- Funcția returnează rezultatul corect și pentru cuvinte care încep cu litere mari. (20%)