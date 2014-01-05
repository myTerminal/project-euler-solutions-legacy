using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ProjectEulerSolutions
{
    class Program
    {
        static void Main(string[] args)
        {
            var start = DateTime.Now.Millisecond;
            Problem002.Run();
            var end = DateTime.Now.Millisecond;
            Console.WriteLine("Completed in " + (end - start));
            Console.ReadLine();
        }
    }
}
