# Password-Generator
Homework Week 3

## Table of Contents

1. Installation
2. Usage
3. Credits
4. License
5. URL

## Installation

Clone with SSH Key:
git@github.com:cwf1984/Password-Generator.git

Or use the URL listed below to pull up the live website.

## Usage

Using the given code, the following JavaScript code elements were added:
* Variables for each type of character chosen: numbers, uppercase letters, lowercase letters, and/or all special characters found at the following website: https://www.owasp.org/index.php/Password_special_characters (this link was provided in the readme file for the homework assignment).
* I used the split method to avoid having to put parenthesis around each character inside brackets when creating an array.
* In the function to generate a password, users are prompted for the length they want to use and to confirm which characters they want to include. If they confirm that they want the type of character included in their password, the characters in that array are pushed into a new array (charactersinPassword) which includes spread syntax and this was done with the help of my tutor.
* Within the generate password function is a for loop that is allowing the code to increment by one while repeating itself until the conditions of the password length are met. This uses a Math.random function to include the characters users confirmed they want in their password while picking characters randomly from those in the charactersInPassword array and this function is assigned to the password variable. 
* Once the for loop conditions are met, the password is returned as the function is fully executed. 
* The code at the bottom of the file is used to show the password in the box when the button is pressed and this was already provided as starter code for the homework.

## Credits

As I have said with each preceding homework assignment, I want to thank Bootcamp Spot, the University of Washington and Trilogy Eduction for the assignment and code they provided. This assignment was very challenging but also great practice into new material that is not easy to learn. Thank you to the instructor and TA's for their dedication and patience. I also want to give thanks to my tutor, Zach Auerbach, for the help he provided when I was almost there but just stuck.

## License

MIT License

Copyright (c) [2020] [Vanessa M]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## URL
https://cwf1984.github.io/Password-Generator/