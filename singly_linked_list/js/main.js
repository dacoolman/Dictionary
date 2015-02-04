var SinglyLinkedList = require('./singly_linked_list');

var basketballTeams = new SinglyLinkedList();
basketballTeams.insert("Lakers", "head");
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celtics", "Blazers");
basketballTeams.insert("Kings", "Celtics");
basketballTeams.display();
console.log("\n\n\nRemoving Celtics");
basketballTeams.remove("Celtics");
basketballTeams.display();
