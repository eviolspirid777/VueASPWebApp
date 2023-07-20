<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
              Name
              <input type="text" placeholder="Input name" v-model="formData.Name">
          </div>
          <div class="modal-body">
              Surname
              <input type="text" placeholder="Input surname" v-model="formData.Surname">
          </div>
          <div class="modal-body">
              Patron
              <input type="text" placeholder="Input patron" v-model="formData.Patron">
          </div>
          <div class="modal-body">
              Faculty
              <input type="text" placeholder="Input faculty" v-model="formData.Faculty">
          </div>
          <div class="modal-body">
              Specialty
              <input type="text" placeholder="Input name" v-model="formData.Specialty">
          </div>
          <div class="modal-body">
              Course
              <input type="text" placeholder="Input course" v-model="formData.Course">
          </div>
          <div class="modal-body">
              Group
              <input type="text" placeholder="Input group" v-model="formData.Group">
          </div>
          <div class="modal-body">
              City
              <input type="text" placeholder="Input city" v-model="formData.City">
          </div>
          <div class="modal-body">
              Postal Code
              <input type="text" placeholder="Input postal code" v-model="formData.PostalCode">
          </div>
          <div class="modal-body">
              Street
              <input type="text" placeholder="Input street" v-model="formData.Street">
          </div>
          <div class="modal-body">
              Phone
              <input type="text" placeholder="Input phone" v-model="formData.Phone">
          </div>
          <div class="modal-body">
              Email
              <input type="text" placeholder="Input email" v-model="formData.Email">
          </div>
          <div class="modal-footer">
              <button class="btn-own-cls" @click="addClick()">
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
      // Dispatch an action to update the Vuex store with the form data
      this.$store.dispatch('addStudent', this.formData);

      // Close the modal
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
</style>