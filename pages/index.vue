<template>
  <v-data-table >

  </v-data-table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  data(){
    return{
      isLoading: false,

    }
  },
  created(){
    this.fetchData()
  },

  methods:{
    async fetchData(){
      if(this.isLoading){
        return
      }
      this.isLoading = true;
      try {
        const {data} = await this.$strapi.get('/api/samples')

        console.log(data)
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false
      }
    }
  },
}
</script>
