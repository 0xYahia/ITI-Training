<template>
  <div class="card mb-3 mx-auto my-5" style="max-width: 950px">
    <div class="row no-gutters p-4">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">Most Recommendation</h5>
      </div>
    </div>
    <div class="cards d-flex flex-wrap">
      <GameCard
        v-for="game in gameStore.recommendedGames"
        :key="game.id"
        :cardInfo="game"
      />
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
import { useGameStore } from "@/stores/GameStore";
import { onMounted } from "vue";
export default {
  name: "MostRecommendedPage",
  components: {
    GameCard,
  },
  setup() {
    const gameStore = useGameStore();

    onMounted(() => {
      gameStore.getRecommendedGames();
    });

    return {
      gameStore,
    };
  },
};
</script>

<style scoped></style>
