<template>
  <div>
    <h3>Информация о студенте</h3>
    <hr style="height: 2px; color:rgba(15, 82, 252, 0.849) ;">
    <p>
      <label>ID: {{ studentData.id }}</label>
    </p>
    <p>
      <label>Имя: {{ studentData.name }}</label>
    </p>
    <p>
      <label>Фамилия: {{ studentData.surname }}</label>
    </p>
    <p>
      <label>Отчество: {{ studentData.patron }}</label>
    </p>
    <p>
      <label>Факультет: {{ studentData.faculty }}</label>
    </p>
    <p>
      <label>Специальность: {{ studentData.specialty }}</label>
    </p>
    <p>
      <label>Курс: {{ studentData.course }}</label>
    </p>
    <p>
      <label>Группа: {{ studentData.group }}</label>
    </p>
    <p>
      <label>Город: {{ studentData.city }}</label>
    </p>
    <p>
      <label>Почтовый индекс: {{ studentData.postalCode }}</label>
    </p>
    <p>
      <label>Улица: {{ studentData.street }}</label>
    </p>
    <p>
      <label>Телефон: {{ studentData.telephone }}</label>
    </p>
    <p>
      <label>Почта: {{ studentData.email }}</label>
    </p>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      studentData: {},
      trimmedPath: NaN
    };
  },
  computed: {
    sendAllStudents() {
      return this.$store.getters.getAllStudents;
    }
  },
  beforeMount() {
    this.fetchStudentData();
  },
  methods: {
    async fetchStudentData() {
      const currentPath = this.$route.path;
      const pathParts = currentPath.split("/");
      this.trimmedPath = parseInt(pathParts[pathParts.length - 1]);
      this.studentData = await this.sendAllStudents.find(student => student.id === this.trimmedPath);
    }
  }
};
</script>

<style scoped>
div{
  border: 2px solid rgba(15, 83, 252);
  border-radius: 20px;
  width: 600px;
  align-items: center;
  box-shadow: 4px 3px 5px 1px rgba(15, 83, 252);
}
h3{
  padding-bottom: 10px;
  font-size: 30px;
  padding-top: 10px;
  margin-left: 22%;
  color: rgb(221, 221, 255);
  text-shadow: 1px 1px 5px rgba(15, 83, 252, 1), 1px 1px 10px rgb(19, 38, 87);
}
p{
  align-items: center;
  padding-left: 40px;
}
p label{
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
p label:hover{
  color: rgba(15, 83, 252, 1);
  text-shadow: 1px 1px 1px rgba(15, 83, 252, 1);
  cursor: pointer;
}
</style>