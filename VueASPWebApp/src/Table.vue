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
        <th @click="conterAdd(`Name`)">
          Имя
        </th>
        <th @click="conterAdd(`Surname`)">
          Фамилия
        </th>
        <th @click="conterAdd(`Patron`)">
          Отчество
        </th>
        <th @click="conterAdd(`Faculty`)">
          Факультет
        </th>
        <th @click="conterAdd(`Specialty`)">
          Специальность
        </th>
        <th @click="conterAdd(`Course`)">
          Kypc
        </th>
        <th @click="conterAdd(`Group`)">
          Группа
        </th>
        <th @click="conterAdd(`City`)">
          Город
        </th>
        <th @click="conterAdd(`PostalCode`)">
          Индекс
        </th>
        <th @click="conterAdd(`Street`)">
          Улица
        </th>
        <th @click="conterAdd(`Phone`)">
          Телефон
        </th>
        <th @click="conterAdd(`Email`)">
          Почта
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="dep in getAllStudents"
        :key="dep.id"
      >
        <td>{{ dep.id }}</td>
        <td>{{ dep.name }}</td>
        <td>{{ dep.surname }}</td>
        <td>{{ dep.patron }}</td>
        <td>{{ dep.faculty }}</td>
        <td>{{ dep.specialty }}</td>
        <td>{{ dep.course }}</td>
        <td>{{ dep.group }}</td>
        <td>{{ dep.city }}</td>
        <td>{{ dep.postalCode }}</td>
        <td>{{ dep.street }}</td>
        <td>{{ dep.phone }}</td>
        <td>{{ dep.email }}</td>
        <td>
          <button
            type="button"
            class="btn btn-light mr-1"
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
            class="btn btn-light mr-1"
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
      sortTitle: ""
    };
  },
  computed: {
    getAllStudents() {
      return this.$store.getters.getAllStudents;
    }
  },
  methods: {
    filterFunction() {
      this.$store.dispatch("filterStudents", this.nameFilter);
    },
    sortResult(name, asc) {
      this.$store.dispatch("sortStudents", { name, asc });
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
    conterAdd(title) {
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
