export const DataArr = [
    {
        id: 1,
        parentTitle: "Firebase",
        mainTitle: "Firebase Auth",
        importItem:`import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
         signOut } from 'firebase/auth'`,
        mainCode: ` const firebaseConfig = {
    apiKey: "AIzaSyBmvAJLFa744wvMl_6OxWLFov3SnQR6RSE",
    authDomain: "myapp-2b982.firebaseapp.com",
    projectId: "myapp-2b982",
    storageBucket: "myapp-2b982.appspot.com",
    messagingSenderId: "687608008922",
    appId: "1:687608008922:web:b902a54ab10cdee803d5e3",
    databaseURL:"https://myapp-2b982-default-rtdb.firebaseio.com/"
};


const FirebaseContext = createContext(null)
const FirebaseApp = initializeApp(firebaseConfig)
const FirebaseAuth = getAuth(FirebaseApp)
const FirebaseGoogleAuthProvider=new GoogleAuthProvider()

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState('');
    const SignUp = (email, pass) => {
        return createUserWithEmailAndPassword(FirebaseAuth, email, pass);
    }
    const LogIn = async(email, pass) => {
        try{
            return await signInWithEmailAndPassword(FirebaseAuth, email, pass)
        }catch(err){
            console.log(err)
        }
    }
    const GoogleLogIn =async()=>{
        try{
        return await signInWithPopup(FirebaseAuth,FirebaseGoogleAuthProvider);
        }catch(err){
        console.log(err)
        }
    }
    useEffect(() => {
        const Status = () => onAuthStateChanged(FirebaseAuth, (currentUser) => {
              setUser(currentUser)
            })
            return Status()
    }, []);
    function LogOut(){
        return signOut(FirebaseAuth)
    }
    
    
    return (
        <FirebaseContext.Provider value={{user,GoogleLogIn, LogIn, LogOut, SignUp }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}`,
        "openCommand": "npm run dev"
    },
    {
      id: 2,
      parentTitle: "Data Structure",
      mainTitle: "Depth Fast Search (DFS) Using Adjacency Matrix",
      importItem:`null`,
      mainCode: `#include<stdio.h>
      #include<conio.h>
      int a[20][20], reach[20], n;
      void dfs(int v) {
          int i;
          reach[v] = 1;
          for (i = 1; i <= n; i++)
              if (a[v][i] && !reach[i]) {
                  printf("\n %d->%d", v, i);
                  dfs(i);
              }
      }
      int main(int argc, char **argv) {
          int i, j, count = 0;
          printf("\n Enter number of vertices:");
          scanf("%d", &n);
          for (i = 1; i <= n; i++) {
              reach[i] = 0;
              for (j = 1; j <= n; j++)
                  a[i][j] = 0;
          }
          printf("\n Enter the adjacency matrix:\n");
          for (i = 1; i <= n; i++)
              for (j = 1; j <= n; j++)
                  scanf("%d", &a[i][j]);
          dfs(1);
          printf("\n");
          for (i = 1; i <= n; i++) {
              if (reach[i])
                  count++;
          }
          if (count == n)
              printf("\n Graph is connected");
          else
              printf("\n Graph is not connected");
          return 0;
      }
      `,
      "openCommand": " C Programming Language"
  },
  {
    id: 3,
    parentTitle: "Data Structure",
    mainTitle: "Breadth First Search (BFS) Using Adjacency Matrix",
    importItem:`null`,
    mainCode: `#include <stdio.h>
 
    int n, i, j, visited[10], queue[10], front = -1, rear = -1;
    int adj[10][10];
     
    void bfs(int v)
    {
        for (i = 1; i <= n; i++)
            if (adj[v][i] && !visited[i])
                queue[++rear] = i;
        if (front <= rear)
        {
            visited[queue[front]] = 1;
            bfs(queue[front++]);
        }
    }
     
    void main()
    {
        int v;
        printf("Enter the number of vertices: ");
        scanf("%d", &n);
        for (i = 1; i <= n; i++)
        {
            queue[i] = 0;
            visited[i] = 0;
        }
        printf("Enter graph data in matrix form:    \n");
        for (i = 1; i <= n; i++)
            for (j = 1; j <= n; j++)
                scanf("%d", &adj[i][j]);
        printf("Enter the starting vertex: ");
        scanf("%d", &v);
        bfs(v);
        printf("The node which are reachable are:    \n");
        for (i = 1; i <= n; i++)
            if (visited[i])
                printf("%d\t", i);
            else
                printf("BFS is not possible. Not all nodes are reachable");
        return 0;
    }
    `,
    "openCommand": " C Programming Language"
},
{
  id: 4,
  parentTitle: "Data Structure",
  mainTitle: "Hepasort with Binary Tree",
  importItem:`null`,
  mainCode: `#include<stdio.h>
 
  // function prototyping
  void heapify(int*,int, int);
  void heapsort(int*, int);
  void print_array(int*, int);
   
  int main()
  {
      int arr[] = { 10, 30, 5, 63, 22, 12, 56, 33 };
      int n = sizeof(arr) / sizeof(arr[0]);
   
      printf("\nArray before sorting:\n");
      print_array(arr, n);
   
      heapsort(arr, n);
   
      printf("\n\nArray after sorting:\n");
      print_array(arr, n);
   
      return 0;
  }
   
  /* sorts the given array of n size */
  void heapsort(int* arr, int n)
  {
      // build the binary max heap
      for (int i = n / 2 - 1; i >= 0; i--)
      {
          heapify(arr, n, i);
      }
   
      // sort the max heap
      for (int i = n - 1; i >= 0; i--)
      {
          // swap the root node and the last leaf node
          int temp = arr[i];
          arr[i] = arr[0];
          arr[0] = temp;
   
          // again heapify the max heap from the root 
          heapify(arr, i, 0);
      }
  }
   
  /* heapify the subtree with root i */
  void heapify(int* arr, int n, int i)
  {
      // store largest as the root element
      int largest = i;
   
      int left = 2 * i + 1;
      int right  = 2 * i + 2;
   
      // now check whether the right and left right is larger than the root or not
      if (left < n && arr[left] > arr[largest])
      {
          largest = left;
      }
   
      if (right < n && arr[right] > arr[largest])
      {
          largest = right;
      }
   
      // if the root is smaller than the children then swap it with the largest children's value
      if (largest != i)
      {
          int temp = arr[i];
          arr[i] = arr[largest];
          arr[largest] = temp;
   
          // again heapify that side of the heap where the root has gone
          heapify(arr, n, largest);
      }
  }
   
  /* printf the array */
  void print_array(int* arr, int n)
  {
      for (int i = 0; i < n; i++)
      {
          printf("%d  ", arr[i]);
      }
  }
  `,
  "openCommand": " C Programming Language"
},
{
  id: 5,
  parentTitle: "Data Structure",
  mainTitle: "Insertion Sort",
  importItem:`null`,
  mainCode: `#include <stdio.h>
  int main(void)
  {
      int n, i, j, temp;
      int arr[64];
      printf("Enter number of elements\n");
      scanf("%d", &n);
      printf("Enter %d integers\n", n);
      for (i = 0; i < n; i++) 
      {
          scanf("%d", &arr[i]);
      }
      for (i = 1; i < n; i++) 
      {
          j = i;
          while (j > 0 && arr[j - 1] > arr[j]) 
          {
              temp = arr[j];
              arr[j] = arr[j - 1];
              arr[j - 1] = temp;
              j--;
          }
      }
      printf("Sorted list in ascending order:\n");
      for (i = 0; i < n; i++) 
      {
          printf("%d\n", arr[i]);
      }
      return 0;
  }
  `,
  "openCommand": " C Programming Language"
},
{
  id: 6,
  parentTitle: "Data Structure",
  mainTitle: "Selection Sort",
  importItem:`null`,
  mainCode: `
  #include <stdio.h>
  void selectionSort(int arr[], int size);
  void swap(int *a, int *b);
  /*
   * Selection sort function
   */
  void selectionSort(int arr[], int size)
  {
      int i, j;
      for (i = 0 ;  i < size;i++)
      {
          for (j = i ; j < size; j++)
          {
              if (arr[i] > arr[j])
                  swap(&arr[i], &arr[j]);
          }
      }
  }
   
  /* Function to swap two variables */
  void swap(int *a, int *b)
  {
      int temp;
      temp = *a;
      *a = *b;
      *b = temp;
  }
   
  /*
   * Main Function
   */
  int main()
  {
      int array[10], i, size;
      printf("How many numbers you want to sort:  ");
      scanf("%d", &size);
      printf("\nEnter %d numbers\t", size);
      printf("\n");
      for (i = 0; i < size; i++)
          scanf("%d", &array[i]);
      selectionSort(array, size);
      printf("\nSorted array is ");
      for (i = 0; i < size;i++)
          printf(" %d ", array[i]);
      return 0;
  }
  `,
  "openCommand": " C Programming Language"
},
{
  id: 7,
  parentTitle: "Data Structure",
  mainTitle: "Merge Sort",
  importItem:`null`,
  mainCode: `#include <stdio.h>
  #include <stdlib.h>
   
  // merge function
  void Merge(int arr[], int left, int mid, int right)
  {
      int i, j, k;
      int size1 = mid - left + 1;
      int size2 = right - mid;
   
      // created temporary array
      int Left[size1], Right[size2];
   
      // copying the data from arr to temporary array
      for (i = 0; i < size1; i++)
          Left[i] = arr[left + i];
   
      for (j = 0; j < size2; j++)
          Right[j] = arr[mid + 1 + j];
   
      // merging of the array
      i = 0;	// intital index of first subarray
      j = 0;	// inital index of second subarray
      k = left; // initial index of parent array
      while (i < size1 && j < size2)
      {
          if (Left[i] <= Right[j])
          {
              arr[k] = Left[i];
              i++;
          }
          else
          {
              arr[k] = Right[j];
              j++;
          }
          k++;
      }
   
      // copying the elements from Left[], if any
      while (i < size1)
      {
          arr[k] = Left[i];
          i++;
          k++;
      }
   
      // copying the elements from Right[], if any
      while (j < size2)
      {
          arr[k] = Right[j];
          j++;
          k++;
      }
  }
   
  //merge sort function
  void Merge_Sort(int arr[], int left, int right)
  {
      if (left < right)
      {
   
          int mid = left + (right - left) / 2;
   
          // recursive calling of merge_sort
          Merge_Sort(arr, left, mid);
          Merge_Sort(arr, mid + 1, right);
   
          Merge(arr, left, mid, right);
      }
  }
   
  // driver code
  int main()
  {
      int size;
      printf("Enter the size: ");
      scanf("%d", &size);
   
      int arr[size];
      printf("Enter the elements of array: ");
      for (int i = 0; i < size; i++)
      {
          scanf("%d", &arr[i]);
      }
   
      Merge_Sort(arr, 0, size - 1);
   
      printf("The sorted array is: ");
      for (int i = 0; i < size; i++)
      {
          printf("%d ", arr[i]);
      }
      printf("\n");
      return 0;
  }
  `,
  "openCommand": " C Programming Language"
},
{
  id: 8,
  parentTitle: "Data Structure",
  mainTitle: "Binary Search Tree",
  importItem:`null`,
  mainCode: `Insertion:
  // Binary Search Tree operations in C
  
  #include <stdio.h>
  #include <stdlib.h>
  
  struct node {
    int key;
    struct node *left, *right;
  };
  
  // Create a node
  struct node *newNode(int item) {
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp->key = item;
    temp->left = temp->right = NULL;
    return temp;
  }
  
  // Inorder Traversal
  void inorder(struct node *root) {
    if (root != NULL) {
      // Traverse left
      inorder(root->left);
  
      // Traverse root
      printf("%d -> ", root->key);
  
      // Traverse right
      inorder(root->right);
    }
  }
  
  // Insert a node
  struct node *insert(struct node *node, int key) {
    // Return a new node if the tree is empty
    if (node == NULL) return newNode(key);
  
    // Traverse to the right place and insert the node
    if (key < node->key)
      node->left = insert(node->left, key);
    else
      node->right = insert(node->right, key);
  
    return node;
  }
  
  // Find the inorder successor
  struct node *minValueNode(struct node *node) {
    struct node *current = node;
  
    // Find the leftmost leaf
    while (current && current->left != NULL)
      current = current->left;
  
    return current;
  }
  
  // Deleting a node
  struct node *deleteNode(struct node *root, int key) {
    // Return if the tree is empty
    if (root == NULL) return root;
  
    // Find the node to be deleted
    if (key < root->key)
      root->left = deleteNode(root->left, key);
    else if (key > root->key)
      root->right = deleteNode(root->right, key);
  
    else {
      // If the node is with only one child or no child
      if (root->left == NULL) {
        struct node *temp = root->right;
        free(root);
        return temp;
      } else if (root->right == NULL) {
        struct node *temp = root->left;
        free(root);
        return temp;
      }
  
      // If the node has two children
      struct node *temp = minValueNode(root->right);
  
      // Place the inorder successor in position of the node to be deleted
      root->key = temp->key;
  
      // Delete the inorder successor
      root->right = deleteNode(root->right, temp->key);
    }
    return root;
  }
  
  // Driver code
  int main() {
    struct node *root = NULL;
    root = insert(root, 8);
    root = insert(root, 3);
    root = insert(root, 1);
    root = insert(root, 6);
    root = insert(root, 7);
    root = insert(root, 10);
    root = insert(root, 14);
    root = insert(root, 4);
  
    printf("Inorder traversal: ");
    inorder(root);
  
    printf("\nAfter deleting 10\n");
    root = deleteNode(root, 10);
    printf("Inorder traversal: ");
    inorder(root);
  }
  
  `,
  "openCommand": " C Programming Language"
},
{
  id: 9,
  parentTitle: "Javascript onClick get time",
  mainTitle: "Time React am pm 1:43 am formet",
  importItem:"const formetedTime=`${hour}:${minute < 10 ? '0'+minute:minute} ${ampm}`;",
  mainCode: `    const [currentTime,setCurrentTime]=useState('');
  useEffect(()=>{
      const updateTime=()=>{
          const date=new Date();
          const hour=date.getHours()>12?date.getHours()-12:date.getHours();
          const minute=date.getMinutes();
          const ampm=date.getHours()>=12?'pm':'am';
                // addddddddddd import item line here 
          setCurrentTime(formetedTime)
      }
      updateTime();
      const timer=setInterval(updateTime,1000);
      return()=>clearInterval(timer)
  },[])`,
  "openCommand": "null"
},
{
    id: 10,
    parentTitle: "Firebase",
    mainTitle: "Firebase Real Time Database List Formet",
    importItem:`
    import { initializeApp } from "firebase/app";
    import { getDatabase, onChildAdded, push, ref, set } from 'firebase/database'
    import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'`,
    mainCode: `
    import { createContext, useContext, useState, useEffect } from "react";
    import { initializeApp } from "firebase/app";
    import { getDatabase, onChildAdded, push, ref, set } from 'firebase/database'
    import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
    
    
    const firebaseConfig = {
        apiKey: "AIzaSyANPONZTg6Id_IFhpAcJ9XQ4lYXIlOHhvM",
        authDomain: "chatapp137.firebaseapp.com",
        projectId: "chatapp137",
        storageBucket: "chatapp137.appspot.com",
        messagingSenderId: "414531631605",
        appId: "1:414531631605:web:854076980290345a47c8bc"
    };
    
    
    
    const FirebaseContext = createContext(null)
    export const useFirebase = () => useContext(FirebaseContext)
    const FirebaseApp = initializeApp(firebaseConfig)
    const FirebaseAuth = getAuth(FirebaseApp)
    const FirebaseDatabase = getDatabase()
    const FirebaseGoogleAuth=new GoogleAuthProvider()
    
    const DatabaseListRef = ref(FirebaseDatabase, 'datas')
    
    
    export const FirebaseProvider = (props) => {
        const [datas, setDatas] = useState([])
        const [user,setUser]=useState()
    
        const PushData = (name, message,photoURL,time) => {
            const NewChatPushInList = push(DatabaseListRef);
            set(NewChatPushInList, {
                name, message,photoURL,time
            })
        }
    
        useEffect(()=>{
            onChildAdded(DatabaseListRef,(data)=>{
                setDatas(datas=>[...datas,data.val()])
            })
        },[])
    
        const DeleteChild = (index) => {
            const updatedDatas = [...datas];
            updatedDatas.splice(index, 1);
            setDatas(updatedDatas);
          };
        const LogInWithGoogle=async()=>{
            try{
                return await signInWithPopup(FirebaseAuth,FirebaseGoogleAuth)
            }catch(err){
                console.log(err)
            }
        }
        useEffect(()=>{
            const Status=()=>onAuthStateChanged(FirebaseAuth,(currrentUser)=>{
                setUser(currrentUser)
            })
            return Status()
        },[])
        function SignOut(){
           return signOut(FirebaseAuth)
        }
    
    
        return (
            <FirebaseContext.Provider value={{DeleteChild, PushData,datas,LogInWithGoogle,user,SignOut }}>
                {props.children}
            </FirebaseContext.Provider>
        )
    }`,
    "openCommand": "npm install firebase"
  }
  ,
{
  id: 11,
  parentTitle: "Lottie Animation",
  mainTitle: "Lottie icon",
  importItem:`
  import Lottie from 'lottie-react'
  import AnimationName from './animation.json'`,
  mainCode: `<div className="animation">
  <Lottie animationData={AnimationName} />
</div>`,
  "openCommand": "npm i lottie-react"
},
,
{
  id: 12,
  parentTitle: "Firebase",
  mainTitle: "Firebase Store",
  importItem:`
  import { initializeApp } from 'firebase/app'
  import { addDoc, collection, getDocs, getFirestore, orderBy, query, serverTimestamp } from 'firebase/firestore'`,
  mainCode: `
  import { useState } from "react";
  import { createContext, useContext } from "react";
  import { initializeApp } from 'firebase/app'
  import { addDoc, collection, getDocs, getFirestore, orderBy, query, serverTimestamp } from 'firebase/firestore'
  
  const firebaseConfig = {
      apiKey: "AIzaSyB7AwpjuaRhq_Sedm55z5wkpAzJr6VktlM",
      authDomain: "pracpro-44e8e.firebaseapp.com",
      projectId: "pracpro-44e8e",
      storageBucket: "pracpro-44e8e.appspot.com",
      messagingSenderId: "502204701570",
      appId: "1:502204701570:web:6cbb728f55d651ad168d9b",
      measurementId: "G-XFNBCFKCTR"
  }
  
  
  export const FirebaseContext = createContext(null);
  export const useFirebase = () => useContext(FirebaseContext)
  const FireaseApp = initializeApp(firebaseConfig)
  const FirebaseStore = getFirestore(FireaseApp)
  
  
  
  export const FirebaseProvider = (props) => {
      const [data, setData] = useState([])
      const PutData = async (id, name) => {
          try {
              const res = await addDoc(collection(FirebaseStore, "mess"), {
                  id, name,timestamp:serverTimestamp()
              })
          } catch (err) {
              console.log(err)
          }
      }
          const GetAllDocuments=async()=>{
              const tempArr=[]
              const querySnap=await getDocs(query(collection(FirebaseStore,"mess"),orderBy("timestamp","desc")))
              querySnap.forEach((doc)=>{
                  tempArr.push(doc.data())
              })
              setData(tempArr)
          }
  
      return (
          <FirebaseContext.Provider value={{data, PutData,GetAllDocuments }}>
              {props.children}
          </FirebaseContext.Provider>
      )
  }`,
  "openCommand": "npm install firebase"
},
]