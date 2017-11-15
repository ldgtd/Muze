<template>
  <el-menu
    class="navbar mrgb"
    mode="horizontal">
    <div class="container">
      <router-link to="Home">
        <el-menu-item index="1">Home</el-menu-item>
      </router-link>
      <div v-if="currentUser">
        <router-link to="Users">
          <el-menu-item index="2">Users</el-menu-item>
        </router-link>
        <router-link to="Events">
          <el-menu-item index="3">Events</el-menu-item>
        </router-link>
      </div>
      <router-link v-if="!currentUser" to="Login" class="el-menu-item--flex">
        <el-menu-item index="4">Sign in </el-menu-item>
      </router-link>
      <el-submenu v-else index="4">
        <template slot="title">
          <img v-bind:src="currentUser.photoURL" class="el-submenu__avatar">
          {{ currentUser.displayName }}
        </template>
        <router-link to="Profil">
          <el-menu-item index="2-1">Profil</el-menu-item>
        </router-link>
        <el-menu-item index="2-3" @click="signOut">Sign out</el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>

import firebaseConfig from '@/helpers/firebase'

export default {
  name: 'navbar',
  data () {
    return {
      currentUser: null
    }
  },

  mounted () {
    firebaseConfig.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user
      }
    })
  },

  methods: {
    signOut () {
      firebaseConfig.firebase.auth().signOut().then(() => {
        this.currentUser = null
      }).catch(error => console.log(error))

      this.$router.push('home')
    }
  }
}
</script>
