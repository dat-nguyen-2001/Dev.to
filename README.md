# Dev.to social webapp
![devto](https://user-images.githubusercontent.com/94024020/197679626-24a4f4f2-cb92-4e74-8144-bfe9feeca1dc.png)

If you want to check out my Front-end codebase, click [here](https://github.com/dat-nguyen-2001/Dev.to-Client)

### Build With

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### Installation

1. Clone the repo (BOTH client and server)

```sh
    git clone https://github.com/dat-nguyen-2001/Dev.to-Client.git
    git clone https://github.com/dat-nguyen-2001/Dev.to-Backend.git
```

2. Install NPM packages

```sh
    npm install
```

3. Enter your own Environment variables

```sh
    DB_URL = ""
    DB_PASSWORD = ""
    DB_HOST = ""
    DB_DATABASE = ""
    JWT_SECRET = ""
    JWT_REFRESHTOKEN = ""
```

4. Run

```sh
    npm run start:dev  -- at the server side
    npm run start  -- at the client side
```

## The Project

As this is a social networking site, registration is needed for users to experience all of Image Lazer's features:

- Create your own articles about programmer's topics.
- Like other articles.
- Save people's posts to your reading list for later read.
- Search for articles in your interests.
- Look into the details of an article.
- Commenting on different articles.
- And of course you can also change your personal information (avatar, interests, etc...)

...

### Project Architecture

![image](https://user-images.githubusercontent.com/94024020/197681014-898722a1-0183-4438-8887-53a1572b740f.png)

- LIKE MODULE : Deals with the liking mechanisms.
- COMMENT MODULE : Provides commenting feature.
- ARTICLE MODULE : Handles user interactions with articles.
- READINGLIST MODULE : Provides the function to save other people's articles.
- USER MODULE: Provides login, logout, create articles, save articles, comment, like feature for users.

=>All modules will be included in APP MODULE to ensure the encapsulation of the application.

### Future development

As the web is developed by only one developer (me),due to the limited time, knowledge and resources, it could not serve full features of a social webapp like Facebook, twitter, etc. In the future, by updating new technologies as well as when there's demand, I'll add some more features to the app:

1. Allow users to follow other users
2. Allow users to chat with the others.
3. Allow users to get notifications about the articles/users they're following.

### Contact
If you want to contact me you can reach me at datnguyenftu210@gmail.com.
My linkedin : https://www.linkedin.com/in/datnguyen210
