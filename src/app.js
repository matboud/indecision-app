console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    console.log('options.length: '+app.options.length)
    rerender();
  }
};

const resetOptions = () => {
  app.options = [];
  rerender();
}

const rerender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
        {
          app.options.map((singleOption, index) => {
            return <li key={index}>{singleOption}</li>
          })
        }
      </ol>
      <button onClick={resetOptions}>reset options</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}
  

const appRoot = document.getElementById('app');

rerender();

