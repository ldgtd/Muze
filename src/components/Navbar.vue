<template>
  <nav class="navbar navbar--centred mrgb">
    <div class="container">
      <ul class="navbar__list navbar--centred list-inline">
        <li class="navbar__item--logo">
          <svg>
            <use xlink:href="#logo"></use>
          </svg>
        </li>
        <li><router-link to="Home" class="navbar__link text-bold">Home</router-link></li>
        <li><router-link to="Users" class="navbar__link text-bold">Users</router-link></li>
        <li><router-link to="Events" class="navbar__link text-bold">Events</router-link></li>
        <li v-if="!currentUser" class="navbar__item--account">
          <span class="navbar--centred">
            <router-link to="Login" class="navbar__link text-bold">Login</router-link>
          </span>
        </li>
        <li v-else class="navbar__item--account">
          <span class="navbar--centred">
            <img v-bind:src="currentUser.photoURL" class="navbar__img-profil">
            <a href="#" class="navbar__link text-bold">{{ currentUser.displayName }}</a>
          </span>
        </li>
        </span>
      </ul>
    </div>
  </nav>
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
  }
}
</script>
