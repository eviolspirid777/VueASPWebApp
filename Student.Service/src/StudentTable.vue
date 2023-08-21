<template>
  <div>
    <ModalForm
      v-show="showModal"
      :send-data="selectedStudent"
      @close="closeModalWindow()"
    />
    <Tablemain
      :table-fields="tableFields"
      :get-all-students="sendAllStudents"
      @click="editStudent"
      @getStudentData="sendStudentData"
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
        { key: "Name", label: "Имя" },
        { key: "Surname", label: "Фамилия" },
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
      return this.$store.getters.getAllStudents;
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
    sendStudentData(data) {
      this.$emit("getStudentData", data);
    }
  }
});
</script>
