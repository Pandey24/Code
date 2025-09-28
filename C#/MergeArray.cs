using System;

class Program
{
    static void Main()
    {
        int[] a = { 4, 6, 8, 1, 3 };
        int[] b = { 6, 2, 4, 8 };

        int[] result = new int[a.Length + b.Length]; // max possible size
        int k = 0;

        // Check elements in a that are not in b
        for (int i = 0; i < a.Length; i++)
        {
            bool found = false;
            for (int j = 0; j < b.Length; j++)
            {
                if (a[i] == b[j])
                {
                    found = true;
                    break;
                }
            }
            if (!found)
            {
                result[k++] = a[i];
            }
        }

        // Check elements in b that are not in a
        for (int i = 0; i < b.Length; i++)
        {
            bool found = false;
            for (int j = 0; j < a.Length; j++)
            {
                if (b[i] == a[j])
                {
                    found = true;
                    break;
                }
            }
            if (!found)
            {
                result[k++] = b[i];
            }
        }

        // Print result
        Console.Write("Result: { ");
        for (int i = 0; i < k; i++)
        {
            Console.Write(result[i]);
            if (i < k - 1) Console.Write(", ");
        }
        Console.WriteLine(" }");
    }
}
