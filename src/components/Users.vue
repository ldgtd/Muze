<template>
  <div>
    <div class="grid grid--multiline">
      <div v-for="user in users" class="grid__item sm-w-1/2 md-w-1/3 lg-w-1/4">
        <div class="box box--default box--muze pdg--">
          <img v-bind:src="user.photoURL" class="img-block">
          <h3 class="mrgt-">{{ user.displayName }}</h3>
          <ul>
            <li>{{ user.email }}</li>
            <li>{{ user.instrument }}</li>
            <li>{{ user.music }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vuex from 'vuex'
import firebaseConfig from '@/helpers/firebase'

export default {
  name: 'users',
  computed: Vuex.mapState(['users']),

  beforeMount () {
    this.$store.dispatch('setUsersRef', firebaseConfig.users)
  }
}
</script>
