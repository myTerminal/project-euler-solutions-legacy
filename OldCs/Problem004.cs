// -----------------------------------------------------------------------
// <copyright file="Problem004.cs" company="">
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
    public class Problem004
    {
        public static void Run()
        {
            var maxPalindrome = getPalindromes().Max();
            Console.WriteLine(maxPalindrome);
        }

        private static IEnumerable<int> getPalindromes()
        {
            return Enumerable.Range(1, int.MaxValue).Select(x => x * 11).TakeWhile(x => x < 1000)
                    .SelectMany(m1 => Enumerable.Range(100, 1000 - 99).Select(m2 => m1 * m2))
                    .Where(x => isPalindrome(x));

            //for (int i = 999; i > 99; i--)
            //    for (int j = 999; j > 99; j--)
            //        yield return isPalindrome(i * j) ? i * j : 1;
        }

        private static bool isPalindrome(long theNumber)
        {
            return theNumber.ToString() == Reverse(theNumber.ToString());
        }

        private static string Reverse(string theNumber)
        {
            return theNumber.Reverse().Aggregate(new StringBuilder(), (builder, c) => builder.Append(c)).ToString();
        }
    }
}
