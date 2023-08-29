<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <h1 class="header">
          Данные о студенте
        </h1>
        <hr style="color:rgb(46, 73, 108)">
        <label
          for="surname"
          class="label-input"
        >Фамилия:</label>
        <input
          id="surname"
          v-model="formData.surname"
          type="text"
        >
        <label
          for="name"
          class="label-input"
        >Имя:</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
        >
        <label
          for="patron"
          class="label-input"
        >Отчество:</label>
        <input
          id="patron"
          v-model="formData.patron"
          type="text"
        >
        <label
          for="fac"
          class="label-input"
        >Факультет:</label>
        <input
          id="fac"
          v-model="formData.faculty"
          type="text"
        >
        <label
          for="specialty"
          class="label-input"
        >Специальность:</label>
        <input
          id="specialty"
          v-model="formData.specialty"
          type="text"
        >
        <label
          for="course"
          class="label-input"
        >Курс:</label>
        <input
          id="course"
          v-model="formData.course"
          type="text"
        >
        <label
          for="group"
          class="label-input"
        >Группа:</label>
        <input
          id="group"
          v-model="formData.group"
          type="text"
        >
        <label
          for="city"
          class="label-input"
        >Город:</label>
        <!-- <input
          id="city"
          v-model="formData.city"
          type="text"
        > -->
        <select v-model="selectedItem">
          <option
            v-for="item in cities"
            :key="item.id"
          >
            {{ item }}
          </option>
        </select>
        <label
          for="postindx"
          class="label-input"
        >Почтовый индекс:</label>
        <input
          id="postindx"
          v-model="formData.postalCode"
          type="text"
        >
        <label
          for="street"
          class="label-input"
        >Улица:</label>
        <input
          id="street"
          v-model="formData.street"
          type="text"
        >
        <label
          for="telephone"
          class="label-input"
        >Телефон:</label>
        <input
          id="telephone"
          v-model="formData.phone"
          type="text"
        >
        <label
          for="post"
          class="label-input"
        >Почта:</label>
        <input
          id="post"
          v-model="formData.email"
          type="text"
        >
        <div class="modal-footer">
          <button
            class="btn-own-cls"
            @click="close()"
          >
            Отмена
          </button>
          <button
            class="btn-own-cls"
            @click="submit()"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    currentStudent: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selectedItem: ""
    };
  },
  computed: {
    ...mapGetters({
      getAllCities: "allCities"
    }),
    cities() {
      return this.$store.getters.allCities.map(city => city.country);
    },
    formData() {
      if (!this.currentStudent) {
        return {
          id: undefined,
          name: "",
          surname: "",
          patron: "",
          faculty: "",
          specialty: "",
          course: "",
          group: "",
          city: "",
          postalCode: "",
          street: "",
          phone: "",
          email: ""
        };
      }
      else {
        return { ...this.currentStudent };
      }
    }
  },
  mounted() {
    this.$store.dispatch("refreshCities");
  },
  methods: {
    async submit() {
      for (const key in this.formData) {
        if (this.formData[key] === "") {
          alert(`Пожалуйста заполните ${key} поле!`);
          return;
        }
      }

      if (!this.currentStudent) {
        await this.$store.dispatch("addStudent", this.formData);
      }
      else {
        await this.$store.dispatch("updateStudent", this.formData);
      }
      await this.$store.dispatch("refreshStudents");
      this.close();
    },
    close() {
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
  box-shadow: 1px 1px 20px #007bff;
}

.modal-container {
  border-radius: 10px;
  background-color: rgba(46, 73, 108, 0.87);
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

.header {
  padding-bottom: 10px;
  font-size: 30px;
  margin-left: 22%;
  color: rgb(221, 221, 255);
  text-shadow: 1px 1px 5px rgba(15, 83, 252, 1), 1px 1px 10px rgb(19, 38, 87);
}

.modal-container label {
  display: inline-block;
  width: 150px;
  text-align: right;
  margin-right: 10px;
  font-weight: bold;
  font-size: 16px;
  color: #ffffffd3;
}

.modal-container input, select {
  width: 200px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: rgba(19, 38, 87, 0.308);
  color: #fff;
}

.btn-own-cls {
  width: 120px;
  padding: 10px 20px;
  font-size: 15px;
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