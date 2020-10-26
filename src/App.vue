<template>
  <div id="app">
    <div id="header">
      <h1 id="title">Staff Management System</h1>
      <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/add">Add Staff</router-link>
        |
        <router-link to="/list">List Staffs</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  user-select: none;
}

#header {
  text-align: center;
}

#title {
  padding-top: 30px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
