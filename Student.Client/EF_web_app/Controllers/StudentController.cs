using EF_web_app;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EF_web_app.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class StudentController : ControllerBase
	{
		private readonly ApplicationDbContext _context;

		public StudentController(ApplicationDbContext context)
		{
			_context = context;
			_context.Database.EnsureCreated();                                      //устанавливает связи с БД

		}

		[HttpGet]									//Получение списка студентов(+сортировка, + фильтрация)
		public async Task<IActionResult> Get(string ? sortByParam, bool sortAsc = true, string? filter = null)
		{
			IQueryable<Student> students = _context.Students;

			if (!string.IsNullOrEmpty(filter))
			{
				students = students.Where(s => s.Name.ToLower().Contains(filter.ToLower()) ||
																	s.Surname.ToLower().Contains(filter.ToLower()) ||
																	s.Patron.ToLower().Contains(filter.ToLower()) ||
																	s.PostalCode.ToLower().Contains(filter.ToLower()) ||
																	s.City.ToLower().Contains(filter.ToLower()) ||
																	s.Course.ToLower().Contains(filter.ToLower()) ||
																	s.Email.ToLower().Contains(filter.ToLower()) ||
																	s.Faculty.ToLower().Contains(filter.ToLower()) ||
																	s.Group.ToLower().Contains(filter.ToLower()) ||
																	s.Specialty.ToLower().Contains(filter.ToLower()) ||
																	s.Street.ToLower().Contains(filter.ToLower()) ||
																	s.Email.ToLower().Contains(filter.ToLower()) ||
																	s.Phone.ToLower().Contains(filter.ToLower())
																	);
			}
			if (!string.IsNullOrEmpty(sortByParam))
			{
				if (sortAsc)
				{
					students = students.OrderBy(s => EF.Property<object>(s, sortByParam));						//порядок по ВОЗРАСТАНИЮ
				}
				else
				{
					students = students.OrderByDescending(s => EF.Property<object>(s, sortByParam));				//порядок по УБЫВАНИЮ
				}
			}
			List<Student> studentList = await students.ToListAsync();
			if (studentList.Count == 0)							//проверка на пустой список (error 404)
			{
				return Ok(studentList);
			}
			return Ok(studentList);						//возвращаем код 200(Ok) + список студентов
		}

		[HttpPost]													//Добавление студента
		public async Task<IActionResult> Post(Student student)
		{
			_context.Students.Add(student);
			await _context.SaveChangesAsync();
			return Ok();                                                                //возвращаем код 200(Ok)
		}

		[HttpPut]											//Изменение данных о студенте
		public async Task<IActionResult> Put(Student student)
		{
			_context.Entry(student).State = EntityState.Modified;
			await _context.SaveChangesAsync();
			return Ok();                                                                            //возвращаем код 200(Ok)
		}

		[HttpDelete("{ID}")]										//Удаление студента(по id)
		public async Task<IActionResult> Delete(int id)
		{
			var student = await _context.Students.FindAsync(id);
			if (student == null)                                                                            //проверка на пустого студента (error 404)
			{
				return NotFound();
			}
			_context.Students.Remove(student);
			await _context.SaveChangesAsync();
			return Ok();                                                                                                            //возвращаем код 200(Ok)
		}
	}
}
