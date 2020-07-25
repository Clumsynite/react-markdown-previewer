let app = document.getElementById('app')

marked.setOptions({breaks: true})
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editor: ['medium', 'Editor', 'textMid'],
      input: TEMPTEXT,
      preview: ['div-large', 'Preview', 'textMid'],
      fullscreen: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange = () => {
   let EditorText = $('#editor').val();
$('#preview').html(marked(EditorText).replace(/&gt;+/g, '>'))
  }
  handleClick = id => {
    if(id=='prev'){
      const showDiv = '#preview-div';
      const hideDiv = '#editor-div';
      if(this.state.fullscreen){
        $(showDiv).addClass(this.state.preview[0]);
        $(hideDiv).show();
        $(showDiv).addClass('fullscreen');
        this.setState({fullscreen: false});
      }else {
        $(showDiv).addClass('fullscreen');
        $(showDiv).removeClass(this.state.preview[0]);
        $(hideDiv).hide();
        this.setState({fullscreen: true});
      }
    }else if(id=='edit'){
      const showDiv = '#editor-div';
      const hideDiv = '#preview-div';
      if(this.state.fullscreen){
        $(showDiv).addClass(this.state.editor[0]);
        $(hideDiv).show();
        $(showDiv).removeClass('fullscreen')
        $('#editor').removeClass('full-edit');
        this.setState({fullscreen: false});
      }else {
        $('#editor').addClass('full-edit');
        $(showDiv).addClass('fullscreen')
        $(showDiv).removeClass(this.state.editor[0]);
        $(hideDiv).hide();
        this.setState({fullscreen: true});
      }
    }
  }

  render(){
    return(
      <div>
        <div id="editor-div" className={'text-editor '+this.state.editor[0]+' small-screen'}>
          <div id="editor-title" class="title">
            {this.state.editor[1]}
            <button id='editor-btn' className='btn-fullscreen' onClick={() => this.handleClick('edit')}>+</button>
          </div>
          <textarea id="editor" className={this.state.editor[2]} onChange={this.handleChange} defaultValue={this.state.input}  spellCheck="false"></textarea>
        </div>
        <div id="preview-div" className={'text-editor '+this.state.preview[0]}>
          <div id="preview-title" class="title">
            {this.state.preview[1]}
            <button id='preview-btn' className='btn-fullscreen' onClick={() => this.handleClick('prev')}>+</button>
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

![Dancing Spiderman](https://media1.giphy.com/media/8zYunr3Hg8XPq/200.gif)
`;


ReactDOM.render(<App/>, app)


$('#preview').html(marked(TEMPTEXT))