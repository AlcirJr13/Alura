<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "AluraPic",
      fotos: [
        {
          url:
            "http://www.osmais.com/wallpapers/201211/cachorro-flor-wallpaper-1900x1200.jpg",
          titulo: "cachorro"
        },
        {
          url:
            "http://www.osmais.com/wallpapers/201211/cachorro-flor-wallpaper-1900x1200.jpg",
          titulo: "Cachorro2"
        }
      ]
    };
  }
};
</script>

<style></style>
