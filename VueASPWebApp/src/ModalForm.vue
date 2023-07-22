<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
              Имя
              <input type="text" placeholder="Введите имя" v-model="formData.Name">
          </div>
          <div class="modal-body">
              Фамилия
              <input type="text" placeholder="Введите фамилию" v-model="formData.Surname">
          </div>
          <div class="modal-body">
              Отчество
              <input type="text" placeholder="Введите отчество" v-model="formData.Patron">
          </div>
          <div class="modal-body">
              Факультет
              <input type="text" placeholder="Введите факультет" v-model="formData.Faculty">
          </div>
          <div class="modal-body">
              Специальность
              <input type="text" placeholder="Введите специальность" v-model="formData.Specialty">
          </div>
          <div class="modal-body">
              Курс
              <input type="text" placeholder="Введите курс" v-model="formData.Course">
          </div>
          <div class="modal-body">
              Группа
              <input type="text" placeholder="Введите группу" v-model="formData.Group">
          </div>
          <div class="modal-body">
              Город
              <input type="text" placeholder="Введите город" v-model="formData.City">
          </div>
          <div class="modal-body">
              Почтовый индекс
              <input type="text" placeholder="Введите почтовый индекс" v-model="formData.PostalCode">
          </div>
          <div class="modal-body">
              Улица
              <input type="text" placeholder="Введите улицу" v-model="formData.Street">
          </div>
          <div class="modal-body">
              Телефон
              <input type="text" placeholder="Введите телефон" v-model="formData.Phone">
          </div>
          <div class="modal-body">
              Почта
              <input type="text" placeholder="Введите почту" v-model="formData.Email">
          </div>
          <div class="modal-footer">
            <button class="btn-own-cls" style="width: 200px;" @click="addClick()">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['showModal'],
  data() {
    return {
      formData: {
        Name: '',
        Surname: '',
        Patron: '',
        Faculty: '',
        Specialty: '',
        Course: '',
        Group: '',
        City: '',
        PostalCode: '',
        Street: '',
        Phone: '',
        Email: '',
      },
    };
  },
  methods: {
    addClick() {
      this.$store.dispatch('addStudent', this.formData);
      this.$emit('close');
    },
  },
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
</style>