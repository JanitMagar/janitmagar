# Janit Saru Magar Portfolio

A beginner-friendly React project written in JavaScript and JSX. The CSS is kept in its own file, and the portfolio information, page components, and image files have their own folders.

## Run the website

1. Install Node.js if it is not already on your computer.
2. Open a terminal in this project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address printed in the terminal.

To make a production build, run `npm run build`.

## Folder guide

- `src/App.jsx` puts the page sections together.
- `src/components/` contains small pieces that are reused on the page.
- `src/data/portfolioData.js` holds the text for skills, work, projects, education, and certificates.
- `src/styles.css` contains the website styles.
- `public/assets/` contains the organization logos and certificate images.

## Change portfolio information

Edit the matching list in `src/data/portfolioData.js`. For example, work cards are in `experiences`, and school details are in `education`.

Void Nepal is listed only for QA/QC testing. Marketing, community engagement, platform operations, and web management are listed separately under Ethical HCK Community.

## Update the contact links

Open `src/data/portfolioData.js` and replace the sample email address and profile URLs in `contactEmail` and `contactLinks` with your real details. The message form opens the visitor's email application and does not store or send messages through a server.

The three certificate images are stored in `public/assets/certificates/`. Their titles, descriptions, and image paths are listed in the `certificates` array in `src/data/portfolioData.js`.
