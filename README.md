# Flux Object Graph
FOG offers an opinionated flux implementation for complex data-driven apps.

The plan:
- Turn-key flux implementation for working with data
- Powerful object graph synthesization with data validation, delete rules, etc.
- Flexible workflow with undo/redo, mutation fencing and change contexts
- API-agnostic
- Simple learning curve and implementation
- Optimistic, synchronous stores

## Usage

### Adapter Protocol
```js
FluxObjectGraph.addAdapter(customAdapter);
```

### DataProvider - Pulling Data In
Getting data into FOG is dead simple through a provided composite react component called `DataProvider`.  

#### Example

```js
class MyContainer extends React.Component {
   render(){
      return (
         <DataProvider
            completedTodos={{entityName:'Todo', predicate:'completed==true'}}
            uncompletedTodos={{entityName:'Todo', predicate:'completed==false'}}>
            <MyPresenter />
         </DataProvider>
      );
   }
}
```

In this example, `DataProvider` is given two properties that define channels that we are interested in.  These will be registered with FOG and changes will be dispatched to `MyPresenter` through it's `props`, which are rendered as usual.

```js
class MyPresenter extends React.Component {

   render(){
      let items = this.props.completedTodos.map((todo, i) => {
         return (<li key={i}>{todo.title}</li>);
      };

      return (
         <ul>{items}</ul>
      );
   }
}
```

### Pushing Changes Out

FOG synthesizes pre-baked actions for all entities within the schema so working with data is a snap:

```js
class MyPresenter extends React.Component {
   // ...

   handleToggledComplete (toggledTodo) => {
      objectGraph.actions.todo.setCompleted(toggledTodo, !toggledTodo.completed);
   }
}
```

#### Undoing/Redoing changes
```js
context.undo();
context.redo();
```

#### Fencing changes
At any point, you can define a snapshot that can be rolled back to:
```js
context.storeSnapshot('named-snapshot');
context.restoreSnapshot('named-snapshot');
```

#### Staging Changes
```js
let newContext = context.branch();

newContext.rollback();
newContext.commit();
```
