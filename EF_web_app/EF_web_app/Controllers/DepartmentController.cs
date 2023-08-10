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
	public class DepartmentController : ControllerBase
	{
		private readonly ApplicationDbContext _context;

		static bool flag = true;																		//буль для хранения состояния
		public DepartmentController(ApplicationDbContext context)
		{
			_context = context;
			_context.Database.EnsureCreated();										//устанавливает связи в БД
		}

		[HttpGet]
		public async Task<IActionResult> Get(string ? sortByName, bool sortAsc = true, string? filter = null)
		{
			IQueryable<Student> students = _context.Students;

			if (!string.IsNullOrEmpty(filter))
			{
				students = students.Where(s => s.Name.ToLower().Contains(filter.ToLower()));
			}

			if (!string.IsNullOrEmpty(sortByName))
			{
				if (sortAsc)
				{
					students = students.OrderBy(s => EF.Property<object>(s, "Name")).ThenBy(d => EF.Property<object>(d, "Surname")).ThenBy(f => EF.Property<object>(f, "Patron")).ThenBy(f => EF.Property<object>(f, "Faculty")).ThenBy(f => EF.Property<object>(f, "Specialty")).ThenBy(f => EF.Property<object>(f, "Course")).ThenBy(f => EF.Property<object>(f, "Group")).ThenBy(f => EF.Property<object>(f, "City")).ThenBy(f => EF.Property<object>(f, "PostalCode")).ThenBy(f => EF.Property<object>(f, "Street")).ThenBy(f => EF.Property<object>(f, "Phone")).ThenBy(f => EF.Property<object>(f, "Email"));
				}
				else
				{
					students = students.OrderByDescending(s => EF.Property<object>(s, "Name")).ThenByDescending(d => EF.Property<object>(d, "Surname")).ThenByDescending(f => EF.Property<object>(f, "Patron")).ThenByDescending(f => EF.Property<object>(f, "Faculty")).ThenByDescending(f => EF.Property<object>(f, "Specialty")).ThenByDescending(f => EF.Property<object>(f, "Course")).ThenByDescending(f => EF.Property<object>(f, "Group")).ThenByDescending(f => EF.Property<object>(f, "City")).ThenByDescending(f => EF.Property<object>(f, "PostalCode")).ThenByDescending(f => EF.Property<object>(f, "Street")).ThenByDescending(f => EF.Property<object>(f, "Phone")).ThenByDescending(f => EF.Property<object>(f, "Email"));
				}
			}

			List<Student> studentList = await students.ToListAsync();
			return new JsonResult(studentList);
		}

		[HttpPost]
		public async Task<IActionResult> Post(Student student)
		{
			_context.Students.Add(student);
			await _context.SaveChangesAsync();
			return new JsonResult("Added Successfully");
		}

		[HttpPut]
		public async Task<IActionResult> Put(Student student)
		{
			_context.Entry(student).State = EntityState.Modified;
			await _context.SaveChangesAsync();
			return new JsonResult("Updated Successfully");
		}

		[HttpDelete("{ID}")]
		public async Task<IActionResult> Delete(int id)
		{
			var student = await _context.Students.FindAsync(id);
			if (student == null)
			{
				return NotFound();
			}

			_context.Students.Remove(student);
			await _context.SaveChangesAsync();
			return new JsonResult("Deleted Successfully");
		}
	}
}
