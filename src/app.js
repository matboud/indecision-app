console.log("hello");

var app = {
    title: 'title',
    subtitle: 'subtitle'
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>item</li>
        <li>item</li>
        <li>item</li>
    </ol>
  </div>
);

let name = 'amine';
var templateTwo = (
    <div>
        <h1>{name}</h1>
        <p>Age: 24</p>
        <p>Location: kenitra</p>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
