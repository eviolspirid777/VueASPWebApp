<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <h1 class="header">
          Данные о городе
        </h1>
        <hr style="color:rgb(46, 73, 108)">
        <label
          for="city"
          class="label-input"
        >Город:</label>
        <input
          id="city"
          v-model="formData.country"
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
export default ({
  props: {
    currentData: {
      type: Object,
      default: () => {},
      required: false
    }
  },
  computed: {
    formData() {
      if (!this.currentData) {
        return {
          id: undefined,
          country: ""
        };
      }
      else {
        return { ...this.currentData };
      }
    }
  },
  methods: {
    async submit() {
      for (const key in this.formData) {
        if (this.formData[key] === "") {
          alert(`Пожалуйста заполните ${key} поле!`);
          return;
        }
      }

      if (Object.keys(this.currentData).length === 0) { //какой-то баг непонятный с проверкой...
        console.log("addMethod");
        await this.$store.dispatch("addCity", this.formData);
      }
      else {
        await this.$store.dispatch("updateCity", this.formData);
      }
      await this.$store.dispatch("refreshCities");
      this.close();
    },
    close() {
      this.$emit("close");
    }
  }
});
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
