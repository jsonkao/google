# Technical Preparation

## Coding
- Distill large data sets to single values
- Transform one data set to another

## Algorithms
You will be expected to know the complexity of an algorithm and how you can improve/change it. Some examples of algorithmic challenges you may be asked about include:
- [x] Big-O analysis: understanding this is particularly important
- [ ] Handling obscenely large amounts of data

## Sorting
We recommend that you know the details of at least one n\*log(n) sorting algorithm, preferably two (say, quicksort and merge sort). Merge sort can be highly useful in situations where quicksort is impractical, so take a look at it.  What common sorting functions are there? On what kind of input data are they efficient, when are they not? What does efficiency mean in these cases in terms of runtime and space used? E.g. in exceptional cases insertion-sort or radix-sort are much better than the generic QuickSort / MergeSort / HeapSort answers.
- [x] CI 10: Sorting and Searching

## Data Structures
Study up on as many other structures and algorithms as possible. We recommend you know about the most famous classes of NP-complete problems, such as traveling salesman and the knapsack problem. Be able to recognize them when an interviewer asks you in disguise. Find out what NP-complete means.
- [x] C1 4: Trees and Graphs
  - Know heaps (maybe not implementation, but be comfortable with them)
  - priority queues
  - To consider a problem as a graph is often a very good abstraction to apply, since well known graph algorithms for distance, search, connectivity, cycle-detection etc. will then yield a solution to the original problem. There are 3 basic ways to represent a graph in memory (objects and pointers, matrix, and adjacency list); familiarize yourself with each representation and its pros/cons. You should know the basic graph traversal algorithms, breadth-first search and depth-first search. Know their computational complexity, their tradeoffs and how to implement them in real code. 


## Hashtables and Maps
Hashtables are arguably the single most important data structure known to mankind. You should be able to implement one using only arrays in your favorite language, in about the space of one interview. You’ll want to know the O() characteristics of the standard library implementation for Hashtables and Maps in the language you choose to write in.
- [x] Hashing

## Recursion
- [x] Practice

## Operating Systems
You should understand processes, threads, concurrency issues, locks, mutexes, semaphores, monitors and how they all work. Understand deadlock, livelock and how to avoid them. Know what resources a process needs and a thread needs. Understand how context switching works, how it's initiated by the operating system and underlying hardware. Know a little about scheduling. The world is rapidly moving towards multi-core, so know the fundamentals of "modern" concurrency constructs.
- [x] CI15

## Mathematics
Some interviewers ask basic discrete math questions. This is more prevalent at Google than at other companies because counting problems, probability problems and other Discrete Math 101 situations surrounds us. Spend some time before the interview refreshing your memory on (or teaching yourself) the essentials of elementary probability theory and combinatorics. You should be familiar with n-choose-k problems and their ilk – the more the better.

