import marked from 'marked';

const markdown = " \n"+
"# Markdown Editor \n"+
 "\n"+
"## Things you can do \n"+
 "\n"+
"1. Lists \n"+
"2. Nested lists too :) \n"+
  "- bullet points \n"+
  "- [ ] tick boxes \n"+
  "- [x] ticked \n"+
 "\n"+
"3. Support [Github markdown syntax](http://www.github.com) \n"+
 "***\n"+
"### Code blocks \n"+
 "\n"+
"```python \n"+
 "\n"+
"def message(): \n"+
    "    print(\"Hi python!\"); \n"+
 "\n"+
"``` \n"+
 "### Quotes\n"+
"> The mark of a mature programmer is willingness \n" +
"> to throw out code you spent time on when you realize it's pointless \n" +
      "> -- Bram Cohen \n"+
      "";


const html = marked(markdown);


const sample = {
    html: html,
    markdown :markdown
};

export default sample;
