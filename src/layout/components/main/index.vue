<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <transition name="animate__animated animate__fadeInRight">
        <component :is="Component" v-if="refreshFlag"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Main",
  computed: {
    ...mapGetters(["refreshed"]),
  },
  watch: {
    refreshed: function(newVal, oldVal) {
      this.refreshFlag = false;
      this.$nextTick(() => {
        this.refreshFlag = true;
      });
    },
  },
  data() {
    return {
      refreshFlag: true,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.content {
  height: 100%;
  background: #fff;
}
</style>
