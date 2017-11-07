<template>
  <div id="muse">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Events from '@/components/Events'
import Login from '@/components/Login'
import About from '@/components/About'

export default {
  name: 'app',
  components: {
    Navbar,
    Login,
    Events,
    About
  }
}
</script>