// using swap in same loop
using System;

public class Program
{
    public static void Main(string[] args)
    {
        int[] array = { 1, 0, 1, 0, 0, 1 };
        int right = array.Length - 1;
        int left = 0;

        while (right > left)
        {
            if (array[left] == 1 && array[right] == 0)
            {
                // Correct swap
                int temp = array[left];
                array[left] = array[right];
                array[right] = temp;

                left++;
                right--;
            }
            else if (array[left] == 0)
            {
                left++;
            }
            else if (array[right] == 1)
            {
                right--;
            }
        }

        foreach (int i in array)
        {
            Console.WriteLine(i);
        }
    }
}
