```c#
using System;

class Program
{
    static void Main()
    {
        string input = "infracloud";
        string result = "";

        for (int i = 0; i < input.Length; i++)
        {
            char ch = input[i];

            if (IsVowel(ch))
            {
                // check if surrounded by consonant
                bool leftConsonant = (i > 0 && !IsVowel(input[i - 1]));
                bool rightConsonant = (i < input.Length - 1 && !IsVowel(input[i + 1]));

                if (leftConsonant || rightConsonant)
                {
                    result += ch;
                }
            }
        }

        Console.WriteLine(result);
    }

    static bool IsVowel(char ch)
    {
        ch = char.ToLower(ch);
        return ch == 'a' || ch == 'e' || ch == 'i' ||
               ch == 'o' || ch == 'u';
    }
}

```
