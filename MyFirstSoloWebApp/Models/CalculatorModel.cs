using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstSoloWebApp.Models
{
    public class CalculatorModel
    {
        [Range(0, 100)]
        public int Assign { get; set; }

        [Range(0, 100)]
        public int Grp { get; set; }

        [Range(0, 100)]
        public int Qz { get; set; }

        [Range(0, 100)]
        public int Xm { get; set; }

        [Range(0, 100)]
        public int Ntx { get; set; }
    }
}