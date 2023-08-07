<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h1 style="font-size: 30px; padding-left: 40px;">
            Добавить Студента
          </h1>
          <hr>
          <table>
            <tr>
              <td><label for="name">Имя:</label></td>
              <td>
                <input
                  id="name"
                  v-model="formData.Name"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="surname">Фамилия:</label></td>
              <td>
                <input
                  id="surname"
                  v-model="formData.Surname"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="patron">Отчество:</label></td>
              <td>
                <input
                  id="patron"
                  v-model="formData.Patron"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="fac">Факультет:</label></td>
              <td>
                <input
                  id="fac"
                  v-model="formData.Faculty"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="specialty">Специальность:</label></td>
              <td>
                <input
                  id="specialty"
                  v-model="formData.Specialty"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="course">Курс:</label></td>
              <td>
                <input
                  id="course"
                  v-model="formData.Course"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="group">Группа:</label></td>
              <td>
                <input
                  id="group"
                  v-model="formData.Group"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="city">Город:</label></td>
              <td>
                <input
                  id="city"
                  v-model="formData.City"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="postindx">Почтовый индекс:</label></td>
              <td>
                <input
                  id="postindx"
                  v-model="formData.PostalCode"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="street">Улица:</label></td>
              <td>
                <input
                  id="street"
                  v-model="formData.Street"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="telephone">Телефон:</label></td>
              <td>
                <input
                  id="telephone"
                  v-model="formData.Phone"
                  type="text"
                >
              </td>
            </tr>
            <tr>
              <td><label for="post">Почта:</label></td>
              <td>
                <input
                  id="post"
                  v-model="formData.Email"
                  type="text"
                >
              </td>
            </tr>
          </table>
          <div class="modal-footer">
            <button
              class="btn-own-cls"
              @click="closeWindow"
            >
              Закрыть
            </button>
            <button
              class="btn-own-cls"
              @click="addStudent()"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      formData: {
        id: null,
        Name: "",
        Surname: "",
        Patron: "",
        Faculty: "",
        Specialty: "",
        Course: "",
        Group: "",
        City: "",
        PostalCode: "",
        Street: "",
        Phone: "",
        Email: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getAllStudents"]),
    totalStudents() {
      return this.getAllStudents.length;
    }
  },
  methods: {
    addStudent() {
      for (const key in this.formData) {
        if (this.formData[key] === "") {
          alert(`Пожалуйста заполните ${key} поле!`);
          return;
        }
      }
      this.formData.id = this.totalStudents + 1;
      this.$store.dispatch("addStudent", this.formData);
      this.closeWindow();
    },
    closeWindow() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
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
  width: 200px;
}
.btn-own-cls:hover {
  background-color: rgba(15, 83, 252, 1);
  cursor: pointer;
  color: white;
}
/* Модальное окно*/
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  max-width: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.modal-body {
  padding: 10px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter, .modal-leave-to{
  opacity: 0;
}

h1{
  color: rgba(15, 83, 252, 1);
  font-size: 10px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 40px;
}

td{
  width: 200px;
}

label{
  font-size: 20px;
}

input{
  font-size: 20px;
}

table{
  margin: auto;
}
</style>