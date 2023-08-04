<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h1>Редактирование студента</h1>
          <p class="modal-body">
            <label for="name">Имя: </label>
            <input
              id="name"
              v-model="localFormData.Name"
              type="text"
              placeholder="Введите имя"
            >
          </p>
          <p class="modal-body">
            <label for="surname">Фамилия: </label>
            <input
              id="surname"
              v-model="localFormData.Surname"
              type="text"
              placeholder="Введите фамилию"
            >
          </p>
          <p class="modal-body">
            <label for="patron">Отчество: </label>
            <input
              id="patron"
              v-model="localFormData.Patron"
              type="text"
              placeholder="Введите отчество"
            >
          </p>
          <p class="modal-body">
            <label for="fac">Факультет: </label>
            <input
              id="fac"
              v-model="localFormData.Faculty"
              type="text"
              placeholder="Введите факультет"
            >
          </p>
          <p class="modal-body">
            <label for="specialty">Специальность: </label>
            <input
              id="specialty"
              v-model="localFormData.Specialty"
              type="text"
              placeholder="Введите специальность"
            >
          </p>
          <p class="modal-body">
            <label for="course">Курс: </label>
            <input
              id="course"
              v-model="localFormData.Course"
              type="text"
              placeholder="Введите курс"
            >
          </p>
          <p class="modal-body">
            <label for="group">Группа: </label>
            <input
              id="group"
              v-model="localFormData.Group"
              type="text"
              placeholder="Введите группу"
            >
          </p>
          <p class="modal-body">
            <label for="city">Город: </label>
            <input
              id="city"
              v-model="localFormData.City"
              type="text"
              placeholder="Введите город"
            >
          </p>
          <p class="modal-body">
            <label for="postindx">Почтовый индекс: </label>
            <input
              id="postindx"
              v-model="localFormData.PostalCode"
              type="text"
              placeholder="Введите почтовый индекс"
            >
          </p>
          <p class="modal-body">
            <label for="street">Улица: </label>
            <input
              id="street"
              v-model="localFormData.Street"
              type="text"
              placeholder="Введите улицу"
            >
          </p>
          <p class="modal-body">
            <label for="telephone">Телефон: </label>
            <input
              id="telephone"
              v-model="localFormData.Phone"
              type="text"
              placeholder="Введите телефон"
            >
          </p>
          <p class="modal-body">
            <label for="post">Почта: </label>
            <input
              id="post"
              v-model="localFormData.Email"
              type="text"
              placeholder="Введите почту"
            >
          </p>
          <div class="modal-footer">
            <button
              class="btn-own-cls"
              style="width: 200px;"
              @click="closeWindow()"
            >
              Закрыть
            </button>
            <button
              class="btn-own-cls"
              style="width: 200px;"
              @click="updateClick()"
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
import _ from "lodash";

export default {
  props: {
    formData: {
      type: Object, //прописываем тип получаемого значения Object
      default: () => ({})
    }
  },
  data() {
    return {
      localFormData: _.cloneDeep(this.formData)
    };
  },
  watch: {
    formData: {
      checkValue(newFormData) {
        this.localFormData = newFormData;
      }
    }
  },
  methods: {
    updateClick() {
      this.$store.dispatch("updateStudent", this.localFormData);
      this.$store.dispatch("fetchStudents");
      this.$emit("close");
    },
    closeWindow() {
      this.$emit("close");
    }
  }
};
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
font-size: 20px;
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
</style>