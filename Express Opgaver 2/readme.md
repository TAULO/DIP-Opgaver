Den udleverede express-app indeholder en express.js-applikation, hvor filerne _index.js_, _index.pug_ og _app.js_ skal
modificeres for at lave nedenstående webapplikation.

Webapplikationen skal have følgende egenskaber

1. Et _GET/vaerktoj_ endpoint , der returnerer en html side genereret ved hjælp af _index.pug_ templaten med
    1. En liste af værktøj,som viser navnet på værktøjet
    2. Et felt til _antal_ værktøj
    3. Et _inputfelt_ til _indtastning_ af et nyt værktøj
    4. En ’Tilføj værktøj’ _knap_ der tilføjer det værktøj til listen som er indtastet i inputfeltet.

2. Værktøjs listen skal gemmes serverside i express-session objektet hvortil, der skal implementeres
    1. Et POST/vaerktøj endpoint som opdaterer session objektet med det nye værktøj

3. På klient siden i index.js skal følgende funktionalitet implementeres

    1. Ved klik på knappen skal der _postes_ et værktøj til serveren og sessionsobjektet på serveren skal opdateres med
       det nye værktøj.
    2. Websiden skal gendannes med opdaterede værktøjsliste og antal.
    3. Hvis tekstfeltet er tomt, skal der istedet vises en fejlmeddelelse.
    4. Tekst feltet skal tømmes efter succesfuld post.
