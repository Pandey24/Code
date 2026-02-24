using System;

class Program
{
    static void Main()
    {
        string str = "1+2+5-3+7-1+2";
        int sum = 0;
        int num = 0;
        char sign = '+';   // default sign

        for (int i = 0; i < str.Length; i++)
        {
            char ch = str[i];

            // build number (handles multi-digit also)
            if (ch >= '0' && ch <= '9')
            {
                num = num * 10 + (ch - '0');
            }
            else
            {
                // apply previous sign
                if (sign == '+')
                    sum += num;
                else if (sign == '-')
                    sum -= num;

                // reset
                sign = ch;
                num = 0;
            }
        }

        // apply last number
        if (sign == '+')
            sum += num;
        else if (sign == '-')
            sum -= num;

        Console.WriteLine(sum);
    }
}
