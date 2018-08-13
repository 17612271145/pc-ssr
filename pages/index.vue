<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        pc-ssr
      </h1>
      <h2 class="subtitle" v-for="navMenu in caseList" :key="navMenu.id">
         {{navMenu.name}}
      </h2>
      <div class="links">
       <router-link to="/test">前进</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import axios from 'axios'
export default {
  data () {
    return {
      caseList: []
    }
  },
  components: {
    AppLogo
  },
  methods:{
  },
  asyncData () {
     return axios.get('/website_api/web_projects?pageNum=1&pageSize=6')
      .then(res => {
        if (res.data.status = 200) {
          debugger
          return {caseList : res.data.data.list}
        }
        if (!process.server) {
          document.body.scrollTop = this.$route.query.scrollTop || 0;
        }
      })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

