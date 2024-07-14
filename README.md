# Blog App with Nextjs

<div align="center">
  <img src="./assets/blog.gif" />
</div>

## About the Project

This project I created with Nextjs contains the web version of the blog application. Users can view blog posts, create new posts, edit, delete, comment and like existing posts through this application after registering or logging in.

- Email: guest@site.com
- Password: aA?123456

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Skeleton](#project-skeleton)
- [Screenshots](#screenshots)

## Live Demo

[Blog App with Nextjs](https://blog-app-with-nextjs-fd.vercel.app/)

## Backend

- [Live](https://blog-app-api-iota.vercel.app)
- [Codes](https://github.com/furkan-dogu/BlogApp-API)

## Features

- Entry and registration procedures
- Pagination for smooth transitions between pages.
- Blog sections that you can add, delete and update yourself
- View and update user information

## Technologies Used

- React
- Nextjs
- Redux
- Redux-Toolkit
- Axios for API requests
- Styling with [Material UI](https://mui.com/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction/) for alert 
- [Redux-Persist](https://www.npmjs.com/package/redux-persist) for status data retention.
- [Formik](https://formik.org/) for form management 
- [Yup](https://www.npmjs.com/package/yup) for form validation processes

## Usage

- Create your registration from the Register section or log in from the login section
- Create your own blog
- Viewing blog posts, creating new posts, editing, deleting, commenting and liking existing posts.
- View and update the user information you registered with the site

## Project Skeleton

```
Blog App with Nextjs (folder)
│
├── app
│    ├── (private)
│    │     ├── detail 
│    │     │     └──  [detailId]
│    │     │           ├── components
│    │     │           │     ├── CommentBox.jsx
│    │     │           │     └── CommentCards.jsx
│    │     │           └── page.jsx               
│    │     ├── my-blogs 
│    │     │     ├── components
│    │     │     │     ├── DeleteModal.jsx
│    │     │     │     ├── MyBlogsCards.jsx
│    │     │     │     └── UpdateModal.jsx
│    │     │     └── page.jsx 
│    │     ├── new-blog 
│    │     │     └── page.jsx 
│    │     ├── profile 
│    │     │     ├── edit
│    │     │     │     └── page.jsx 
│    │     │     └── page.jsx
│    │     └── layout.jsx
│    ├── (public)
│    │     ├── about 
│    │     │     └── page.jsx
│    │     ├── login 
│    │     │     ├── components
│    │     │     │     └── LoginForm.jsx
│    │     │     └── page.jsx
│    │     └── register 
│    │           ├── components
│    │           │     └── RegisterForm.jsx
│    │           └── page.jsx
│    ├── layout.js    
│    ├── loading.jsx    
│    ├── not-found.jsx    
│    └── page.js    
├── assets
│    └── [images]
├── components
│    ├── Cards.jsx
│    ├── Footer.jsx
│    ├── MostVisited.jsx
│    ├── Navbar.jsx
│    └── Pagination.jsx
├── helpers
│    ├── navbarLinks.js
│    └── ToastNotify.jsx
├── hooks
│    ├── useAuthCalls.jsx
│    ├── useAxios.jsx
│    └── useBlogCalls.jsx
├── public
│    └── [images]
├── redux
│    ├──  features
│    │      ├── authSlice.jsx
│    │      └── blogSlice.jsx
│    ├── provider.jsx
│    └── store.jsx
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md
```

## Screenshots

<div align="center">
  <img src="./assets/screenshots/Screenshot_1.jpg"  width="35%" height="500" />
  <img src="./assets/screenshots/Screenshot_2.jpg"  width="55%" height="600" />
  <img src="./assets/screenshots/Screenshot_3.jpg"  width="90.5%" height="450" />
</div>

## Compatibility

The project is compatible with both wide-screen computers and mobile devices.