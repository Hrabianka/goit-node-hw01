Screeny: 
1. # Otrzymujemy i wyprowadzamy całą listę kontaktów w postaci tabeli (console.table)
node index.js --action list
![alt text](1.png)

2. # Otrzymujemy kontakt po id
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
![alt text](<2 .png>)

3. # Dodajemy kontakt
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![alt text](3.png)

4. # Usuwamy kontakt
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
![alt text](4.png)