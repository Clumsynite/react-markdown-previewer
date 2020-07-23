let app = document.getElementById('app')

marked.setOptions({breaks: true})
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editor: ['medium', 'Editor', 'textMid'],
      input: TEMPTEXT,
      preview: ['div-large', 'Preview', 'textMid']
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = () => {
   let EditorText = $('#editor').val();
$('#preview').html(marked(EditorText).replace(/&gt;+/g, '>'))
  }
  render(){
    return(
      <div>
      <div id="text-editor" className={this.state.editor[0]}>
        <div id="editor-title">
      {this.state.editor[1]}
  </div>
    <textarea id="editor" className={this.state.editor[2]} onChange={this.handleChange} defaultValue={this.state.input}  spellCheck="false"></textarea>
      </div>
        <div id="text-editor" className={this.state.preview[0]}>
        <div id="editor-title">
      {this.state.preview[1]}
  </div>
    <div id="preview" className={this.state.preview[2]}></div>
      </div>
        </div>
    )
  }
}


const TEMPTEXT = `# Welcome to my Markdown Previewer
## It parses the Github Flavored Markdown text as HTML and displays it in the Preview below.

If you liked this, you can view my other projects on [**Github**](https://github.com/Clumsynite/)
### or
If you want to look at how I made it. Here's the [**repo**](https://github.com/Clumsynite/react-markdown-previewer)

By the way, just to show you how to use code blocks:

\`let inlineCode = true;\`

\`\`\`javascript
  if(inlineCode){
    console.log('Inline Code is visible');
  }else{
    console.log('Doesn\'t looks like inline Code');
  }
\`\`\`

Also, here's how to create lists in markdown:

* List item 1
* List item 2
* List item 3

A random quote for you:
> A man sees in the world what he carries in his heart

>  -Goethe

![Spiderman Bye Bye](https://www.nicepng.com/png/detail/395-3959993_bye-bye-bye-spiderman-superhero-bye-superhero.png)
`;


ReactDOM.render(<App/>, app)


$('#preview').html(marked(TEMPTEXT))

console.log(marked.setOptions.gfm)