<template>
  <div id="app">
    <div id="nav">
      <router-link to="/main">Main</router-link> | 
      <router-link to="/ContactUs">Contact Us</router-link> | 
      <router-link to="/AboutUs">About Us</router-link>
    </div>
    <router-view />
  </div>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  
  a {
    font-weight: bold;
    color: #1100ff;

    &.router-link-exact-active {
      color: #b62323;
    }
  }
}
</style>
