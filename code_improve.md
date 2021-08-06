## 1. react 简写多个重复的setState
```js
// js
this.updateState = field => ev => {
  const state = this.state;
  const newState = Object.assign({}, state, { [field]: ev.target.value });
  this.setState(newState);
};
```

```jsx
{/* jsx */}
<fieldset className="form-group">
  <input
    className="form-control"
    type="text"
    placeholder="URL of profile picture"
    value={this.state.image}
    onChange={this.updateState("image")}
  />
</fieldset>

<fieldset className="form-group">
  <input
    className="form-control form-control-lg"
    type="text"
    placeholder="Username"
    value={this.state.username}
    onChange={this.updateState("username")}
  />
</fieldset>
```
