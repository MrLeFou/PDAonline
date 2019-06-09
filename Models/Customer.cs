using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NPoco;

namespace MyProject.Models
{
    [TableName("Customer")]
    public class Customer
    {
        [Required]
        [Column("CustomerID")]
        public int CustomerID { get; set; }

        [Required(ErrorMessage = "Please Provide Username", AllowEmptyStrings = false)]
        [Display(Name = "Customer Name")]
        [Column("CustomerName")]
        public string CustomerName { get; set; }

        [Required(ErrorMessage = "Please Provide Username", AllowEmptyStrings = false)]
        [Display(Name = "Password")]
        [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
        [Column("CustomerPassword")]
        public string CustomerPassword { get; set; }

        public ICollection<Duty> Duties { get; set; }

        public Customer()
        {
            Duties = new HashSet<Duty>();
        }
    }
}
