using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        var slist = new List<string>
        {
            "Elbow", "State", "Cider", "Dusty", "Below", "Night", "Taste", "Cried", "Study", "Thing"
        };

        FindAnagramPairs(slist);
    }

    static void FindAnagramPairs(List<string> words)
    {
        for (int i = 0; i < words.Count; i++)
        {
            for (int j = i + 1; j < words.Count; j++)
            {
                if (IsAnagram(words[i], words[j]))
                {
                    Console.WriteLine($"{words[i]} - {words[j]}");
                }
            }
        }
    }

    static bool IsAnagram(string word1, string word2)
    {
        if (word1.Length != word2.Length)
            return false;

        var sorted1 = String.Concat(word1.ToLower().OrderBy(c => c));
        var sorted2 = String.Concat(word2.ToLower().OrderBy(c => c));

        return sorted1 == sorted2;
    }
}
/*
Output
Elbow - Below
State - Taste
Cider - Cried
Dusty - Study
Night - Thing

*/

