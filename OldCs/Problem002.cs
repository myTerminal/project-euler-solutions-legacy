// -----------------------------------------------------------------------
// <copyright file="Problem002.cs" company="">
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
    public class Problem002
    {
        public static void Run()
        {
            var result = FibonacciGenerator.GetFabonaccis().TakeWhile(p => p < 4000000).Where((item, index) => item % 2 == 0).Sum();
            Console.WriteLine(result);
        }
    }

    static class FibonacciGenerator
    {
        private static List<long> discoveredFibonaccis = new List<long> { 0, 1 };

        private static IEnumerable<long> GetUndiscoveredFibonaccis()
        {
            for (long i = 0; ; i++)
            {
                yield return discoveredFibonaccis[discoveredFibonaccis.Count - 2] + discoveredFibonaccis.Last();
                discoveredFibonaccis.Add(discoveredFibonaccis[discoveredFibonaccis.Count - 2] + discoveredFibonaccis.Last());
            }
        }

        public static IEnumerable<long> GetFabonaccis()
        {
            return discoveredFibonaccis.Concat(GetUndiscoveredFibonaccis());
        }
    }
}
