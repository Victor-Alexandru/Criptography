// CiurulEratostene.cpp : Defines the entry point for the console application.
//
#include "stdafx.h"
#include <vector>
#include "CiurulEratostene.h"
#include<stdlib.h>
#include<iostream>
using namespace std;

//main function that computes all
void ciurulEratostente(long long n)
{
	//the dynamic list with all the numbers 
	vector<long long> prime;
	//initializing the list ,
	//  A value in prime[i] will 
	// finally be false if i is Not a prime, else true. 
	for (long i = 1; i <= n; i++)
	{
		prime.push_back(i);
	}

	//starting from the first prime number (which is 2)
	for (long long p = 2; p*p <= n; p++)
	{
		// If prime[p] is the same number, then it is a prime 
		if (prime[p] == p)
		{
			// Update all multiples of p (we put -1) greater than or  
			// equal to the square of it 
			// numbers which are multiple of p and are 
			// less than p^2 are already been marked.  
			for (int i = p * p; i <= n; i += p)
				prime[i] = -1;
		}

	}

	// Print all prime numbers 
	for (int p = 2; p < n; p++)
		if (prime[p] !=-1 )
			cout << p << " ";

}


int main()
{
	long long  n = 30;
	cout << "Prime numbers less than " << n << " are " << endl;
	ciurulEratostente(n);
	return 0;


	return 0;
}

