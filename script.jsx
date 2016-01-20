var StarsFrame = React.createClass({
  render: function() {
    return (
      <div id="stars-frame">
        <div className="well">
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
          <span className="glyphicon glyphicon-star"></span>
        </div>
      </div>
    );
  }
});

var ButtonFrame = React.createClass({
  render: function() {
    return (
      <div>
      ...
      </div>
    );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    return (
      <div>
      ...
      </div>
    );
  }
});

var Game = React.createClass({
  render: function() {
    return (
      <div id="game">
        <h2>9 Ball</h2>
        <StarsFrame />
        <ButtonFrame />
        <AnswerFrame />

      </div>
    );
  }
});

React.render(
  <Game />,
  document.getElementById('container')
);
