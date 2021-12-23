
# Capstone

### By Seb Patin

### Project Summary


### Models

The model is representative of the notes taken for a song

- title: String
- Lyrics: String
- chords: String

### Route Table

List your routes in a table

| url                 | method | action                                 |        |
|---------------------|--------|----------------------------------------|--------|
| /notes           | get    | get all songs                            index  |
| /notes/:id       | get    | view a specific song entry                   | show   |
| /notes/:id/new   | post    | make a new song entry                  | new    |
| /notes/          | put   | creates the new song entry                | create |
| /notes/:id/edit  | get    | edit any item on the index              | edit   |
| /notes/:id/      | put    | update the edited item from the list   | update |
| /notes/:id       | delete | delete any song                        | delete |

### User Stories
- User will be able take notes about new songs they want to write
- User will be able to update information on the songs 
- User will be able to delete song entries
- User will be able to view all song entries


### Challenges

### Design
The design aspect of this project was a lot less spectacular than expected.  The responsiveness is decent however the design is extremely flat and nothing crazy.  Wish I could've used more animation like anime.js and will continue this further.  I also could've implemented Sass better than I did last time.

### Extra Features failed
I attempted user auth however that proved to be extremely difficult with many random seeming issues arising that it took a few days, which I didn't have time to work on.

### Deploying
Heroku began to reject my code for a few hours, where all I needed was to not hardcode the port.  Definitely hardcore learned a lot from that

## Typescript
Using typescript was definitely the hardest challenge.

From setup to finish, my understanding of typescript has improved immensely.  The concept of using types and extreme syntax error catching is very useful and may become one of my main languages.  Also, the customization that tsconfig is a whole world of its own.  With all this said I did have issues with typing, learning what types to import, and what types I could actually use

- React 

React with typescript was a massive headache due to some random points where typing and vanilla JS was needed.  Also the errors on site were also not always helpful due to them referring to the vanilla JS

- Express

Revisiting Express with Typescript didn't prove to be the most difficult until deploying.  This came with a few drawbacks as to how I saw Typescript vs Javascript in deploying and how accessible each is to deployment

##### I plan to implement: 
- user authentification
- animations using Anime.js
- better more appealing design
- More organized structures
- Instrumentation implementation
- Responsive notifications 

### List of Technologies
- Typescript
- CSS/Sass
- React
- JavaScript
- Express