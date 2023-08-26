<template>
  <div>
    <ModalForm
      v-if="showModal"
      :current-student="selectedStudent"
      @close="closeModalWindow()"
    />
    <MainTable
      :columns="tableFields"
      :rows="sendAllStudents"
      @click="editStudent"
      @sort="sortData"
      @refresh="refreshData"
      @sendData="openInformation"
      @delete="deleteStudent"
    />
  </div>
</template>

<script>
import MainTable from "./Table.vue";
import ModalForm from "./ModalForm.vue";

export default ({
  components: {
    MainTable,
    ModalForm
  },
  data() {
    return {
      showModal: false, //буль для отображения окна добавления студента
      selectedStudent: {},
      nameFilter: "",
      tableFields: [
        { key: "id", label: "id" },
        { key: "surname", label: "Фамилия" },
        { key: "name", label: "Имя" },
        { key: "patron", label: "Отчество" },
        { key: "faculty", label: "Факультет" },
        { key: "specialty", label: "Специальность" },
        { key: "course", label: "Курс" },
        { key: "group", label: "Группа" },
        { key: "city", label: "Город" },
        { key: "postalCode", label: "Почтовый индекс" },
        { key: "street", label: "Улица" },
        { key: "phone", label: "Телефон" },
        { key: "email", label: "Почта" }
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
    sortData(tag, asc) {
      tag = tag.charAt(0).toUpperCase() + tag.slice(1);
      this.$store.dispatch("sortStudents", { name: tag, asc: asc });
    },
    openInformation(student) {
      this.$router.push({ name: "StudentInfo", params: { studentId: student.id } });
    },
    deleteStudent(id) {
      this.$store.dispatch("deleteStudent", id);
    }
  }
});
</script>
