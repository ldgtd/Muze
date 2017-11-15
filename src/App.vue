<template>
  <div>
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
import Users from '@/components/Users'
import Profil from '@/components/Profil'

export default {
  name: 'app',
  components: {
    Navbar,
    Login,
    Events,
    About,
    Users,
    Profil
  }
}
</script>