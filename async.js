/************************************
PART 1
*************************************/
// For all exercises in part 1, uncomment lines 6-12

// const numList = document.querySelector('#numbers');
// const NUMURL = 'http://numbersapi.com/';

// function getNum(num) {
//     const resp = axios.get(`${NUMURL}${num}`);
//     return resp;
// }


//Exercise #1
//****************************** */
// async function getOneFact(num) {
//     const resp = await getNum(num);
//     console.log(resp.data);
// }

// getOneFact(13);



//Exercise #2
//****************************** */
// async function getMultiNums() {
//     const resp = await getNum('7,13,42,69');
//     for (num in resp.data) {
//         const newLI = document.createElement(`li`);
//         newLI.innerHTML = `${resp.data[num]}`;
//         numList.append(newLI);
//     }
// }
// getMultiNums();





//Exercise #3
//****************************** */

// async function getFourFacts(num) {

//     const proms = [];
//     const factArr = [];
//     for (let i = 0; i < 4; i++) {
//         proms[i] = getNum(num);
//     }
//     for (let i = 0; i < 4; i++) {
//         factArr[i] = await proms[i];
//     }
//     factArr.forEach((fact) => {
//         const newLI = document.createElement(`li`);
//         newLI.innerHTML = `${fact.data}`;
//         numList.append(newLI);
//     })
// }
// getFourFacts(42);

/*********************** */
//      OR
/*********************** */

// async function getFourFacts(num) {
//     const allFourFacts = [];
//     for (let i = 0; i < 4; i++) {
//         allFourFacts[i] = getNum(num);
//     }

//     Promise.all(allFourFacts)
//         .then(factArr => {
//             factArr.forEach((fact) => {
//                 const newLI = document.createElement(`li`);
//                 newLI.innerHTML = `${fact.data}`;
//                 numList.append(newLI);
//             })
//         }
//         )
// }
// getFourFacts(42);

/************************************
PART 2
*************************************/
// For all exercises in part 2, uncomment lines 90-102

// document.body.style.backgroundColor = 'green';
// function getDeck() {
//     const resp = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     return resp;
// };

// function getCards(numOfCards, deckID) {
//     const resp = axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numOfCards}`)
//         .then(resp => {
//             return resp.data.cards;
//         });
//     return resp;
// };


// Exercise #1
//****************************** */

// async function drawCard() {
//     let resp = await getDeck();
//     let deckID = resp.data.deck_id;
//     let card = await getCards(1, deckID);
//     console.log(`The card you drew was ${card[0].value} of ${card[0].suit}`);
// }

// drawCard();


// Exercise #2
//****************************** */

// async function drawTwoCards() {
//     let resp = await getDeck();
//     let deckID = resp.data.deck_id;
//     let cards = await getCards(2, deckID);
//     cards.forEach((card) => console.log(`The card you drew was ${card.value} of ${card.suit}`))
// }

// drawTwoCards();


// Exercise #3
//****************************** */

// const cardPile = document.getElementById('card-pile')
// let deckID;
// let count = 0;

// async function shuffleDeck() {
//     let resp = await getDeck();
//     deckID = resp.data.deck_id;
// }

// async function dealCard() {
//     try {
//         let card = await getCards(1, deckID);

//         if (!document.getElementById('card-frame')) {
//             const cardFrame = document.createElement('img');
//             cardFrame.setAttribute('id', 'card-frame');
//             cardFrame.setAttribute('src', card[0].image);
//             cardPile.appendChild(cardFrame);
//             count = 1;
//         } else {
//             const cardFrame = document.getElementById('card-frame');
//             cardFrame.setAttribute('src', card[0].image);
//             count = count + 1;
//         }

//         if (count >= 52) {
//             document.getElementById('draw-card').style.visibility = 'hidden';
//         }
//     } catch (err) { console.log('oops', err) }

// }

// window.onload = () => {
//     const drawCardBtn = document.createElement('button');
//     drawCardBtn.setAttribute('id', 'draw-card')
//     drawCardBtn.innerText = 'Draw a card!';
//     document.body.appendChild(drawCardBtn);
//     shuffleDeck();

//     cardPile.style.visibility = "visible";
//     const cardButton = document.getElementById('draw-card');
//     cardButton.addEventListener('click', (e) => {
//         e.preventDefault();
//         dealCard();
//     });
// };