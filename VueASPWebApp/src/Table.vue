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
        <th @click="sortStudent(`Name`)">
          Имя
          <span v-if="sortTitle === 'Name'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`Surname`)">
          Фамилия
          <span v-if="sortTitle === 'Surname'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`Patron`)">
          Отчество
          <span v-if="sortTitle === 'Patron'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`Faculty`)">
          Факультет
          <span v-if="sortTitle === 'Faculty'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`Specialty`)">
          Специальность
          <span v-if="sortTitle === 'Specialty'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`Course`)">
          Kypc
          <span v-if="sortTitle === 'Course'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`Group`)">
          Группа
          <span v-if="sortTitle === 'Group'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`City`)">
          Город
          <span v-if="sortTitle === 'City'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`PostalCode`)">
          Индекс
          <span v-if="sortTitle === 'PostalCode'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`Street`)">
          Улица
          <span v-if="sortTitle === 'Street'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`Phone`)">
          Телефон
          <span v-if="sortTitle === 'Phone'">
            <i v-if="cont === 1">↓</i>
            <i v-else-if="cont === 2">↑</i>
          </span>
        </th>
        <th @click="sortStudent(`Email`)">
          Почта
          <span v-if="sortTitle === 'Email'">
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

<!-- <template>
  <table class="plato-table">
    <thead>
      <tr>
        <th
          v-for="(column, index) in columns"
          :key="`table-head-${index}`"
          :align="column.align"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>

    <tbody class="tbody">
      <tr
        v-for="(element, index) in getAllStudents()"
        :key="`table-body-${index}`"
      >
        <td
          v-for="(column, columnIndex) in columns"
          :key="`table-cell-${index}-${columnIndex}`"
          :align="column.align"
        >
          <slot :name="column.property">
            {{ getProperty(element, column.property) }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import _ from "lodash";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    elements: {
      type: Array,
      required: true
    }
  },
  computed: {
    columns() {
      return [
        { label: "Id", property: "id", align: "left" },
        { label: "Имя", property: "name", align: "left" },
        { label: "Фамилия", property: "surname", align: "left" },
        { label: "Отчество", property: "patron", align: "left" },
        { label: "Факультет", property: "faculty", align: "left" },
        { label: "Специальность", property: "specialty", align: "left" },
        { label: "Курс", property: "course", align: "left" },
        { label: "Группа", property: "group", align: "left" },
        { label: "Город", property: "city", align: "left" },
        { label: "Индекс", property: "postalCode", align: "left" },
        { label: "Улица", property: "street", align: "left" },
        { label: "Телефон", property: "phone", align: "left" },
        { label: "Почта", property: "email", align: "left" }
      ];
    },
    getAllStudents() {
      return this.$store.getters.getAllStudents;
    }
  },
  methods: {
    getProperty(element, property) {
      return _.get(element, property);
    }
  }
});
</script>

<style scoped lang="scss">
.plato-table[hoverable] {
  tbody > :not(.group-row):not(.plato-card__body_no-content_table) {
    &:hover {
      background-color: #f3f9ff;
    }

    &[checked]:not([active]) {
      background-color: #f5f6f8;
    }

    &[active] {
      background-color: #deebff;
    }
  }
}

.plato-table {
  border-collapse: collapse;
  width: 100%;
  &[sticky-with-header] {
    thead{
      top: 80px;
    }
  }

  thead {
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
    z-index: 2;
    background-color: white;

    tr {
      box-shadow: inset 0 -1px 0 #dfe1e6
    }

    th {
      vertical-align: middle;
      height: 42px;
      padding: 6px 0 6px 8px;
      line-height: 1.2;
      color: #6b778c;
      text-align: left;
      align-items: center;

      &[align=right] {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .title-wrapper {
    position: relative;

    @media screen and (max-width: 768px) {
      position: relative;
      max-height: 35px;
      text-overflow: ellipsis;
      overflow-x: hidden;
      white-space: nowrap;
    }

  }
  tfoot {
    tr {
      border-top: 2px solid #dfe1e6;
      font-weight: bold;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #dfe1e6;
      position: relative;
    }

    .group {
      &-header {
        padding: 7px 0 7px 7px;

        &_group {
          display: flex;
          align-items: center;
          font-weight: bold;
          color: #6b778c;
          text-align: left;
        }

        &_collapser {
          padding-right: 5px;
        }

        &_checkbox {
          padding-right: 2px;
          padding-left: 8px
        }

        &_count {
          padding-left: 10px;
        }
      }

      &-footer__count {
        font-weight: bold;
      }
    }
  }

  tbody, tfoot {
    td {
      vertical-align: middle;
      padding-right: 8px;
      padding: 8px 0 8px 8px;
      font-size: 14px;
      line-height: 1.2;
      color: #172b4d;

      &[align=right] {
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  &__sort-icon {
    margin-bottom: -2px;
    text-align: center;
    font-size: 10px;
    position: absolute;
    top: -9px;
    right: calc(50% - 8px);
    &-desc {
      margin-bottom: -9px;
    }
  }

  &__check {
    padding-left: 7px;
    width: 30px;
  }

  &__checkbox {
    width: 24px;
    height: 24px;
    label {
      margin-left: 5px;
    }
  }

  .group-table:last-child {
    tr:last-child {
      border-bottom: 0;
    }
  }
}
.handle-layer {
  cursor: move;
  color: #bbbbbb;
  margin-right: 2px;
}
.drag-column {
  display: flex;
  align-items: center;
  padding-top: 1px;
  min-height: 42px;
}
.plato-table__number {
  min-width: 36px;
  justify-content: center;
}
.plato-table__color {
  max-width: 2px;
  justify-content: center;
  background: var(--color);
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 3px;
}
.plato-table__icon {
  color: var(--color);
  padding: 0 5px;
}
</style> -->
