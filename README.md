# Web Development Project 3 - Flashcards

Submitted by: Mariah Gonzakes

This web app: provides a set of 10 flashcards that are each displayed one by one. When a user clicks the "next arrow" button, it changes to the next card, and when the user clicks the "previous arrow" button, it changes to the previous card. If a user click's the "Shuffle" button, it changes to a randomly selected card. Every flashcard shows the question side first, even if the arrows are clicked while the user is on the answer side of their current card. When the flashcard is clicked, the flashcard then shows the answer side. Below the flashcards is a place for a user to enter what they think the answer on the back of the card is. When the "submit" button is clicked, the textbox they entered in is highlighted red for an incorrect answer, and green for a correct answer. They are not allowed to check their answer if they are on the answer side of the card - they must be on the question side. Above the flashcards is also 2 streak counts. One shows their current streak, which increments for every answer they correctly guess in a row, and the other shows their record streak, which increments as their current streak beats their record streak. Each card corresponds to a Snoopy theme to test the knowledge of the user with fun facts about the PEANUTS character!

Time spent: 10 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<div>
    <a href="https://www.loom.com/share/db2557a8a07e407a80ff8e4fdc288c45">
    </a>
    <a href="https://www.loom.com/share/db2557a8a07e407a80ff8e4fdc288c45">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/db2557a8a07e407a80ff8e4fdc288c45-with-play.gif">
    </a>
  </div>

<img src='https://cdn.loom.com/sessions/thumbnails/db2557a8a07e407a80ff8e4fdc288c45-with-play.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[Loom](https://loom.com) for macOS
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I struggled a lot with figuring out the styling of the input section and the streak text. Everything keot clashing with each other because tehy are all a part of the Flashcard component.

## License

    Copyright [2024] [Mariah Gonzales]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.