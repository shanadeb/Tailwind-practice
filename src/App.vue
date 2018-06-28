<template>
  <div id="app">
    <div class="nav-container fade-in">
      <router-link :to="{name: 'Home' }" class="r-link">Home</router-link>
      <router-link to="/about" class="r-link">About</router-link>
      <router-link to="/myart" class="r-link">My Art</router-link>
      <router-view/>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/main.css'

export default {
  name: 'App'
}
</script>

<style>
/*not advised to put this  TailWindCSS stuff inside the Vue Component.*/
@tailwind preflight;

  #app {
    @apply .text-center .m-8 .text-blue-darkest .font-sans
  }

  .r-link{
    @apply .no-underline .font-semibold .p-4 .m-4 .text-purple-dark
  }
@tailwind utilities;

.fade-in{
  animation:fadeIn 3s;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

.r-link{
  padding:14px 25px;
}
</style>
