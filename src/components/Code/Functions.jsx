import { Editor } from "@monaco-editor/react";
import "./CodeEditor.css";
import { useState } from "react";
import { languages } from "monaco-editor";

const Bash = (props) => {
  return (
    <div className="code">
      <languages />
    </div>
  );
};
const Java = (props) => {
  const [code, setCode] =
    useState(`/* package whatever; // don't place package name! */

  import java.util.*;
  import java.lang.*;
  import java.io.*;
  
  /* Name of the class has to be "Main" only if the class is public. */
  class Ideone
  {
    public static void main (String[] args) throws java.lang.Exception
    {
      // your code goes here
    }
  }`);
  const handlechange = () => {};
  return (
    <div className="code">
      <Editor value={code} language="java" onChange={handlechange} />
    </div>
  );
};

export { Java, Bash };
