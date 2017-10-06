---
title: TypeScript
---

# TypeScript

## What is TypeScript?

[TypeScript](http://www.typescriptlang.org/) , developed by Microsoft,
is a free and open source programming language. It is a typed superset
for JavaScript that compiles into plain JavaScript. TypeScript focuses
on providing useful tools for large scale applications by implementing
features such as:

-   [Type Annotations](#annotation)
-   [Interfaces](#interface)
-   [Arrow Function Expressions](#arrow)
-   [Access Modifiers](#modifier)
-   [Inheritance](#inheritance)

{{<note>}}
    In Monaca, Code Suggestion does not support TypeScript.
{{</note>}}


`.ts` is the extension of TypeScript files. In Monaca, the TypeScript file
is automatically compiled and creates its JavaScript version after it is
saved. For example, let's create a TypeScript file in Monaca Cloud IDE
under `www` folder and name it as `test.ts` with the following content.

{{<highlight javascript>}}
document.body.innerHTML = "Hello World!";
{{</highlight>}}

After saving this file, you can see that the `test.js` file is created.
You will be able to find it in the project tree with the same level of
`test.ts`.

{{<warning>}}
    The TypeScript compiler is running when you save a TypeScript file. This compiler will overwrite the JavaScript file without any prompt. Please be careful not to edit the JavaScript file directly.
{{</warning>}}

{{<warning>}}
    When you save <code>.ts</code> file, please close <code>.js</code> file that will be generated. If you save <code>main.ts</code> file with <code>main.js</code> file open, <code>main.js</code> file will not be refreshed.
{{</warning>}}

## <a name="annotation"></a> Type Annotations

Type Annotations enable us to check and express our intent in the
programs we write during compile time. In other words, Type Annotations
are expressed as part of the function parameters; they indicate what
types of values you can pass to the function. For large-scale
applications, this feature is extremely helpful since we are able to pin
point the compile-time error.

To demonstrate this feature, let's create a function as below inside the
`test.ts` file. In the below code the `num1` and `num2` parameters are
designated as numeric values.

{{<highlight javascript>}}
function sum(num1:number, num2:number)
{
  var result;
  result = num1 + "+" + num2 + "=" + [num1+num2];
  return result;
}

console.log (sum(1,3)); //1+3=4
{{</highlight>}}


Then, call the `test.js` in the `index.html` as follow:

{{<highlight html>}}
<body>
  ...
  <script src="test.js"></script>
  ...
</body>
{{</highlight>}}

{{<warning>}}
    Please do not specify TypeScript file as a src attribute in HTML file.
Please load as JavaScript file compiled from ".ts file" as above.
{{</warning>}}

Afer running the app, the result will be displayed correctly in the
`index.html` file since there are no errors found. Now, let's
intentionally create an error while calling the `sum` function in the
`test.ts` file. Please change its content as follows:

{{<highlight javascript>}}
function sum(num1:number, num2:number)
{
  var result;
  result = num1 + "+" + num2 + "=" + [num1+num2];
  return result;
}

console.log(sum(1,"3")); //wrong variable type
{{</highlight>}}

{{<figure src="/images/monaca_ide/manual/code_editor/type_script/1.png">}}


When you save `test.ts` with this error, a notification icon of that error
is shown on the left side of the editor at the line containing the
error. Mouse-over that notification icon to see the error message. In
this case, the error message is:


{{<highlight bash>}}
Supplied parameters do not match any signature of call target
{{</highlight>}}

Please note that despite the error, the `test.js` is still created and the
app is running normally but giving the wrong result.

## <a name="interface"></a> Interfaces

With TypeScript, not only that we can declare an interface, but we can
also use it as a type annotation. In the following example, we create a
simple interface which is used as an object type. Replace the following
code into `test.ts` file.

{{<highlight javascript>}}
interface People
{
   name: string;
   age: number;
}

function info(people : People) {
   var result = people.name + " is " + people.age + " years old.";
   return result;
}

console.log(info({name:"Monaca", age: 30}));
{{</highlight>}}

After saving it, there are no errors found. Let's make an error by
calling the `info` with just one parameter as below:

{{<highlight javascript>}}
interface People
{
   name: string;
   age: number;
}

function info(people : People) {
   var result = people.name + " is " + people.age + " years old.";
   return result;
}

console.log( info({age: 30}) );
{{</highlight>}}

When you save `test.ts` with this error, a notification icon of that error
is shown on the left side of the editor at the line containing the
error. Mouse-over that notification icon to see the error message. In
this case, the error message is:

{{<highlight bash>}}
Supplied parameters do not match any signature of call target:
Could not apply type 'People' to argument 1, which is of type '{ age: number; }'
{{</highlight>}}

    
Please note that despite the error, the `test.js` is still created and the
app is running normally but giving the wrong result.

## <a name="arrow"></a> Arrow Function Expressions

Arrow Function Expressions are compact ways of defining JavaScript
functions. Especially, Arrow Function Expressions help you handle the
scope of the `this` keyword.please see the code example below.

{{<highlight javascript>}}
var people =
{
  name: "Mr.Monaca",
  age: 30,
  popup: function()
  {
    setTimeout(function()
    {
      console.log('This inside setTimeout(): ' + this.name);
    }, 3000);
  }
};
people.popup();
{{</highlight>}}


Then, save it and run the application. Let's observe the output. We can
see that the value of `this.name` is empty. In order to handle the value
of `this` keyword, use arrow function `=>` . Therefore, please replace
`function()` in the `setTimeout` function by the arrow function as
follow:

{{<highlight javascript>}}
var people =
{
  name: "Mr.Monaca",
  age: 30,
  popup: function()
  {
    setTimeout(() => // we replace "function(){}" by "()=>{}"
    {
      console.log('This inside setTimeout(): ' + this.name);
    }, 3000);
  }
};
people.popup();
{{</highlight>}}

Now, save it and run the application again. This time the value of
`this.name` is displayed correctly.

## <a name="modifier"></a> Access Modifiers

TypeScript also supports classes and their access modifiers. With
TypeScript, it is easier for you to control access to Members and
Classes in JavaScript. Please pay attention to the accessibility of the
class properties in the code below.

{{<highlight javascript>}}
class Customer {

  public userName = "Monaca";
  private secretID = 123;
}

var user1 = new Customer();

console.log(user1.userName);// no error => Monaca
console.log(user1.secretID);// error found => could not access user1.secretID!
{{</highlight>}}

{{<figure src="/images/monaca_ide/manual/code_editor/type_script/2.png">}}

As we could see, the last line of code is the source of the error since
it tried to access the `secretID` which is the private variable of the
`Customer` Class. In this case, the error message is:

{{<highlight bash>}}
The property 'firstName' does not exist on value of type 'People'
{{</highlight>}}

Now, let's try using the access modifier to those variables as shown
below and observe the differences.

{{<highlight javascript>}}
class Customer {

  public userName = "Monaca";
  public secretID = 123;
}

var user1 = new Customer();

console.log(user1.userName); // no error => Monaca
console.log(user1.secretID); // no error => 123
{{</highlight>}}

## Inheritance

You can also extend an existing class and create a derived class from it
by using `extends` keyword. The following example shows how to use this
keyword.

{{<highlight javascript>}}
class People
{
  name: string;
  age: number;

  constructor(name:string, age: number)
  {
    this.name = name;
    this.age = age;
  }

  info()
  {
    return this.name + "-" + this.age;
  }
}

class Customer extends People
{
  userName: string;
  secretID: number;

  constructor(name: string, age:number, userName:string, secretID:number)
  {
    super(name, age); // call the constructor of the People class
    this.userName = userName;
    this.secretID = secretID;
  }

  info()  // override the info() class
  {
    return this.userName + "-" + this.secretID;
  }

  peopleInfo()
  {
    return super.peopleInfo();  //call info() of the People class
  }
}

var user1 = new Customer("Mr.Monaca", 30, "Monaca", 123);
console.log(user1.customerInfo());
console.log(user1.peopleInfo());
{{</highlight>}}

Let's analyze the above code. There are 3 main things happening up
there:

-   `Customer` class automatically has `name` and `age` properties since
    it is derived from `People` class.
-   The `super` method used in the constructor method of `Customer`
    class is used to call the constructor method of `People` class.
-   `info()` method in `Customer` class overrides the base (`People`)
    class's implementation while `peopleInfo()` method directly calls
    the `info()` method of the base class.

See Also: 

- [Editor Shortcuts](../editor)
- [Emmet](../zen_coding)