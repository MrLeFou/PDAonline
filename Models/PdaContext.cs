using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NPoco;

namespace MyProject.Models
{
    public class PdaContext : DbContext
    {
        public PdaContext()
        {

        }

        public PdaContext(DbContextOptions<PdaContext> options)
            : base(options)
        {

        }

        public virtual DbSet<Duty> Duty { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual Customer CurrentCustomer { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//                optionsBuilder.UseSqlServer(
//@"Server=(localdb)\mssqllocaldb;Database=PDAppDb;Trusted_Connection=True;");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Duty>(entity =>
            //{
            //    entity.HasOne(e => e.Customer)
            //        .WithMany(c => c.Duties)
            //        .HasForeignKey(e => e.CustomerID);

            //});

            modelBuilder.Entity<Duty>().ToTable("Duty");

            modelBuilder.Entity<Customer>()
            .Property(c => c.CustomerID).IsRequired();
        }
    }

}
