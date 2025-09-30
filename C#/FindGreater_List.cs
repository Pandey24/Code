using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Create a list manually
        List<int> list = new List<int> { 5, 8, 6, 3 };

        // Assume first element is the max
        int max = list[0];

        // Loop through the rest
        for (int i = 1; i < list.Count; i++)
        {
            if (list[i] > max)
            {
                max = list[i];
            }
        }

        Console.WriteLine("Greatest number: " + max);
    }
}
