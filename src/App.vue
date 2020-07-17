<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
::after,
::before {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  /* fix try for Firefox, no luck... */
  // scrollbar-width: thin;
  // scrollbar-color: #cfcfcf #f4f4f4;
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");
// Font Variables
$open-sans: "Open Sans", sans-serif;

#app {
  font-family: $open-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  display: block;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #00a88d;
  }
}
p {
  font-size: 14px;
}
textarea:focus,
input:focus,
select:focus,
button:focus {
  outline: none;
}
input,
textarea,
select {
  &:hover {
    cursor: pointer;
  }
}
select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
}
input {
  color: #3e4543;
}
::placeholder {
  color: #9b9b9b;
}

.container {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  background-color: #f4f4f4;
  height: 100vh;
}
.content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.sidebar {
  order: -1;
  flex: 0 0 250px;
}
.reset {
  content: "";
  position: absolute;
  background: url("./assets/images/iconclose.svg") no-repeat center center;
  top: 8px;
  right: 8px;
  width: 10px;
  height: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    filter: invert(52%) sepia(90%) saturate(2951%) hue-rotate(137deg)
      brightness(94%) contrast(104%);
  }
}
.disabled {
  pointer-events: none;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #f4f4f4;
  border-radius: 5px;
  margin: 0 0 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #cfcfcf;
  border-radius: 5px;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
@media (max-width: 767px) {
  .container {
    height: 100%;
  }
  .content {
    height: 100vh;
  }
}
</style>
