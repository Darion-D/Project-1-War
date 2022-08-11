# Darion Daire Project-1-War

War is a card game where the goal is to abtain all 52 cards. You do so by drawing a card from the top of your deck and comparing its value to your opponent's card. The winner then takes both cards and adds it to the bottom of their deck. In the case that both values are equal you now enter in the "War" phase. In the war phase both players place 3 cards face down and 1 card face up. The player with the higher value of the face up card presented takes all cards put in play. If the values are again equal, you repeat the steps in war until a winner is determined.

# Screenshots

<img width="1438" alt="image" src="https://user-images.githubusercontent.com/108094070/184205388-09e282b8-35f4-4200-828d-6b607f75d05a.png">


The very first screen you see has the rules modal open and the game board hidden until you click the "play" button.

<img width="1430" alt="image" src="https://user-images.githubusercontent.com/108094070/184207146-1a58f301-2d68-4f4c-9a82-18c449ded6f5.png">

Once "Play" is clicked you will see the gameboard with the players deck and current card on the left side and the same for the dealer on the right. The "Play" button also changes to "Reset" to better represent its function.


<img width="1419" alt="image" src="https://user-images.githubusercontent.com/108094070/184208152-12d659c3-3c05-4b89-b4a5-32853d5e293e.png">

When "Draw" is clicked the cards put into play and a winner for the round is determined. The cards are generated using DOM manipulation ofthe cards suit and value.

<img width="1318" alt="image" src="https://user-images.githubusercontent.com/108094070/184208477-55d2f32d-a2af-4827-bedd-c91c055253f7.png">

When a winner is determined (win condition currently set to 32 cards or greater), the background changes to the color of the winners deck.

# Technologies Used

I used HTML to structure the elements in the correct order.

CSS was used to style the board and position the values for each card.

JavaScript took care of the functionality of the game and DOM manipulation.

# Biggest Challenges

<img width="939" alt="image" src="https://user-images.githubusercontent.com/108094070/184209958-91534773-c16b-4707-827d-95cb07385383.png">

The challenge that I overcame was being able to use recursion in the "War" function part of the game.

<img width="574" alt="image" src="https://user-images.githubusercontent.com/108094070/184210349-62564271-9ac5-4e06-91b7-df7a158642e3.png">

I also found creating the function to dynamically show the cards in play to be challenging and fun to make.

# Game Link

https://darion-d.github.io/Project-1-War/

# Next Steps

I would have liked to add animations for cards being played one at a time, insted of instantly. Especially for the war phase of tthe game. I also would have like to find a way to make the "War" phase stand out more. 
