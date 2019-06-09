using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NPoco;

namespace MyProject.Models
{
    public class Duty
    {
        public Duty()
        {

        }

        public int DutyID { get; set; }
        public int CustomerID { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int PriorityLevel { get; set; }
        public string DutyDescription { get; set; }

        public Customer Customer { get; set; }
    }
}
