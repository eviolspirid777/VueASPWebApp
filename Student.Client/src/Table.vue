<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th
            v-for="field in filteredTableFields"
            :key="field.key"
            @click="sortStudent(field.key)"
          >
            {{ field.label }}
            <span
              v-if="sortTitle === field.key"
              class="th-icon-container"
            >
              <i v-if="cont === 1">↓</i>
              <i v-else-if="cont === 2">↑</i>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in rows"
          :key="data.id"
        >
          <td
            v-for="field in filteredTableFields"
            :key="field.key"
          >
            {{ getValueFromKey(data, field.key) }}
          </td>
          <td>
            <div class="d-flex">
              <button
                type="button"
                class="btn-b-0-20"
                @click="sendData(data)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                ><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
              </button>
              <button
                type="button"
                class="btn-b-0-20"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="editStudent(data)"
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
                @click="deleteStudent(data.id)"
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
  </div>
</template>

<script>
export default ({
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      cont: 0,
      sortTitle: ""
    };
  },
  computed: {
    filteredTableFields() {
      return this.columns.filter(field => field.key !== "id");
    }
  },
  methods: {
    getValueFromKey(value, key) {
      key = key.charAt(0).toLowerCase() + key.slice(1);
      return value[key];
    },
    editStudent(value) {
      this.$emit("click", value);
    },
    deleteStudent(ID) {
      if (!confirm("Вы уверены?")) {
        return;
      }
      this.$emit("delete", ID);
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
        this.$emit("sort", this.sortTitle, true);
      }
      else if (this.cont === 2) {
        this.$emit("sort", this.sortTitle, false);
      }
      else if (this.cont === 3) {
        this.$emit("refresh");
        this.cont = 0;
        this.sortTitle = "";
      }
    },
    sendData(data) {
      this.$emit("sendData", data);
    }
  }
});
</script>

<style scoped>
th:nth-child(n+1):hover{
  color: rgba(15, 83, 252);
  cursor: pointer;
}
.btn-b-0-20:hover{
  border: 2px solid rgba(15, 83, 252);
}
td{
  border: 1px solid black;
  align-content: center;
  align-items: center;
}
th, .d-flex{
  white-space: nowrap;
  text-align: center;
}
.th-icon-container {
  position: relative;
}

.th-icon-container i {
  position: absolute;
}
</style>