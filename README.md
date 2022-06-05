# Westerplatte defenters
This is a website project for "Śladami Obrońców Westerplatte" competition organized by Zespół Szkół Łączności w Gdańsku im. "Obrońców Poczty Polskiej"

## Requirements
- node >= v17.5.0 - [download here](https://nodejs.org/en/)

## Basic Setup

1. Download project and unpack it or clone it using `git clone` with [git](https://git-scm.com/)
2. Open cmd/terminal
3. Go inside project's folder using `cd <path to the folder>`
4. Install all dependencies using `npm install`
5. Run `npm run build` to build the website (you need to do it every time you change something on website)
6. Run `npm run start` to start the website on port 3000

## Troubleshooting

- <b>Port 3000 is already in use.</b> <br>
You need to change `7` and `8` line of code in package.json, replace `3000` with different number (both of the lines need to have the same number)