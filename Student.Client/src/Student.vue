<template id="stud">
  <div>
    <div class="d-flex flex-row">
      <button
        id="show-modal"
        type="button"
        class="btn-own-cls"
        @click="showModal = true"
      >
        Добавить студента
      </button>
      <ModalForm
        v-if="showModal"
        @close="showModal = false"
      />
      <input
        v-model="nameFilter"
        style="margin-left: 10px;"
        class="form-control-m-2"
        placeholder="Фильтр"
        @input="debouncedFilter()"
      >
    </div>
    <TableForm />
  </div>
</template>

<script>
import _ from "lodash";
import ModalForm from "./ModalForm.vue";
import TableForm from "./StudentTable.vue";
import { mapGetters } from "vuex";

export default ({
  components: {
    TableForm,
    ModalForm
  },
  data() {
    return {
      nameFilter: "",
      showModal: false
    };
  },
  computed: {
    ...mapGetters({
      getAllStudents: "allStudents"
    })
  },
  methods: {
    debouncedFilter: _.debounce(function() {
      this.$store.dispatch("filterStudents", this.nameFilter);
    }, 500)
  }
});
</script>

<style>

.form-control-m-2{
  width:100px;
  padding-left: 20px;
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
  box-shadow: 2px 3px 8px #007bff;
}

.form-control-m-2{
  margin-left: 10px;
  width: 100px;
  border-radius: 4px;
  border: 2px solid rgba(15, 83, 252);
  height: 40px;
  background-color: white;
}
</style>