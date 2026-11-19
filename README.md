# tn-portfolio

Personal portfolio site for Tyler Nguyen, built with React, TypeScript, Sass, and webpack.

## Getting started

Requires Node.js 18 or newer.

```sh
npm install      # installs the client's dependencies
npm start        # dev server with hot reload, opens in the browser
npm run build    # production build into client/dist
```

### Testing on a phone

`npm run start:lan` starts the dev server on all network interfaces. With your
phone on the same Wi-Fi as your computer, open `http://<your-computer-ip>:8080`
(the IP is printed as "On Your Network" when the server starts).

## Layout

```
client/
  public/index.html     HTML template
  src/
    components/         Banner, About, Experience, Contact, Footer
    assets/             fonts, icons, images, resume.pdf
    util/iconPicker.tsx tech-stack icon lookup
  webpack.config.js
```

Experience entries live in `client/src/components/Experience/Tabs/constants.ts`.
