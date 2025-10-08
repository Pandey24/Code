using System;

class Program
{
    static void Main()
    {
        string str = "aabcccdd";
        string result = CompressString(str);
        Console.WriteLine(result); // Output: 2a1b3c2d
    }

    static string CompressString(string input)
    {
        if (string.IsNullOrEmpty(input))
            return string.Empty;

        char prevChar = input[0];
        int count = 1;
        string result = "";

        for (int i = 1; i < input.Length; i++)
        {
            if (input[i] == prevChar)
            {
                count++;
            }
            else
            {
                result += count.ToString() + prevChar;
                prevChar = input[i];
                count = 1;
            }
        }

        // append last group
        result += count.ToString() + prevChar;

        return result;
    }
}
