<template>
  <div>
    <button
      id="show-modal"
      type="button"
      class="btn-own-cls"
      @click="showModal = true"
    >
      Добавить город
    </button>
    <ModalForm
      v-if="showModal"
      :current-data="selectedCity"
      @close="closeModalWindow()"
    />
    <MainTable
      :columns="cities"
      :rows="sendAllCities"
      @delete="deleteCity"
      @click="editCity"
    />
  </div>
</template>

<script>
import MainTable from "./Table.vue";
import ModalForm from "./CityForm.vue";

export default ({
  components: {
    MainTable,
    ModalForm
  },
  data() {
    return {
      showModal: false, //буль для отображения окна добавления студента
      selectedCity: {},
      nameFilter: "",
      cities: [
        { key: "country", label: "Город" }
      ]
    };
  },
  computed: {
    sendAllCities() {
      return this.$store.getters.allCities;
    }
  },
  async mounted() {
    await this.$store.dispatch("refreshCities");
  },
  methods: {
    editStudent(student) {
      this.selectedStudent = student;
      this.showModal = true;
      this.refreshData();
    },
    closeModalWindow() {
      this.selectedStudent = {};
      this.showModal = !this.showModal;
    },
    deleteCity(id) {
      this.$store.dispatch("deleteCity", id);
    },
    editCity(city) {
      this.selectedCity = city;
      this.showModal = true;
    }
  }
});

</script>