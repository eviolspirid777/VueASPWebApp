<template>
  <div>
    <ModalForm
      v-if="showModal"
      :send-data="selectedStudent"
      @close="closeModalWindow()"
    />
    <Tablemain
      :table-fields="tableFields"
      :get-all-students="sendAllStudents"
      @click="editStudent"
      @sort="sortData"
      @refreshData="refreshData"
      @sendData="sendMainData"
      @delete="deleteStudent"
    />
  </div>
</template>

<script>
import ModalForm from "./ModalForm.vue";
import Tablemain from "./Table.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Tablemain,
    ModalForm
  },
  data() {
    return {
      showModal: false, //буль для отображения окна добавления студента
      selectedStudent: {},
      nameFilter: "",
      tableFields: [
        { key: "id", label: "id" },
        { key: "Surname", label: "Фамилия" },
        { key: "Name", label: "Имя" },
        { key: "Patron", label: "Отчество" },
        { key: "Faculty", label: "Факультет" },
        { key: "Specialty", label: "Специальность" },
        { key: "Course", label: "Курс" },
        { key: "Group", label: "Группа" },
        { key: "City", label: "Город" },
        { key: "PostalCode", label: "Почтовый индекс" },
        { key: "Street", label: "Улица" },
        { key: "Phone", label: "Телефон" },
        { key: "Email", label: "Почта" }
      ]
    };
  },
  computed: {
    sendAllStudents() {
      return this.$store.getters.allStudents;
    }
  },
  async mounted() {
    await this.refreshData();
  },
  methods: {
    async refreshData() {
      await this.$store.dispatch("fetchStudents");
    },
    editStudent(dep) {
      this.selectedStudent = dep;
      this.showModal = true;
      this.refreshData();
    },
    closeModalWindow() {
      this.selectedStudent = {};
      this.showModal = !this.showModal;
    },
    sortData(tag, asc) {
      this.$store.dispatch("sortStudents", { name: tag, asc: asc });
    },
    sendMainData(dep) {
      this.$root.$emit("getStudentData", dep);
    },
    deleteStudent(id) {
      this.$store.dispatch("deleteStudent", id);
    }
  }
});
</script>
