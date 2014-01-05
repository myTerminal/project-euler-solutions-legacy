
// -----------------------------------------------------------------------
// <copyright file="Problem015.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace ProjectEulerSolutions
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    /// <summary>
    /// TODO: Update summary.
    /// </summary>
    public class Problem015
    {
        public static void Run()
        {
            int size = 20;
            var something = Enumerable.Range(0, (int)Math.Pow(2, size * 2) - 1)
                            .Select(num => Convert.ToString(num, 2))
                            .Where(st => st.Length >= size)
                            .Count(num => isSymmetric(num, size));
            Console.WriteLine("---------" + Environment.NewLine + something.ToString());
        }

        private static bool isSymmetric(string num, int size)
        {
            //Console.WriteLine(num);
            var characters = num.ToCharArray();
            return characters.Count(c => c == '1') == size;
        }
    }
}
