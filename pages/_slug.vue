<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <blockquote class="blockquote">
          {{text}}
        </blockquote>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  data: ()=>({
    text: ""
  }),
  mounted: async function(){
    try{
      let res = await fetch(`http://localhost:3000/api${this.$route.path}`)
      this.text = await res.json()
    } catch(err){
      console.error(err);
    }
  },
}
</script>
