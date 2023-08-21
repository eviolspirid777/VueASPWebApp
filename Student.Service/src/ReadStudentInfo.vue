<template>
  <div>
    <h2>Информация о студенте</h2>
    <label>Имя:</label>
    <p>{{ studentData.name }}</p>
    <label>Фамилия:</label>
    <p>{{ studentData.surname }}</p>
    <label>Отчество:</label>
    <p>{{ studentData.patron }}</p>
    <label>Факультет:</label>
    <p>{{ studentData.faculty }}</p>
    <label>Специальность:</label>
    <p>{{ studentData.specialty }}</p>
    <label>Курс:</label>
    <p>{{ studentData.course }}</p>
    <label>Группа:</label>
    <p>{{ studentData.group }}</p>
    <label>Город:</label>
    <p>{{ studentData.city }}</p>
    <label>Почтовый индекс:</label>
    <p>{{ studentData.postindx }}</p>
    <label>Улица:</label>
    <p>{{ studentData.street }}</p>
    <label>Телефон:</label>
    <p>{{ studentData.telephone }}</p>
    <label>Почта:</label>
    <p>{{ studentData.email }}</p>
  </div>
</template>

<script>
export default ({
  props: {
    student: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      studentData: {
        name: this.student.name,
        surname: this.student.surname,
        patron: this.student.patron,
        faculty: this.student.faculty,
        specialty: this.student.specialty,
        course: this.student.course,
        group: this.student.group,
        city: this.student.city,
        postindx: this.student.postindx,
        street: this.student.street,
        telephone: this.student.telephone,
        email: this.student.email
      }
    };
  }
});
</script>

<style scoped>

</style>