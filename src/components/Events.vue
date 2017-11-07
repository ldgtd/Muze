<template>
  <div>
    <div class="grid grid--multiline mrgb">
      <div v-for="event in events" class="grid__item w-1/3">
        <div class="box box--default box--muze">
          <ul>
            <li>{{ event.title }}</li>
            <li>{{ event.place }}</li>
            <li>{{ event.datetime }}</li>
          </ul>
        </div>
      </div>
    </div>

    <h1>New event</h1>
    <form v-on:submit.prevent="addEvent">
      <label>
        Title
        <input type="text" name="title" v-model="newEvent.title">
      </label>
      <label>
        Place
        <input type="text" name="place" v-model="newEvent.place">
      </label>
      <label>
        Datetime
        <input type="date" name="datetime" v-model="newEvent.datetime">
      </label>
      <button type="submit" class="btn btn--primary">Create event</button>
    </form>
  </div>
</template>

<script>

import Vuex from 'vuex'
import firebaseConfig from '@/helpers/firebase'

export default {
  name: 'events',
  computed: Vuex.mapState(['events']),

  data () {
    return {
      newEvent: {
        title: '',
        place: '',
        datetime: ''
      }
    }
  },

  methods: {
    addEvent () {
      if (this.newEvent) {
        firebaseConfig.events.push({
          title: this.newEvent.title,
          place: this.newEvent.place,
          datetime: this.newEvent.datetime
        })
        this.newEvent = {
          title: '',
          place: '',
          datetime: ''
        }
      }
    },
    updateEvent (event, newEvent) {
      // TODO: Update Event
      // firebaseConfig.events.child(event['.key']).child('text').set(newEvent)
    }
  },

  created () {
    this.$store.dispatch('setEventsRef', firebaseConfig.events)
  }
}
</script>
