let u: string = "Thilak";
//username = 10; gives error
let a: number = 0;
a = 10;

//UNION TYPE
let password: number | string = "abc";
password = 1235;

//OBJECT TYPES
let user: { name: string; age: number; isAdmin: boolean; id: number | string };
user = {
  name: "Thilak",
  age: 21,
  isAdmin: true,
  id: "abc",
};

// ARRAYS
let hobbies: Array<string>;
// string[] same as above

// hobbies = ['abc', 'def',2] shows error
hobbies = ["abc", "def"];

// {name: string; content:string} [] array of objects

//FUNCTIONS

function add(a: number, b: number): number {
  return a + b;
}

// calling function by passing it as argument

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calc: AddFn): number {
  return a + b;
}

calculate(2, 3, add);

//INTERFACE

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "Sample123",
  email: "sample@gmail.com",
};

//MERGING TYPES

type permissions = {
  permissions: string[];
};

type name = {
  name: string;
};

type admin = permissions & name;

let adminVar: admin;

adminVar = {
  permissions: ["Read", "Write"],
  name: "Thilak",
};

// EXTEND INTERFACES

interface options {
  options: string[];
}

interface provider {
  name: string;
}

interface consent extends options, provider {}

let consentDetail: consent;

consentDetail = {
  name: "Thilak",
  options: ["Necessary", "Marketing"],
};

// SPECIFIC LITERALS

let role: "admin" | "user" | "editor";

// role = 'viewer' gives error

//Type guards and type narrowing

// When using "Type Guards" (i.e., if statements that check which concrete type is being used),
// TypeScript performs so-called "Type Narrowing".

// This means that TypeScript is able to narrow a broader type down to a more specific type.

/*  GENERIC TYPES   */

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: ["todo", "others"],
  add(data) {
    this.storage.push(data);
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const userObject = merge<{ name: string }, { age: number }>(
  { name: "Thilak" },
  { age: 21 }
);
