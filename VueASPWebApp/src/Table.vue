<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>
          <div class="d-flex flex-row">
            <input
              v-model="nameFilter"
              class="form-control-m-2"
              placeholder="Фильтр"
              @input="filterFunction()"
            >
          </div>
          Id
        </th>
        <th
          v-for="field in tableFields"
          :key="field.key"
          @click="sortStudent(field.key)"
        >
          {{ field.label }}
          <span v-if="sortTitle === field.key">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="dep in getAllStudents"
        :key="dep.id"
      >
        <td v-for="field in tableFields" :key="field.key">{{ getValueFromKey(dep,field.key) }}</td>
        <td>
          <div class="d-flex flex-column align-items-center">
            <button
              type="button"
              class="btn-b-0-20"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="editStudent(dep)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
            <button
              type="button"
              class="btn-b-0-20"
              @click="deleteStudent(dep.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import store from "./store/store";

export default ({
  store,
  data() {
    return {
      nameFilter: "", //фильтр по имени
      cont: 0,
      sortTitle: "",
      tableFields: [
        { key: "Name", label: "Имя" },
        { key: "Surname", label: "Фамилия" },
        { key: "Patron", label: "Отчество" },
        { key: "Faculty", label: "Факультет" },
        { key: "Specialty", label: "Специальность" },
        { key: "Course", label: "Курс" },
        { key: "Group", label: "Группа" },
        { key: "City", label: "Город" },
        { key: "PostalCode", label: "Почтовый Индекс" },
        { key: "Street", label: "Улица" },
        { key: "Phone", label: "Телефон" },
        { key: "Email", label: "Почта" }
      ]
    };
  },
  computed: {
    getAllStudents() {
      return this.$store.getters.getAllStudents;
    }
  },
  methods: {
    getValueFromKey(student, key) {
      const keyFeature = key.toLowerCase();
      return student[keyFeature]; // вернет значение из объекта student по ключу key
    },
    filterFunction() {
      this.$store.dispatch("filterStudents", this.nameFilter);
    },
    editStudent(dep) {
      this.$emit("click", dep);
    },
    deleteStudent(ID) {
      if (!confirm("Вы уверены?")) {
        return;
      }
      this.$store.dispatch("deleteStudent", ID);
    },
    sortStudent(title) {
      if (this.sortTitle === title) {
        this.cont++;
      }
      else {
        this.sortTitle = title;
        this.cont = 1;
      }

      if (this.cont === 1) {
        this.$store.dispatch("sortStudents", { name: this.sortTitle, asc: true });
      }
      else if (this.cont === 2) {
        this.$store.dispatch("sortStudents", { name: this.sortTitle, asc: false });
      }
      else if (this.cont === 3) {
        this.$store.dispatch("fetchStudents");
        this.cont = 0;
        this.sortTitle = "";
      }
    }
  }
});
</script>

<style scoped>
th:nth-child(n+2):hover{
  color: rgba(15, 83, 252);
}
.form-control-m-2:hover{
  border: 2px solid rgba(15, 83, 252);
}
.btn-b-0-20:hover{
  border: 2px solid rgba(15, 83, 252);
}
</style>