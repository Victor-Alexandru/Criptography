'''
4.Implement the sieve of Eratosthenes algorithm for generating all prime numbers less than a
given bound
'''
def CiurulEratostene(n): 
      
    #initialize with true all the numbers in range 1 to n
    prime = [True for i in range(n+1)] 
    p = 2
    #have a p to go from 2 to p square
    while (p * p <= n): 
        # If prime[p] is tur, then it is a prime 
        if (prime[p] == True): 
            # Giving the false value to all multiples of p starting from p*p,with the step p
            for i in range(p * p, n+1, p): 
                prime[i] = False
        #incrementing p
        p += 1
      
    # Print all prime numbers 
    for p in range(2, n): 
        if prime[p]: 
            print(p) 
  
if __name__=='__main__': 
    #input the number
    while True:
        n =  input("Give your n =  ")
        #validating the input
        if n and n.isdigit():
            print("The result is")
            CiurulEratostene(int(n))
        else:
            print("Invalid input")