<template>
  <el-menu
    :default-active="activeIndex1"
    class="navbar mrgb"
    mode="horizontal"
    @select="handleSelect">
    <div class="container">
      <router-link to="Home">
        <el-menu-item index="1">Home</el-menu-item>
      </router-link>
      <router-link to="Users">
        <el-menu-item index="2">Users</el-menu-item>
      </router-link>
      <router-link to="Events">
        <el-menu-item index="3">Events</el-menu-item>
      </router-link>
      <router-link v-if="!currentUser" to="Login" class="el-menu-item--flex">
        <el-menu-item index="4">Sign in </el-menu-item>
      </router-link>
      <el-submenu v-else index="4">
        <template slot="title">
          <img v-bind:src="currentUser.photoURL" class="el-submenu__avatar">
          {{ currentUser.displayName }}
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
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
    firebaseConfig.firebase.auth().onAuthStateChanged((userExternal) => {
      if (userExternal) {
        this.currentUser = userExternal
      }
    })
  },

  methods: {
    signOut () {
      firebaseConfig.firebase.auth().signOut().then(() => {
        this.userExternal = null
      }).catch(error => console.log(error))
    }
  }
}
</script>
