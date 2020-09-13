# 🌐 Github-Profile-Page

Github Pages template developed by ReactJS

## 📘 Installation:

Fork the repo to your repositories.
Edit the forked repo name to YOUR_GIHUB_USERNAME.github.io

· Clone the code and edit:

in package.json:
```
"homepage": "http://YOUR_GIHUB_USERNAME.github.io",
```

in src/pages/Home.js:
```
const APIURL = githttps://api.github.com/users/YOUR_GIHUB_USERNAME

const extraData = {
        showRepoStatus: true,
        email: null, //'YOUR_EMAIL@ADDRESS',
        linkedin_url: null, //'https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/',
};
```
· Init the project
```
npm install
```

· To test in local:
```
npm start
```

· If everthing is OK, you are ready to deploy

```
npm run deploy
```

· Add your changes
```
git add .
```

· Commit them
```
git commit -m "deploy"
```

· Push the changes
```
git push origin master
```

· In settings of the repository, change source to 'gh-pages' in GitHub Pages section and save.
![Github Pages](./img/settings.jpg)

· Navigate to http://YOUR_GIHUB_USERNAME.github.io and it is ready
