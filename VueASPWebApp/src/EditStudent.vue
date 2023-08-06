<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h1 style="font-size: large;">
            Редактирование студента
          </h1>
          <table>
            <tr>
              <td><label for="name">Имя:</label></td>
              <td>
                <input
                  id="name"
                  v-model="localFormData.name"
                  type="text"
                  placeholder="Введите имя"
                >
              </td>
            </tr>
            <tr>
              <td><label for="surname">Фамилия:</label></td>
              <td>
                <input
                  id="surname"
                  v-model="localFormData.surname"
                  type="text"
                  placeholder="Введите фамилию"
                >
              </td>
            </tr>
            <tr>
              <td><label for="patron">Отчество:</label></td>
              <td>
                <input
                  id="patron"
                  v-model="localFormData.patron"
                  type="text"
                  placeholder="Введите отчество"
                >
              </td>
            </tr>
            <tr>
              <td><label for="fac">Факультет:</label></td>
              <td>
                <input
                  id="fac"
                  v-model="localFormData.faculty"
                  type="text"
                  placeholder="Введите факультет"
                >
              </td>
            </tr>
            <tr>
              <td><label for="specialty">Специальность:</label></td>
              <td>
                <input
                  id="specialty"
                  v-model="localFormData.specialty"
                  type="text"
                  placeholder="Введите специальность"
                >
              </td>
            </tr>
            <tr>
              <td><label for="course">Курс:</label></td>
              <td>
                <input
                  id="course"
                  v-model="localFormData.course"
                  type="text"
                  placeholder="Введите курс"
                >
              </td>
            </tr>
            <tr>
              <td><label for="group">Группа:</label></td>
              <td>
                <input
                  id="group"
                  v-model="localFormData.group"
                  type="text"
                  placeholder="Введите группу"
                >
              </td>
            </tr>
            <tr>
              <td><label for="city">Город:</label></td>
              <td>
                <input
                  id="city"
                  v-model="localFormData.city"
                  type="text"
                  placeholder="Введите город"
                >
              </td>
            </tr>
            <tr>
              <td><label for="postindx">Почтовый индекс:</label></td>
              <td>
                <input
                  id="postindx"
                  v-model="localFormData.postalCode"
                  type="text"
                  placeholder="Введите почтовый индекс"
                >
              </td>
            </tr>
            <tr>
              <td><label for="street">Улица:</label></td>
              <td>
                <input
                  id="street"
                  v-model="localFormData.street"
                  type="text"
                  placeholder="Введите улицу"
                >
              </td>
            </tr>
            <tr>
              <td><label for="telephone">Телефон:</label></td>
              <td>
                <input
                  id="telephone"
                  v-model="localFormData.phone"
                  type="text"
                  placeholder="Введите телефон"
                >
              </td>
            </tr>
            <tr>
              <td><label for="post">Почта:</label></td>
              <td>
                <input
                  id="post"
                  v-model="localFormData.email"
                  type="text"
                  placeholder="Введите почту"
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
              @click="updateClick"
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