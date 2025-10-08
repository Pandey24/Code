using System;
using System.Linq;

class Program
{
    static void Main()
    {
        string str = "abacdcdcd";
        string result = GetCharFrequency(str);
        Console.WriteLine(result);  // Output: 2a1b3c2d
    }

    static string GetCharFrequency(string input)
    {
        // Group characters and count their frequency
        var groups = input.GroupBy(c => c)
                          .Select(g => new { Char = g.Key, Count = g.Count() })
                          .OrderBy(g => g.Char);  // Optional: alphabetic order

        string result = string.Join("", groups.Select(g => $"{g.Count}{g.Char}"));
        return result;
    }
}
