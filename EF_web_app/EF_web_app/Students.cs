using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EF_web_app
{
	[Table("students")]
	public class Student
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int id { get; set; }
		public string Name { get; set; }
		public string Surname { get; set; }
		public string Patron { get; set; }
		public string Faculty { get; set; }
		public string Specialty { get; set; }
		public string Course { get; set; }
		public string Group { get; set; }
		public string City { get; set; }
		public string PostalCode { get; set; }
		public string Street { get; set; }
		public string Phone { get; set; }
		public string Email { get; set; }
	}
}
