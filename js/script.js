
  /*---- whichPolitician factory function -----*/
 var whichPolitician = function (name, color) {

   /*----- politician object -----*/
   var politician = {};
   politician.name = name;
   politician.electionResults = null;
   politician.totalVotes = 0;
   politician.color = color;

   /*----- tallyTotalVotes function - adds up state results for total results -----*/
   politician.tallyTotalVotes = function() {
   this.totalVotes = 0;
   for (var i = 0; i < this.electionResults.length; i++)
     {
     this.totalVotes = this.totalVotes + this.electionResults[i];
     /*console.log(this.totalVotes);*/
     }
   }; //tallyTotalVotes function ends here
   return politician; /*the object you want to return in the whichPolitician() function*/
 }; //whichPolitician function ends here

 /*----- specify politician names and party colors -----*/
 var candidate1 = whichPolitician("Leisha Hailey", [132, 17, 11]);
 var candidate2 = whichPolitician("Katherine Moennig", [245, 141, 136]);

 /*----- electionResults Arrays -----*/
 candidate1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,
3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,
15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
 candidate2.electionResults = [4,2,4,4,22,3,3,1,2,15,
8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,
0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

 /*----- updated electionResults -----*/
 candidate1.electionResults[9] = 1;
 candidate2.electionResults[9] = 28;

 candidate1.electionResults[4] = 17;
 candidate2.electionResults[4] = 38;

 candidate1.electionResults[43] = 11;
 candidate2.electionResults[43] = 27;

 candidate1.tallyTotalVotes(); //assigns tally of votes to candidate
 candidate2.tallyTotalVotes();
 console.log(candidate1.totalVotes);//prints totalVotes
 console.log(candidate2.totalVotes);

 console.log(candidate1.electionResults);/*prints updated electionResults arrays*/
 console.log(candidate2.electionResults);

 /*----- setStateResults function - declares winner -----*/
 var setStateResults = function (state) {
   theStates[state].winner = null;
   if (candidate1.electionResults[state] > candidate2.electionResults[state])
   {
     theStates[state].winner = candidate1; //sets the winner to candidate object, not candidate name
   } else if (candidate2.electionResults[state] > candidate1.electionResults[state]) {
     theStates[state].winner = candidate2;
   }

   /*----- sets the color of the state based on winner -----*/
   //if the winner is not null, then set the state color to the candidate's color. If it's a draw, then turn the state to blue.
   var stateWinner = theStates[state].winner;

     if (stateWinner !== null) {
       theStates[state].rgbColor = stateWinner.color;
     } else {
       theStates[state].rgbColor = [11,32,57];
     }

 /*----- upper table -----*/
 var countryResultsTable = document.getElementById("countryResults");
 var row = countryResultsTable.children[0].children[0];

   row.children[0].innerText = candidate1.name;
   row.children[1].innerText = candidate1.totalVotes;
   row.children[2].innerText = candidate2.name;
   row.children[3].innerText = candidate2.totalVotes;
   row.children[5].innerText = winner;

 /*----- lower interactive table -----*/
 var stateResultsTable = document.getElementById("stateResults");
 var header = stateResultsTable.children[0].children[0];
 var stateName = header.children[0];
 var stateAbbrev = header.children[1];

   stateName.innerText = theStates[state].nameFull;
   stateAbbrev.innerText = theStates[state].nameAbbrev;

 var tableRow1 = stateResultsTable.children[1].children[0];
 var tableRow2 = stateResultsTable.children[1].children[1];
 var tableRow3 = stateResultsTable.children[1].children[2];

 var candidate1name = tableRow1.children[0];
 var candidate1results = tableRow1.children[1];
 var candidate2name = tableRow2.children[0];
 var candidate2results = tableRow2.children[1];
 var winnersName = tableRow3.children[1];

   candidate1name.innerText = candidate1.name;
   candidate2name.innerText = candidate2.name;
   candidate1results.innerText = candidate1.electionResults[state];
   candidate2results.innerText = candidate2.electionResults[state];

     if (theStates[state].winner === null){
       winnersName.innerText = "DRAW";
     }else{
       winnersName.innerText = theStates[state].winner.name;
     }
 }; //setStateResults function ends here

     /*-----winner-----*/
 var winner = "???"; /*empty string*/
 if (candidate1.totalVotes > candidate2.totalVotes) {
   winner = candidate1.name;
 } else if (candidate2.totalVotes > candidate1.totalVotes) {
   winner = candidate2.name;
 } else {
   winner = "DRAW!";
 }

 /*----- Print Out -----*/

 console.log("Candidate 1's color is: " + candidate1.color); /*prints candidate party color*/
 console.log("Candidate 2's color is: " + candidate2.color);

 console.log("Candidate 1's total votes are: " + candidate1.totalVotes);
 console.log("Candidate 2's total votes are: " + candidate2.totalVotes);

 console.log("The winner is: " + winner + "!");
