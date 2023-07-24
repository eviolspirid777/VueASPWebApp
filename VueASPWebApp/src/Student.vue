<template id="stud">
  <div>
    <link
      rel="stylesheet"
      type="text/css"
    >
    <ModalForm
      v-if="showModal"
      @close="showModal = false"
    />
    <button
      id="show-modal"
      type="button"
      class="btn-own-cls"
      @click="showModal = !showModal"
    >
      Добавить студента
    </button>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            <div class="d-flex flex-row">
              <input
                v-model="IDFilter"
                class="form-control m-2"
                placeholder="Фильтр"
                style="width:100px"
                @input="FilterFn()"
              >
              <button
                type="button"
                class="btn btn-light"
                @click="sortResult('ID',true)"
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
                @click="sortResult('ID',false)"
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
          :key="dep.ID"
        >
          <td>{{ dep.ID }}</td>
          <td>{{ dep.Name }}</td>
          <td>{{ dep.Surname }}</td>
          <td>{{ dep.Patron }}</td>
          <td>{{ dep.Faculty }}</td>
          <td>{{ dep.Specialty }}</td>
          <td>{{ dep.Course }}</td>
          <td>{{ dep.Group }}</td>
          <td>{{ dep.City }}</td>
          <td>{{ dep.PostalCode }}</td>
          <td>{{ dep.Street }}</td>
          <td>{{ dep.Phone }}</td>
          <td>{{ dep.Email }}</td>
          <td>
            <button
              type="button"
              class="btn btn-light mr-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="showModal = !showModal"
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
              @click="deleteClick(dep.ID)"
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
  </div>
</template>

<script>
import axios from "axios";
import ModalForm from "./ModalForm.vue";
import store from "./store/store";
import { mapGetters } from "vuex";

export default ({
  new: "#stud",
  components: {
    ModalForm
  },
  data() {
    return {
      studentsWithoutFilter: [],
      modalTitle: "",
      NameFilter: "", //фильтр по имени
      IDFilter: "", //фильтр по id
      showModal: false, //буль для отображения окна
      pathTo: "http://localhost:5000/api/department/", //путь
      payload: {
        Name: this.Name,
        Surname: this.Surname,
        Patron: this.Patron,
        Faculty: this.Faculty,
        Specialty: this.Specialty,
        Course: this.Course,
        Group: this.Group,
        City: this.City,
        PostalCode: this.PostalCode,
        Street: this.Street,
        Phone: this.Phone,
        Email: this.Email
      }
    };
  },
  store,
  computed: mapGetters(["getAllStudents"]),
  mounted: function() {
    this.refreshData();
  },
  methods: {
    refreshData() {
      this.$store.dispatch("fetchStudents").then(students => {
        this.$store.commit("setStudents", students);
      });
    },
    addClick() {
      this.$store.dispatch("addStudent", this.payload).then(response => {
        this.refreshData();
        alert(response.data);
      });
    },
    editClick(student) {
      this.modalTitle = "Изменить";
      this.Name = student.Name;
      this.Surname = student.Surname;
      this.Patron = student.Patron;
      this.Faculty = student.Faculty;
      this.Specialty = student.Specialty;
      this.Course = student.Course;
      this.Group = student.Group;
      this.City = student.City;
      this.PostalCode = student.PostalCode;
      this.Street = student.Street;
      this.Phone = student.Phone;
      this.Email = student.Email;
    },
    updateClick() {
      axios.put(this.pathTo, {
        Name: this.Name,
        Surname: this.Surname,
        Patron: this.Patron,
        Faculty: this.Faculty,
        Specialty: this.Specialty,
        Course: this.Course,
        Group: this.Group,
        City: this.City,
        PostalCode: this.PostalCode,
        Street: this.Street,
        Phone: this.Phone,
        Email: this.Email
      })
        .then(response => {
          this.refreshData();
          alert(response.data);
        });
    },
    deleteClick(ID) {
      if (!confirm("Вы уверены?")) {
        return;
      }
      this.$store.dispatch("deleteStudent", ID).then(response => {
        this.refreshData();
        alert(response.data);
      });
    },
    FilterFn() {
      let IDFilter = this.IDFilter;
      let NameFilter = this.NameFilter;
      this.student = this.studentsWithoutFilter.filter(function(el) {
        return el.ID.toString().toLowerCase().includes(
          IDFilter.toString().trim().toLowerCase()
        ) &&
          el.Name.toString().toLowerCase().includes(
            NameFilter.toString().trim().toLowerCase()
          );
      });
    },

    //   sortResult(prop, asc) {
    //   this.student = this.studentsWithoutFilter.sort(function (a, b) {
    //   if (asc) {
    //       return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
    //   } else {
    //       return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
    //   }
    //   });
    // },

    sortResult(prop, asc) {
      this.$store.commit("sortStudents", { prop, asc }); //Реализовал через lodash, нужно соед с Vuex.Store
    }
  }
});
</script>

<style>
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
</style>./store/store