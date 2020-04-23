// This program doesn't work, but ill put it here anyway so you can at least get an idea

#include <stdio.h>
#include <string.h>

void iso(char arr[]);

void main()
{
	iso('Dermatoglyphics');
	return 0;
}

void iso(char iso[])
{
	int i, j;
	for (i = 0; i < strlen(iso); i++)
	{
		for (size_t j = i + 1; j < strlen(iso); j++)
		{
			if (iso[i] == iso[j])
			{
				printf('This is not an isogram');
				return 0;
			}
		}
	}
	printf('This is an isogram');
	return 0;
}