<template>
  <div v-if="!userExternal && !loading">
    <button @click="signInWithGoogle" class="btn btn--primary">Sign in with Google</button>
    <!-- <button @click="signInWithFacebook" class="btn btn--primary">Sign in with Facebook</button> -->
  </div>
  <div v-else>
    <p>You're login {{userExternal.displayName}}</p>
    <button @click="signOut" class="btn btn--primary">Sign out</button>
  </div>
</template>

<script>

import Vuex from 'vuex'
import firebaseConfig from '@/helpers/firebase'

export default {
  name: 'Login',
  computed: Vuex.mapState(['users']),

  data () {
    return {
      loading: true,
      userExternal: null
    }
  },

  beforeCreate () {
    firebaseConfig.firebase.auth().onAuthStateChanged((userExternal) => {
      if (userExternal) {
        this.userExternal = userExternal
        this.addUser()
      }
      this.loading = false
    })
  },

  created () {
    this.$store.dispatch('setUsersRef', firebaseConfig.users)
  },

  methods: {
    signInWithGoogle () {
      const provider = new firebaseConfig.firebase.auth.GoogleAuthProvider()
      firebaseConfig.firebase.auth().signInWithRedirect(provider).then((result) => {
        this.userExternal = result.userExternal
      }).catch(error => console.log(error))
    },

    signOut () {
      firebaseConfig.firebase.auth().signOut().then(() => {
        this.userExternal = null
      }).catch(error => console.log(error))
    },

    addUser () {
      const currentUser = {
        'uid': this.userExternal.uid,
        'displayName': this.userExternal.displayName,
        'email': this.userExternal.email,
        'photoURL': this.userExternal.photoURL
      }

      const userRef = firebaseConfig.users.child(currentUser.uid)

      userRef.once('value', snapshot => {
        if (!snapshot.val()) {
          userRef.set(currentUser)
        }
      })
    }
  }
}
</script>
