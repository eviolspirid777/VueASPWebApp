using Microsoft.EntityFrameworkCore;

namespace EF_web_app
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
		}
		public DbSet<Student> Students { get; set; }
	}
}
