<template>
  <div>
    <ModalForm
      v-if="showModal"
      :current-student="selectedStudent"
      @close="closeModalWindow()"
    />
    <MainTable
      :columns="cities"
      :rows="sendAllCities"
      @click="editStudent"
      @sort="sortData"
      @refresh="refreshData"
      @sendData="sendMainData"
      @delete="deleteStudent"
    />
  </div>
</template>

<script>
import MainTable from "./Table.vue";

export default ({
  components: {
    MainTable
  },
  data() {
    return {
      showModal: false, //буль для отображения окна добавления студента
      selectedStudent: {},
      nameFilter: "",
      cities: [
        { key: "city", label: "Город" }
      ]
    };
  },
  computed: {
    sendAllCities() { //Города отправь, а не студентов
      return this.$store.getters.allStudents;
    }
  },
  async mounted() {
    await this.refreshData();
  },
  methods: {
    async refreshData() { //Города обновляй, а не студентов,   Да и все данные снизу тоже!!!!!
      await this.$store.dispatch("refreshStudents");
    },
    editStudent(student) {
      this.selectedStudent = student;
      this.showModal = true;
      this.refreshData();
    },
    closeModalWindow() {
      this.selectedStudent = {};
      this.showModal = !this.showModal;
    },
    // sortData(tag, asc) {
    //   tag = tag.charAt(0).toUpperCase() + tag.slice(1);
    //   this.$store.dispatch("sortStudents", { name: tag, asc: asc });
    // },
    // sendMainData(student) {
    //   this.$router.push({ name: "StudentInfo", params: { studentId: student.id } });
    // },
    deleteStudent(id) {
      this.$store.dispatch("deleteStudent", id);
    }
  }
});

</script>