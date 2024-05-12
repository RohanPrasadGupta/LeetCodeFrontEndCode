import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
// import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";

SyntaxHighlighter.registerLanguage("python", python);

function PythonSolution() {
  return (
    <div>
      python solution
      {/* <SyntaxHighlighter language="javascript" style={dark}>
        {`function helloWorld() {
  console.log("Hello, world!");
}`}
      </SyntaxHighlighter> */}
      <div style={{ textAlign: "left" }}>
        <SyntaxHighlighter language="python" style={docco}>
          {`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:

        if not p and not q:
            return True
        
        if not p or not q:
            return False
        
        if p.val != q.val:
            return False
        
        return self.isSameTree(p.left , q.left) and self.isSameTree(p.right , q.right)

        `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default PythonSolution;
