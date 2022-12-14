<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-card-text>
          <v-textarea outlined label="Введите текст"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn absolute right v-on:click="">
            Получить ссылку
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
