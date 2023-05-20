import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "./CodeEditor.css";

const options = {
  selectOnLineNumbers: true,
  minimap: {
    enabled: false,
  },
};
const languageOptions = [
  {
    label: "JavaScript",
    value: "javascript",
    code: "console.log('Hello, world!')",
    id: "17",
  },
  { label: "Python", value: "python", code: "print('Hello, world!')", id: "5" },
  {
    label: "Java",
    value: "java",
    code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println('Hello, world!');\n  }\n}",
    id: "4",
  },
  {
    label: "C++",
    value: "cpp",
    code: "#include <iostream>\n\nint main() {\n  std::cout << 'Hello, world!' << std::endl;\n  return 0;\n}",
    id: "7",
  },
  {
    label: "C#",
    value: "csharp",
    code: "using System;\n\nclass Program\n{\n    static void Main(string[] args)\n    {\n        Console.WriteLine('Hello, world!');\n    }\n}",
    id: "1",
  },
  { label: "Ruby", value: "ruby", code: "puts 'Hello, world!'", id: "12" },
  { label: "Swift", value: "swift", code: "print('Hello, world!')", id: "37" },
  {
    label: "Go",
    value: "go",
    code: "package main\n\nimport 'fmt'\n\nfunc main() {\n  fmt.Println('Hello, world!')\n}",
    id: "20",
  },
];
const themes = [
  { label: "Light", value: "vs" },
  { label: "Dark", value: "vs-dark" },
  { label: "High Contrast", value: "hc-black" },
];
const CodeEditor = () => {
  const [language, setLanguage] = useState(languageOptions[0].value);
  const [theme, setThemes] = useState(themes[0].value);
  const [code, setCode] = useState("// Yours code goes here");
  const [languageCode, setLanguageCode] = useState("17");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    const url = "https://code-compiler.p.rapidapi.com/v2";
    console.log(code, languageCode);
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "19d7f5fd32msh9e60847e51b2943p1b7f62jsn97ab186fae4f",
        "X-RapidAPI-Host": "code-compiler.p.rapidapi.com",
      },
      body: new URLSearchParams({
        LanguageChoice: languageCode,
        Program: code,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setOutput(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  const handleThemeChange = (event) => {
    setThemes(event.target.value);
  };

  const handleCode = (e) => {
    setCode(e);
    console.log(code);
  };

  return (
    <>
      <div>
        <div className="code-editor">
          <div className="code-editor-header">
            <div>
              <select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  setLanguageCode(
                    languageOptions.find(
                      (option) => option.value === e.target.value
                    ).id
                  );
                  console.log(languageCode);
                }}
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select value={theme} onChange={handleThemeChange}>
                {themes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <button className="run-code-button" onClick={handleRun}>
              Run
            </button>
          </div>
          <div className="code-editor-content">
            <div className="code-editor-body">
              <Editor
                key={language + theme}
                height="500px"
                language={language}
                value={code}
                onChange={handleCode}
                options={options}
                theme={theme}
              />
            </div>
          </div>
        </div>

        {output && (
          <div className="code-editor-input-output">
            <div className="code-editor-output">
              <h3>Output</h3>
              {output.Result != null && <pre>{output.Result}</pre>}
              {output.Errors != null && <pre>{output.Errors}</pre>}
              {output.message != null && <pre>{output.message}</pre>}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CodeEditor;
