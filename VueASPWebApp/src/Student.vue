<template id="stud">
  <div>
    <link
      rel="stylesheet"
      type="text/css"
    >
    <ModalForm
      v-if="showModal"
      :send-data="selectedStudent"
      @close="closeModalWindow()"
    />
    <button
      id="show-modal"
      type="button"
      class="btn-own-cls"
      @click="showModal = true"
    >
      Добавить студента
    </button>
    <TableForm
      @click="editStudent"
    />
  </div>
</template>

<script>
import ModalForm from "./ModalForm.vue";
import store from "./store/store";
import TableForm from "./Table.vue";

export default ({
  components: {
    ModalForm,
    TableForm
  },
  store,
  data() {
    return {
      showModal: false, //буль для отображения окна добавления студента
      selectedStudent: {}
    };
  },
  computed: {
    getAllStudents() {
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
    }
  }
});
</script>

<style>

.form-control-m-2{
  width:100px;
}

.modal-mask{
  border-style: groove;
  border-color: 15,83,252;
}

.btn-own-cls{
  border-radius: 4px;
  border-color: rgba(15, 83, 252);
  transition: background-color 0.3s ease;
  color: rgba(15, 83, 252);
  height: 40px;
  background-color: white;
}

.btn-own-cls:hover {
  background-color: rgba(15, 83, 252, 1);
  cursor: pointer;
  color: white;
}

</style>