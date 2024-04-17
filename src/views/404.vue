<template>
  <div class="layout_home">
    <div class="mars"></div>
    <img src="@/assets/images/404/404.svg" class="logo-404" />
    <img src="@/assets/images/404/meteor.svg" class="meteor" />
    <p class="title">Oh no!!</p>
    <p class="subtitle">页面未找到,请返回首页</p>
    <div align="center">
      <span class="btn-back"  @click="$router.push('/index')">返回首页</span>
    </div>
    <img src="@/assets/images/404/astronaut.svg" class="astronaut" />
    <img src="@/assets/images/404/spaceship.svg" class="spaceship" />
  </div>
</template>

<script>
export default {
  name: "404",
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>

@keyframes floating {
  from {
    transform: translateY(0px);
  }
  65% {
    transform: translateY(15px);
  }
  to {
    transform: translateY(0px);
  }
}

.layout_home{
  background-image:linear-gradient(to bottom, #078782, #078782);
  height: 100vh;
  margin: 0;
  background-attachment: fixed;
  overflow: hidden;
  
}

.mars {
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 27vmin;
  background: url("~@/assets/images/404/mars.svg") no-repeat bottom center;
  background-size: cover;
}

.logo-404 {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 16vmin;
  width: 30vmin;
}
@media (max-width: 480px) and (min-width: 320px) {
  .logo-404 {
    top: 45vmin;
  }
}

.meteor {
  position: absolute;
  right: 2vmin;
  top: 16vmin;
}

.title {
  color: white;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 5vmin;
  margin-top: 31vmin;
}
@media (max-width: 480px) and (min-width: 320px) {
  .title {
    margin-top: 65vmin;
  }
}

.subtitle {
  color: white;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 3.5vmin;
  margin-top: -1vmin;
  margin-bottom: 9vmin;
}

.btn-back {
  border: 1px solid white;
  color: white;
  height: 5vmin;
  padding: 12px;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
}
.btn-back:hover {
  background: white;
  color: #4D007D;
}
@media (max-width: 480px) and (min-width: 320px) {
  .btn-back {
    font-size: 3.5vmin;
  }
}

.astronaut {
  position: absolute;
  top: 18vmin;
  left: 10vmin;
  height: 30vmin;
  animation: floating 3s infinite ease-in-out;
}
@media (max-width: 480px) and (min-width: 320px) {
  .astronaut {
    top: 2vmin;
  }
}

.spaceship {
  position: absolute;
  bottom: 15vmin;
  right: 24vmin;
}
@media (max-width: 480px) and (min-width: 320px) {
  .spaceship {
    width: 45vmin;
    bottom: 18vmin;
  }
}

</style>
