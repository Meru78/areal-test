<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-card-text>
          <v-textarea v-model="text" outlined label="Введите текст"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="$fetch">
            Получить ссылку
          </v-btn>
        </v-card-actions>
        <v-dialog
          v-model="dialog"
        >
          <v-card>
            <v-card-text>
              {{link}}
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog = false">Закрыть</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    text: "",
    link: "",
    dialog: false
  }),
  async fetch(){
    try{
      let res = await fetch("http://localhost:3000/api/generate_url",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: this.text})
      })
      this.link = await res.json()
      this.dialog = true
    } catch(err){
      console.error(err);
    }
  }
}
</script>
