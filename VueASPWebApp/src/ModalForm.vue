<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h1 style="font-size: 30px;">
            {{ modalTitle }}
          </h1>
          <hr>
          <label for="name" class="label-input">Имя:</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
          >
          <label for="surname" class="label-input">Фамилия:</label>
          <input
            id="surname"
            v-model="formData.surname"
            type="text"
          >
          <label for="patron" class="label-input" >Отчество:</label>
          <input
            id="patron"
            v-model="formData.patron"
            type="text"
          >
          <label for="fac" class="label-input">Факультет:</label>
          <input
            id="fac"
            v-model="formData.faculty"
            type="text"
          >
          <label for="specialty" class="label-input">Специальность:</label>
          <input
            id="specialty"
            v-model="formData.specialty"
            type="text"
          >
          <label for="course" class="label-input">Курс:</label>
          <input
            id="course"
            v-model="formData.course"
            type="text"
          >
          <label for="group" class="label-input">Группа:</label>
          <input
            id="group"
            v-model="formData.group"
            type="text"
          >
          <label for="city" class="label-input">Город:</label>
          <input
            id="city"
            v-model="formData.city"
            type="text"
          >
          <label for="postindx" class="label-input">Почтовый индекс:</label>
          <input
            id="postindx"
            v-model="formData.postalCode"
            type="text"
          >
          <label for="street" class="label-input">Улица:</label>
          <input
            id="street"
            v-model="formData.street"
            type="text"
          >
          <label for="telephone" class="label-input">Телефон:</label>
          <input
            id="telephone"
            v-model="formData.phone"
            type="text"
          >
          <label for="post" class="label-input">Почта:</label>
          <input
            id="post"
            v-model="formData.email"
            type="text"
          >
          <div class="modal-footer">
            <button
              class="btn-own-cls"
              @click="closeWindow()"
            >
              Отмена
            </button>
            <button
              class="btn-own-cls"
              @click="submitStudent()"
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
  props: {
    sendData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formData: {
        name: this.sendData.name ?? "",
        surname: this.sendData.surname ?? "",
        patron: this.sendData.patron ?? "",
        faculty: this.sendData.faculty ?? "",
        specialty: this.sendData.specialty ?? "",
        course: this.sendData.course ?? "",
        group: this.sendData.group ?? "",
        city: this.sendData.city ?? "",
        postalCode: this.sendData.postalCode ?? "",
        street: this.sendData.street ?? "",
        phone: this.sendData.phone ?? "",
        email: this.sendData.email ?? ""
      }
    };
  },
  computed: {
    ...mapGetters(["getAllStudents"]),
    totalStudents() {
      return this.getAllStudents.length;
    },
    modalTitle() {
      return Object.keys(this.sendData).length !== 0 ? "Редактировать Студента" : "Добавить Студента";
    }
  },
  methods: {
    async submitStudent() {
      for (const key in this.formData) {
        if (this.formData[key] === "") {
          alert(`Пожалуйста заполните ${key} поле!`);
          return;
        }
      }

      if (Object.keys(this.sendData).length === 0) {
        await this.$store.dispatch("addStudent", this.formData);
        await this.$store.dispatch("fetchStudents");
        this.closeWindow();
      }
      else {
        await this.$store.dispatch("updateStudent", this.formData);
        this.$store.dispatch("fetchStudents");
        this.closeWindow();
      }
    },
    closeWindow() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
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

.modal-container {
  padding: 20px;
  text-align: left;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  justify-content: space-between;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

h1 {
  color: rgba(15, 83, 252, 1);
  font-size: 20px;
  margin: 20px 0;
}

label {
  display: inline-block;
  width: 150px;
  text-align: right;
  margin-right: 10px;
  font-weight: bold;
  font-size: 16px;
}

input {
  width: 200px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.btn-own-cls {
  width: 120px;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.btn-own-cls:not(:last-child) {
  margin-right: 10px;
}

.label-input {
  margin-bottom: 20px;
}
</style>