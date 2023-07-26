<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            Имя
            <input
              v-model="formData.Name"
              type="text"
              placeholder="Введите имя"
            >
          </div>
          <div class="modal-body">
            Фамилия
            <input
              v-model="formData.Surname"
              type="text"
              placeholder="Введите фамилию"
            >
          </div>
          <div class="modal-body">
            Отчество
            <input
              v-model="formData.Patron"
              type="text"
              placeholder="Введите отчество"
            >
          </div>
          <div class="modal-body">
            Факультет
            <input
              v-model="formData.Faculty"
              type="text"
              placeholder="Введите факультет"
            >
          </div>
          <div class="modal-body">
            Специальность
            <input
              v-model="formData.Specialty"
              type="text"
              placeholder="Введите специальность"
            >
          </div>
          <div class="modal-body">
            Курс
            <input
              v-model="formData.Course"
              type="text"
              placeholder="Введите курс"
            >
          </div>
          <div class="modal-body">
            Группа
            <input
              v-model="formData.Group"
              type="text"
              placeholder="Введите группу"
            >
          </div>
          <div class="modal-body">
            Город
            <input
              v-model="formData.City"
              type="text"
              placeholder="Введите город"
            >
          </div>
          <div class="modal-body">
            Почтовый индекс
            <input
              v-model="formData.PostalCode"
              type="text"
              placeholder="Введите почтовый индекс"
            >
          </div>
          <div class="modal-body">
            Улица
            <input
              v-model="formData.Street"
              type="text"
              placeholder="Введите улицу"
            >
          </div>
          <div class="modal-body">
            Телефон
            <input
              v-model="formData.Phone"
              type="text"
              placeholder="Введите телефон"
            >
          </div>
          <div class="modal-body">
            Почта
            <input
              v-model="formData.Email"
              type="text"
              placeholder="Введите почту"
            >
          </div>
          <div class="modal-footer">
            <button
              class="btn-own-cls"
              style="width: 200px;"
              @click="closeWindow"
            >
              Закрыть
            </button>
            <button
              class="btn-own-cls"
              style="width: 200px;"
              @click="addClick()"
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
export default {
  props: {
    formData: {}
  },
  data() {
    return {};
  },
  methods: {
    addClick() {
      this.$store.dispatch("addStudent", this.formData);
      this.closeWindow();
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
</style>