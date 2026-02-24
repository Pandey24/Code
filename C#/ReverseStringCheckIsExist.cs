using System;

class Program
{
    static void Main()
    {
        string input = "Systtem";
        char[] result = new char[input.Length];
        int index = 0;

        // reverse loop
        for (int i = input.Length - 1; i >= 0; i--)
        {
            char current = input[i];
            bool isDuplicate = false;

            // check if already added
            for (int j = 0; j < index; j++)
            {
                if (result[j] == current)
                {
                    isDuplicate = true;
                    break;
                }
            }

            if (!isDuplicate)
            {
                result[index] = current;
                index++;
            }
        }

        // print result
        for (int i = 0; i < index; i++)
        {
            Console.Write(result[i]);
        }
    }
}
