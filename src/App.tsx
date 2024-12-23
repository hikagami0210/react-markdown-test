import "./index.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const [markdown, setMarkdown] = useState<string>("");
  return (
    <div>
      <h1>react-markdown</h1>
      <h2>Markdown 入力</h2>
      <textarea
        placeholder="マークダウンを入力してください"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <h2>プレビュー</h2>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
