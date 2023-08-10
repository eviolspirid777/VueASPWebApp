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
            <button
              type="button"
              class="btn btn-light"
              @click="sortResult('Name', true)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
            <button
              type="button"
              class="btn btn-light"
              @click="sortResult('Name',false)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-up-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
              </svg>
            </button>
          </div>
          Id
        </th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Отчество</th>
        <th>Факультет</th>
        <th>Специальность</th>
        <th>Kypc</th>
        <th>Группа</th>
        <th>Город</th>
        <th>Индекс</th>
        <th>Улица</th>
        <th>Телефон</th>
        <th>Почта</th>
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
      nameFilter: "" //фильтр по имени
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
    }
  }
});

</script>
